(() => {
  // node_modules/react/index.js
  var R = window.React;
  var useState = R.useState;
  var useEffect = R.useEffect;
  var useMemo = R.useMemo;
  var useCallback = R.useCallback;
  var useRef = R.useRef;
  var Component = R.Component;
  var createElement = R.createElement;
  var Fragment = R.Fragment;

  // node_modules/react-dom/client/index.js
  var RD = window.ReactDOM;
  var createRoot = RD.createRoot;

  // node_modules/react/jsx-runtime.js
  var R2 = window.React;
  function jsx(type, props, key) {
    const rest = props ? { ...props } : {};
    const children = rest.children;
    delete rest.children;
    if (key !== void 0) rest.key = key;
    return R2.createElement(type, rest, children);
  }
  var Fragment2 = R2.Fragment;

  // lucide-react-stub.jsx
  function Base({ size = 16, strokeWidth = 2, className = "", children, ...rest }) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className,
        ...rest,
        children
      }
    );
  }
  function ChevronDown(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: /* @__PURE__ */ jsx("polyline", { points: "6 9 12 15 18 9" }) });
  }
  function ArrowUpRight(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("line", { x1: "7", y1: "17", x2: "17", y2: "7" }),
      /* @__PURE__ */ jsx("polyline", { points: "7 7 17 7 17 17" })
    ] });
  }
  function ArrowDownRight(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("line", { x1: "7", y1: "7", x2: "17", y2: "17" }),
      /* @__PURE__ */ jsx("polyline", { points: "17 7 17 17 7 17" })
    ] });
  }
  function Plus(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
      /* @__PURE__ */ jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
    ] });
  }
  function Check(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" }) });
  }
  function Loader2(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" }) });
  }
  function Trash2(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("polyline", { points: "3 6 5 6 21 6" }),
      /* @__PURE__ */ jsx("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
      /* @__PURE__ */ jsx("path", { d: "M10 11v6" }),
      /* @__PURE__ */ jsx("path", { d: "M14 11v6" }),
      /* @__PURE__ */ jsx("path", { d: "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" })
    ] });
  }
  function FileDown(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
      /* @__PURE__ */ jsx("polyline", { points: "14 2 14 8 20 8" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "12", x2: "12", y2: "18" }),
      /* @__PURE__ */ jsx("polyline", { points: "9 15 12 18 15 15" })
    ] });
  }
  function AlertTriangle(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })
    ] });
  }
  function Menu(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
    ] });
  }
  function X(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ] });
  }
  function Users(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
      /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
      /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
      /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
    ] });
  }
  function Pencil(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" }),
      /* @__PURE__ */ jsx("path", { d: "m15 5 4 4" })
    ] });
  }
  function Bell(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
      /* @__PURE__ */ jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
    ] });
  }

  // App.jsx
  var SEED_HOLDINGS = [
    { id: "nbe1", type: "fund", label: "NBE Fund 1", currency: "EGP", investment: 1018386, purchaseNav: 156.41, navGroup: "nbe1", grams: 0, purchaseDate: "2026-04-23" },
    { id: "nbe2", type: "fund", label: "NBE Fund 2", currency: "EGP", investment: 1021509, purchaseNav: 289, navGroup: "nbe2", grams: 0, purchaseDate: "2026-04-23" },
    { id: "nbe4", type: "fund", label: "NBE Fund 4 (Daily)", currency: "EGP", investment: 10490725, purchaseNav: 299.735, navGroup: "nbe4", grams: 0, accumulating: true, purchaseDate: "2026-02-01" },
    { id: "nbe5", type: "fund", label: "NBE Fund 5", currency: "EGP", investment: 1024254, purchaseNav: 51.73, navGroup: "nbe5", grams: 0, purchaseDate: "2026-04-23" },
    { id: "cib1", type: "fund", label: "CIB Istethmar", currency: "EGP", investment: 49875e3, purchaseNav: 887.15, navGroup: "cib", grams: 0, purchaseDate: "2026-01-28" },
    { id: "cib2", type: "fund", label: "CIB Istethmar (new tranche)", currency: "EGP", investment: 49875e3, purchaseNav: 1050.45, navGroup: "cib", grams: 0, purchaseDate: "2026-07-22" },
    { id: "azopp", type: "fund", label: "AZ Opportunities", currency: "EGP", investment: 24999952, purchaseNav: 47.3233, navGroup: "azopp", grams: 0, purchaseDate: "2026-02-15" },
    { id: "azgold1", type: "fund", label: "AZ Gold Fund", currency: "EGP", investment: 9999983, purchaseNav: 25.82887, navGroup: "azgold", grams: 0, purchaseDate: "2026-02-15" },
    { id: "azgold2", type: "fund", label: "AZ Gold Fund (2nd tranche)", currency: "EGP", investment: 16095700, purchaseNav: 22.52405, navGroup: "azgold", grams: 0, purchaseDate: "2026-07-13" },
    { id: "belt1", type: "fund", label: "Beltone $500k", currency: "USD", investment: 5e5, purchaseNav: 1.1225, navGroup: "beltone", grams: 0, purchaseDate: "2026-02-03" },
    { id: "belt2", type: "fund", label: "Beltone $510k", currency: "USD", investment: 509999.9, purchaseNav: 1.1363, navGroup: "beltone", grams: 0, purchaseDate: "2026-03-10" },
    { id: "belt3", type: "fund", label: "Beltone $592k", currency: "USD", investment: 592e3, purchaseNav: 1.1665, navGroup: "beltone", grams: 0, purchaseDate: "2026-07-27" },
    { id: "goldbar100", type: "gold", label: "Gold Bars - 100g", currency: "EGP", investment: 1617400, purchaseNav: 8087, grams: 200, purchaseDate: "2026-01-28" },
    { id: "goldbar250", type: "gold", label: "Gold Bars - 250g", currency: "EGP", investment: 2015675, purchaseNav: 8062.7, grams: 250, purchaseDate: "2026-01-28" },
    { id: "goldbar500", type: "gold", label: "Gold Bars - 500g", currency: "EGP", investment: 8559600, purchaseNav: 8559.6, grams: 1000, purchaseDate: "2026-01-29" },
    { id: "goldbar1kg", type: "gold", label: "Gold Bars - 1kg", currency: "EGP", investment: 23103150, purchaseNav: 7701.05, grams: 3000, purchaseDate: "2026-03-02" },
    { id: "certs", type: "fixed", label: "EGP certificates & CDs (incl. CIB)", currency: "EGP", investment: 457780000, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "treasury", type: "fixed", label: "NBE Treasury Bills (364-day)", currency: "EGP", investment: 84014400, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "usdcd", type: "fixed", label: "USD certificate (CIB)", currency: "USD", investment: 8e5, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "usdcash", type: "fixed", label: "USD term deposit (NBE, 4.6%, monthly renewal)", currency: "USD", investment: 512382, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "brokerage", type: "fixed", label: "Brokerage (Tycoon)", currency: "EGP", investment: 9e6, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "offices", type: "fixed", label: "Office units (5, advance paid)", currency: "EGP", investment: 17029500, purchaseNav: 0, grams: 0, navGroup: "" }
  ];
  var OFFICE_UNITS = [
    { unit: "2A-D2-202", size: "305m\xB2", parking: 3, totalPrice: 50700000, advance: 2535000, remaining: 48165000 },
    { unit: "2A-D2-302", size: "308m\xB2", parking: 2, totalPrice: 53890000, advance: 2694500, remaining: 48165000 },
    { unit: "2A-D2-402", size: "288.5m\xB2", parking: 2, totalPrice: 49040000, advance: 2452000, remaining: 46630662 },
    { unit: "2A-D2-G01", size: "529.5m\xB2", parking: 4, totalPrice: 93700000, advance: 4685000, remaining: 89015000 },
    { unit: "2A-D2-G02", size: "529.5m\xB2", parking: 4, totalPrice: 93260000, advance: 4663000, remaining: 88597000 }
  ];
  var OFFICE_INSTALLMENT_SCHEDULE = [
    { date: "2026-09-16", amount: 17029500 },
    { date: "2026-12-16", amount: 9093753 },
    { date: "2027-03-16", amount: 9093753 },
    { date: "2027-06-16", amount: 9093753 },
    { date: "2027-09-16", amount: 9093753 },
    { date: "2027-12-16", amount: 9093753 },
    { date: "2028-03-16", amount: 9093753 },
    { date: "2028-06-16", amount: 9093753 },
    { date: "2028-09-16", amount: 9093753 },
    { date: "2028-12-16", amount: 9093753 },
    { date: "2029-03-16", amount: 9093753 },
    { date: "2029-06-16", amount: 9093753 },
    { date: "2029-09-16", amount: 9093753 },
    { date: "2029-12-16", amount: 9093753 },
    { date: "2030-03-16", amount: 9093753 },
    { date: "2030-06-16", amount: 34059000 },
    { date: "2030-09-16", amount: 9093753 },
    { date: "2030-12-16", amount: 9093753 },
    { date: "2031-03-16", amount: 9093753 },
    { date: "2031-06-16", amount: 26123253 },
    { date: "2031-09-16", amount: 9093753 },
    { date: "2031-12-16", amount: 9093753 },
    { date: "2032-03-16", amount: 9093753 },
    { date: "2032-06-16", amount: 9093753 },
    { date: "2032-09-16", amount: 9093753 },
    { date: "2032-12-16", amount: 9093753 },
    { date: "2033-03-16", amount: 9093753 },
    { date: "2033-06-16", amount: 9093753 },
    { date: "2033-09-16", amount: 9093753 },
    { date: "2033-12-16", amount: 9093753 },
    { date: "2034-03-16", amount: 9093753 },
    { date: "2034-06-16", amount: 8753163 }
  ];
  var nextOfficeInstallment = () => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    return OFFICE_INSTALLMENT_SCHEDULE.find((row) => row.date >= todayStr) || null;
  };
  var SEED_LOANS = [
    { id: "loan-egp", label: "Secured EGP loans (9 facilities)", currency: "EGP", amount: 91141821.28, rate: "", installment: 4031095.38 },
    { id: "loan-usd", label: "USD loan (CIB)", currency: "USD", amount: 72e4, rate: 7, installment: 22231.51 }
  ];
  var LOAN_FACILITIES = [
    { label: "Secured loan •7090", amountFinanced: 2499900, outstanding: 1029942.21, installment: 97349.85, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •8850", amountFinanced: 990000, outstanding: 407873.82, installment: 38552.12, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •6620", amountFinanced: 50000000, outstanding: 48570571.04, installment: 1825262.29, rate: 19, openDate: "2026-07-19", maturityDate: "2029-07-03" },
    { label: "Secured loan •7070", amountFinanced: 6300000, outstanding: 2595557.28, installment: 245331.34, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •8860", amountFinanced: 22100, outstanding: 9103.45, installment: 860.46, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •7080", amountFinanced: 1788000, outstanding: 736642.96, installment: 69627.29, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •4470", amountFinanced: 36000000, outstanding: 31162767.24, installment: 1317443.98, rate: 19, openDate: "2026-02-12", maturityDate: "2029-02-03" },
    { label: "Secured loan •3800", amountFinanced: 9100000, outstanding: 5856814.07, installment: 357755.69, rate: 23.5, openDate: "2025-04-09", maturityDate: "2028-04-03" },
    { label: "Secured loan •5500", amountFinanced: 2000000, outstanding: 772549.21, installment: 78912.36, rate: 23.5, openDate: "2024-06-26", maturityDate: "2027-06-28" }
  ];
  var CERTIFICATES = [
    { label: "Platinum monthly CD (Alexandria)", amount: 1100000, rate: 21.5, openDate: "2024-08-15", maturityDate: "2027-08-18" },
    { label: "Platinum monthly CD (Alexandria)", amount: 30000, rate: 21.5, openDate: "2024-08-15", maturityDate: "2027-08-18" },
    { label: "Variable-yield monthly platinum CD (Sea Shell)", amount: 106000000, rate: 19.5, openDate: "2026-07-12", maturityDate: "2029-07-13" },
    { label: "Variable-yield monthly platinum CD (Sea Shell)", amount: 114000000, rate: 19.5, openDate: "2026-06-29", maturityDate: "2029-07-01" },
    { label: "Tiered-yield platinum CD (Sea Shell)", amount: 1000000, rate: 23, openDate: "2025-08-24", maturityDate: "2028-08-25" },
    { label: "Tiered-yield platinum CD (Sea Shell)", amount: 1000000, rate: 23, openDate: "2025-08-24", maturityDate: "2028-08-25" },
    { label: "Variable-yield monthly platinum CD (Sea Shell)", amount: 50000000, rate: 19.5, openDate: "2026-08-03", maturityDate: "2029-08-04" },
    { label: "Platinum monthly CD (Agami)", amount: 9100000, rate: 21.5, openDate: "2025-04-10", maturityDate: "2028-04-13" },
    { label: "Platinum monthly CD (Alexandria)", amount: 10250000, rate: 21.5, openDate: "2025-04-08", maturityDate: "2028-04-09" },
    { label: "Platinum monthly CD (Sea Shell)", amount: 100000000, rate: 16, openDate: "2026-01-27", maturityDate: "2029-01-28" },
    { label: "Platinum monthly CD (Alexandria)", amount: 7000000, rate: 21.5, openDate: "2021-04-04", maturityDate: "2027-04-05" },
    { label: "Platinum monthly CD (Alexandria)", amount: 2300000, rate: 21.5, openDate: "2021-04-15", maturityDate: "2027-04-18" },
    { label: "Platinum monthly CD (Alexandria)", amount: 5000000, rate: 21.5, openDate: "2021-06-22", maturityDate: "2027-06-23" },
    { label: "Tiered-yield platinum CD (Sea Shell)", amount: 1000000, rate: 23, openDate: "2025-08-24", maturityDate: "2028-08-25" },
    { label: "CIB certificate", amount: 50000000, rate: 17.25, openDate: null, maturityDate: null }
  ];
  var SEED_CONVERSIONS = [
    { id: "cv0", date: "2026-01-15", type: "opening", amountUsd: 15e5, rate: "", note: "Pre-existing USD balance" },
    { id: "cv1", date: "2026-01-28", type: "in", amountUsd: 8163260, rate: "", note: "Transfer from abroad" },
    { id: "cv2", date: "2026-01-29", type: "in", amountUsd: 6689932, rate: "", note: "Transfer from abroad" },
    { id: "cv3", date: "2026-02-10", type: "convert", amountUsd: 82e5, rate: 47.38, note: "Surrendered for EGP" },
    { id: "cv4", date: "2026-02-15", type: "convert", amountUsd: 2165e3, rate: 49.65, note: "Surrendered for EGP" },
    { id: "cv5", date: "2026-02-20", type: "convert", amountUsd: 215e4, rate: 49.25, note: "Surrendered for EGP" },
    { id: "cv6", date: "2026-07-21", type: "convert", amountUsd: 1e6, rate: 51.07, note: "Surrendered for EGP" }
  ];
  var SEED_DAILY = [
    { date: "2026-07-28", rate: 50.5, gold: 6703, nbe1: 165.56, nbe2: 304.62, nbe4: 304.6833, nbe5: 54.51, cib: 1047.25, azopp: 50.42003, azgold: 22.64527, beltone: 1.16688 },
    { date: "2026-07-29", rate: 50.65, gold: 6691, nbe1: 165.56, nbe2: 304.62, nbe4: 304.6833, nbe5: 54.51, cib: 1047.59, azopp: 50.36859, azgold: 22.5265, beltone: 1.16706 },
    { date: "2026-07-30", rate: 51.1, gold: 6800, nbe1: 165.56, nbe2: 304.62, nbe4: 304.6978, nbe5: 54.51, cib: 1046.19, azopp: 49.70344, azgold: 22.85158, beltone: 1.16789 }
  ];
  var CASH_FLOW = {
    egp: { income: 7120225, outflow: 4031095.38 },
    usd: { income: 3e3 + 1964, outflow: 0 }
    // 3,000 from the CIB USD certificate; 1,964 = 512,382 NBE term deposit @ 4.6%/yr, monthly.
  };
  var uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
  var FIREBASE_CONFIG = {
    apiKey: "AIzaSyCTbnNaSbxN57izkccidiiPh2WLInyc-hI",
    authDomain: "portfolio-8ac1d.firebaseapp.com",
    databaseURL: "https://portfolio-8ac1d-default-rtdb.firebaseio.com",
    projectId: "portfolio-8ac1d",
    storageBucket: "portfolio-8ac1d.firebasestorage.app",
    messagingSenderId: "592281785894",
    appId: "1:592281785894:web:d83863eb5cb697769eb8e7"
  };
  var AUTH_EMAIL_DOMAIN = "portfolio.local";
  var db = null;
  var firebaseApp = null;
  try {
    if (typeof window !== "undefined" && window.firebase && window.firebase.initializeApp) {
      firebaseApp = window.firebase.apps && window.firebase.apps.length ? window.firebase.apps[0] : window.firebase.initializeApp(FIREBASE_CONFIG);
      db = window.firebase.database(firebaseApp);
    }
  } catch {
    db = null;
  }
  async function loadJson(key, fallback) {
    try {
      if (db) {
        const snap = await db.ref(key).once("value");
        const val = snap.val();
        return val !== null && val !== void 0 ? val : fallback;
      }
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
    }
    return fallback;
  }
  async function saveJson(key, value) {
    try {
      if (db) {
        await db.ref(key).set(value);
      } else {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
      return true;
    } catch {
      return false;
    }
  }
  async function deleteKey(key) {
    try {
      if (db) {
        await db.ref(key).remove();
      } else {
        window.localStorage.removeItem(key);
      }
    } catch {
    }
  }
  async function loadCollection(parentKey) {
    try {
      if (db) {
        const snap = await db.ref(parentKey).once("value");
        const val = snap.val() || {};
        return Object.keys(val).map((childKey) => ({ ...val[childKey] }));
      }
      const out = [];
      const prefix = `${parentKey}/`;
      for (let i = 0; i < window.localStorage.length; i++) {
        const k = window.localStorage.key(i);
        if (k && k.startsWith(prefix)) {
          try {
            out.push(JSON.parse(window.localStorage.getItem(k)));
          } catch {
          }
        }
      }
      return out;
    } catch {
      return [];
    }
  }
  var fmt = (n, digits = 0) => (Number.isFinite(n) ? n : 0).toLocaleString("en-US", { minimumFractionDigits: digits, maximumFractionDigits: digits });
  var egp = (n) => `${fmt(n)} EGP`;
  var usd = (n, d = 0) => `${n < 0 ? "\u2212" : ""}$${fmt(Math.abs(n), d)}`;
  var signedEgp = (n) => `${n >= 0 ? "+" : "\u2212"}${fmt(Math.abs(n))} EGP`;
  var pctStr = (n, d = 1) => `${n >= 0 ? "+" : ""}${n.toFixed(d)}%`;
  var fmtDate = (d) => d ? (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }) : "—";
  var formatLastSeen = (ts) => {
    if (!ts) return "—";
    const diffMs = Date.now() - ts;
    const mins = Math.floor(diffMs / 6e4);
    if (mins < 1) return "just now";
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return new Date(ts).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };
  var VAPID_PUBLIC_KEY = "BDsFBOfGQe43ogEGBoN28q6sBO9LG8VlIxKUiOmjaibntTDwxa2eCR1vb7XpPplYelCgSGiP3Uwsiel03x63SNE";
  var urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) outputArray[i] = rawData.charCodeAt(i);
    return outputArray;
  };
  var MATURITY_WARNING_DAYS = 30;
  var daysUntil = (dateStr) => {
    if (!dateStr) return null;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(dateStr + "T00:00:00");
    return Math.round((target - today) / 864e5);
  };
  function computeDay(entry, holdings, navAdjust) {
    const rate = Number(entry.rate) || 0;
    const goldPrice = Number(entry.gold) || 0;
    let egpFundsCurrent = 0, egpFundsInvestment = 0;
    let usdFundsCurrentUsd = 0, usdFundsInvestmentUsd = 0;
    let goldCurrent = 0, goldInvestment = 0;
    let fixedEgp = 0;
    const rows = [];
    holdings.forEach((h) => {
      if (h.type === "fund") {
        const navRaw = entry[h.navGroup];
        const nav = navRaw !== void 0 && navRaw !== "" ? Number(navRaw) : h.purchaseNav;
        const distAdjust = navAdjust && navAdjust[h.navGroup] || 0;
        const totalReturnNav = nav + distAdjust;
        const current = h.purchaseNav ? h.investment / h.purchaseNav * nav : 0;
        const currentEgp = h.currency === "USD" ? current * rate : current;
        const investmentEgp = h.currency === "USD" ? h.investment * rate : h.investment;
        const gainPct = h.purchaseNav ? (totalReturnNav - h.purchaseNav) / h.purchaseNav * 100 : 0;
        if (h.currency === "USD") {
          usdFundsCurrentUsd += current;
          usdFundsInvestmentUsd += h.investment;
        } else {
          egpFundsCurrent += current;
          egpFundsInvestment += h.investment;
        }
        rows.push({ id: h.id, label: h.label, value: currentEgp, currency: h.currency, currentNative: current, investmentNative: h.investment, note: `${h.currency} fund, ${pctStr(gainPct)} since purchase`, gainPct, purchaseNav: h.purchaseNav, currentNav: nav, purchaseDate: h.purchaseDate, investmentEgp });
      } else if (h.type === "gold") {
        const current = goldPrice * (h.grams || 0);
        goldCurrent += current;
        goldInvestment += h.investment;
        const gainPct = h.purchaseNav ? (goldPrice - h.purchaseNav) / h.purchaseNav * 100 : 0;
        rows.push({ id: h.id, label: h.label, value: current, currency: "EGP", currentNative: current, investmentNative: h.investment, note: `${h.grams?.toLocaleString() || 0}g, ${pctStr(gainPct)} since purchase`, gainPct, purchaseNav: h.purchaseNav, currentNav: goldPrice, purchaseDate: h.purchaseDate, investmentEgp: h.investment });
      } else {
        const val = h.currency === "USD" ? h.investment * rate : h.investment;
        fixedEgp += val;
        rows.push({ id: h.id, label: h.label, value: val, currency: h.currency, currentNative: h.investment, investmentNative: h.investment, note: "Fixed principal", gainPct: 0, purchaseNav: null, currentNav: null, purchaseDate: h.purchaseDate, investmentEgp: val });
      }
    });
    const usdFundsCurrentEgp = usdFundsCurrentUsd * rate;
    const markedToMarket = egpFundsCurrent + usdFundsCurrentEgp + goldCurrent;
    const markedToMarketCost = egpFundsInvestment + usdFundsInvestmentUsd * rate + goldInvestment;
    const totalAssets = markedToMarket + fixedEgp;
    return { ...entry, rate, gold: goldPrice, rows, markedToMarket, markedToMarketCost, gain: markedToMarket - markedToMarketCost, totalAssets };
  }
  function SectionHeading({ index, title, dek }) {
    return /* @__PURE__ */ jsx("div", { className: "mb-8 flex items-start gap-4 border-b border-neutral-200 pb-4", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-neutral-400 pt-1 tabular-nums", children: index }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl leading-tight text-neutral-900", children: title }),
        dek && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-neutral-500 max-w-xl", children: dek })
      ] })
    ] });
  }
  function AnimatedNumber({ value, format }) {
    const [display, setDisplay] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
      if (started) return;
      const el = ref.current;
      if (!el || typeof IntersectionObserver === "undefined") {
        setStarted(true);
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, [started]);
    useEffect(() => {
      if (!started) return;
      let raf;
      const duration = 400;
      const start = Date.now();
      const to = Number(value) || 0;
      const tick = () => {
        const t = Math.min(1, (Date.now() - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(to * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [started, value]);
    return /* @__PURE__ */ jsx("span", { ref, children: format(display) });
  }
  function Stat({ label, value, sub, emphasis }) {
    return /* @__PURE__ */ jsx("div", { className: "border-t border-neutral-200 pt-3 pb-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 truncate", children: label }),
      /* @__PURE__ */ jsx("div", { className: `font-mono tabular-nums mt-1 leading-tight break-words ${emphasis ? "text-xl sm:text-2xl md:text-3xl" : "text-lg"} text-neutral-900`, children: value }),
      sub && /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-1", children: sub })
    ] });
  }
  function LedgerRow({ item, total, isOpen, onToggle }) {
    const pctOfTotal = total ? item.value / total * 100 : 0;
    return /* @__PURE__ */ jsx("div", { className: "border-b border-neutral-200", children: [
      /* @__PURE__ */ jsx("button", { onClick: onToggle, className: "w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 text-left group", "aria-expanded": isOpen, children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(ChevronDown, { size: 14, strokeWidth: 1.5, className: `shrink-0 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-neutral-800 sm:w-48 shrink-0", children: item.label })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 sm:flex-1 pl-7 sm:pl-0", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-1 h-3 bg-neutral-100 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-neutral-800 group-hover:bg-neutral-600 transition-colors", style: { width: `${Math.min(Math.max(pctOfTotal, 0), 100)}%` } }) }),
          /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums text-xs sm:text-sm w-10 sm:w-12 text-right text-neutral-500 shrink-0", children: [
            pctOfTotal.toFixed(1),
            "%"
          ] }),
          /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums text-sm w-28 sm:w-32 md:w-36 text-right text-neutral-900 shrink-0", children: item.currency === "USD" ? usd(item.currentNative) : egp(item.value) })
        ] })
      ] }),
      isOpen && /* @__PURE__ */ jsx("div", { className: "pb-4 pl-7 pr-2 -mt-1 text-xs text-neutral-500 max-w-xl", children: [
        item.note,
        item.purchaseDate && ` — bought ${fmtDate(item.purchaseDate)}`
      ] })
    ] });
  }
  function ReadinessDial({ score }) {
    const clamped = Math.max(0, Math.min(100, score));
    const [displayScore, setDisplayScore] = useState(0);
    useEffect(() => {
      let raf;
      const duration = 450;
      const start = Date.now();
      const tick = () => {
        const t = Math.min(1, (Date.now() - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplayScore(clamped * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [clamped]);
    const angle = displayScore / 100 * 180;
    const rad = (deg) => deg * Math.PI / 180;
    const cx = 100, cy = 100, r = 78;
    const needleX = cx - r * Math.cos(rad(angle));
    const needleY = cy - r * Math.sin(rad(angle));
    const ticks = Array.from({ length: 11 }, (_, i) => i * 10);
    return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 200 118", className: "w-full max-w-xs", children: [
      /* @__PURE__ */ jsx("path", { d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`, fill: "none", stroke: "#D4D4D4", strokeWidth: "1" }),
      ticks.map((t) => {
        const a = rad(t / 100 * 180);
        const x1 = cx - (r - 6) * Math.cos(a), y1 = cy - (r - 6) * Math.sin(a);
        const x2 = cx - (r + 2) * Math.cos(a), y2 = cy - (r + 2) * Math.sin(a);
        return /* @__PURE__ */ jsx("line", { x1, y1, x2, y2, stroke: "#A3A3A3", strokeWidth: "1" }, t);
      }),
      /* @__PURE__ */ jsx("path", { d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${needleX} ${needleY}`, fill: "none", stroke: "#262626", strokeWidth: "3" }),
      /* @__PURE__ */ jsx("line", { x1: cx, y1: cy, x2: needleX, y2: needleY, stroke: "#262626", strokeWidth: "1", strokeDasharray: "1 3" }),
      /* @__PURE__ */ jsx("circle", { cx, cy, r: "3", fill: "#262626" }),
      /* @__PURE__ */ jsx("text", { x: cx, y: cy - 14, textAnchor: "middle", fontFamily: "ui-monospace, monospace", fontSize: "26", fill: "#171717", children: Math.round(displayScore) }),
      /* @__PURE__ */ jsx("text", { x: cx, y: cy + 2, textAnchor: "middle", fontSize: "9", letterSpacing: "1", fill: "#737373", children: "OUT OF 100" })
    ] });
  }
  function Toggle({ options, value, onChange }) {
    return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: options.map((o) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onChange(o.id),
        className: `px-3 py-2 sm:py-1.5 text-xs uppercase tracking-wide border transition-colors ${value === o.id ? "bg-neutral-800 text-white border-neutral-800" : "bg-white text-neutral-600 border-neutral-300 hover:border-neutral-500"}`,
        children: o.label
      },
      o.id
    )) });
  }
  function TrendChart({ points, labelFn }) {
    if (points.length < 2) {
      return /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-400 py-12 text-center border border-dashed border-neutral-300", children: "Add a second day to see a trend line." });
    }
    const w = 720, h = 220, padL = 56, padR = 16, padT = 16, padB = 28;
    const values = points.map((p) => p.value);
    const min = Math.min(...values), max = Math.max(...values);
    const range = max - min || 1;
    const x = (i) => padL + i / (points.length - 1) * (w - padL - padR);
    const y = (v) => padT + (1 - (v - min) / range) * (h - padT - padB);
    const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.value)}`).join(" ");
    const gridLines = 4;
    return /* @__PURE__ */ jsx("svg", { viewBox: `0 0 ${w} ${h}`, className: "w-full h-auto", children: [
      Array.from({ length: gridLines + 1 }, (_, i) => {
        const gy = padT + i / gridLines * (h - padT - padB);
        const val = max - i / gridLines * range;
        return /* @__PURE__ */ jsx("g", { children: [
          /* @__PURE__ */ jsx("line", { x1: padL, y1: gy, x2: w - padR, y2: gy, stroke: "#E5E5E5", strokeWidth: "1" }),
          /* @__PURE__ */ jsx("text", { x: padL - 8, y: gy + 3, textAnchor: "end", fontSize: "9", fill: "#A3A3A3", fontFamily: "ui-monospace, monospace", children: fmt(val) })
        ] }, i);
      }),
      /* @__PURE__ */ jsx("path", { d: path, fill: "none", stroke: "#171717", strokeWidth: "2" }),
      points.map((p, i) => /* @__PURE__ */ jsx("circle", { cx: x(i), cy: y(p.value), r: i === points.length - 1 ? 4 : 2.5, fill: "#171717" }, i)),
      points.map((p, i) => (i === 0 || i === points.length - 1 || points.length <= 8) && /* @__PURE__ */ jsx("text", { x: x(i), y: h - 8, textAnchor: "middle", fontSize: "9", fill: "#737373", fontFamily: "ui-monospace, monospace", children: labelFn(p.date) }, `lbl-${i}`))
    ] });
  }
  function Cell({ value, onChange, type = "text", align = "left", width = "w-full", placeholder, readOnly = false }) {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        value,
        placeholder,
        disabled: readOnly,
        onChange: (e) => onChange(e.target.value),
        className: `${width} bg-transparent border-b border-neutral-200 focus:border-neutral-800 focus:outline-none py-1 text-sm text-neutral-900 disabled:text-neutral-500 disabled:cursor-default ${align === "right" ? "text-right font-mono tabular-nums" : ""}`
      }
    );
  }
  function Select({ value, onChange, options, readOnly = false }) {
    return /* @__PURE__ */ jsx("select", { value, onChange: (e) => onChange(e.target.value), disabled: readOnly, className: "w-full bg-transparent border-b border-neutral-200 focus:border-neutral-800 focus:outline-none py-1 text-sm text-neutral-900 disabled:text-neutral-500 disabled:cursor-default", children: options.map((o) => /* @__PURE__ */ jsx("option", { value: o, children: o }, o)) });
  }
  function RowDeleteButton({ onClick }) {
    return /* @__PURE__ */ jsx("button", { onClick, className: "text-neutral-300 hover:text-neutral-700 transition-colors p-1", "aria-label": "Delete row", children: /* @__PURE__ */ jsx(Trash2, { size: 14 }) });
  }
  function RowEditButton({ onClick }) {
    return /* @__PURE__ */ jsx("button", { onClick, className: "text-neutral-300 hover:text-neutral-700 transition-colors p-1", "aria-label": "Edit row", children: /* @__PURE__ */ jsx(Pencil, { size: 14 }) });
  }
  function AddRowButton({ onClick, label }) {
    return /* @__PURE__ */ jsx("button", { onClick, className: "mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-wide text-neutral-600 border border-neutral-300 px-3 py-1.5 hover:border-neutral-600 transition-colors", children: [
      /* @__PURE__ */ jsx(Plus, { size: 13 }),
      " ",
      label
    ] });
  }
  function HoldingsTable({ holdings, onChange, currentValueById, currentValueCurrencyById, canEdit = true }) {
    const update = (id, patch) => onChange(holdings.map((h) => h.id === id ? { ...h, ...patch } : h));
    const remove = (id) => onChange(holdings.filter((h) => h.id !== id));
    const add = () => onChange([...holdings, { id: uid(), type: "fund", label: "New fund", currency: "EGP", investment: 0, purchaseNav: 100, purchaseDate: "", navGroup: "new" + holdings.length, grams: 0 }]);
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Type" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Label" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Currency" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Purchase date" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Investment" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Purchase NAV / price" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Grams" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "NAV group" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Current value" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: holdings.map((h) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-28", children: /* @__PURE__ */ jsx(Select, { value: h.type, onChange: (v) => update(h.id, { type: v }), options: ["fund", "gold", "fixed"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 min-w-40", children: /* @__PURE__ */ jsx(Cell, { value: h.label, onChange: (v) => update(h.id, { label: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Select, { value: h.currency, onChange: (v) => update(h.id, { currency: v }), options: ["EGP", "USD"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "date", value: h.purchaseDate || "", onChange: (v) => update(h.id, { purchaseDate: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.investment, onChange: (v) => update(h.id, { investment: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-28", children: h.type !== "fixed" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.purchaseNav, onChange: (v) => update(h.id, { purchaseNav: Number(v) || 0 }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-20", children: h.type === "gold" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.grams, onChange: (v) => update(h.id, { grams: Number(v) || 0 }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-24", children: h.type === "fund" ? /* @__PURE__ */ jsx(Cell, { value: h.navGroup, onChange: (v) => update(h.id, { navGroup: v }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32 text-right font-mono tabular-nums text-neutral-700", children: currentValueById?.[h.id] != null ? currentValueCurrencyById?.[h.id] === "USD" ? usd(currentValueById[h.id]) : egp(currentValueById[h.id]) : "\u2014" }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(h.id) }) })
        ] }, h.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add holding" }),
      canEdit && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mt-2 max-w-xl", children: "NAV group links a fund to a field in the daily pricing form \u2014 give two rows the same group (like both CIB Istethmar tranches) to share one NAV input." })
    ] });
  }
  function LoansTable({ loans, onChange, canEdit = true }) {
    const update = (id, patch) => onChange(loans.map((l) => l.id === id ? { ...l, ...patch } : l));
    const remove = (id) => onChange(loans.filter((l) => l.id !== id));
    const add = () => onChange([...loans, { id: uid(), label: "New loan", currency: "EGP", amount: 0, rate: "", installment: 0 }]);
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Label" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Currency" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Amount" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Rate %" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Monthly installment" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: loans.map((l) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 min-w-48", children: /* @__PURE__ */ jsx(Cell, { value: l.label, onChange: (v) => update(l.id, { label: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Select, { value: l.currency, onChange: (v) => update(l.id, { currency: v }), options: ["EGP", "USD"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.amount, onChange: (v) => update(l.id, { amount: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.rate, onChange: (v) => update(l.id, { rate: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.installment, onChange: (v) => update(l.id, { installment: Number(v) || 0 }), readOnly: !canEdit }) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(l.id) }) })
        ] }, l.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add loan" })
    ] });
  }
  function OfficeUnitsTable({ units }) {
    const totals = units.reduce((s, u) => ({
      totalPrice: s.totalPrice + u.totalPrice,
      advance: s.advance + u.advance,
      remaining: s.remaining + u.remaining
    }), { totalPrice: 0, advance: 0, remaining: 0 });
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Office" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Size" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Parking" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Total price" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Advance paid (5%)" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Remaining installments" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: units.map((u) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: u.unit }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3", children: u.size }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: u.parking }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(u.totalPrice) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(u.advance) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(u.remaining) })
      ] }, u.unit)) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${units.length})` }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.totalPrice) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.advance) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(totals.remaining) })
      ] }) })
    ] }) });
  }
  function LoanFacilitiesTable({ facilities }) {
    const totals = facilities.reduce((s, f) => ({
      amountFinanced: s.amountFinanced + f.amountFinanced,
      outstanding: s.outstanding + f.outstanding,
      installment: s.installment + f.installment
    }), { amountFinanced: 0, outstanding: 0, installment: 0 });
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Facility" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Rate %" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Amount financed" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Outstanding balance" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Monthly installment" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Opened" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Matures" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: facilities.map((f) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: f.label }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: f.rate.toFixed(1) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(f.amountFinanced) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(f.outstanding) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(f.installment) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(f.openDate) }),
        /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(f.maturityDate) })
      ] }, f.label)) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${facilities.length})` }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(totals.amountFinanced) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.outstanding) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.installment) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" })
      ] }) })
    ] }) });
  }
  function CertificatesTable({ certificates }) {
    const total = certificates.reduce((s, c) => s + c.amount, 0);
    const totalMonthlyInterest = certificates.reduce((s, c) => s + c.amount * c.rate / 100 / 12, 0);
    const maturedCount = certificates.filter((c) => { const d = daysUntil(c.maturityDate); return d !== null && d < 0; }).length;
    const maturingSoonCount = certificates.filter((c) => { const d = daysUntil(c.maturityDate); return d !== null && d >= 0 && d <= MATURITY_WARNING_DAYS; }).length;
    return /* @__PURE__ */ jsx("div", { children: [
      (maturedCount > 0 || maturingSoonCount > 0) && /* @__PURE__ */ jsx("div", { className: "mb-3 text-xs text-amber-700 bg-amber-50 border border-amber-300 px-3 py-2", children: [
        maturedCount > 0 && `${maturedCount} certificate${maturedCount === 1 ? "" : "s"} already past maturity. `,
        maturingSoonCount > 0 && `${maturingSoonCount} maturing within ${MATURITY_WARNING_DAYS} days.`
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Certificate" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Rate %" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Amount" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Monthly interest" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Opened" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Matures" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: certificates.map((c, i) => {
          const days = daysUntil(c.maturityDate);
          const matured = days !== null && days < 0;
          const maturingSoon = days !== null && days >= 0 && days <= MATURITY_WARNING_DAYS;
          return /* @__PURE__ */ jsx("tr", { className: `border-b border-neutral-100 ${matured ? "bg-red-50" : maturingSoon ? "bg-amber-50" : ""}`, children: [
            /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: c.label }),
            /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: c.rate.toFixed(2) }),
            /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(c.amount) }),
            /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(c.amount * c.rate / 100 / 12) }),
            /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(c.openDate) }),
            /* @__PURE__ */ jsx("td", { className: `py-1.5 pr-3 ${matured ? "text-red-700" : maturingSoon ? "text-amber-700" : "text-neutral-500"}`, children: [
              fmtDate(c.maturityDate),
              matured && ` — matured ${Math.abs(days)}d ago`,
              maturingSoon && ` — in ${days}d`
            ] })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${certificates.length})` }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(total) }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totalMonthlyInterest) }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" })
        ] }) })
      ] }) })
    ] });
  }
  function PerformanceRankingTable({ rows }) {
    const signedNative = (amount, currency) => {
      const sign = amount >= 0 ? "+" : "−";
      const abs = currency === "USD" ? usd(Math.abs(amount)) : egp(Math.abs(amount));
      return `${sign}${abs}`;
    };
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Rank" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Holding" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Purchase date" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Purchase value" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Current value" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Net gain / loss" }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Gain since purchase" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map((r, i) => {
        const netGain = r.currentNative - r.investmentNative;
        return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 font-mono text-xs text-neutral-400", children: i + 1 }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3", children: r.label }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(r.purchaseDate) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: r.currency === "USD" ? usd(r.investmentNative) : egp(r.investmentNative) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-700", children: r.currency === "USD" ? usd(r.currentNative) : egp(r.value) }),
          /* @__PURE__ */ jsx("td", { className: `py-1.5 pr-3 text-right font-mono tabular-nums ${netGain >= 0 ? "text-emerald-700" : "text-red-700"}`, children: signedNative(netGain, r.currency) }),
          /* @__PURE__ */ jsx("td", { className: `py-1.5 pr-3 text-right font-mono tabular-nums ${r.gainPct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(r.gainPct) })
        ] }, r.id);
      }) })
    ] }) });
  }
  function ConversionsTable({ conversions, onChange, canEdit = true }) {
    const sorted = [...conversions].sort((a, b) => a.date.localeCompare(b.date));
    let running = 0;
    const withRunning = sorted.map((c) => {
      const amt = Number(c.amountUsd) || 0;
      running += c.type === "convert" ? -amt : amt;
      return { ...c, running };
    });
    const update = (id, patch) => onChange(conversions.map((c) => c.id === id ? { ...c, ...patch } : c));
    const remove = (id) => onChange(conversions.filter((c) => c.id !== id));
    const add = () => onChange([...conversions, { id: uid(), date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), type: "in", amountUsd: 0, rate: "", note: "" }]);
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Date" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Type" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Amount, USD" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Rate" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Note" }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: "Running USD balance" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: withRunning.map((c) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "date", value: c.date, onChange: (v) => update(c.id, { date: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-28", children: /* @__PURE__ */ jsx(Select, { value: c.type, onChange: (v) => update(c.id, { type: v }), options: ["opening", "in", "convert"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: c.amountUsd, onChange: (v) => update(c.id, { amountUsd: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-20", children: c.type === "convert" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: c.rate, onChange: (v) => update(c.id, { rate: v }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 min-w-40", children: /* @__PURE__ */ jsx(Cell, { value: c.note, onChange: (v) => update(c.id, { note: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32 text-right font-mono tabular-nums text-neutral-700", children: usd(c.running) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(c.id) }) })
        ] }, c.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add conversion" })
    ] });
  }
  function DailyPricingForm({ onSave, saving, defaults, navFields, liveRates, canEdit = true, isEditing = false }) {
    const [form, setForm] = useState(defaults);
    useEffect(() => setForm(defaults), [defaults]);
    const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
    return /* @__PURE__ */ jsx("div", { className: "border border-neutral-300", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 text-white px-4 py-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide", children: isEditing ? "Editing entry" : "Today's update" }),
        /* @__PURE__ */ jsx("input", { type: "date", value: form.date, onChange: set("date"), disabled: !canEdit, className: "bg-neutral-900 text-white font-mono text-xs border border-neutral-600 px-2 py-1 disabled:opacity-60" })
      ] }),
      liveRates?.updatedAt && /* @__PURE__ */ jsx("div", { className: "px-4 pt-3 text-xs text-neutral-400", children: `Rate and gold pre-filled from live market data, last refreshed ${new Date(liveRates.updatedAt).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })} — you can still edit them below.` }),
      /* @__PURE__ */ jsx("div", { className: "p-4 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "USD / EGP rate" }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "0.01", value: form.rate, onChange: set("rate"), disabled: !canEdit, className: "font-mono text-sm border border-neutral-300 bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60" })
        ] }),
        /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Gold, EGP/gram" }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "1", value: form.gold, onChange: set("gold"), disabled: !canEdit, className: "font-mono text-sm border border-neutral-300 bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60" })
        ] }),
        navFields.map((f) => /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: f.label }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "0.0001", value: form[f.key] ?? "", onChange: set(f.key), disabled: !canEdit, className: "font-mono text-sm border border-neutral-300 bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60" })
        ] }, f.key))
      ] }),
      canEdit ? /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => onSave(form), disabled: saving, className: "inline-flex items-center gap-2 bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2 disabled:opacity-50", children: [
          saving ? /* @__PURE__ */ jsx(Loader2, { size: 14, className: "animate-spin" }) : isEditing ? /* @__PURE__ */ jsx(Check, { size: 14 }) : /* @__PURE__ */ jsx(Plus, { size: 14 }),
          saving ? "Saving" : isEditing ? "Save changes" : "Save today's entry"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Overwrites the entry for this date if one already exists." })
      ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Viewer access — you can look, but only an editor can save a new entry." }) })
    ] });
  }
  function UsersAdminPanel() {
    const [roles, setRoles] = useState(null);
    const [updating, setUpdating] = useState(null);
    useEffect(() => {
      if (!db) return;
      const ref = db.ref("roles");
      const onValueChange = (snap) => setRoles(snap.val() || {});
      ref.on("value", onValueChange);
      return () => ref.off("value", onValueChange);
    }, []);
    const changeRole = async (targetUid, nextRole) => {
      setUpdating(targetUid);
      await db.ref(`roles/${targetUid}/role`).set(nextRole);
      setUpdating(null);
    };
    const removeUser = async (targetUid) => {
      setUpdating(targetUid);
      await db.ref(`roles/${targetUid}`).remove();
      setUpdating(null);
    };
    if (roles === null) {
      return /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400", children: "Loading users…" });
    }
    const entries = Object.entries(roles).sort((a, b) => (a[1]?.email || "").localeCompare(b[1]?.email || ""));
    return /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Role" }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: "Last seen" }),
        /* @__PURE__ */ jsx("th", { className: "py-2" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: entries.map(([entryUid, r]) => {
        const isOwnerOrService = r?.role === "owner" || r?.role === "service";
        const isPendingOrRejected = r?.role === "pending" || r?.role === "rejected";
        return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 font-mono text-xs", children: r?.email || entryUid }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 w-32", children: isOwnerOrService ? /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500", children: r.role }) : isPendingOrRejected ? /* @__PURE__ */ jsx("span", { className: `text-xs uppercase tracking-wide ${r.role === "pending" ? "text-amber-600" : "text-red-600"}`, children: r.role }) : /* @__PURE__ */ jsx(Select, { value: r?.role || "viewer", onChange: (v) => changeRole(entryUid, v), options: ["viewer", "editor"] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-xs text-neutral-500", children: formatLastSeen(r?.lastSeenAt) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right", children: isOwnerOrService ? null : updating === entryUid ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Saving…" }) : isPendingOrRejected ? /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-end", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "viewer"), className: "text-xs border border-neutral-300 px-2 py-1 hover:border-neutral-600", children: "Accept as viewer" }),
            /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "editor"), className: "text-xs border border-neutral-300 px-2 py-1 hover:border-neutral-600", children: "Accept as editor" }),
            r.role !== "rejected" && /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "rejected"), className: "text-xs text-red-600 border border-red-300 px-2 py-1 hover:border-red-600", children: "Reject" }),
            /* @__PURE__ */ jsx("button", { onClick: () => removeUser(entryUid), className: "text-xs text-neutral-400 hover:text-red-600", children: "Delete" })
          ] }) : /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "rejected"), className: "text-xs text-neutral-400 hover:text-red-600", children: "Revoke" }) })
        ] }, entryUid);
      }) })
    ] }) });
  }
  function PortfolioReadinessApp({ onSignOut, role, uid }) {
    const canEdit = role === "owner" || role === "editor";
    const isOwner = role === "owner";
    const [openAsset, setOpenAsset] = useState(null);
    const [ccy, setCcy] = useState("egp");
    const [holdings, setHoldings] = useState(SEED_HOLDINGS);
    const [loans, setLoans] = useState(SEED_LOANS);
    const [conversions, setConversions] = useState(SEED_CONVERSIONS);
    const [history, setHistory] = useState([]);
    const [loadState, setLoadState] = useState("loading");
    const [saving, setSaving] = useState(false);
    const [savedFlash, setSavedFlash] = useState(false);
    const [liveRates, setLiveRates] = useState(null);
    const [dismissedAlertDate, setDismissedAlertDate] = useState(null);
    const [dismissedOfficeDueDate, setDismissedOfficeDueDate] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [bellOpen, setBellOpen] = useState(false);
    const [view, setView] = useState("dashboard");
    const [editingDate, setEditingDate] = useState(null);
    const [notifPermission, setNotifPermission] = useState(() => typeof window !== "undefined" && "Notification" in window ? window.Notification.permission : "unsupported");
    const [pushStatus, setPushStatus] = useState("idle");
    const showAdmin = isOwner && view === "admin";
    const saveTimers = useRef({});
    useEffect(() => {
      let cancelled = false;
      (async () => {
        const [h, l, c, lr] = await Promise.all([
          loadJson("holdings", SEED_HOLDINGS),
          loadJson("loans", SEED_LOANS),
          loadJson("conversions", SEED_CONVERSIONS),
          loadJson("liveRates", null)
        ]);
        let dailyEntries = [];
        try {
          const entries = await loadCollection("daily");
          dailyEntries = entries.length ? entries : SEED_DAILY;
        } catch {
          dailyEntries = SEED_DAILY;
        }
        dailyEntries.sort((a, b) => a.date.localeCompare(b.date));
        if (!cancelled) {
          setHoldings(h);
          setLoans(l);
          setConversions(c);
          setHistory(dailyEntries);
          setLiveRates(lr);
          setLoadState("ready");
        }
      })();
      return () => {
        cancelled = true;
      };
    }, []);
    const debouncedSave = useCallback((key, value, setter) => {
      setter(value);
      clearTimeout(saveTimers.current[key]);
      saveTimers.current[key] = setTimeout(() => saveJson(key, value), 500);
    }, []);
    const handleHoldingsChange = (next) => debouncedSave("holdings", next, setHoldings);
    const handleLoansChange = (next) => debouncedSave("loans", next, setLoans);
    const handleConversionsChange = (next) => debouncedSave("conversions", next, setConversions);
    const navFields = useMemo(() => {
      const seen = /* @__PURE__ */ new Map();
      holdings.filter((h) => h.type === "fund" && h.navGroup).forEach((h) => {
        if (!seen.has(h.navGroup)) seen.set(h.navGroup, h.label);
      });
      return Array.from(seen.entries()).map(([key, label]) => ({ key, label }));
    }, [holdings]);
    const accumulatingGroups = useMemo(() => Array.from(new Set(holdings.filter((h) => h.type === "fund" && h.accumulating).map((h) => h.navGroup))), [holdings]);
    const latest = history[history.length - 1];
    const defaultsForForm = useMemo(() => {
      const base = latest || { date: "2026-07-30", rate: 51.1, gold: 6800 };
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      const alreadySavedToday = latest && latest.date === todayStr;
      const rate = !alreadySavedToday && liveRates?.rate ? liveRates.rate : base.rate;
      const gold = !alreadySavedToday && liveRates?.gold ? liveRates.gold : base.gold;
      return { ...base, date: todayStr, rate, gold };
    }, [latest, liveRates]);
    const editingEntry = useMemo(() => editingDate ? history.find((e) => e.date === editingDate) : null, [editingDate, history]);
    const formDefaults = editingEntry || defaultsForForm;
    const daysSinceLastEntry = useMemo(() => {
      if (!latest?.date) return null;
      const today = /* @__PURE__ */ new Date();
      const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const lastDate = new Date(latest.date + "T00:00:00");
      return Math.round((todayMidnight - lastDate) / 864e5);
    }, [latest]);
    const handleSaveDay = useCallback(async (form) => {
      const clean = { ...form };
      clean.rate = Number(clean.rate) || 0;
      clean.gold = Number(clean.gold) || 0;
      navFields.forEach((f) => {
        clean[f.key] = clean[f.key] === "" || clean[f.key] === void 0 ? void 0 : Number(clean[f.key]);
      });
      const suspicious = navFields.filter((f) => {
        if (accumulatingGroups.includes(f.key)) return false;
        const prev = latest?.[f.key];
        const next = clean[f.key];
        if (prev === void 0 || next === void 0 || !prev) return false;
        return Math.abs((next - prev) / prev) * 100 > 15;
      }).map((f) => ({ label: f.label, prev: latest[f.key], next: clean[f.key] }));
      if (suspicious.length > 0) {
        const lines = suspicious.map((s) => `${s.label}: ${s.prev} → ${s.next}`).join("\n");
        const proceed = window.confirm(`These NAVs moved more than 15% since the last entry — double check they're not a typo:

${lines}

Save anyway?`);
        if (!proceed) return;
      }
      setSaving(true);
      await saveJson(`daily/${clean.date}`, clean);
      if (editingDate && editingDate !== clean.date) {
        await deleteKey(`daily/${editingDate}`);
      }
      setHistory((h) => [...h.filter((e) => e.date !== clean.date && e.date !== editingDate), clean].sort((a, b) => a.date.localeCompare(b.date)));
      setEditingDate(null);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1800);
      setSaving(false);
    }, [navFields, accumulatingGroups, latest, editingDate]);
    const handleDeleteDay = useCallback(async (date) => {
      await deleteKey(`daily/${date}`);
      setHistory((h) => h.filter((e) => e.date !== date));
      setEditingDate((d) => d === date ? null : d);
    }, []);
    const navAdjustByDate = useMemo(() => {
      const out = {};
      const running = {};
      const lastNav = {};
      const sorted = [...history].sort((a, b) => a.date.localeCompare(b.date));
      sorted.forEach((entry) => {
        const adj = {};
        accumulatingGroups.forEach((g) => {
          const raw = entry[g];
          if (raw !== void 0 && raw !== "") {
            const navNum = Number(raw);
            if (lastNav[g] !== void 0 && navNum < lastNav[g]) {
              running[g] = (running[g] || 0) + (lastNav[g] - navNum);
            }
            lastNav[g] = navNum;
          }
          adj[g] = running[g] || 0;
        });
        out[entry.date] = adj;
      });
      return out;
    }, [history, accumulatingGroups]);
    const computedHistory = useMemo(() => history.map((e) => computeDay(e, holdings, navAdjustByDate[e.date])), [history, holdings, navAdjustByDate]);
    const fundSeries = useMemo(() => holdings.filter((h) => h.type === "fund" && h.navGroup).map((holding) => {
      const points = computedHistory.map((d) => {
        const row = d.rows.find((r) => r.id === holding.id);
        return { date: d.date, value: row ? row.gainPct : 0 };
      });
      return { key: holding.id, label: holding.label, points };
    }), [holdings, computedHistory]);
    const latestComputed = computedHistory[computedHistory.length - 1];
    const firstComputed = computedHistory[0];
    const today = /* @__PURE__ */ new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const isLivePreview = !!(liveRates && latestComputed && latestComputed.date !== todayStr && (liveRates.rate || liveRates.gold));
    const displayComputed = useMemo(() => {
      if (!isLivePreview) return latestComputed;
      const liveEntry = { ...latestComputed, rate: liveRates.rate ?? latestComputed.rate, gold: liveRates.gold ?? latestComputed.gold };
      return computeDay(liveEntry, holdings, navAdjustByDate[latestComputed.date]);
    }, [isLivePreview, latestComputed, liveRates, holdings, navAdjustByDate]);
    const asOfLabel = isLivePreview ? `${todayStr} (live)` : latestComputed?.date || "";
    const ASSETS = displayComputed?.rows || [];
    const totalAssets = displayComputed?.totalAssets || 0;
    const performanceRanking = useMemo(() => ASSETS.filter((a) => a.purchaseNav != null).sort((a, b) => b.gainPct - a.gainPct), [ASSETS]);
    const variableInvestments = useMemo(() => {
      const totalInvested = displayComputed?.markedToMarketCost || 0;
      const totalProfit = displayComputed?.gain || 0;
      const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
      const durationDays = firstComputed && latestComputed ? Math.max(0, Math.round((new Date(latestComputed.date + "T00:00:00") - new Date(firstComputed.date + "T00:00:00")) / 864e5)) : 0;
      return { totalInvested, totalProfit, returnPct, durationDays };
    }, [firstComputed, latestComputed, displayComputed]);
    const currentValueById = useMemo(() => Object.fromEntries(ASSETS.map((a) => [a.id, a.currency === "USD" ? a.currentNative : a.value])), [ASSETS]);
    const currentValueCurrencyById = useMemo(() => Object.fromEntries(ASSETS.map((a) => [a.id, a.currency])), [ASSETS]);
    const totalLiabilities = useMemo(
      () => loans.reduce((s, l) => s + (l.currency === "USD" ? l.amount * (displayComputed?.rate || 0) : l.amount), 0),
      [loans, displayComputed]
    );
    const netWorth = totalAssets - totalLiabilities;
    const debtRatioPct = totalAssets ? totalLiabilities / totalAssets * 100 : 0;
    const dailyAlert = useMemo(() => {
      if (computedHistory.length < 2 || !totalLiabilities) return null;
      const prevDay = computedHistory[computedHistory.length - 2];
      const currDay = computedHistory[computedHistory.length - 1];
      const prevLeverage = prevDay.totalAssets ? totalLiabilities / prevDay.totalAssets * 100 : 0;
      const currLeverage = currDay.totalAssets ? totalLiabilities / currDay.totalAssets * 100 : 0;
      const leverageDelta = currLeverage - prevLeverage;
      const rateDelta = prevDay.rate ? (currDay.rate - prevDay.rate) / prevDay.rate * 100 : 0;
      const triggers = [];
      const LEVERAGE_THRESHOLD_POINTS = 1;
      const RATE_THRESHOLD_PCT = 1;
      if (Math.abs(leverageDelta) >= LEVERAGE_THRESHOLD_POINTS) {
        triggers.push(`Leverage ${leverageDelta >= 0 ? "+" : "−"}${Math.abs(leverageDelta).toFixed(1)} points since ${prevDay.date} (now ${currLeverage.toFixed(1)}%)`);
      }
      if (Math.abs(rateDelta) >= RATE_THRESHOLD_PCT) {
        triggers.push(`USD/EGP rate ${rateDelta >= 0 ? "+" : "−"}${Math.abs(rateDelta).toFixed(1)}% since ${prevDay.date} (now ${fmt(currDay.rate, 2)})`);
      }
      return triggers.length ? { date: currDay.date, triggers } : null;
    }, [computedHistory, totalLiabilities]);
    const OFFICE_DUE_WARNING_DAYS = 14;
    const nextOfficeInstallmentRow = nextOfficeInstallment();
    const officeNextDueDate = nextOfficeInstallmentRow ? nextOfficeInstallmentRow.date : null;
    const officeNextDueAmount = nextOfficeInstallmentRow ? nextOfficeInstallmentRow.amount : 0;
    const officeDaysUntilDue = daysUntil(officeNextDueDate);
    const officeDueAlert = officeDaysUntilDue !== null && officeDaysUntilDue <= OFFICE_DUE_WARNING_DAYS ? { date: officeNextDueDate, amount: officeNextDueAmount, daysUntilDue: officeDaysUntilDue } : null;
    const activeAlerts = useMemo(() => {
      const list = [];
      if (dailyAlert && dailyAlert.date !== dismissedAlertDate) {
        list.push({ id: `daily-${dailyAlert.date}`, severity: "warning", text: `Notable move today — ${dailyAlert.triggers.join(" · ")}` });
      }
      if (officeDueAlert && officeDueAlert.date !== dismissedOfficeDueDate) {
        const amt = egp(officeDueAlert.amount);
        list.push({ id: `office-${officeDueAlert.date}`, severity: officeDueAlert.daysUntilDue < 0 ? "danger" : "warning", text: officeDueAlert.daysUntilDue < 0 ? `Office installment ${amt} was due ${fmtDate(officeDueAlert.date)}, ${Math.abs(officeDueAlert.daysUntilDue)}d ago` : officeDueAlert.daysUntilDue === 0 ? `Office installment ${amt} is due today` : `Office installment ${amt} due ${fmtDate(officeDueAlert.date)}, in ${officeDueAlert.daysUntilDue}d` });
      }
      CERTIFICATES.forEach((c, i) => {
        const d = daysUntil(c.maturityDate);
        if (d === null || d > MATURITY_WARNING_DAYS) return;
        list.push({ id: `cert-${i}-${c.maturityDate}`, severity: d < 0 ? "danger" : "warning", text: d < 0 ? `${c.label} matured ${fmtDate(c.maturityDate)}, ${Math.abs(d)}d ago` : `${c.label} matures ${fmtDate(c.maturityDate)}, in ${d}d` });
      });
      LOAN_FACILITIES.forEach((l, i) => {
        const d = daysUntil(l.maturityDate);
        if (d === null || d > MATURITY_WARNING_DAYS) return;
        list.push({ id: `loan-${i}-${l.maturityDate}`, severity: d < 0 ? "danger" : "warning", text: d < 0 ? `${l.label} matured ${fmtDate(l.maturityDate)}, ${Math.abs(d)}d ago` : `${l.label} matures ${fmtDate(l.maturityDate)}, in ${d}d` });
      });
      return list;
    }, [dailyAlert, dismissedAlertDate, officeDueAlert, dismissedOfficeDueDate]);
    useEffect(() => {
      if (typeof navigator === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window)) {
        setPushStatus("unsupported");
        return;
      }
      navigator.serviceWorker.ready.then((reg) => reg.pushManager.getSubscription()).then((sub) => {
        setPushStatus(sub ? "subscribed" : "idle");
      }).catch(() => setPushStatus("idle"));
    }, []);
    const subscribeToPush = useCallback(async () => {
      if (typeof window === "undefined" || !("serviceWorker" in navigator) || !("PushManager" in window)) return;
      setPushStatus("subscribing");
      try {
        const perm = await window.Notification.requestPermission();
        setNotifPermission(perm);
        if (perm !== "granted") {
          setPushStatus("idle");
          return;
        }
        const registration = await navigator.serviceWorker.ready;
        let sub = await registration.pushManager.getSubscription();
        if (!sub) {
          sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
          });
        }
        await db.ref(`pushSubscriptions/${uid}`).set(sub.toJSON());
        setPushStatus("subscribed");
      } catch {
        setPushStatus("error");
      }
    }, [uid]);
    const totalEgpInvestment = useMemo(() => {
      return holdings.filter((h) => h.currency === "EGP").reduce((s, h) => s + h.investment, 0);
    }, [holdings]);
    const totalUsdInvestment = useMemo(() => {
      return holdings.filter((h) => h.currency === "USD").reduce((s, h) => s + h.investment, 0);
    }, [holdings]);
    const conversionsSorted = useMemo(() => [...conversions].sort((a, b) => a.date.localeCompare(b.date)), [conversions]);
    const totalIncomingUsd = useMemo(() => conversions.filter((c) => c.type === "in").reduce((s, c) => s + (Number(c.amountUsd) || 0), 0), [conversions]);
    const conversionsWithRunning = useMemo(() => {
      let running = 0;
      return conversionsSorted.map((c) => {
        const amt = Number(c.amountUsd) || 0;
        running += c.type === "convert" ? -amt : amt;
        return { ...c, running };
      });
    }, [conversionsSorted]);
    const conversionRunningBalance = conversionsWithRunning.length ? conversionsWithRunning[conversionsWithRunning.length - 1].running : 0;
    const fundsAndGoldValue = ASSETS.filter((a) => {
      const h = holdings.find((hh) => hh.id === a.id);
      return h && (h.type === "fund" || h.type === "gold");
    }).reduce((s, a) => s + a.value, 0);
    const liquidityScore = totalAssets ? fundsAndGoldValue / totalAssets * 100 : 0;
    const largestWeightPct = totalAssets && ASSETS.length ? Math.max(...ASSETS.map((a) => a.value), 0) / totalAssets * 100 : 0;
    const diversificationScore = 100 - largestWeightPct;
    const leverageScore = Math.max(0, 100 - debtRatioPct * 2);
    const usdNet = CASH_FLOW.usd.income - CASH_FLOW.usd.outflow;
    const currencyScore = CASH_FLOW.usd.outflow > 0 ? Math.min(100, CASH_FLOW.usd.income / CASH_FLOW.usd.outflow * 100) : 100;
    const readiness = ASSETS.length ? Math.round((leverageScore + liquidityScore + diversificationScore + currencyScore) / 4) : 0;
    const readinessLabel = readiness >= 75 ? "Well positioned" : readiness >= 55 ? "Adequate, room to improve" : "Needs attention";
    const egpNet = CASH_FLOW.egp.income - CASH_FLOW.egp.outflow;
    const analysis = useMemo(() => {
      if (!firstComputed || !latestComputed || computedHistory.length < 2) return null;
      const changeVal = latestComputed.markedToMarket - firstComputed.markedToMarket;
      const changePct = firstComputed.markedToMarket ? changeVal / firstComputed.markedToMarket * 100 : 0;
      const firstByLabel = new Map(firstComputed.rows.filter((r) => r.purchaseNav != null).map((r) => [r.label, r.gainPct]));
      const movers = latestComputed.rows.filter((r) => firstByLabel.has(r.label)).map((r) => ({ label: r.label, delta: r.gainPct - firstByLabel.get(r.label), last: r.gainPct }));
      const byLevel = [...movers].sort((a, b) => b.last - a.last);
      const strongest = byLevel[0];
      const weakest = byLevel[byLevel.length - 1];
      const byMomentum = [...movers].sort((a, b) => b.delta - a.delta);
      const mostImproved = byMomentum[0];
      const mostDeclined = byMomentum[byMomentum.length - 1];
      const rateChangePct = firstComputed.rate ? (latestComputed.rate - firstComputed.rate) / firstComputed.rate * 100 : 0;
      const goldChangePct = firstComputed.gold ? (latestComputed.gold - firstComputed.gold) / firstComputed.gold * 100 : 0;
      const upDays = computedHistory.slice(1).filter((d, i) => d.markedToMarket >= computedHistory[i].markedToMarket).length;
      return {
        days: computedHistory.length,
        changeVal,
        changePct,
        rateChangePct,
        goldChangePct,
        upDays,
        totalDays: computedHistory.length - 1,
        strongest,
        weakest,
        mostImproved,
        mostDeclined
      };
    }, [computedHistory, firstComputed, latestComputed]);
    const handleExportBackup = useCallback(() => {
      const backup = {
        exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
        holdings,
        loans,
        conversions,
        daily: history
      };
      const json = JSON.stringify(backup, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `portfolio-backup-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    }, [holdings, loans, conversions, history]);
    const downloadReport = useCallback(() => {
      const rowsHtml = ASSETS.map((a2) => {
        const pct = totalAssets ? (a2.value / totalAssets * 100).toFixed(1) : "0.0";
        const purchaseDate = fmtDate(a2.purchaseDate);
        const purchaseAmount = a2.currency === "USD" ? usd(a2.investmentNative) : a2.investmentEgp != null ? egp(a2.investmentEgp) : "—";
        const boughtAt = a2.purchaseNav != null ? fmt(a2.purchaseNav, 4) : "—";
        const now = a2.currentNav != null ? fmt(a2.currentNav, 4) : "—";
        const gain = a2.purchaseNav != null ? pctStr(a2.gainPct) : "—";
        const valueCell = a2.currency === "USD" ? usd(a2.currentNative) : egp(a2.value);
        return `<tr><td>${a2.label}</td><td>${purchaseDate}</td><td class="num mono">${purchaseAmount}</td><td class="num mono">${boughtAt}</td><td class="num mono">${now}</td><td class="num mono">${gain}</td><td class="num mono">${valueCell}</td><td class="num mono">${pct}%</td></tr>`;
      }).join("");
      const loanRowsHtml = loans.map((l) => {
        const amt = l.currency === "USD" ? usd(l.amount) : egp(l.amount);
        const inst = l.currency === "USD" ? usd(l.installment) : egp(l.installment);
        return `<tr><td>${l.label}</td><td class="num mono">${amt}</td><td class="num mono">${inst}</td></tr>`;
      }).join("");
      const certificateRowsHtml = CERTIFICATES.map((c) => `<tr><td>${c.label}</td><td class="num mono">${c.rate.toFixed(2)}%</td><td class="num mono">${egp(c.amount)}</td><td class="num mono">${egp(c.amount * c.rate / 100 / 12)}</td><td>${fmtDate(c.openDate)}</td><td>${fmtDate(c.maturityDate)}</td></tr>`).join("");
      const certificateTotal = CERTIFICATES.reduce((s, c) => s + c.amount, 0);
      const certificateMonthlyInterestTotal = CERTIFICATES.reduce((s, c) => s + c.amount * c.rate / 100 / 12, 0);
      const loanFacilityRowsHtml = LOAN_FACILITIES.map((f) => `<tr><td>${f.label}</td><td class="num mono">${f.rate.toFixed(1)}%</td><td class="num mono">${egp(f.amountFinanced)}</td><td class="num mono">${egp(f.outstanding)}</td><td class="num mono">${egp(f.installment)}</td><td>${fmtDate(f.openDate)}</td><td>${fmtDate(f.maturityDate)}</td></tr>`).join("");
      const loanFacilityTotals = LOAN_FACILITIES.reduce((s, f) => ({ amountFinanced: s.amountFinanced + f.amountFinanced, outstanding: s.outstanding + f.outstanding, installment: s.installment + f.installment }), { amountFinanced: 0, outstanding: 0, installment: 0 });
      const convRowsHtml = conversionsWithRunning.map((c) => `<tr><td>${c.date}</td><td style="text-transform:capitalize">${c.type}</td><td class="num mono">${usd(c.amountUsd)}</td><td class="num mono">${usd(c.running)}</td></tr>`).join("");
      const officeUnitsRowsHtml = OFFICE_UNITS.map((u) => `<tr><td>${u.unit}</td><td>${u.size}</td><td class="num mono">${u.parking}</td><td class="num mono">${egp(u.totalPrice)}</td><td class="num mono">${egp(u.advance)}</td><td class="num mono">${egp(u.remaining)}</td></tr>`).join("");
      const officeUnitsTotals = OFFICE_UNITS.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, advance: s.advance + u.advance, remaining: s.remaining + u.remaining }), { totalPrice: 0, advance: 0, remaining: 0 });
      const historyRowsHtml = [...computedHistory].reverse().map((d) => `<tr><td>${d.date}</td><td class="num mono">${fmt(d.rate, 2)}</td><td class="num mono">${fmt(d.gold)}</td><td class="num mono">${egp(d.markedToMarket)}</td><td class="num mono">${signedEgp(d.gain)}</td></tr>`).join("");
      const performanceRankingRowsHtml = performanceRanking.map((r, i) => {
        const netGain = r.currentNative - r.investmentNative;
        const fmtNative = (n) => r.currency === "USD" ? usd(n) : egp(n);
        const signedNative = `${netGain >= 0 ? "+" : "−"}${fmtNative(Math.abs(netGain))}`;
        return `<tr><td class="mono">${i + 1}</td><td>${r.label}</td><td>${fmtDate(r.purchaseDate)}</td><td class="num mono">${fmtNative(r.investmentNative)}</td><td class="num mono">${r.currency === "USD" ? usd(r.currentNative) : egp(r.value)}</td><td class="num mono">${signedNative}</td><td class="num mono">${pctStr(r.gainPct)}</td></tr>`;
      }).join("");
      const analysisHtml = analysis ? `
      <h2>Since ${firstComputed.date} (${analysis.days} days)</h2>
      <p class="note">Marked-to-market moved <b>${signedEgp(analysis.changeVal)}</b> (${pctStr(analysis.changePct)}). FX moved ${pctStr(analysis.rateChangePct)}; gold moved ${pctStr(analysis.goldChangePct)} per gram.
      ${analysis.strongest ? `Strongest holding overall: <b>${analysis.strongest.label}</b> (${pctStr(analysis.strongest.last)}).` : ""}
      ${analysis.weakest ? `Weakest: <b>${analysis.weakest.label}</b> (${pctStr(analysis.weakest.last)}).` : ""}</p>
    ` : "";
      const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Portfolio Readiness \u2014 Report ${latest?.date || ""}</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; color:#171717; background:#FAFAF9; margin:0; padding:32px 40px; }
  .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; }
  h1 { font-family: Georgia, "Times New Roman", serif; font-size:32px; margin:6px 0 2px; }
  .eyebrow { font-size:11px; text-transform:uppercase; letter-spacing:.1em; color:#737373; display:flex; justify-content:space-between; border-bottom:2px solid #171717; padding-bottom:10px; }
  .dek { color:#525252; font-size:14px; margin:4px 0 20px; max-width:560px; }
  .grid4 { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; border-top:1px solid #E5E5E5; padding-top:14px; margin-bottom:24px; }
  .stat-label { font-size:10px; text-transform:uppercase; letter-spacing:.08em; color:#737373; }
  .stat-value { font-size:20px; margin-top:2px; }
  h2 { font-family: Georgia, "Times New Roman", serif; font-size:18px; border-bottom:1px solid #D4D4D4; padding-bottom:6px; margin:26px 0 10px; }
  table { width:100%; border-collapse:collapse; font-size:12.5px; }
  td, th { padding:5px 8px; }
  th { text-align:left; font-size:10px; text-transform:uppercase; color:#737373; border-bottom:1px solid #D4D4D4; }
  tr:nth-child(even) td { background:#F5F5F4; }
  .num { text-align:right; }
  .note { font-size:12.5px; color:#404040; line-height:1.6; margin:4px 0 12px; }
  .footer { font-size:10px; color:#A3A3A3; border-top:2px solid #171717; margin-top:28px; padding-top:10px; display:flex; justify-content:space-between; }
  .hint { font-size:11px; color:#A3A3A3; margin-top:2px; }
  @media print { .no-print { display:none !important; } }
</style></head>
<body>
  <div class="no-print" style="background:#171717;color:#fff;padding:10px 16px;margin:-32px -40px 24px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;">This is a standalone file \u2014 open it anywhere, share it with anyone</span>
    <button onclick="window.print()" style="background:transparent;border:1px solid #737373;color:#fff;padding:6px 12px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;cursor:pointer;">Print / Save as PDF</button>
  </div>

  <div class="eyebrow"><span>Portfolio Review \u2014 Final Report</span><span>${asOfLabel}</span></div>
  <h1>Portfolio Readiness</h1>
  <p class="dek">${readinessLabel} \u2014 composite score ${readiness} of 100. Prepared from data as of ${asOfLabel}.</p>

  <div class="grid4">
    <div><div class="stat-label">Total assets</div><div class="stat-value mono">${egp(totalAssets)}</div></div>
    <div><div class="stat-label">Total liabilities</div><div class="stat-value mono">${egp(totalLiabilities)}</div></div>
    <div><div class="stat-label">Net worth</div><div class="stat-value mono">${egp(netWorth)}</div></div>
    <div><div class="stat-label">Leverage</div><div class="stat-value mono">${debtRatioPct.toFixed(1)}%</div></div>
  </div>

  <h2>Investment, by currency</h2>
  <table>
    <tr><td>Total invested in EGP</td><td class="num mono">${egp(totalEgpInvestment)}</td></tr>
    <tr><td>Total invested in USD</td><td class="num mono">${usd(totalUsdInvestment)}</td></tr>
    <tr><td>Received from outside transfers</td><td class="num mono">${usd(totalIncomingUsd)}</td></tr>
    <tr><td>Remaining in USD today</td><td class="num mono">${usd(conversionRunningBalance)}</td></tr>
  </table>

  <h2>Variable investments (funds, gold, Beltone — excludes certificates)</h2>
  <table>
    <tr><td>Total invested</td><td class="num mono">${egp(variableInvestments.totalInvested)}</td></tr>
    <tr><td>Duration tracked</td><td class="num mono">${variableInvestments.durationDays} day${variableInvestments.durationDays === 1 ? "" : "s"}</td></tr>
    <tr><td>Return</td><td class="num mono">${pctStr(variableInvestments.returnPct)}</td></tr>
    <tr><td>Total profit</td><td class="num mono">${signedEgp(variableInvestments.totalProfit)}</td></tr>
  </table>

  <h2>Holdings</h2>
  <table><tr><th>Holding</th><th>Purchase date</th><th class="num">Purchase amount</th><th class="num">Bought at</th><th class="num">Now</th><th class="num">Gain</th><th class="num">Value</th><th class="num">% of total</th></tr>${rowsHtml}</table>
  <p class="note">The ${CERTIFICATES.length} EGP certificates & CDs, individually — these roll up into the single "EGP certificates & CDs" holding above.</p>
  <table><tr><th>Certificate</th><th class="num">Rate</th><th class="num">Amount</th><th class="num">Monthly interest</th><th>Opened</th><th>Matures</th></tr>${certificateRowsHtml}<tr><td><b>Total (${CERTIFICATES.length})</b></td><td></td><td class="num mono"><b>${egp(certificateTotal)}</b></td><td class="num mono"><b>${egp(certificateMonthlyInterestTotal)}</b></td><td></td><td></td></tr></table>
  <p class="note">Total monthly interest across all certificates reconciles with the "EGP — certificate & fund income" line in the cash flow section below.</p>

  <h2>Currency conversion history</h2>
  <table><tr><th>Date</th><th>Type</th><th class="num">Amount, USD</th><th class="num">Running balance</th></tr>${convRowsHtml}</table>

  <h2>What is owed</h2>
  <table><tr><th>Facility</th><th class="num">Amount</th><th class="num">Monthly installment</th></tr>${loanRowsHtml}</table>
  <p class="note">The ${LOAN_FACILITIES.length} secured EGP facilities, individually — these roll up into the single "Secured EGP loans" row above.</p>
  <table><tr><th>Facility</th><th class="num">Rate</th><th class="num">Amount financed</th><th class="num">Outstanding balance</th><th class="num">Monthly installment</th><th>Opened</th><th>Matures</th></tr>${loanFacilityRowsHtml}<tr><td><b>Total (${LOAN_FACILITIES.length})</b></td><td></td><td class="num mono"><b>${egp(loanFacilityTotals.amountFinanced)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.outstanding)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.installment)}</b></td><td></td><td></td></tr></table>

  <h2>Office units</h2>
  <p class="note">Still being paid off in installments per the payment schedule — only the 5% advance (${egp(officeUnitsTotals.advance)}) is counted toward Total Assets above. Next due ${fmtDate(officeNextDueDate)}${officeNextDueDate ? `, ${egp(officeNextDueAmount)}` : ""}.</p>
  <table><tr><th>Office</th><th>Size</th><th class="num">Parking</th><th class="num">Total price</th><th class="num">Advance paid</th><th class="num">Remaining installments</th></tr>${officeUnitsRowsHtml}<tr><td><b>Total (${OFFICE_UNITS.length})</b></td><td></td><td></td><td class="num mono"><b>${egp(officeUnitsTotals.totalPrice)}</b></td><td class="num mono"><b>${egp(officeUnitsTotals.advance)}</b></td><td class="num mono"><b>${egp(officeUnitsTotals.remaining)}</b></td></tr></table>

  <h2>Monthly cash flow</h2>
  <table>
    <tr><td>EGP \u2014 certificate &amp; fund income</td><td class="num mono">${egp(CASH_FLOW.egp.income)}</td></tr>
    <tr><td>EGP \u2014 loan installments</td><td class="num mono">${egp(CASH_FLOW.egp.outflow)}</td></tr>
    <tr><td><b>EGP \u2014 net monthly surplus</b></td><td class="num mono"><b>${egp(egpNet)}</b></td></tr>
    <tr><td>USD \u2014 certificate &amp; deposit income</td><td class="num mono">${usd(CASH_FLOW.usd.income)}</td></tr>
    <tr><td><b>USD \u2014 net monthly surplus</b></td><td class="num mono"><b>${usd(usdNet)}</b></td></tr>
  </table>

  <h2>Performance ranking, strongest to weakest</h2>
  <p class="note">As of ${asOfLabel} — regenerate this report after any new day's entry to refresh the ranking.</p>
  <table><tr><th>Rank</th><th>Holding</th><th>Purchase date</th><th class="num">Purchase value</th><th class="num">Current value</th><th class="num">Net gain / loss</th><th class="num">Gain since purchase</th></tr>${performanceRankingRowsHtml}</table>

  <h2>History</h2>
  ${analysisHtml}
  <table><tr><th>Date</th><th class="num">Rate</th><th class="num">Gold</th><th class="num">Marked-to-market</th><th class="num">Gain / loss</th></tr>${historyRowsHtml}</table>

  <div class="footer"><span>Figures as tracked in the working file. For internal review, not financial advice.</span><span>Generated ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}</span></div>
</body></html>`;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `portfolio-report-${latest?.date || "latest"}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    }, [
      ASSETS,
      totalAssets,
      performanceRanking,
      loans,
      conversionsWithRunning,
      computedHistory,
      analysis,
      firstComputed,
      variableInvestments,
      latest,
      asOfLabel,
      readinessLabel,
      readiness,
      totalLiabilities,
      netWorth,
      debtRatioPct,
      totalEgpInvestment,
      totalUsdInvestment,
      totalIncomingUsd,
      conversionRunningBalance,
      egpNet,
      usdNet,
      officeNextDueDate,
      officeNextDueAmount
    ]);
    if (loadState === "loading") {
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center text-neutral-500 font-sans", children: [
        /* @__PURE__ */ jsx(Loader2, { className: "animate-spin mr-2", size: 16 }),
        " Loading saved data\u2026"
      ] });
    }
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 text-neutral-900 font-sans", children: [
      !showAdmin && dailyAlert && dailyAlert.date !== dismissedAlertDate && /* @__PURE__ */ jsx("div", { className: "bg-amber-50 border-b-2 border-amber-400", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-3 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-amber-900 leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Notable move today — " }),
          dailyAlert.triggers.join(" · ")
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDismissedAlertDate(dailyAlert.date), className: "text-xs text-amber-700 underline shrink-0 whitespace-nowrap", children: "Dismiss" })
      ] }) }),
      !showAdmin && officeDueAlert && officeDueAlert.date !== dismissedOfficeDueDate && /* @__PURE__ */ jsx("div", { className: `border-b-2 ${officeDueAlert.daysUntilDue < 0 ? "bg-red-50 border-red-400" : "bg-amber-50 border-amber-400"}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-3 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: `text-sm leading-relaxed ${officeDueAlert.daysUntilDue < 0 ? "text-red-900" : "text-amber-900"}`, children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Office installment — " }),
          officeDueAlert.daysUntilDue < 0 ? `${egp(officeDueAlert.amount)} was due ${fmtDate(officeDueAlert.date)}, ${Math.abs(officeDueAlert.daysUntilDue)} day${Math.abs(officeDueAlert.daysUntilDue) === 1 ? "" : "s"} ago.` : officeDueAlert.daysUntilDue === 0 ? `${egp(officeDueAlert.amount)} is due today.` : `${egp(officeDueAlert.amount)} due ${fmtDate(officeDueAlert.date)}, in ${officeDueAlert.daysUntilDue} day${officeDueAlert.daysUntilDue === 1 ? "" : "s"}.`
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDismissedOfficeDueDate(officeDueAlert.date), className: `text-xs underline shrink-0 whitespace-nowrap ${officeDueAlert.daysUntilDue < 0 ? "text-red-700" : "text-amber-700"}`, children: "Dismiss" })
      ] }) }),
      /* @__PURE__ */ jsx("header", { className: "border-b-2 border-neutral-900 bg-neutral-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 pt-8 pb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between font-mono text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("span", { children: "Portfolio Review \u2014 No. 006" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-3", children: [
            role && role !== "owner" && /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 border ${canEdit ? "border-neutral-400 text-neutral-600" : "border-amber-400 text-amber-700 bg-amber-50"}`, children: role }),
            /* @__PURE__ */ jsx("span", { children: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between gap-6 mt-3", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-4xl md:text-6xl leading-tight tracking-tight text-neutral-900", children: showAdmin ? "Manage access" : "Portfolio Readiness" }),
          /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-2 flex items-center gap-2", children: showAdmin ? /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setView("dashboard"),
              className: "inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 text-xs uppercase tracking-wide px-4 py-2 hover:bg-neutral-100 transition-colors",
              children: "\u2190 Back to portfolio"
            }
          ) : [
            /* @__PURE__ */ jsx("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setBellOpen((v) => !v),
                  className: "relative inline-flex items-center justify-center border border-neutral-300 text-neutral-700 p-2 hover:bg-neutral-100 transition-colors",
                  "aria-label": "Notifications",
                  children: [
                    /* @__PURE__ */ jsx(Bell, { size: 14 }),
                    activeAlerts.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-red-600 text-white text-[10px] leading-4 text-center font-mono", children: activeAlerts.length })
                  ]
                }
              ),
              bellOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10", onClick: () => setBellOpen(false) }),
              bellOpen && /* @__PURE__ */ jsx("div", { className: "fixed top-4 left-4 right-4 sm:absolute sm:top-auto sm:left-auto sm:right-0 sm:mt-2 sm:w-80 bg-white border border-neutral-300 shadow-lg z-20", children: [
                /* @__PURE__ */ jsx("div", { className: "px-4 py-2.5 border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-500", children: "Notifications" }),
                activeAlerts.length === 0 ? /* @__PURE__ */ jsx("div", { className: "px-4 py-4 text-xs text-neutral-400", children: "No active alerts." }) : /* @__PURE__ */ jsx("div", { className: "max-h-72 overflow-y-auto", children: activeAlerts.map((a) => /* @__PURE__ */ jsx("div", { className: `px-4 py-2.5 text-xs leading-relaxed border-b border-neutral-100 ${a.severity === "danger" ? "text-red-800" : "text-amber-800"}`, children: a.text }, a.id)) }),
                /* @__PURE__ */ jsx("div", { className: "px-4 py-2.5 border-t border-neutral-200", children: pushStatus === "unsupported" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Push notifications aren't supported here." }) : pushStatus === "subscribed" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-700", children: "Push notifications enabled \u2014 you'll get these even if the site is closed." }) : notifPermission === "denied" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Notifications blocked \u2014 enable them in your browser's site settings." }) : pushStatus === "subscribing" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: "Enabling\u2026" }) : /* @__PURE__ */ jsx("button", { onClick: subscribeToPush, className: "text-xs underline text-neutral-700", children: "Enable push notifications" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setMenuOpen((v) => !v),
                  className: "inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 text-xs uppercase tracking-wide px-4 py-2 hover:bg-neutral-100 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(menuOpen ? X : Menu, { size: 14 }),
                    " Menu"
                  ]
                }
              ),
              menuOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10", onClick: () => setMenuOpen(false) }),
              menuOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-52 bg-white border border-neutral-300 shadow-lg z-20 flex flex-col", children: [
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); downloadReport(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  " Download report"
                ] }),
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); handleExportBackup(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  " Backup data"
                ] }),
                isOwner && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); setView("admin"); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(Users, { size: 14 }),
                  " Manage access"
                ] }),
                onSignOut && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); onSignOut(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-500 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: "Log out" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-xl text-neutral-600 text-base leading-relaxed", children: showAdmin ? "Only you see this page. Share the signup link with anyone you want to give view-only access to, then upgrade them to editor here if needed." : canEdit ? 'Every holding, loan, and conversion below is editable. Add a new fund, certificate, loan, or gold position at any time \u2014 the daily form and every total pick it up automatically. "Download report" saves a standalone file you can open, print to PDF, or send to anyone \u2014 no publishing needed.' : 'You have view-only access \u2014 every number below is live, but editing is off. "Download report" saves a standalone file you can open, print to PDF, or send to anyone.' })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-6 bg-neutral-50", children: showAdmin ? [
        /* @__PURE__ */ jsx("section", { className: "py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 border border-neutral-300 bg-white p-4 flex flex-col sm:flex-row sm:items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500 shrink-0", children: "Signup link" }),
            /* @__PURE__ */ jsx("code", { className: "text-xs text-neutral-700 break-all", children: typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}?signup=1` : "" })
          ] }),
          /* @__PURE__ */ jsx(UsersAdminPanel, {})
        ] })
      ] : [
        /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-10 border-b border-neutral-200", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center md:items-start md:col-span-1", children: [
            /* @__PURE__ */ jsx(ReadinessDial, { score: readiness }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-center md:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "font-serif text-xl text-neutral-900", children: readinessLabel }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-1 max-w-xs", children: "Composite of leverage, liquidity, diversification and currency coverage, equally weighted." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:col-span-2 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 text-xs", children: isLivePreview ? [
              /* @__PURE__ */ jsx("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: `Live pricing — USD/EGP ${fmt(liveRates.rate, 2)}, gold ${fmt(liveRates.gold)} EGP/g. Not yet saved as today's entry.` })
            ] : /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: `Priced as of ${latest?.date || ""}.` }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-6", children: [
              /* @__PURE__ */ jsx(Stat, { label: "Total assets", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalAssets, format: egp }), emphasis: true }),
              /* @__PURE__ */ jsx(Stat, { label: "Total liabilities", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalLiabilities, format: egp }), emphasis: true }),
              /* @__PURE__ */ jsx(Stat, { label: "Net worth", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: netWorth, format: egp }), emphasis: true }),
              /* @__PURE__ */ jsx(Stat, { label: "Leverage", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: debtRatioPct, format: (v) => `${v.toFixed(1)}%` }), sub: "liabilities / assets", emphasis: true })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 pt-2 border-t border-neutral-200", children: [
              /* @__PURE__ */ jsx(Stat, { label: "Leverage score", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: leverageScore, format: Math.round }), sub: "of 100" }),
              /* @__PURE__ */ jsx(Stat, { label: "Liquidity score", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: liquidityScore, format: Math.round }), sub: "of 100" }),
              /* @__PURE__ */ jsx(Stat, { label: "Diversification", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: diversificationScore, format: Math.round }), sub: "of 100" }),
              /* @__PURE__ */ jsx(Stat, { label: "Currency coverage", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: currencyScore, format: Math.round }), sub: "of 100" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "01", title: "Investment, by currency", dek: "What is actually committed in each currency, at cost \u2014 drawn live from the holdings list below." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "Total invested in EGP" }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl md:text-3xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalEgpInvestment, format: egp }) }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-2", children: "Certificates, EGP funds, gold and brokerage, at cost." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "Total invested in USD" }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl md:text-3xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalUsdInvestment, format: usd }) }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-2", children: "Beltone, the CIB certificate, and the NBE term deposit." })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-neutral-500", children: [
            "Of ",
            usd(totalIncomingUsd),
            " received from outside transfers, ",
            usd(conversionRunningBalance),
            " remains in USD today \u2014 see the conversion history in section 03."
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "02", title: "Holdings", dek: "Every fund, certificate, gold position, and cash balance. Edit any cell, or add a new row." }),
          /* @__PURE__ */ jsx(HoldingsTable, { holdings, onChange: handleHoldingsChange, currentValueById, currentValueCurrencyById, canEdit }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: `The ${CERTIFICATES.length} EGP certificates & CDs, individually` }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: "For reference — these roll up into the single “EGP certificates & CDs” holding above. Monthly interest reconciles with the “EGP — certificate & fund income” line in section 07." }),
            /* @__PURE__ */ jsx(CertificatesTable, { certificates: CERTIFICATES })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "03", title: "Currency conversion history", dek: "Every transfer in and every surrender to EGP, with a running USD balance." }),
          /* @__PURE__ */ jsx(ConversionsTable, { conversions, onChange: handleConversionsChange, canEdit })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "04", title: "What the assets are worth", dek: `${ASSETS.length} holdings, ${egp(totalAssets)} in total, priced ${asOfLabel}. Expand a row for its detail.` }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 border border-neutral-300 bg-neutral-50 p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: "Your variable investments, in plain terms" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: "Funds, gold, and Beltone — the holdings whose price moves day to day. Certificates (fixed principal) aren't included here." }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "You've put in" }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: variableInvestments.totalInvested, format: egp }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "Tracked for" }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: variableInvestments.durationDays, format: (v) => `${Math.round(v)} day${Math.round(v) === 1 ? "" : "s"}` }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "Return so far" }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${variableInvestments.returnPct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: variableInvestments.returnPct, format: pctStr }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: "Profit so far" }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${variableInvestments.totalProfit >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: variableInvestments.totalProfit, format: signedEgp }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { children: ASSETS.map((a) => /* @__PURE__ */ jsx(LedgerRow, { item: a, total: totalAssets, isOpen: openAsset === a.id, onToggle: () => setOpenAsset(openAsset === a.id ? null : a.id) }, a.id)) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "05", title: "What is owed", dek: `${loans.length} facilities, ${egp(totalLiabilities)} outstanding. Add or remove a loan freely.` }),
          /* @__PURE__ */ jsx(LoansTable, { loans, onChange: handleLoansChange, canEdit }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: `The ${LOAN_FACILITIES.length} secured EGP facilities, individually` }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: "For reference — these roll up into the single “Secured EGP loans” row above." }),
            /* @__PURE__ */ jsx(LoanFacilitiesTable, { facilities: LOAN_FACILITIES })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between pt-4 mt-4 border-t-2 border-neutral-900", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-serif italic text-neutral-700", children: "Net worth" }),
            /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums text-lg text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: netWorth, format: egp }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "06", title: "Office units", dek: `${OFFICE_UNITS.length} units, ${egp(OFFICE_UNITS.reduce((s, u) => s + u.totalPrice, 0))} full contract price — only the advance paid counts toward Total Assets above.` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-6 max-w-2xl", children: "These are still being paid off in quarterly installments, so they aren't fully owned yet — only the 5% advance is counted as an asset. The full price and what's still owed are shown here for reference." }),
          /* @__PURE__ */ jsx(OfficeUnitsTable, { units: OFFICE_UNITS }),
          /* @__PURE__ */ jsx("p", { className: `text-xs mt-4 ${officeDueAlert ? officeDueAlert.daysUntilDue < 0 ? "text-red-700" : "text-amber-700" : "text-neutral-500"}`, children: `Paid off per the installment schedule, through ~2034. Next due ${fmtDate(officeNextDueDate)}${officeNextDueDate ? `, ${egp(officeNextDueAmount)}` : ""}${officeDueAlert ? officeDueAlert.daysUntilDue < 0 ? ` — ${Math.abs(officeDueAlert.daysUntilDue)}d overdue` : ` — in ${officeDueAlert.daysUntilDue}d` : ""}.` })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "07", title: "Monthly cash flow, by currency", dek: "Certificate and fund income measured against loan installments, each currency on its own terms." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-6", children: /* @__PURE__ */ jsx(Toggle, { options: [{ id: "egp", label: "EGP" }, { id: "usd", label: "USD" }], value: ccy, onChange: setCcy }) }),
          ccy === "egp" ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsx(Stat, { label: "Certificate & fund income", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: CASH_FLOW.egp.income, format: egp }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Loan installments", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: CASH_FLOW.egp.outflow, format: egp }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Net monthly position", value: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5 }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: egpNet, format: egp })
            ] }), emphasis: true, sub: "surplus" })
          ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(Stat, { label: "Certificate & deposit income", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: CASH_FLOW.usd.income, format: usd }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Net monthly position", value: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5 }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: usdNet, format: usd })
            ] }), emphasis: true, sub: "surplus — no active USD loan" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "daily-pricing-form", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "08", title: "Today's pricing", dek: "Update the rate, gold price, and each fund's NAV. New holdings above appear here automatically. Editing an existing day? Use the pencil icon on its row in History and analysis below." }),
          !editingEntry && daysSinceLastEntry >= 1 && /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center gap-2 border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-800", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { size: 14, className: "shrink-0 text-amber-500" }),
            daysSinceLastEntry === 1 ? "It's been 1 day since your last update — add today's entry below." : `It's been ${daysSinceLastEntry} days since your last update — add today's entry below.`
          ] }),
          editingEntry && /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center justify-between gap-2 border border-neutral-300 bg-neutral-100 px-3 py-2 text-xs text-neutral-700", children: [
            /* @__PURE__ */ jsx("span", { children: [
              "Editing the entry for ",
              /* @__PURE__ */ jsx("b", { children: fmtDate(editingEntry.date) }),
              " — changes overwrite that day when saved."
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: () => setEditingDate(null), className: "text-xs underline shrink-0", children: "Cancel" })
          ] }),
          /* @__PURE__ */ jsx(DailyPricingForm, { onSave: handleSaveDay, saving, defaults: formDefaults, navFields, liveRates, canEdit, isEditing: !!editingEntry }),
          savedFlash && /* @__PURE__ */ jsx("div", { className: "mt-3 inline-flex items-center gap-2 text-xs text-neutral-600 border border-neutral-300 px-3 py-1.5", children: [
            /* @__PURE__ */ jsx(Check, { size: 13 }),
            " Saved to history"
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "09", title: "History and analysis", dek: `${computedHistory.length} day${computedHistory.length === 1 ? "" : "s"} on record, marked-to-market portion only (funds, Beltone, gold). Edit a row to fix a mistake, or delete it outright.` }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(TrendChart, { points: computedHistory.map((d) => ({ date: d.date, value: d.markedToMarket })), labelFn: (d) => (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) }) }),
          fundSeries.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-3", children: "Return by fund, since purchase" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: fundSeries.map((f) => {
              const lastVal = f.points[f.points.length - 1]?.value ?? 0;
              return /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-600 truncate", children: f.label }),
                  /* @__PURE__ */ jsx("span", { className: `font-mono text-xs tabular-nums ${lastVal >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(lastVal) })
                ] }),
                /* @__PURE__ */ jsx(TrendChart, { points: f.points, labelFn: (d) => (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }) })
              ] }, f.key);
            }) })
          ] }),
          performanceRanking.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-1", children: "Performance ranking, strongest to weakest" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mb-3", children: `As of ${asOfLabel} — updates automatically the moment a new day's entry is saved.` }),
            /* @__PURE__ */ jsx(PerformanceRankingTable, { rows: performanceRanking })
          ] }),
          analysis && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-2", children: [
                "Since ",
                firstComputed.date
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                "Over ",
                analysis.days,
                " recorded days, the marked-to-market portion moved",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: signedEgp(analysis.changeVal) }),
                " (",
                pctStr(analysis.changePct),
                "). The FX rate moved ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: pctStr(analysis.rateChangePct) }),
                ", and gold moved",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: pctStr(analysis.goldChangePct) }),
                " per gram. Value rose on ",
                analysis.upDays,
                " of ",
                analysis.totalDays,
                " day-over-day steps."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-2", children: "Overall standing, since purchase" }),
              analysis.strongest && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Strongest:" }),
                " ",
                analysis.strongest.label,
                ", ",
                pctStr(analysis.strongest.last),
                "."
              ] }),
              analysis.weakest && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Weakest:" }),
                " ",
                analysis.weakest.label,
                ", ",
                pctStr(analysis.weakest.last),
                "."
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mt-4 mb-2", children: [
                "Recent momentum, ",
                firstComputed.date,
                " to ",
                latestComputed.date
              ] }),
              analysis.mostImproved && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Most improved:" }),
                " ",
                analysis.mostImproved.label,
                ", ",
                pctStr(analysis.mostImproved.delta),
                " over the period (now ",
                pctStr(analysis.mostImproved.last),
                " overall)."
              ] }),
              analysis.mostDeclined && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: "Most declined:" }),
                " ",
                analysis.mostDeclined.label,
                ", ",
                pctStr(analysis.mostDeclined.delta),
                " over the period (now ",
                pctStr(analysis.mostDeclined.last),
                " overall)."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm min-w-max", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-2 px-3", children: "Date" }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: "Rate" }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: "Gold" }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: "Marked-to-market" }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: "Gain / loss" }),
              canEdit && /* @__PURE__ */ jsx("th", { className: "py-2 px-3" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: [...computedHistory].reverse().map((d) => /* @__PURE__ */ jsx("tr", { className: `border-b border-neutral-100 ${d.date === editingDate ? "bg-neutral-50" : ""}`, children: [
              /* @__PURE__ */ jsx("td", { className: "py-2 px-3 font-mono text-neutral-700", children: d.date }),
              /* @__PURE__ */ jsx("td", { className: "py-2 px-3 font-mono text-right text-neutral-700", children: fmt(d.rate, 2) }),
              /* @__PURE__ */ jsx("td", { className: "py-2 px-3 font-mono text-right text-neutral-700", children: fmt(d.gold) }),
              /* @__PURE__ */ jsx("td", { className: "py-2 px-3 font-mono text-right text-neutral-900", children: egp(d.markedToMarket) }),
              /* @__PURE__ */ jsx("td", { className: `py-2 px-3 font-mono text-right ${d.gain >= 0 ? "text-neutral-900" : "text-neutral-500"}`, children: signedEgp(d.gain) }),
              canEdit && /* @__PURE__ */ jsx("td", { className: "py-2 px-3 text-right whitespace-nowrap", children: [
                /* @__PURE__ */ jsx(RowEditButton, { onClick: () => {
                  setEditingDate(d.date);
                  document.getElementById("daily-pricing-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                } }),
                /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => handleDeleteDay(d.date) })
              ] })
            ] }, d.date)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("footer", { className: "py-10 border-t-2 border-neutral-900 text-xs text-neutral-500 flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: "Figures as tracked in the working file. For internal review, not financial advice." }),
          /* @__PURE__ */ jsx("span", { className: "font-mono", children: "v3.0" })
        ] })
      ] })
    ] });
  }
  var ReportErrorBoundary = class extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
      return { error };
    }
    render() {
      if (this.state.error) {
        return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 text-neutral-900 font-sans flex items-center justify-center p-8", children: /* @__PURE__ */ jsx("div", { className: "max-w-md border border-neutral-300 p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-serif text-xl mb-2", children: "Something went wrong" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-3", children: "The page hit an error and stopped rendering, rather than failing silently:" }),
          /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono bg-neutral-100 p-3 overflow-x-auto whitespace-pre-wrap", children: String(this.state.error?.message || this.state.error) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => this.setState({ error: null }),
              className: "mt-4 bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2",
              children: "Try again"
            }
          )
        ] }) });
      }
      return this.props.children;
    }
  };
  function LoginScreen({ onSignIn, error, loading }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          onSignIn(username, password);
        },
        className: "w-full max-w-sm border border-neutral-300 bg-white p-6",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-1", children: "Portfolio Readiness" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-6", children: "Sign in to view and update the portfolio." }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Username" }),
            /* @__PURE__ */ jsx("input", { type: "text", autoComplete: "username", value: username, onChange: (e) => setUsername(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Password" }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: error }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2.5 disabled:opacity-50", children: loading ? "Signing in…" : "Sign in" }),
          /* @__PURE__ */ jsx("a", { href: "?signup=1", className: "block text-center text-xs text-neutral-400 hover:text-neutral-700 mt-4", children: "Don't have an account? Sign up" })
        ]
      }
    ) });
  }
  function SignupScreen({ onSignUp, error, success, loading }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    if (success) {
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm border border-neutral-300 bg-white p-6", children: [
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-3", children: "Request submitted" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: "Your account has been created, but you won't see anything until the owner approves your request." })
      ] }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          if (password !== confirm) return;
          onSignUp(username, password);
        },
        className: "w-full max-w-sm border border-neutral-300 bg-white p-6",
        children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-1", children: "Create an account" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-6", children: "Your request needs the owner's approval before you can see anything." }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Username" }),
            /* @__PURE__ */ jsx("input", { type: "text", autoComplete: "username", value: username, onChange: (e) => setUsername(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Password" }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "new-password", value: password, onChange: (e) => setPassword(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: "Confirm password" }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "new-password", value: confirm, onChange: (e) => setConfirm(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          password && confirm && password !== confirm && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: "Passwords don't match." }),
          error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: error }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2.5 disabled:opacity-50", children: loading ? "Creating…" : "Create account" }),
          /* @__PURE__ */ jsx("a", { href: "?", className: "block text-center text-xs text-neutral-400 hover:text-neutral-700 mt-4", children: "Already have an account? Sign in" })
        ]
      }
    ) });
  }
  function PendingApprovalScreen({ role, onSignOut }) {
    const rejected = role === "rejected";
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm border border-neutral-300 bg-white p-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-3", children: rejected ? "Access not granted" : "Waiting for approval" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-5", children: rejected ? "The owner hasn't approved this account. Contact them if you think this is a mistake." : "Your request is with the owner. You'll get access as soon as they approve it — no need to sign up again." }),
      /* @__PURE__ */ jsx("button", { onClick: onSignOut, className: "text-xs uppercase tracking-wide border border-neutral-300 px-4 py-2 hover:bg-neutral-100 transition-colors", children: "Log out" })
    ] }) });
  }
  function PortfolioReadiness() {
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [signInError, setSignInError] = useState("");
    const [signingIn, setSigningIn] = useState(false);
    const [signUpError, setSignUpError] = useState("");
    const [signingUp, setSigningUp] = useState(false);
    const [signedUp, setSignedUp] = useState(false);
    const [role, setRole] = useState(null);
    const isSignupMode = typeof window !== "undefined" && /[?&]signup=1\b/.test(window.location.search);
    useEffect(() => {
      if (!firebaseApp || !window.firebase.auth) {
        setAuthChecked(true);
        return;
      }
      const unsub = window.firebase.auth(firebaseApp).onAuthStateChanged((u) => {
        setUser(u);
        setAuthChecked(true);
      });
      return unsub;
    }, []);
    useEffect(() => {
      if (!user || !db) {
        setRole(null);
        return;
      }
      let cancelled = false;
      db.ref(`roles/${user.uid}/role`).once("value").then((snap) => {
        if (!cancelled) setRole(snap.val() || "pending");
      }).catch(() => {
        if (!cancelled) setRole("pending");
      });
      return () => {
        cancelled = true;
      };
    }, [user]);
    useEffect(() => {
      if (!user || !db) return;
      db.ref(`roles/${user.uid}/lastSeenAt`).set(Date.now()).catch(() => {
      });
    }, [user]);
    useEffect(() => {
      if (!user) return;
      let timer;
      const IDLE_LIMIT_MS = 6e4;
      const resetTimer = () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          window.firebase.auth(firebaseApp).signOut();
        }, IDLE_LIMIT_MS);
      };
      const activityEvents = ["mousemove", "mousedown", "keydown", "touchstart", "scroll"];
      activityEvents.forEach((ev) => window.addEventListener(ev, resetTimer));
      resetTimer();
      return () => {
        clearTimeout(timer);
        activityEvents.forEach((ev) => window.removeEventListener(ev, resetTimer));
      };
    }, [user]);
    const handleSignIn = async (username, password) => {
      setSignInError("");
      setSigningIn(true);
      try {
        const email = username.includes("@") ? username : `${username}@${AUTH_EMAIL_DOMAIN}`;
        await window.firebase.auth(firebaseApp).signInWithEmailAndPassword(email, password);
      } catch {
        setSignInError("Wrong username or password.");
      }
      setSigningIn(false);
    };
    const handleSignUp = async (username, password) => {
      setSignUpError("");
      setSigningUp(true);
      try {
        const email = username.includes("@") ? username : `${username}@${AUTH_EMAIL_DOMAIN}`;
        const cred = await window.firebase.auth(firebaseApp).createUserWithEmailAndPassword(email, password);
        await db.ref(`roles/${cred.user.uid}`).set({ role: "pending", email });
        setSignedUp(true);
      } catch (e) {
        setSignUpError(e && e.code === "auth/email-already-in-use" ? "That username is taken." : "Couldn't create the account.");
      }
      setSigningUp(false);
    };
    const handleSignOut = () => window.firebase.auth(firebaseApp).signOut();
    if (!authChecked) {
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center text-neutral-500 font-sans", children: [
        /* @__PURE__ */ jsx(Loader2, { className: "animate-spin mr-2", size: 16 }),
        " Loading…"
      ] });
    }
    if (!user) {
      if (isSignupMode) {
        return /* @__PURE__ */ jsx(SignupScreen, { onSignUp: handleSignUp, error: signUpError, success: signedUp, loading: signingUp });
      }
      return /* @__PURE__ */ jsx(LoginScreen, { onSignIn: handleSignIn, error: signInError, loading: signingIn });
    }
    if (role === null) {
      return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center text-neutral-500 font-sans", children: [
        /* @__PURE__ */ jsx(Loader2, { className: "animate-spin mr-2", size: 16 }),
        " Loading…"
      ] });
    }
    if (role !== "owner" && role !== "editor" && role !== "viewer" && role !== "service") {
      return /* @__PURE__ */ jsx(PendingApprovalScreen, { role, onSignOut: handleSignOut });
    }
    return /* @__PURE__ */ jsx(ReportErrorBoundary, { children: /* @__PURE__ */ jsx(PortfolioReadinessApp, { onSignOut: handleSignOut, role, uid: user.uid }) });
  }

  // entry.jsx
  var root = createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ jsx(PortfolioReadiness, {}));
})();
