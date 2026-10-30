// Tracks the Central Bank of Egypt's overnight DEPOSIT rate (one leg of its
// interest-rate corridor — distinct from the overnight lending rate and the
// discount rate, which are different numbers) and, when it moves, shifts
// every "variable"-labeled certificate by the same delta — e.g. CBE +0.5pp
// -> those certificates +0.5pp each, same mechanism as the manual "Update
// all variable-rate certificates" button in the app, just automatic.
//
// The workflow's cron fires weekly, but an actual lookup (and its cost)
// only happens roughly every 6 weeks: this script checks cbeRate.lastCheckedAt
// first and exits immediately otherwise. CBE rate decisions happen at
// scheduled MPC meetings (6-8/year), not on any fixed weekly cadence, so
// this just needs to catch each meeting within a few weeks, not same-day.
//
// Env vars required:
//   FIREBASE_DB          e.g. https://portfolio-8ac1d-default-rtdb.firebaseio.com
//   FIREBASE_ID_TOKEN     a signed-in rates-bot ID token
//   ANTHROPIC_API_KEY     secret, from the repo's GitHub Actions secrets
"use strict";

const DB = process.env.FIREBASE_DB;
const ID_TOKEN = process.env.FIREBASE_ID_TOKEN;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const CHECK_INTERVAL_DAYS = 42; // ~6 weeks
const MAX_SANE_DELTA = 3; // a single CBE move bigger than 3pp is almost certainly a bad read, not real

if (!DB || !ID_TOKEN || !ANTHROPIC_API_KEY) {
  console.error("Missing FIREBASE_DB, FIREBASE_ID_TOKEN, or ANTHROPIC_API_KEY.");
  process.exit(1);
}

