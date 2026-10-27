// Renders bundle.js against real production data in jsdom (same technique the
// test harnesses use) so the numbers fed to the AI are byte-identical to what
// the dashboard itself computes and displays — no separate reimplementation
// of computeDay/allocation/cash-flow math to drift out of sync.
//
// Env vars required:
//   FIREBASE_DB          e.g. https://portfolio-8ac1d-default-rtdb.firebaseio.com
//   FIREBASE_ID_TOKEN     a signed-in rates-bot ID token
//   ANTHROPIC_API_KEY     secret, from the repo's GitHub Actions secrets
"use strict";

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const DB = process.env.FIREBASE_DB;
const ID_TOKEN = process.env.FIREBASE_ID_TOKEN;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;

if (!DB || !ID_TOKEN || !ANTHROPIC_API_KEY) {
  console.error("Missing FIREBASE_DB, FIREBASE_ID_TOKEN, or ANTHROPIC_API_KEY.");
  process.exit(1);
}

// Best-effort: the app's own loadJson() falls back to sane defaults for any
// collection that comes back null, so one missing/denied collection (e.g. a
// rules gap on a rarely-touched one) shouldn't take down the whole run.
async function fetchJson(key) {
  try {
    const res = await fetch(`${DB}/${key}.json?auth=${ID_TOKEN}`);
    if (!res.ok) {
      console.warn(`Warning: failed to fetch ${key}: ${res.status} — continuing without it.`);
      return null;
    }
    return await res.json();
  } catch (e) {
    console.warn(`Warning: failed to fetch ${key}: ${e.message} — continuing without it.`);
    return null;
  }
}

