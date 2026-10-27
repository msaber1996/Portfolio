// Tries to fill today's fund NAVs by having Claude look them up on the web,
// one fund family at a time, instead of the flat carry-forward
// auto-daily-snapshot.yml does as a last resort. Runs earlier in the day
// (17:00 UTC / ~7pm Cairo) so a successful write here makes that fallback
// a no-op (it already skips when daily/{date} exists).
//
// Egyptian mutual fund NAVs are not reliably public for every fund family
// (Beltone's USD placements in particular are unlikely to be found), so
// every lookup is validated and anything not confidently found — or that
// moves more than 15% from the prior entry, the same threshold the app's
// own client-side save flow warns on — falls back to carrying the prior
// value forward, exactly like auto-daily-snapshot.yml already does.
//
// Env vars required:
//   FIREBASE_DB          e.g. https://portfolio-8ac1d-default-rtdb.firebaseio.com
//   FIREBASE_ID_TOKEN     a signed-in rates-bot ID token
//   ANTHROPIC_API_KEY     secret, from the repo's GitHub Actions secrets
"use strict";

const DB = process.env.FIREBASE_DB;
const ID_TOKEN = process.env.FIREBASE_ID_TOKEN;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!DB || !ID_TOKEN || !ANTHROPIC_API_KEY) {
  console.error("Missing FIREBASE_DB, FIREBASE_ID_TOKEN, or ANTHROPIC_API_KEY.");
  process.exit(1);
}

async function fetchJson(key) {
  const res = await fetch(`${DB}/${key}.json?auth=${ID_TOKEN}`);
  if (!res.ok) throw new Error(`Failed to fetch ${key}: ${res.status}`);
  return res.json();
}

function cairoDateString(d) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Cairo", year: "numeric", month: "2-digit", day: "2-digit" }).format(d);
}

// One fund family at a time, with the web_search server tool — a focused
// single-fund query is far less likely to mix up NAVs across funds than
// asking for all eight at once. Server tools resolve within the same
// request; pause_turn (the model wanting another round) is handled by
// resending the accumulated turn, per Anthropic's tool-use docs.
async function lookupNav(label, prevNav) {
  const messages = [{
    role: "user",
    content: `Find today's (or the most recently published) NAV per unit for the Egyptian mutual fund "${label}" (an EGP-denominated or USD-denominated fund offered in Egypt — "AZ" funds are Azimut Egypt, "CIB" is Commercial International Bank's asset management, "NBE" is National Bank of Egypt, "Beltone" is Beltone Asset Management). Search the web for the fund manager's own published NAV/unit price page if possible.

The last known NAV was ${prevNav ?? "unknown"}. Respond with ONLY a single JSON object, no markdown fences, no other text, in exactly this shape:
{"nav": <number or null>, "asOfDate": "<YYYY-MM-DD or null>", "confidence": "high"|"medium"|"low", "note": "<one short sentence: source and date, or why you couldn't find it>"}

Use null for "nav" if you cannot find a specific, dated, numeric NAV you're confident about — do not guess or estimate.`,
  }];

  let finalText = "";
  for (let round = 0; round < 3; round++) {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-5-5",
        max_tokens: 2000,
        tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 4 }],
        messages,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Anthropic API error ${res.status}: ${body.slice(0, 500)}`);
    }
    const json = await res.json();
    messages.push({ role: "assistant", content: json.content });
    finalText = (json.content || []).filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    if (json.stop_reason !== "pause_turn") break;
    messages.push({ role: "user", content: "Continue." });
  }

  const match = finalText.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`No JSON object in response for "${label}": ${finalText.slice(0, 300)}`);
  const parsed = JSON.parse(match[0]);
  return parsed;
}

async function main() {
  const todayCairo = cairoDateString(new Date());

  const existing = await fetchJson(`daily/${todayCairo}`);
  if (existing) {
    console.log(`daily/${todayCairo} already exists (saved manually, or by an earlier run today) — nothing to do.`);
    return;
  }

  const [holdings, liveRates, dailyObj] = await Promise.all([
    fetchJson("holdings"), fetchJson("liveRates"), fetchJson("daily"),
  ]);
  const daily = Object.keys(dailyObj || {}).map((k) => dailyObj[k]).sort((a, b) => a.date.localeCompare(b.date));
  const latest = daily[daily.length - 1];
  if (!latest) throw new Error("No prior daily entry to carry forward from, aborting without writing.");
  if (!liveRates?.rate || !liveRates?.gold) throw new Error("liveRates is missing rate/gold, aborting without writing.");

  const holdingsList = Array.isArray(holdings) ? holdings : Object.values(holdings || {});
  const accumulatingGroups = new Set(holdingsList.filter((h) => h.type === "fund" && h.accumulating).map((h) => h.navGroup));
  const navFields = [];
  const seen = new Set();
  for (const h of holdingsList) {
    if (h.type === "fund" && h.navGroup && !seen.has(h.navGroup)) {
      seen.add(h.navGroup);
      navFields.push({ key: h.navGroup, label: h.label });
    }
  }

  const aiFilledGroups = [];
  const carriedForwardGroups = [];
  const entry = { ...latest, date: todayCairo, rate: liveRates.rate, gold: liveRates.gold, aiFilled: true, autoSaved: false, updatedAt: new Date().toISOString() };

  for (const f of navFields) {
    const prevNav = latest[f.key];
    try {
      const result = await lookupNav(f.label, prevNav);
      const nav = Number(result.nav);
      const confident = result.confidence === "high" || result.confidence === "medium";
      const withinBounds = accumulatingGroups.has(f.key) || !prevNav || Math.abs((nav - prevNav) / prevNav) * 100 <= 15;
      if (Number.isFinite(nav) && nav > 0 && confident && withinBounds) {
        entry[f.key] = nav;
        aiFilledGroups.push({ key: f.key, label: f.label, nav, asOfDate: result.asOfDate, note: result.note });
        console.log(`${f.label}: AI found ${nav} (${result.confidence}, ${result.asOfDate || "no date"}) — ${result.note || ""}`);
      } else {
        carriedForwardGroups.push(f.label);
        console.log(`${f.label}: not used (nav=${result.nav}, confidence=${result.confidence}, prev=${prevNav}) — carried forward. ${result.note || ""}`);
      }
    } catch (e) {
      carriedForwardGroups.push(f.label);
      console.warn(`${f.label}: lookup failed (${e.message}) — carried forward.`);
    }
  }

  entry.aiFilledGroups = aiFilledGroups.map((g) => g.key);
  entry.changedFields = ["rate", "gold", ...aiFilledGroups.map((g) => g.key)];

  const res = await fetch(`${DB}/daily/${todayCairo}.json?auth=${ID_TOKEN}`, {
    method: "PUT",
    body: JSON.stringify(entry),
  });
  if (!res.ok) throw new Error(`Failed to write daily/${todayCairo}: ${res.status}`);
  console.log(`Wrote daily/${todayCairo} — AI-filled: [${aiFilledGroups.map((g) => g.label).join(", ") || "none"}], carried forward: [${carriedForwardGroups.join(", ") || "none"}]`);
}

main().catch((e) => {
  console.error(e.stack || e);
  process.exit(1);
});
