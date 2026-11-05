// Funds flagged "accumulating: true" (currently just NBE Fund 4) pay a cash
// distribution periodically instead of letting it compound into the NAV — the
// NAV drops by the per-unit payout amount on the distribution date, the same
// way a stock price drops on its ex-dividend date. The dashboard's own
// gain% calc (navAdjustByDate in bundle.js) already detects these drops and
// adds them back so the displayed return reflects the true total return —
// but that adjustment is for the percentage only, it doesn't put the actual
// cash anywhere. This script does: it replays the identical drop-detection
// logic over the full daily history and sets a dedicated cash holding
// ("NBE fund distributions received") to the exact cumulative total, so the
// cash the fund has actually paid out shows up in net worth too.
//
// Deliberately a full recompute-and-set rather than an incremental add: it's
// idempotent and self-healing (safe to run as often as wanted, never drifts
// or double-counts), and it stays byte-consistent with whatever the dashboard
// itself is showing as the fund's cumulative distribution adjustment.
//
// Env vars required:
//   FIREBASE_DB          e.g. https://portfolio-8ac1d-default-rtdb.firebaseio.com
//   FIREBASE_ID_TOKEN     a signed-in rates-bot ID token
"use strict";

const DB = process.env.FIREBASE_DB;
const ID_TOKEN = process.env.FIREBASE_ID_TOKEN;

if (!DB || !ID_TOKEN) {
  console.error("Missing FIREBASE_DB or FIREBASE_ID_TOKEN env vars.");
  process.exit(1);
}

async function fetchJson(path) {
  const res = await fetch(`${DB}/${path}.json?auth=${ID_TOKEN}`);
  if (!res.ok) throw new Error(`Firebase GET ${path} failed: ${res.status}`);
  return res.json();
}

async function putJson(path, body) {
  const res = await fetch(`${DB}/${path}.json?auth=${ID_TOKEN}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Firebase PUT ${path} failed: ${res.status}`);
}

// Dedicated cash holding per distributing fund, so each fund's payouts are
// tracked separately and labeled clearly — keyed by navGroup so a future
// second "accumulating" fund gets its own holding rather than merging totals.
const DIST_HOLDING = {
  nbe4: { id: "nbeDist", label: "NBE fund distributions received" },
};

// NAV-drop detection only sees a distribution if the recorded daily NAV
// actually drops on the right day — if nobody updates "Today's pricing" that
// day (the auto-daily-snapshot fallback just carries the old value forward),
// the payout is invisible to it. Confirmed case: the real 1 Nov 2026
// distribution (157,700 EGP, per the actual bank/fund notice) never showed
// up as a drop because nbe4's NAV was flat 30 Oct - 1 Nov, then simply
// resumed climbing — so it's added here by hand on top of the computed
// total. Add future ones the same way whenever a real notice doesn't match
// an actual recorded NAV drop.
const MANUAL_ADJUSTMENTS = {
  nbe4: [
    { date: "2026-11-01", amount: 157700, note: "confirmed distribution notice; daily NAV wasn't updated that day so the drop-detector missed it" },
  ],
};

function cumulativeDistributedCash(dailyHistory, navGroup, units) {
  const dates = Object.keys(dailyHistory).sort();
  let lastNav;
  let cash = 0;
  for (const date of dates) {
    const raw = dailyHistory[date]?.[navGroup];
    if (raw === undefined || raw === "") continue;
    const nav = Number(raw);
    if (lastNav !== undefined && nav < lastNav) {
      cash += units * (lastNav - nav);
    }
    lastNav = nav;
  }
  return cash;
}

async function main() {
  const holdings = await fetchJson("holdings");
  const daily = await fetchJson("daily");

  if (!Array.isArray(holdings)) {
    console.error("holdings is not an array, aborting without writing.");
    process.exit(1);
  }
  if (!daily || typeof daily !== "object") {
    console.error("daily history missing or malformed, aborting without writing.");
    process.exit(1);
  }

  const accumulatingHoldings = holdings.filter((h) => h.type === "fund" && h.accumulating && DIST_HOLDING[h.navGroup]);
  if (!accumulatingHoldings.length) {
    console.log("No accumulating funds with a configured distribution holding — nothing to do.");
    return;
  }

  let nextHoldings = [...holdings];
  let changed = false;

  for (const h of accumulatingHoldings) {
    if (!h.purchaseNav) {
      console.warn(`${h.label}: no purchaseNav, skipping.`);
      continue;
    }
    const units = h.investment / h.purchaseNav;
    const fromNavDrops = cumulativeDistributedCash(daily, h.navGroup, units);
    const manual = (MANUAL_ADJUSTMENTS[h.navGroup] || []).reduce((s, a) => s + a.amount, 0);
    const total = Math.round(fromNavDrops + manual);
    const dist = DIST_HOLDING[h.navGroup];
    const existing = nextHoldings.find((x) => x.id === dist.id);

    if (existing && existing.investment === total) {
      console.log(`${h.label}: cumulative distribution unchanged at ${total} EGP.`);
      continue;
    }

    changed = true;
    if (existing) {
      console.log(`${h.label}: updating ${dist.id} from ${existing.investment} to ${total} EGP.`);
      nextHoldings = nextHoldings.map((x) => x.id === dist.id ? { ...x, investment: total } : x);
    } else {
      console.log(`${h.label}: creating ${dist.id} with ${total} EGP.`);
      nextHoldings.push({ id: dist.id, type: "fixed", currency: "EGP", label: dist.label, investment: total, navGroup: "", purchaseNav: 0, grams: 0 });
    }
  }

  if (!changed) {
    console.log("Nothing changed, not writing.");
    return;
  }

  await putJson("holdings", nextHoldings);
  console.log("Wrote holdings.");
}

main().catch((e) => {
  console.error(e.stack || e.message);
  process.exit(1);
});