function renderDashboard(DATA) {
  const dom = new JSDOM(`<!doctype html><html><body><div id="root"></div></body></html>`, {
    url: "https://msaber1996.github.io/Portfolio/",
    pretendToBeVisual: true,
  });
  const { window } = dom;
  global.window = window;
  global.document = window.document;
  global.navigator = window.navigator;
  global.localStorage = {
    _data: {},
    getItem(k) { return Object.prototype.hasOwnProperty.call(this._data, k) ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
  };
  // jsdom's own window.localStorage is a getter-only accessor property on
  // some versions — plain assignment throws, so replace it with defineProperty.
  Object.defineProperty(window, "localStorage", { value: global.localStorage, writable: true, configurable: true });
  window.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
  delete window.PublicKeyCredential;
  delete window.Notification;
  window.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  window.cancelAnimationFrame = (id) => clearTimeout(id);
  global.requestAnimationFrame = window.requestAnimationFrame;
  global.cancelAnimationFrame = window.cancelAnimationFrame;

  const React = require("react");
  const ReactDOMClient = require("react-dom/client");
  window.React = React;
  window.ReactDOM = ReactDOMClient;
  global.React = React;

  function makeRef(fullPath) {
    return {
      path: fullPath,
      once() {
        if (/^roles\/[^/]+\/role$/.test(fullPath)) {
          return Promise.resolve({ val: () => "owner", exists: () => true });
        }
        if (Object.prototype.hasOwnProperty.call(DATA, fullPath)) {
          const val = DATA[fullPath];
          return Promise.resolve({ val: () => val, exists: () => val !== null && val !== undefined });
        }
        return Promise.resolve({ val: () => null, exists: () => false });
      },
      on() {}, off() {},
      set() { return Promise.resolve(); },
      update() { return Promise.resolve(); },
      remove() { return Promise.resolve(); },
      push() { return makeRef(fullPath + "/x"); },
      child(p) { return makeRef(fullPath + "/" + p); },
    };
  }
  window.firebase = {
    initializeApp: () => ({}),
    auth: () => ({
      onAuthStateChanged(cb) { cb({ uid: "owner-uid", email: "owner@example.com" }); return () => {}; },
      signInWithEmailAndPassword: () => Promise.resolve({ user: { uid: "owner-uid" } }),
      createUserWithEmailAndPassword: () => Promise.resolve({ user: { uid: "owner-uid" } }),
      signOut: () => Promise.resolve(),
      currentUser: { uid: "owner-uid" },
    }),
    database: () => ({ ref: (p) => makeRef(p || "") }),
  };

  const bundlePath = path.join(__dirname, "..", "bundle.js");
  const code = fs.readFileSync(bundlePath, "utf8");
  const script = new window.Function("window", "document", "navigator", code);
  script(window, window.document, window.navigator);

  // AnimatedNumber starts counting from 0 once mounted (jsdom has no
  // IntersectionObserver, so it starts immediately) and eases in over 400ms —
  // wait well past that before reading any rendered numbers back out.
  return new Promise((resolve) => setTimeout(resolve, 2500)).then(() => dom);
}

function textOf(id) {
  const el = document.getElementById(id);
  return el ? el.textContent.replace(/\s+/g, " ").trim() : "";
}

function buildContext() {
  // These sections carry the grounded, already-computed numbers — headline
  // totals, worth/profit/return figures, allocation mix, cash flow, and the
  // same rule-based observations the "Portfolio insights" card shows today.
  const sections = [
    ["Overview", textOf("overview")],
    ["What the assets are worth", textOf("section-02")],
    ["Portfolio insights (rule-based)", textOf("section-04")],
    ["What is owed", textOf("section-06")],
  ];
  return sections.filter(([, text]) => text).map(([label, text]) => `## ${label}\n${text}`).join("\n\n");
}

async function callClaude(context) {
  const prompt = `You are writing a short, grounded analysis note for a personal finance dashboard. Below is the dashboard's own rendered text — headline totals, allocation mix, cash flow, and some rule-based observations it already shows. Using ONLY the numbers given, write 2-4 sentences of sharper commentary than the rule-based bullets: notice patterns across sections, put things in perspective, and point out anything worth attention. Do not invent numbers that aren't given. Do not repeat the rule-based bullets verbatim — add perspective. Plain prose, no markdown, no bullet points, no disclaimers about not being financial advice.

${context}`;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-5-5",
      max_tokens: 600,
      // Thinking is adaptive (on) by default on Haiku 5.5 and draws from the
      // same max_tokens budget as the visible reply — for a short, simple
      // completion like this one it can burn the whole budget on thinking
      // and leave no room for output text, so turn it off outright.
      thinking: { type: "disabled" },
      output_config: { effort: "low" },
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Anthropic API error ${res.status}: ${body.slice(0, 500)}`);
  }
  const json = await res.json();
  const text = (json.content || []).map((b) => b.text || "").join("").trim();
  if (!text) throw new Error(`Anthropic API returned no text. stop_reason=${json.stop_reason}, response=${JSON.stringify(json).slice(0, 800)}`);
  return text;
}

async function main() {
  const [holdings, loans, loanFacilities, certificates, conversions, liveRates,
    officeUnits, officeInstallments, officeInstallmentPayments, officeMaintenance,
    officeMaintenancePayments, newsFeed, yearCloses, rebalanceTargets, dailyObj] = await Promise.all([
    fetchJson("holdings"), fetchJson("loans"), fetchJson("loanFacilities"), fetchJson("certificates"),
    fetchJson("conversions"), fetchJson("liveRates"), fetchJson("officeUnits"), fetchJson("officeInstallments"),
    fetchJson("officeInstallmentPayments"), fetchJson("officeMaintenance"), fetchJson("officeMaintenancePayments"),
    fetchJson("newsFeed"), fetchJson("yearCloses"), fetchJson("rebalanceTargets"), fetchJson("daily"),
  ]);
  const daily = Object.keys(dailyObj || {}).map((k) => dailyObj[k]).sort((a, b) => a.date.localeCompare(b.date));

  const DATA = {
    holdings, loans, loanFacilities, certificates, conversions, liveRates,
    officeUnits, officeInstallments, officeInstallmentPayments, officeMaintenance,
    officeMaintenancePayments, newsFeed, yearCloses: yearCloses || {}, rebalanceTargets: rebalanceTargets || {},
    daily,
  };

  await renderDashboard(DATA);
  const context = buildContext();
  if (!context) throw new Error("Rendered dashboard produced no extractable text — aborting without calling the AI.");

  const text = await callClaude(context);
  const today = new Date().toISOString().slice(0, 10);
  const payload = { text, generatedAt: new Date().toISOString(), basedOnDate: today };

  const res = await fetch(`${DB}/aiInsight.json?auth=${ID_TOKEN}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`Failed to write aiInsight: ${res.status}`);
  console.log("Wrote aiInsight:", JSON.stringify(payload));
}

main().catch((e) => {
  console.error(e.stack || e);
  process.exit(1);
});