async function fetchJson(key) {
  const res = await fetch(`${DB}/${key}.json?auth=${ID_TOKEN}`);
  if (!res.ok) throw new Error(`Failed to fetch ${key}: ${res.status}`);
  return res.json();
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function daysSince(dateStr) {
  if (!dateStr) return Infinity;
  const then = new Date(dateStr);
  if (Number.isNaN(then.getTime())) return Infinity;
  return Math.floor((Date.now() - then.getTime()) / 86400000);
}

async function lookupCbeRate() {
  const messages = [{
    role: "user",
    content: `Find the Central Bank of Egypt's CURRENT overnight DEPOSIT rate — one specific leg of its interest-rate corridor. Egypt's CBE publishes three related but DIFFERENT rates: the overnight deposit rate, the overnight lending rate (always higher than the deposit rate), and the discount rate. I need ONLY the overnight deposit rate, as a plain percentage. Search the CBE's own site (cbe.org.eg) or reputable financial news (Reuters, Bloomberg, Enterprise, Daily News Egypt) reporting the latest Monetary Policy Committee decision.

Respond with ONLY a single JSON object, no markdown fences, no other text, in exactly this shape:
{"rate": <number or null>, "asOfDate": "<YYYY-MM-DD of the MPC decision/announcement, or null>", "confidence": "high"|"medium"|"low", "note": "<one short sentence: source and date>"}

Use null for "rate" if you cannot find a specific, dated, numeric overnight DEPOSIT rate (not lending, not discount) you're confident about — do not guess.`,
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
        tools: [{ type: "web_search_20260209", name: "web_search", max_uses: 6 }],
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
  if (!match) throw new Error(`No JSON object in response: ${finalText.slice(0, 300)}`);
  return JSON.parse(match[0]);
}

async function main() {
  const cbeRate = await fetchJson("cbeRate");
  const lastCheckedAt = cbeRate?.lastCheckedAt;
  if (daysSince(lastCheckedAt) < CHECK_INTERVAL_DAYS) {
    console.log(`Last checked ${daysSince(lastCheckedAt)} day(s) ago, next check due after ${CHECK_INTERVAL_DAYS} days — skipping (no API call).`);
    return;
  }

  const result = await lookupCbeRate();
  const newRate = Number(result.rate);
  const confident = result.confidence === "high" || result.confidence === "medium";
  const fresh = result.asOfDate && /^\d{4}-\d{2}-\d{2}$/.test(result.asOfDate) && daysSince(result.asOfDate) <= 120;

  if (!Number.isFinite(newRate) || newRate <= 0 || !confident || !fresh) {
    console.log(`Not confident enough to act (rate=${result.rate}, confidence=${result.confidence}, asOfDate=${result.asOfDate}) — leaving certificates untouched. ${result.note || ""}`);
    return;
  }

  const prevRate = Number(cbeRate?.rate);
  const hasPrev = Number.isFinite(prevRate);
  const delta = hasPrev ? Math.round((newRate - prevRate) * 100) / 100 : 0;

  if (process.env.DRY_RUN === "true") {
    console.log(`DRY RUN — found rate ${newRate} (${result.confidence}, as of ${result.asOfDate}). Previous stored: ${hasPrev ? prevRate : "none"}. Delta: ${delta}. ${result.note || ""}`);
    if (Math.abs(delta) >= 0.01 && Math.abs(delta) <= MAX_SANE_DELTA) {
      const certificates = await fetchJson("certificates");
      const variableCerts = (certificates || []).filter((c) => c.label.toLowerCase().includes("variable"));
      console.log(`Would shift ${variableCerts.length} variable-rate certificate(s) by ${delta >= 0 ? "+" : ""}${delta}pp:`);
      variableCerts.forEach((c) => console.log(`  ${c.label} (${c.amount}): ${c.rate} -> ${Math.round((c.rate + delta) * 100) / 100}`));
    }
    return;
  }

  if (!hasPrev) {
    console.log(`No prior stored rate — recording ${newRate} as the baseline without touching certificates.`);
    await writeCbeRate(newRate, result);
    return;
  }

  if (Math.abs(delta) < 0.01) {
    console.log(`Rate unchanged (${newRate}) — just refreshing the checked timestamp.`);
    await writeCbeRate(newRate, result);
    return;
  }

  if (Math.abs(delta) > MAX_SANE_DELTA) {
    console.log(`Delta of ${delta}pp (${prevRate} -> ${newRate}) exceeds the ${MAX_SANE_DELTA}pp sanity bound — leaving certificates untouched, not updating the stored rate either, will retry next check. ${result.note || ""}`);
    return;
  }

  const certificates = await fetchJson("certificates");
  const updated = (certificates || []).map((c) => c.label.toLowerCase().includes("variable") ? { ...c, rate: Math.round((c.rate + delta) * 100) / 100 } : c);
  const changedCount = (certificates || []).filter((c) => c.label.toLowerCase().includes("variable")).length;

  const certRes = await fetch(`${DB}/certificates.json?auth=${ID_TOKEN}`, { method: "PUT", body: JSON.stringify(updated) });
  if (!certRes.ok) throw new Error(`Failed to write certificates: ${certRes.status}`);

  await writeCbeRate(newRate, result);
  console.log(`CBE overnight deposit rate ${prevRate} -> ${newRate} (${delta >= 0 ? "+" : ""}${delta}pp, as of ${result.asOfDate}). Shifted ${changedCount} variable-rate certificate(s) by the same delta. ${result.note || ""}`);
}

async function writeCbeRate(rate, result) {
  const payload = { rate, asOfDate: result.asOfDate, confidence: result.confidence, note: result.note, lastCheckedAt: todayStr() };
  const res = await fetch(`${DB}/cbeRate.json?auth=${ID_TOKEN}`, { method: "PUT", body: JSON.stringify(payload) });
  if (!res.ok) throw new Error(`Failed to write cbeRate: ${res.status}`);
}

main().catch((e) => {
  console.error(e.stack || e);
  process.exit(1);
});
