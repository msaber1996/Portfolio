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
  function ChevronUp(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: /* @__PURE__ */ jsx("polyline", { points: "18 15 12 9 6 15" }) });
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
  function Search(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("circle", { cx: "11", cy: "11", r: "8" }),
      /* @__PURE__ */ jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
    ] });
  }
  function Moon(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" }) });
  }
  function Sun(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "2", x2: "12", y2: "4" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "22" }),
      /* @__PURE__ */ jsx("line", { x1: "4.93", y1: "4.93", x2: "6.34", y2: "6.34" }),
      /* @__PURE__ */ jsx("line", { x1: "17.66", y1: "17.66", x2: "19.07", y2: "19.07" }),
      /* @__PURE__ */ jsx("line", { x1: "2", y1: "12", x2: "4", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "20", y1: "12", x2: "22", y2: "12" }),
      /* @__PURE__ */ jsx("line", { x1: "4.93", y1: "19.07", x2: "6.34", y2: "17.66" }),
      /* @__PURE__ */ jsx("line", { x1: "17.66", y1: "6.34", x2: "19.07", y2: "4.93" })
    ] });
  }
  function Bell(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }),
      /* @__PURE__ */ jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })
    ] });
  }
  function Lock(props) {
    return /* @__PURE__ */ jsx(Base, { ...props, children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
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
    { id: "usdcd", type: "fixed", label: "USD certificate (CIB)", currency: "USD", investment: 8e5, purchaseNav: 0, grams: 0, navGroup: "", rate: 4.5 },
    { id: "usdcash", type: "fixed", label: "USD term deposit (NBE, 4.6%, monthly renewal)", currency: "USD", investment: 512382, purchaseNav: 0, grams: 0, navGroup: "", rate: 4.6 },
    { id: "brokerage", type: "fixed", label: "Brokerage (Tycoon)", currency: "EGP", investment: 9e6, purchaseNav: 0, grams: 0, navGroup: "" },
    { id: "offices", type: "fixed", label: "Properties (paid so far)", currency: "EGP", investment: 17029500, purchaseNav: 0, grams: 0, navGroup: "" }
  ];
  var SEED_OFFICE_UNITS = [
    { unit: "2A-D2-202", size: "305m\xB2", parking: 3, totalPrice: 50700000, advance: 2535000, remaining: 48165000 },
    { unit: "2A-D2-302", size: "308m\xB2", parking: 2, totalPrice: 53890000, advance: 2694500, remaining: 48165000 },
    { unit: "2A-D2-402", size: "288.5m\xB2", parking: 2, totalPrice: 49040000, advance: 2452000, remaining: 46630662 },
    { unit: "2A-D2-G01", size: "529.5m\xB2", parking: 4, totalPrice: 93700000, advance: 4685000, remaining: 89015000 },
    { unit: "2A-D2-G02", size: "529.5m\xB2", parking: 4, totalPrice: 93260000, advance: 4663000, remaining: 88597000 },
    { unit: "Belle Vie Valley V-V-101", size: "Villa", project: "Belle Vie – Emaar Misr", parking: 0, totalPrice: 9676888, advance: 7959228, remaining: 1717660 },
    { unit: "BV Beach Residence CG-B8-G-3", size: "Apartment", project: "Belle Vie Beach Residence – Emaar Misr", parking: 0, totalPrice: 5380888, advance: 4425768, remaining: 955120 },
    { unit: "WM-TSEII-AV-419F", size: "Residential unit", project: "The Wonder MarQ – MarQ Communities", parking: 0, totalPrice: 10915219, advance: 4219504, remaining: 6695712 }
  ];
  var OFFICE_INSTALLMENT_BY_UNIT_STANDARD = { "2A-D2-202": 1353690, "2A-D2-302": 1438863, "2A-D2-402": 1309368, "2A-D2-G01": 2501790, "2A-D2-G02": 2490042 };
  var SEED_OFFICE_INSTALLMENTS = [
    { date: "2026-09-16", amount: 17029500, byUnit: { "2A-D2-202": 2535000, "2A-D2-302": 2694500, "2A-D2-402": 2452000, "2A-D2-G01": 4685000, "2A-D2-G02": 4663000 } },
    { date: "2026-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2027-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2027-06-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2027-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2027-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2028-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2028-06-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2028-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2028-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2029-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2029-06-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2029-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2029-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2030-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2030-06-16", amount: 34059000, byUnit: { "2A-D2-202": 5070000, "2A-D2-302": 5389000, "2A-D2-402": 4904000, "2A-D2-G01": 9370000, "2A-D2-G02": 9326000 } },
    { date: "2030-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2030-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2031-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2031-06-16", amount: 26123253, byUnit: { "2A-D2-202": 3888690, "2A-D2-302": 4133363, "2A-D2-402": 3761368, "2A-D2-G01": 7186790, "2A-D2-G02": 7153042 } },
    { date: "2031-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2031-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2032-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2032-06-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2032-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2032-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2033-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2033-06-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2033-09-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2033-12-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2034-03-16", amount: 9093753, byUnit: OFFICE_INSTALLMENT_BY_UNIT_STANDARD },
    { date: "2034-06-16", amount: 8753163, byUnit: { "2A-D2-202": 1302990, "2A-D2-302": 1384973, "2A-D2-402": 1260328, "2A-D2-G01": 2408090, "2A-D2-G02": 2396782 } },
    { date: "2021-03-25", amount: 602310, byUnit: { "Belle Vie Valley V-V-101": 387075, "BV Beach Residence CG-B8-G-3": 215235 } },
    { date: "2021-06-23", amount: 557136, byUnit: { "Belle Vie Valley V-V-101": 358044, "BV Beach Residence CG-B8-G-3": 199092 } },
    { date: "2021-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2021-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2022-03-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2022-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2022-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2022-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2023-03-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2023-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2023-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2023-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2024-03-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2024-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2024-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2024-11-05", amount: 1767005, byUnit: { "WM-TSEII-AV-419F": 1767005 } },
    { date: "2024-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2025-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2025-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2025-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2025-07-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2025-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2025-10-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2025-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2026-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2026-03-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2026-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2026-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2026-06-16", amount: 17029500, byUnit: { "2A-D2-202": 2535000, "2A-D2-302": 2694500, "2A-D2-402": 2452000, "2A-D2-G01": 4685000, "2A-D2-G02": 4663000 } },
    { date: "2026-07-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2026-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2026-09-20", amount: 343529, byUnit: { "Belle Vie Valley V-V-101": 343529 } },
    { date: "2026-09-30", amount: 191021, byUnit: { "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2026-10-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2026-12-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2027-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2027-03-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2027-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2027-06-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2027-07-21", amount: 1440357, byUnit: { "WM-TSEII-AV-419F": 1440357 } },
    { date: "2027-09-01", amount: 534550, byUnit: { "Belle Vie Valley V-V-101": 343529, "BV Beach Residence CG-B8-G-3": 191021 } },
    { date: "2027-10-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2027-12-01", amount: 534580, byUnit: { "Belle Vie Valley V-V-101": 343544, "BV Beach Residence CG-B8-G-3": 191036 } },
    { date: "2028-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2028-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2028-07-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2028-10-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2029-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2029-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2029-07-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2029-10-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2030-01-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2030-04-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } },
    { date: "2030-07-21", amount: 350357, byUnit: { "WM-TSEII-AV-419F": 350357 } }
  ].sort((a, b) => a.date.localeCompare(b.date));
  var SEED_OFFICE_MAINTENANCE = [
    { date: "2022-04-01", amount: 351020, byUnit: { "Belle Vie Valley V-V-101": 225599, "BV Beach Residence CG-B8-G-3": 125421 } },
    { date: "2023-04-01", amount: 348401, byUnit: { "Belle Vie Valley V-V-101": 223916, "BV Beach Residence CG-B8-G-3": 124485 } },
    { date: "2024-04-01", amount: 348401, byUnit: { "Belle Vie Valley V-V-101": 223916, "BV Beach Residence CG-B8-G-3": 124485 } },
    { date: "2024-11-05", amount: 272500, byUnit: { "WM-TSEII-AV-419F": 272500 } },
    { date: "2027-01-21", amount: 817500, byUnit: { "WM-TSEII-AV-419F": 817500 } },
    { date: "2030-03-16", amount: 27247200, byUnit: { "2A-D2-202": 4056000, "2A-D2-302": 4311200, "2A-D2-402": 3923200, "2A-D2-G01": 7496000, "2A-D2-G02": 7460800 } }
  ];
  var SEED_NEWS_FEED = { items: [], updatedAt: null };
  var nextOfficeInstallment = (schedule, payments) => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    return schedule.find((row) => {
      const rowUnits = Object.keys(row.byUnit || {});
      if (!rowUnits.length || !payments) return row.date >= todayStr;
      const dk = sanitizeFbKey(row.date);
      return !rowUnits.every((u) => !!payments?.[dk]?.[sanitizeFbKey(u)]);
    }) || null;
  };
  function officeUnitPaidSoFar(unitLabel, installments, payments) {
    let sum = 0;
    installments.forEach((row) => {
      if (!row.byUnit || !(unitLabel in row.byUnit)) return;
      const dk = sanitizeFbKey(row.date);
      const uk = sanitizeFbKey(unitLabel);
      if (payments?.[dk]?.[uk]) sum += row.byUnit[unitLabel] || 0;
    });
    return sum;
  }
  var SEED_LOANS = [
    { id: "loan-egp", label: "Secured EGP loans (9 facilities)", currency: "EGP", amount: 88646115.24, rate: "", installment: 4031095.39 },
    { id: "loan-usd", label: "USD loan (CIB)", currency: "USD", amount: 72e4, rate: 7, installment: 22231.51 }
  ];
  var SEED_LOAN_FACILITIES = [
    { label: "Secured loan •7090", amountFinanced: 2499900, outstanding: 953434.38, installment: 97349.85, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •8850", amountFinanced: 990000, outstanding: 377575.48, installment: 38552.12, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •6620", amountFinanced: 50000000, outstanding: 47539977.26, installment: 1825262.29, rate: 19, openDate: "2026-07-19", maturityDate: "2029-07-03" },
    { label: "Secured loan •7070", amountFinanced: 6300000, outstanding: 2402749.93, installment: 245331.35, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •8860", amountFinanced: 22100, outstanding: 8427.21, installment: 860.46, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •7080", amountFinanced: 1788000, outstanding: 681922.46, installment: 69627.29, rate: 23.5, openDate: "2024-08-18", maturityDate: "2027-07-28" },
    { label: "Secured loan •4470", amountFinanced: 36000000, outstanding: 30355180.76, installment: 1317443.98, rate: 19, openDate: "2026-02-12", maturityDate: "2029-02-03" },
    { label: "Secured loan •3800", amountFinanced: 9100000, outstanding: 5617577.52, installment: 357755.69, rate: 23.5, openDate: "2025-04-09", maturityDate: "2028-04-03" },
    { label: "Secured loan •5500", amountFinanced: 2000000, outstanding: 709270.24, installment: 78912.36, rate: 23.5, openDate: "2024-06-26", maturityDate: "2027-06-28" }
  ];
  var SEED_CERTIFICATES = [
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
  var LAZY_SCRIPT_PROMISES = {};
  function loadScriptOnce(src) {
    if (!LAZY_SCRIPT_PROMISES[src]) {
      LAZY_SCRIPT_PROMISES[src] = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Could not load ${src} — check your connection and try again.`));
        document.head.appendChild(script);
      });
    }
    return LAZY_SCRIPT_PROMISES[src];
  }
  var XLSX_CDN_URL = "https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js";
  var EXCELJS_CDN_URL = "https://unpkg.com/exceljs@4.4.0/dist/exceljs.min.js";
  var TESSERACT_CDN_URL = "https://cdnjs.cloudflare.com/ajax/libs/tesseract.js/7.0.0/tesseract.min.js";
  function ensureXLSX() {
    return window.XLSX ? Promise.resolve() : loadScriptOnce(XLSX_CDN_URL);
  }
  function ensureExcelJS() {
    return window.ExcelJS ? Promise.resolve() : loadScriptOnce(EXCELJS_CDN_URL);
  }
  function ensureTesseract() {
    return window.Tesseract ? Promise.resolve() : loadScriptOnce(TESSERACT_CDN_URL);
  }
  function sanitizeFbKey(s) {
    return String(s).replace(/[.#$\[\]/]/g, "_");
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
  var iso = (x) => getLang() === "ar" ? "\u2066" + x + "\u2069" : x;
  var sgP = () => getLang() === "ar" ? "\u200E+" : "+";
  var sgM = () => getLang() === "ar" ? "\u200E\u2212" : "\u2212";
  var egp = (n) => iso(`${fmt(n)} EGP`);
  var usd = (n, d = 0) => iso(`${n < 0 ? "\u2212" : ""}$${fmt(Math.abs(n), d)}`);
  var signedEgp = (n) => iso(`${n >= 0 ? "+" : "\u2212"}${fmt(Math.abs(n))} EGP`);
  var pctStr = (n, d = 1) => iso(`${n >= 0 ? "+" : ""}${n.toFixed(d)}%`);
  var AR_MONTHS = ["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];
  var fmtDate = (d) => {
    if (!d) return "—";
    const dt = /* @__PURE__ */ new Date(d + "T00:00:00");
    if (getLang() === "ar") return `${dt.getDate()} ${AR_MONTHS[dt.getMonth()]} ${dt.getFullYear()}`;
    return dt.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };
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

  // i18n.jsx — Arabic/English interface strings. T() translates when Arabic is on;
  // anything missing from the map falls back to the original English.
  var AR_STRINGS = {"Portfolio Readiness": "\u062c\u0627\u0647\u0632\u064a\u0629 \u0627\u0644\u0645\u062d\u0641\u0638\u0629", "Portfolio Review \u2014 No. 006": "\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u2014 \u0631\u0642\u0645 006", "Manage access": "\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0635\u0648\u0644", "\u2190 Back to portfolio": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u2192", " Menu": " \u0627\u0644\u0642\u0627\u0626\u0645\u0629", "Summary": "\u0627\u0644\u0645\u0644\u062e\u0635", "Holdings": "\u0627\u0644\u0623\u0635\u0648\u0644", "Owed": "\u0627\u0644\u0645\u0633\u062a\u062d\u0642", "Cash flow": "\u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a", "More": "\u0627\u0644\u0645\u0632\u064a\u062f", "All sections": "\u0643\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0645", "Close": "\u0625\u063a\u0644\u0627\u0642", "Close sections": "\u0625\u063a\u0644\u0627\u0642 \u0627\u0644\u0623\u0642\u0633\u0627\u0645", "Main sections": "\u0627\u0644\u0623\u0642\u0633\u0627\u0645 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629", "Back to top": "\u0627\u0644\u0639\u0648\u062f\u0629 \u0644\u0644\u0623\u0639\u0644\u0649", "On this page": "\u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629", "Section index": "\u0641\u0647\u0631\u0633 \u0627\u0644\u0623\u0642\u0633\u0627\u0645", "About this page": "\u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629", "Overview": "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629", "What the assets are worth": "\u0643\u0645 \u062a\u0633\u0627\u0648\u064a \u0627\u0644\u0623\u0635\u0648\u0644", "Metal: funds vs physical": "\u0627\u0644\u0630\u0647\u0628: \u0635\u0646\u0627\u062f\u064a\u0642 \u0645\u0642\u0627\u0628\u0644 \u0633\u0628\u0627\u0626\u0643", "Portfolio insights": "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0639\u0644\u0649 \u0627\u0644\u0645\u062d\u0641\u0638\u0629", "Investment, by currency": "\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u062d\u0633\u0628 \u0627\u0644\u0639\u0645\u0644\u0629", "What is owed": "\u0627\u0644\u0645\u0633\u062a\u062d\u0642 \u0648\u0627\u0644\u062f\u064a\u0648\u0646", "Properties": "\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a", "Monthly cash flow, by currency": "\u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a \u0627\u0644\u0634\u0647\u0631\u064a \u062d\u0633\u0628 \u0627\u0644\u0639\u0645\u0644\u0629", "Currency conversion history": "\u0633\u062c\u0644 \u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0639\u0645\u0644\u0629", "Live markets": "\u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0645\u0628\u0627\u0634\u0631\u0629", "Economic news": "\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0627\u0642\u062a\u0635\u0627\u062f", "Today's pricing": "\u062a\u0633\u0639\u064a\u0631\u0629 \u0627\u0644\u064a\u0648\u0645", "History and analysis": "\u0627\u0644\u0633\u062c\u0644 \u0648\u0627\u0644\u062a\u062d\u0644\u064a\u0644", "Switch between years \u2014 profit tracking resets to zero at the start of each year": "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0628\u064a\u0646 \u0627\u0644\u0633\u0646\u0648\u0627\u062a \u2014 \u064a\u0639\u0648\u062f \u062a\u062a\u0628\u0639 \u0627\u0644\u0623\u0631\u0628\u0627\u062d \u0625\u0644\u0649 \u0627\u0644\u0635\u0641\u0631 \u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0643\u0644 \u0633\u0646\u0629", "Viewing year": "\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629", " (current)": " (\u0627\u0644\u062d\u0627\u0644\u064a\u0629)", "Market note \u2014 ": "\u0645\u0644\u0627\u062d\u0638\u0629 \u0627\u0644\u0633\u0648\u0642 \u2014 ", "Installments \u2014 ": "\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u2014 ", "New sign-up request \u2014 ": "\u0637\u0644\u0628 \u062a\u0633\u062c\u064a\u0644 \u062c\u062f\u064a\u062f \u2014 ", "Dismiss": "\u062a\u062c\u0627\u0647\u0644", "Review": "\u0645\u0631\u0627\u062c\u0639\u0629", "Notifications": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a", "No active alerts.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0646\u0634\u0637\u0629.", "Enable push notifications": "\u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a", "Enabling\u2026": "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u0641\u0639\u064a\u0644\u2026", "Push notifications enabled \u2014 you'll get these even if the site is closed.": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0645\u0641\u0639\u0651\u0644\u0629 \u2014 \u0633\u062a\u0635\u0644\u0643 \u062d\u062a\u0649 \u0644\u0648 \u0643\u0627\u0646 \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u063a\u0644\u0642\u064b\u0627.", "Push notifications aren't supported here.": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u063a\u064a\u0631 \u0645\u062f\u0639\u0648\u0645\u0629 \u0647\u0646\u0627.", "Notifications blocked \u2014 enable them in your browser's site settings.": "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a \u0645\u062d\u0638\u0648\u0631\u0629 \u2014 \u0641\u0639\u0651\u0644\u0647\u0627 \u0645\u0646 \u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 \u0641\u064a \u0627\u0644\u0645\u062a\u0635\u0641\u062d.", "Office installment": "\u0642\u0633\u0637 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629", "office units": "\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629", " Download report": " \u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u062a\u0642\u0631\u064a\u0631", " Download liabilities report": " \u062a\u0646\u0632\u064a\u0644 \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a", " Export to Excel": " \u062a\u0635\u062f\u064a\u0631 \u0625\u0644\u0649 Excel", " Backup data": " \u0646\u0633\u062e\u0629 \u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0629 \u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a", " Working\u2026": " \u062c\u0627\u0631\u064d \u0627\u0644\u0639\u0645\u0644\u2026", " Disable Face ID lock": " \u0625\u064a\u0642\u0627\u0641 \u0642\u0641\u0644 Face ID", " Enable Face ID lock": " \u062a\u0641\u0639\u064a\u0644 \u0642\u0641\u0644 Face ID", " Manage access": " \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0648\u0635\u0648\u0644", " Light mode": " \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d", " Dark mode": " \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646", "Log out": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c", "Log out instead": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c \u0628\u062f\u0644\u064b\u0627 \u0645\u0646 \u0630\u0644\u0643", "Backup data": "\u0646\u0633\u062e\u0629 \u0627\u062d\u062a\u064a\u0627\u0637\u064a\u0629 \u0644\u0644\u0628\u064a\u0627\u0646\u0627\u062a", "Download liabilities report": "\u062a\u0646\u0632\u064a\u0644 \u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a", "Download report": "\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u062a\u0642\u0631\u064a\u0631", "Export to Excel": "\u062a\u0635\u062f\u064a\u0631 \u0625\u0644\u0649 Excel", "Disable Face ID lock": "\u0625\u064a\u0642\u0627\u0641 \u0642\u0641\u0644 Face ID", "Enable Face ID lock": "\u062a\u0641\u0639\u064a\u0644 \u0642\u0641\u0644 Face ID", "Working\u2026": "\u062c\u0627\u0631\u064d \u0627\u0644\u0639\u0645\u0644\u2026", "Dark mode": "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u062f\u0627\u0643\u0646", "Light mode": "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0641\u0627\u062a\u062d", "Analysis at a glance": "\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0641\u064a \u0644\u0645\u062d\u0629", "Where you stand, how value compares with cost, what needs attention soon, and what these numbers leave out.": "\u0648\u0636\u0639\u0643 \u0627\u0644\u062d\u0627\u0644\u064a\u060c \u0648\u0627\u0644\u0642\u064a\u0645\u0629 \u0645\u0642\u0627\u0631\u0646\u0629 \u0628\u0645\u0627 \u062f\u0641\u0639\u062a\u0647\u060c \u0648\u0645\u0627 \u064a\u062d\u062a\u0627\u062c \u0627\u0646\u062a\u0628\u0627\u0647\u0643 \u0642\u0631\u064a\u0628\u064b\u0627\u060c \u0648\u0645\u0627 \u0644\u0627 \u062a\u063a\u0637\u064a\u0647 \u0647\u0630\u0647 \u0627\u0644\u0623\u0631\u0642\u0627\u0645.", "Composite of leverage, liquidity, diversification and currency coverage, equally weighted.": "\u0645\u0624\u0634\u0631 \u0645\u0631\u0643\u0651\u0628 \u0645\u0646 \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u0633\u064a\u0648\u0644\u0629 \u0648\u0627\u0644\u062a\u0646\u0648\u064a\u0639 \u0648\u0627\u0644\u062a\u063a\u0637\u064a\u0629 \u0628\u0627\u0644\u0639\u0645\u0644\u0627\u062a\u060c \u0628\u0623\u0648\u0632\u0627\u0646 \u0645\u062a\u0633\u0627\u0648\u064a\u0629.", "Well positioned": "\u0641\u064a \u0648\u0636\u0639 \u062c\u064a\u062f", "Adequate, room to improve": "\u0645\u0642\u0628\u0648\u0644\u060c \u0648\u0647\u0646\u0627\u0643 \u0645\u062c\u0627\u0644 \u0644\u0644\u062a\u062d\u0633\u064a\u0646", "Needs attention": "\u064a\u062d\u062a\u0627\u062c \u0627\u0646\u062a\u0628\u0627\u0647\u064b\u0627", "OUT OF 100": "\u0645\u0646 100", "1 \u00b7 Where you stand": "1 \u00b7 \u0623\u064a\u0646 \u062a\u0642\u0641", "2 \u00b7 Value vs what you put in": "2 \u00b7 \u0627\u0644\u0642\u064a\u0645\u0629 \u0645\u0642\u0627\u0628\u0644 \u0645\u0627 \u062f\u0641\u0639\u062a\u0647", "3 \u00b7 Needs your attention": "3 \u00b7 \u064a\u062d\u062a\u0627\u062c \u0627\u0646\u062a\u0628\u0627\u0647\u0643", "4 \u00b7 What the numbers do not cover": "4 \u00b7 \u0645\u0627 \u0644\u0627 \u062a\u063a\u0637\u064a\u0647 \u0627\u0644\u0623\u0631\u0642\u0627\u0645", "Net worth": "\u0635\u0627\u0641\u064a \u0627\u0644\u062b\u0631\u0648\u0629", "Assets / liabilities": "\u0627\u0644\u0623\u0635\u0648\u0644 / \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a", "Leverage": "\u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0629", "liabilities / assets": "\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a / \u0627\u0644\u0623\u0635\u0648\u0644", "Recorded values": "\u0642\u064a\u0645 \u0645\u0633\u062c\u0651\u0644\u0629", "Not a return": "\u0644\u064a\u0633 \u0639\u0627\u0626\u062f\u064b\u0627", "Value minus cost, by category": "\u0627\u0644\u0642\u064a\u0645\u0629 \u0646\u0627\u0642\u0635 \u0627\u0644\u062a\u0643\u0644\u0641\u0629\u060c \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629", "Attribution of value minus cost by category, not what drove a period. Funds, gold and Beltone only.": "\u062a\u0648\u0632\u064a\u0639 \u0641\u0631\u0642 \u0627\u0644\u0642\u064a\u0645\u0629 \u0639\u0646 \u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u062d\u0633\u0628 \u0627\u0644\u0641\u0626\u0629\u060c \u0648\u0644\u064a\u0633 \u0645\u0627 \u062d\u0631\u0651\u0643 \u0641\u062a\u0631\u0629 \u0628\u0639\u064a\u0646\u0647\u0627. \u0627\u0644\u0635\u0646\u0627\u062f\u064a\u0642 \u0648\u0627\u0644\u0630\u0647\u0628 \u0648Beltone \u0641\u0642\u0637.", "Gold (funds and bars)": "\u0627\u0644\u0630\u0647\u0628 (\u0635\u0646\u0627\u062f\u064a\u0642 \u0648\u0633\u0628\u0627\u0626\u0643)", "Gold (funds + physical)": "\u0627\u0644\u0630\u0647\u0628 (\u0635\u0646\u0627\u062f\u064a\u0642 + \u0641\u0639\u0644\u064a)", "EGP funds": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062c\u0646\u064a\u0647", "USD funds": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062f\u0648\u0644\u0627\u0631", "EGP fixed income": "\u062f\u062e\u0644 \u062b\u0627\u0628\u062a \u0628\u0627\u0644\u062c\u0646\u064a\u0647", "USD fixed income": "\u062f\u062e\u0644 \u062b\u0627\u0628\u062a \u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631", "Real estate (office units)": "\u0639\u0642\u0627\u0631\u0627\u062a (\u0648\u062d\u062f\u0627\u062a \u0645\u0643\u062a\u0628\u064a\u0629)", "Next property installment": "\u0627\u0644\u0642\u0633\u0637 \u0627\u0644\u0639\u0642\u0627\u0631\u064a \u0627\u0644\u0642\u0627\u062f\u0645", "none due": "\u0644\u0627 \u064a\u0648\u062c\u062f", "Monthly EGP cash flow": "\u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a \u0627\u0644\u0634\u0647\u0631\u064a \u0628\u0627\u0644\u062c\u0646\u064a\u0647", "Modelled monthly average": "\u0645\u062a\u0648\u0633\u0637 \u0634\u0647\u0631\u064a \u062a\u0642\u062f\u064a\u0631\u064a", "Liquidity score": "\u062f\u0631\u062c\u0629 \u0627\u0644\u0633\u064a\u0648\u0644\u0629", "Leverage score": "\u062f\u0631\u062c\u0629 \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0629", "History": "\u0627\u0644\u0633\u062c\u0644", "EGP funds and gold change": "\u062a\u063a\u064a\u0651\u0631 \u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062c\u0646\u064a\u0647 \u0648\u0627\u0644\u0630\u0647\u0628", "section 02, change vs cost": "\u0627\u0644\u0642\u0633\u0645 02\u060c \u0627\u0644\u062a\u063a\u064a\u0651\u0631 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", "Income received": "\u062f\u062e\u0644 \u0645\u0633\u062a\u0644\u0645", "Not recorded": "\u063a\u064a\u0631 \u0645\u0633\u062c\u0651\u0644", "Partial, unverified": "\u062c\u0632\u0626\u064a\u060c \u063a\u064a\u0631 \u0645\u0624\u0643\u062f", "AI paragraph (section 04)": "\u0641\u0642\u0631\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a (\u0627\u0644\u0642\u0633\u0645 04)", "Older data": "\u0628\u064a\u0627\u0646\u0627\u062a \u0623\u0642\u062f\u0645", "Check date": "\u0631\u0627\u062c\u0639 \u0627\u0644\u062a\u0627\u0631\u064a\u062e", "Holdings \u25b8": "\u0627\u0644\u0623\u0635\u0648\u0644 \u25b8", "Details and other views \u25b8": "\u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644 \u0648\u0639\u0631\u0648\u0636 \u0623\u062e\u0631\u0649 \u25b8", "Open installments \u25b8": "\u0641\u062a\u062d \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u25b8", "Cash flow \u25b8": "\u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a \u25b8", "Insights \u25b8": "\u0627\u0644\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u25b8", "Diversification": "\u0627\u0644\u062a\u0646\u0648\u064a\u0639", "Currency coverage": "\u0627\u0644\u062a\u063a\u0637\u064a\u0629 \u0628\u0627\u0644\u0639\u0645\u0644\u0627\u062a", "Total assets": "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0623\u0635\u0648\u0644", "Total liabilities": "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a", "of 100": "\u0645\u0646 100", "Certificates are at cost. Income received and FX at purchase are not recorded.": "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0645\u0633\u062c\u0651\u0644\u0629 \u0628\u0627\u0644\u062a\u0643\u0644\u0641\u0629. \u0627\u0644\u062f\u062e\u0644 \u0627\u0644\u0645\u0633\u062a\u0644\u0645 \u0648\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0648\u0642\u062a \u0627\u0644\u0634\u0631\u0627\u0621 \u063a\u064a\u0631 \u0645\u0633\u062c\u0651\u0644\u064a\u0646.", "Values as recorded on this site.": "\u0627\u0644\u0642\u064a\u0645 \u0643\u0645\u0627 \u0647\u064a \u0645\u0633\u062c\u0651\u0644\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639.", "Every fund, certificate, gold position, and cash balance. Edit any cell, or add a new row.": "\u0643\u0644 \u0635\u0646\u062f\u0648\u0642 \u0648\u0634\u0647\u0627\u062f\u0629 \u0648\u0645\u0631\u0643\u0632 \u0630\u0647\u0628 \u0648\u0631\u0635\u064a\u062f \u0646\u0642\u062f\u064a. \u0639\u062f\u0651\u0644 \u0623\u064a \u062e\u0644\u064a\u0629 \u0623\u0648 \u0623\u0636\u0641 \u0635\u0641\u064b\u0627 \u062c\u062f\u064a\u062f\u064b\u0627.", "Paper gold exposure (AZ Gold Fund) against the actual bars in hand, side by side.": "\u0627\u0644\u062a\u0639\u0631\u0636 \u0644\u0644\u0630\u0647\u0628 \u0627\u0644\u0648\u0631\u0642\u064a (\u0635\u0646\u062f\u0648\u0642 AZ \u0627\u0644\u0630\u0647\u0628\u064a) \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0633\u0628\u0627\u0626\u0643 \u0627\u0644\u0641\u0639\u0644\u064a\u0629 \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629\u060c \u062c\u0646\u0628\u064b\u0627 \u0625\u0644\u0649 \u062c\u0646\u0628.", "Automatic observations from the numbers already on this site \u2014 concentration, leverage, cash flow, and upcoming maturities. Optionally set a target allocation below to see how far you are from it.": "\u0645\u0644\u0627\u062d\u0638\u0627\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u0629 \u0645\u0646 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0648\u062c\u0648\u062f\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0642\u0639 \u2014 \u0627\u0644\u062a\u0631\u0643\u0651\u0632 \u0648\u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0629 \u0648\u0627\u0644\u062a\u062f\u0641\u0642 \u0627\u0644\u0646\u0642\u062f\u064a \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642\u0627\u062a \u0627\u0644\u0642\u0627\u062f\u0645\u0629. \u064a\u0645\u0643\u0646\u0643 \u062a\u062d\u062f\u064a\u062f \u062a\u0648\u0632\u064a\u0639 \u0645\u0633\u062a\u0647\u062f\u0641 \u0623\u062f\u0646\u0627\u0647 \u0644\u062a\u0631\u0649 \u0645\u062f\u0649 \u0628\u0639\u062f\u0643 \u0639\u0646\u0647.", "What is actually committed in each currency, at cost \u2014 drawn live from the holdings list below.": "\u0645\u0627 \u0647\u0648 \u0645\u0644\u062a\u0632\u0645 \u0628\u0647 \u0641\u0639\u0644\u064b\u0627 \u0641\u064a \u0643\u0644 \u0639\u0645\u0644\u0629\u060c \u0628\u0627\u0644\u062a\u0643\u0644\u0641\u0629 \u2014 \u0645\u0633\u062d\u0648\u0628 \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0646 \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0623\u0635\u0648\u0644 \u0623\u062f\u0646\u0627\u0647.", "Certificate income measured against loan installments and property obligations, each currency on its own terms.": "\u062f\u062e\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0645\u0642\u0627\u0628\u0644 \u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u0642\u0631\u0648\u0636 \u0648\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a \u0627\u0644\u0639\u0642\u0627\u0631\u064a\u0629\u060c \u0643\u0644 \u0639\u0645\u0644\u0629 \u0639\u0644\u0649 \u062d\u062f\u0629.", "Every transfer in and every surrender to EGP, with a running USD balance.": "\u0643\u0644 \u062a\u062d\u0648\u064a\u0644 \u0648\u0627\u0631\u062f \u0648\u0643\u0644 \u062a\u0646\u0627\u0632\u0644 \u0625\u0644\u0649 \u0627\u0644\u062c\u0646\u064a\u0647\u060c \u0645\u0639 \u0631\u0635\u064a\u062f \u062f\u0648\u0644\u0627\u0631 \u0645\u062a\u062d\u0631\u0643.", "Gold, USD/EGP, oil, and the major indices \u2014 the leverage/FX alert (site banner, email, push) watches gold and USD/EGP; a separate 1% move alert watches the rest.": "\u0627\u0644\u0630\u0647\u0628 \u0648\u0633\u0639\u0631 \u0627\u0644\u062f\u0648\u0644\u0627\u0631 \u0648\u0627\u0644\u0646\u0641\u0637 \u0648\u0627\u0644\u0645\u0624\u0634\u0631\u0627\u062a \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u2014 \u062a\u0646\u0628\u064a\u0647 \u0627\u0644\u0645\u062f\u064a\u0648\u0646\u064a\u0629/\u0627\u0644\u0639\u0645\u0644\u0629 (\u0634\u0631\u064a\u0637 \u0627\u0644\u0645\u0648\u0642\u0639 \u0648\u0627\u0644\u0628\u0631\u064a\u062f \u0648\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a) \u064a\u0631\u0627\u0642\u0628 \u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u062f\u0648\u0644\u0627\u0631\u061b \u0648\u062a\u0646\u0628\u064a\u0647 \u0645\u0646\u0641\u0635\u0644 \u0644\u062a\u062d\u0631\u0643 1% \u064a\u0631\u0627\u0642\u0628 \u0627\u0644\u0628\u0627\u0642\u064a.", "Headlines likely to move the numbers above \u2014 the Egyptian pound, EGX, gold, and major global decisions (the Fed, interest rates). Refreshed automatically a few times a day.": "\u0639\u0646\u0627\u0648\u064a\u0646 \u064a\u064f\u0631\u062c\u064e\u0651\u062d \u0623\u0646 \u062a\u062d\u0631\u0651\u0643 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0623\u0639\u0644\u0627\u0647 \u2014 \u0627\u0644\u062c\u0646\u064a\u0647 \u0627\u0644\u0645\u0635\u0631\u064a \u0648\u0627\u0644\u0628\u0648\u0631\u0635\u0629 \u0648\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0642\u0631\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0627\u0644\u0645\u064a\u0629 \u0627\u0644\u0643\u0628\u0631\u0649 (\u0627\u0644\u0641\u064a\u062f\u0631\u0627\u0644\u064a \u0648\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0641\u0627\u0626\u062f\u0629). \u062a\u062a\u062d\u062f\u0651\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0639\u062f\u0629 \u0645\u0631\u0627\u062a \u064a\u0648\u0645\u064a\u064b\u0627.", "Update the rate, gold price, and each fund's NAV. New holdings above appear here automatically. Editing an existing day? Use the pencil icon on its row in History and analysis below.": "\u062d\u062f\u0651\u062b \u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0648\u0633\u0639\u0631 \u0627\u0644\u0630\u0647\u0628 \u0648\u0635\u0627\u0641\u064a \u0642\u064a\u0645\u0629 \u0623\u0635\u0644 \u0643\u0644 \u0635\u0646\u062f\u0648\u0642. \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0623\u0639\u0644\u0627\u0647 \u062a\u0638\u0647\u0631 \u0647\u0646\u0627 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627. \u062a\u0639\u062f\u064a\u0644 \u064a\u0648\u0645 \u0633\u0627\u0628\u0642\u061f \u0627\u0633\u062a\u062e\u062f\u0645 \u0623\u064a\u0642\u0648\u0646\u0629 \u0627\u0644\u0642\u0644\u0645 \u0641\u064a \u0635\u0641\u0651\u0647 \u0636\u0645\u0646 \u0627\u0644\u0633\u062c\u0644 \u0648\u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0623\u062f\u0646\u0627\u0647.", "Only you see this page. Share the signup link with anyone you want to give view-only access to, then upgrade them to editor here if needed.": "\u0623\u0646\u062a \u0641\u0642\u0637 \u0645\u0646 \u064a\u0631\u0649 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629. \u0634\u0627\u0631\u0643 \u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u0639 \u0645\u0646 \u062a\u0631\u064a\u062f \u0645\u0646\u062d\u0647 \u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0641\u0642\u0637\u060c \u062b\u0645 \u0631\u0642\u0651\u0647 \u0625\u0644\u0649 \u0645\u062d\u0631\u0651\u0631 \u0645\u0646 \u0647\u0646\u0627 \u0639\u0646\u062f \u0627\u0644\u062d\u0627\u062c\u0629.", "Signup link": "\u0631\u0627\u0628\u0637 \u0627\u0644\u062a\u0633\u062c\u064a\u0644", "Type": "\u0627\u0644\u0646\u0648\u0639", "Label": "\u0627\u0644\u0627\u0633\u0645", "Currency": "\u0627\u0644\u0639\u0645\u0644\u0629", "Purchase date": "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0634\u0631\u0627\u0621", "Investment": "\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u0631", "Purchase NAV / price": "\u0633\u0639\u0631/\u0635\u0627\u0641\u064a \u0623\u0635\u0644 \u0627\u0644\u0634\u0631\u0627\u0621", "Grams": "\u0627\u0644\u062c\u0631\u0627\u0645\u0627\u062a", "NAV group": "\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u062a\u0633\u0639\u064a\u0631", "Current value": "\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629", "Amount": "\u0627\u0644\u0645\u0628\u0644\u063a", "Rate %": "\u0627\u0644\u0641\u0627\u0626\u062f\u0629 %", "Monthly installment": "\u0627\u0644\u0642\u0633\u0637 \u0627\u0644\u0634\u0647\u0631\u064a", "Unit": "\u0627\u0644\u0648\u062d\u062f\u0629", "Size": "\u0627\u0644\u0645\u0633\u0627\u062d\u0629", "Parking": "\u0627\u0644\u062c\u0631\u0627\u062c", "Total price": "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u064a", "Paid so far": "\u0627\u0644\u0645\u062f\u0641\u0648\u0639 \u062d\u062a\u0649 \u0627\u0644\u0622\u0646", "Remaining installments": "\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u0645\u062a\u0628\u0642\u064a\u0629", "Facility": "\u0627\u0644\u062a\u0633\u0647\u064a\u0644", "Amount financed": "\u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u0645\u0648\u064e\u0651\u0644", "Outstanding balance": "\u0627\u0644\u0631\u0635\u064a\u062f \u0627\u0644\u0645\u0633\u062a\u062d\u0642", "Opened": "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0641\u062a\u062d", "Matures": "\u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642", "Holding": "\u0627\u0644\u0623\u0635\u0644", "Invested": "\u0627\u0644\u0645\u0633\u062a\u062b\u0645\u064e\u0631", "Price change": "\u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0633\u0639\u0631", "Purchased": "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0634\u0631\u0627\u0621", "Certificate": "\u0627\u0644\u0634\u0647\u0627\u062f\u0629", "Monthly interest": "\u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0634\u0647\u0631\u064a\u0629", "Add holding": "\u0625\u0636\u0627\u0641\u0629 \u0623\u0635\u0644", "Add loan": "\u0625\u0636\u0627\u0641\u0629 \u0642\u0631\u0636", "Add property": "\u0625\u0636\u0627\u0641\u0629 \u0639\u0642\u0627\u0631", "Add conversion": "\u0625\u0636\u0627\u0641\u0629 \u062a\u062d\u0648\u064a\u0644", "Add": "\u0625\u0636\u0627\u0641\u0629", "Trim": "\u062a\u062e\u0641\u064a\u0636", "Delete": "\u062d\u0630\u0641", "Date": "\u0627\u0644\u062a\u0627\u0631\u064a\u062e", "Total": "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a", "Difference": "\u0627\u0644\u0641\u0631\u0642", "Target": "\u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641", "Current": "\u0627\u0644\u062d\u0627\u0644\u064a", "Rank": "\u0627\u0644\u062a\u0631\u062a\u064a\u0628", "Gain / loss": "\u0627\u0644\u0631\u0628\u062d / \u0627\u0644\u062e\u0633\u0627\u0631\u0629", "Gain vs cost": "\u0627\u0644\u0631\u0628\u062d \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", "Net gain / loss": "\u0635\u0627\u0641\u064a \u0627\u0644\u0631\u0628\u062d / \u0627\u0644\u062e\u0633\u0627\u0631\u0629", "Total gain / loss": "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0631\u0628\u062d / \u0627\u0644\u062e\u0633\u0627\u0631\u0629", "Category": "\u0627\u0644\u0641\u0626\u0629", "Note": "\u0645\u0644\u0627\u062d\u0638\u0629", "Total %": "\u0627\u0644\u0646\u0633\u0628\u0629 \u0645\u0646 \u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a", "Gold": "\u0627\u0644\u0630\u0647\u0628", "Gold, EGP/g": "\u0627\u0644\u0630\u0647\u0628\u060c \u062c\u0646\u064a\u0647/\u062c\u0631\u0627\u0645", "Gold, EGP/gram": "\u0627\u0644\u0630\u0647\u0628\u060c \u062c\u0646\u064a\u0647/\u062c\u0631\u0627\u0645", "USD/EGP": "\u062f\u0648\u0644\u0627\u0631/\u062c\u0646\u064a\u0647", "USD / EGP rate": "\u0633\u0639\u0631 \u0627\u0644\u062f\u0648\u0644\u0627\u0631/\u0627\u0644\u062c\u0646\u064a\u0647", "Funds and gold value (not net worth)": "\u0642\u064a\u0645\u0629 \u0627\u0644\u0635\u0646\u0627\u062f\u064a\u0642 \u0648\u0627\u0644\u0630\u0647\u0628 (\u0644\u064a\u0633\u062a \u0635\u0627\u0641\u064a \u0627\u0644\u062b\u0631\u0648\u0629)", "Computed from the installment schedule below \u2014 sum of everything marked paid. Not editable directly.": "\u0645\u062d\u0633\u0648\u0628 \u0645\u0646 \u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0623\u062f\u0646\u0627\u0647 \u2014 \u0645\u062c\u0645\u0648\u0639 \u0643\u0644 \u0645\u0627 \u062a\u0645 \u062a\u0639\u0644\u064a\u0645\u0647 \u0643\u0645\u062f\u0641\u0648\u0639. \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0639\u062f\u064a\u0644 \u0645\u0628\u0627\u0634\u0631\u0629.", "Total price minus what's marked paid \u2014 not editable directly.": "\u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0643\u0644\u064a \u0646\u0627\u0642\u0635 \u0645\u0627 \u062a\u0645 \u062a\u0639\u0644\u064a\u0645\u0647 \u0643\u0645\u062f\u0641\u0648\u0639 \u2014 \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u0639\u062f\u064a\u0644 \u0645\u0628\u0627\u0634\u0631\u0629.", "Changed from the pre-filled value \u2014 stays marked after saving": "\u062a\u063a\u064a\u0651\u0631 \u0639\u0646 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0645\u0639\u0628\u0623\u0629 \u0645\u0633\u0628\u0642\u064b\u0627 \u2014 \u064a\u0628\u0642\u0649 \u0645\u0639\u0644\u064e\u0651\u0645\u064b\u0627 \u0628\u0639\u062f \u0627\u0644\u062d\u0641\u0638", "Show": "\u0625\u0638\u0647\u0627\u0631", "Hide": "\u0625\u062e\u0641\u0627\u0621", "holdings": "\u0627\u0644\u0623\u0635\u0648\u0644", "certificates": "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a", "metal funds": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u0630\u0647\u0628", "physical gold": "\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0641\u0639\u0644\u064a", "loans": "\u0627\u0644\u0642\u0631\u0648\u0636", "facilities": "\u0627\u0644\u062a\u0633\u0647\u064a\u0644\u0627\u062a", "conversion history": "\u0633\u062c\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644", "performance ranking": "\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0623\u062f\u0627\u0621", "daily history": "\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u064a\u0648\u0645\u064a", "installment schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637", "maintenance schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u0635\u064a\u0627\u0646\u0629", "Certificate income": "\u062f\u062e\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a", "Loan installments": "\u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u0642\u0631\u0648\u0636", "Property installments & maintenance": "\u0623\u0642\u0633\u0627\u0637 \u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a \u0648\u0627\u0644\u0635\u064a\u0627\u0646\u0629", "Net monthly position": "\u0635\u0627\u0641\u064a \u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0634\u0647\u0631\u064a", "Certificate & deposit income": "\u062f\u062e\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u0648\u062f\u0627\u0626\u0639", "per month": "\u0634\u0647\u0631\u064a\u064b\u0627", "avg/month, next 12mo": "\u0645\u062a\u0648\u0633\u0637/\u0634\u0647\u0631\u060c \u0627\u0644\u064012 \u0634\u0647\u0631\u064b\u0627 \u0627\u0644\u0642\u0627\u062f\u0645\u0629", "AI-suggested moves": "\u062a\u062d\u0631\u0643\u0627\u062a \u0645\u0642\u062a\u0631\u062d\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a", "Set manual targets instead": "\u062a\u062d\u062f\u064a\u062f \u0623\u0647\u062f\u0627\u0641 \u064a\u062f\u0648\u064a\u0629 \u0628\u062f\u0644\u064b\u0627 \u0645\u0646 \u0630\u0644\u0643", "Specific holdings to add to or trim, based on today's numbers \u2014 not saved anywhere, just a suggestion.": "\u0623\u0635\u0648\u0644 \u0645\u062d\u062f\u062f\u0629 \u0644\u0644\u0632\u064a\u0627\u062f\u0629 \u0623\u0648 \u0627\u0644\u062a\u062e\u0641\u064a\u0636 \u0628\u0646\u0627\u0621\u064b \u0639\u0644\u0649 \u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u064a\u0648\u0645 \u2014 \u0644\u0627 \u062a\u064f\u062d\u0641\u0638 \u0641\u064a \u0623\u064a \u0645\u0643\u0627\u0646\u060c \u0645\u062c\u0631\u062f \u0627\u0642\u062a\u0631\u0627\u062d.", "Set your target allocation": "\u062d\u062f\u0651\u062f \u062a\u0648\u0632\u064a\u0639\u0643 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641", "Set targets": "\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0623\u0647\u062f\u0627\u0641", "Edit targets": "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0623\u0647\u062f\u0627\u0641", "Save targets": "\u062d\u0641\u0638 \u0627\u0644\u0623\u0647\u062f\u0627\u0641", "Cancel": "\u0625\u0644\u063a\u0627\u0621", "Apply": "\u062a\u0637\u0628\u064a\u0642", "Saving\u2026": "\u062c\u0627\u0631\u064d \u0627\u0644\u062d\u0641\u0638\u2026", "Suggested move": "\u0627\u0644\u062a\u062d\u0631\u0643 \u0627\u0644\u0645\u0642\u062a\u0631\u062d", "No notable observations right now \u2014 nothing here looks out of the ordinary.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0645\u0644\u0627\u062d\u0638\u0627\u062a \u0645\u0647\u0645\u0629 \u062d\u0627\u0644\u064a\u064b\u0627 \u2014 \u0644\u0627 \u0634\u064a\u0621 \u0647\u0646\u0627 \u064a\u0628\u062f\u0648 \u062e\u0627\u0631\u062c \u0627\u0644\u0645\u0623\u0644\u0648\u0641.", "No target allocation set \u2014 set one to see how far current holdings are from where you want them, or wait for AI-suggested moves (generates daily).": "\u0644\u0645 \u064a\u064f\u062d\u062f\u064e\u0651\u062f \u062a\u0648\u0632\u064a\u0639 \u0645\u0633\u062a\u0647\u062f\u0641 \u2014 \u062d\u062f\u0651\u062f \u0648\u0627\u062d\u062f\u064b\u0627 \u0644\u062a\u0631\u0649 \u0645\u062f\u0649 \u0628\u0639\u062f \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062d\u0627\u0644\u064a\u0629 \u0639\u0646 \u0645\u0627 \u062a\u0631\u064a\u062f\u060c \u0623\u0648 \u0627\u0646\u062a\u0638\u0631 \u0627\u0644\u062a\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0645\u0642\u062a\u0631\u062d\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a (\u062a\u062a\u0648\u0644\u062f \u064a\u0648\u0645\u064a\u064b\u0627).", "Current vs. target allocation": "\u0627\u0644\u062a\u0648\u0632\u064a\u0639 \u0627\u0644\u062d\u0627\u0644\u064a \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0633\u062a\u0647\u062f\u0641", "Most improved:": "\u0627\u0644\u0623\u0643\u062b\u0631 \u062a\u062d\u0633\u0646\u064b\u0627:", "Most declined:": "\u0627\u0644\u0623\u0643\u062b\u0631 \u062a\u0631\u0627\u062c\u0639\u064b\u0627:", "Strongest:": "\u0627\u0644\u0623\u0642\u0648\u0649:", "Weakest:": "\u0627\u0644\u0623\u0636\u0639\u0641:", "Performance ranking, strongest to weakest": "\u062a\u0631\u062a\u064a\u0628 \u0627\u0644\u0623\u062f\u0627\u0621\u060c \u0645\u0646 \u0627\u0644\u0623\u0642\u0648\u0649 \u0625\u0644\u0649 \u0627\u0644\u0623\u0636\u0639\u0641", "Performance over time": "\u0627\u0644\u0623\u062f\u0627\u0621 \u0639\u0628\u0631 \u0627\u0644\u0648\u0642\u062a", "Your whole portfolio, in plain terms": "\u0645\u062d\u0641\u0638\u062a\u0643 \u0643\u0627\u0645\u0644\u0629\u060c \u0628\u0639\u0628\u0627\u0631\u0627\u062a \u0628\u0633\u064a\u0637\u0629", "Your variable investments, in plain terms": "\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u0627\u062a\u0643 \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0629\u060c \u0628\u0639\u0628\u0627\u0631\u0627\u062a \u0628\u0633\u064a\u0637\u0629", "We put in": "\u062f\u0641\u0639\u0646\u0627", "You've put in": "\u062f\u0641\u0639\u062a\u064e", "put in": "\u0645\u062f\u0641\u0648\u0639", "Worth now": "\u062a\u0633\u0627\u0648\u064a \u0627\u0644\u0622\u0646", "now": "\u0627\u0644\u0622\u0646", "changed": "\u062a\u063a\u064a\u0651\u0631\u062a", "Change vs cost": "\u0627\u0644\u062a\u063a\u064a\u0651\u0631 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", "Change vs cost: EGP funds and gold": "\u0627\u0644\u062a\u063a\u064a\u0651\u0631 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629: \u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062c\u0646\u064a\u0647 \u0648\u0627\u0644\u0630\u0647\u0628", "Change since records began": "\u0627\u0644\u062a\u063a\u064a\u0651\u0631 \u0645\u0646\u0630 \u0628\u062f\u0621 \u0627\u0644\u062a\u0633\u062c\u064a\u0644", "Last 12 months: not available": "\u0622\u062e\u0631 12 \u0634\u0647\u0631\u064b\u0627: \u063a\u064a\u0631 \u0645\u062a\u0627\u062d", "Whole portfolio: value vs cost": "\u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0643\u0627\u0645\u0644\u0629: \u0627\u0644\u0642\u064a\u0645\u0629 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", "Value minus cost": "\u0627\u0644\u0642\u064a\u0645\u0629 \u0646\u0627\u0642\u0635 \u0627\u0644\u062a\u0643\u0644\u0641\u0629", "Whole portfolio, today's value vs amount put in. Certificates at cost, income and FX at purchase not included. Not a true return.": "\u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0643\u0627\u0645\u0644\u0629\u060c \u0642\u064a\u0645\u0629 \u0627\u0644\u064a\u0648\u0645 \u0645\u0642\u0627\u0628\u0644 \u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u062f\u0641\u0648\u0639. \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0628\u0627\u0644\u062a\u0643\u0644\u0641\u0629\u060c \u0648\u0627\u0644\u062f\u062e\u0644 \u0648\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0648\u0642\u062a \u0627\u0644\u0634\u0631\u0627\u0621 \u063a\u064a\u0631 \u0645\u0634\u0645\u0648\u0644\u064a\u0646. \u0644\u064a\u0633 \u0639\u0627\u0626\u062f\u064b\u0627 \u062d\u0642\u064a\u0642\u064a\u064b\u0627.", "These are value changes from the recorded prices, not verified returns: income received, FX at purchase dates and sales or withdrawals are not recorded, and additions are subtracted only where a purchase price is on file.": "\u0647\u0630\u0647 \u062a\u063a\u064a\u0631\u0627\u062a \u0642\u064a\u0645\u0629 \u0645\u0646 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0645\u0633\u062c\u0651\u0644\u0629 \u0648\u0644\u064a\u0633\u062a \u0639\u0648\u0627\u0626\u062f \u0645\u0624\u0643\u062f\u0629: \u0627\u0644\u062f\u062e\u0644 \u0627\u0644\u0645\u0633\u062a\u0644\u0645 \u0648\u0633\u0639\u0631 \u0627\u0644\u0635\u0631\u0641 \u0641\u064a \u062a\u0648\u0627\u0631\u064a\u062e \u0627\u0644\u0634\u0631\u0627\u0621 \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0623\u0648 \u0627\u0644\u0633\u062d\u0648\u0628\u0627\u062a \u063a\u064a\u0631 \u0645\u0633\u062c\u0651\u0644\u0629\u060c \u0648\u0627\u0644\u0625\u0636\u0627\u0641\u0627\u062a \u062a\u064f\u0637\u0631\u062d \u0641\u0642\u0637 \u062d\u064a\u062b \u064a\u0648\u062c\u062f \u0633\u0639\u0631 \u0634\u0631\u0627\u0621 \u0645\u0633\u062c\u0651\u0644.", "Funds, gold, and Beltone \u2014 the holdings whose price moves day to day. Certificates (fixed principal) aren't included here.": "\u0627\u0644\u0635\u0646\u0627\u062f\u064a\u0642 \u0648\u0627\u0644\u0630\u0647\u0628 \u0648Beltone \u2014 \u0627\u0644\u0623\u0635\u0648\u0644 \u0627\u0644\u062a\u064a \u064a\u062a\u062d\u0631\u0643 \u0633\u0639\u0631\u0647\u0627 \u064a\u0648\u0645\u064b\u0627 \u0628\u064a\u0648\u0645. \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a (\u0623\u0635\u0644 \u062b\u0627\u0628\u062a) \u063a\u064a\u0631 \u0645\u0634\u0645\u0648\u0644\u0629 \u0647\u0646\u0627.", "Certificates, EGP funds, gold and brokerage, at cost.": "\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062c\u0646\u064a\u0647 \u0648\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0633\u0645\u0633\u0631\u0629\u060c \u0628\u0627\u0644\u062a\u0643\u0644\u0641\u0629.", "Beltone, the CIB certificate, and the NBE term deposit.": "Beltone \u0648\u0634\u0647\u0627\u062f\u0629 CIB \u0648\u0627\u0644\u0648\u062f\u064a\u0639\u0629 \u0644\u0623\u062c\u0644 \u0645\u0646 NBE.", "For reference \u2014 these roll up into the single \u201cEGP certificates & CDs\u201d holding above. Monthly interest reconciles with the \u201cEGP \u2014 certificate & fund income\u201d line in section 08.": "\u0644\u0644\u0645\u0631\u062c\u0639 \u2014 \u0647\u0630\u0647 \u062a\u062a\u062c\u0645\u0639 \u0641\u064a \u0628\u0646\u062f \u00ab\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0648\u062f\u0627\u0626\u0639 \u0627\u0644\u062c\u0646\u064a\u0647\u00bb \u0623\u0639\u0644\u0627\u0647. \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0634\u0647\u0631\u064a\u0629 \u062a\u062a\u0648\u0627\u0641\u0642 \u0645\u0639 \u0633\u0637\u0631 \u00ab\u0627\u0644\u062c\u0646\u064a\u0647 \u2014 \u062f\u062e\u0644 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0627\u0644\u0635\u0646\u0627\u062f\u064a\u0642\u00bb \u0641\u064a \u0627\u0644\u0642\u0633\u0645 08.", "For reference \u2014 these roll up into the single \u201cSecured EGP loans\u201d row above.": "\u0644\u0644\u0645\u0631\u062c\u0639 \u2014 \u0647\u0630\u0647 \u062a\u062a\u062c\u0645\u0639 \u0641\u064a \u0635\u0641 \u00ab\u0642\u0631\u0648\u0636 \u0627\u0644\u062c\u0646\u064a\u0647 \u0627\u0644\u0645\u0636\u0645\u0648\u0646\u0629\u00bb \u0623\u0639\u0644\u0627\u0647.", "Overall standing, since purchase": "\u0627\u0644\u0648\u0636\u0639 \u0627\u0644\u0639\u0627\u0645\u060c \u0645\u0646\u0630 \u0627\u0644\u0634\u0631\u0627\u0621", "Price change since purchase (excl. income)": "\u062a\u063a\u064a\u0651\u0631 \u0627\u0644\u0633\u0639\u0631 \u0645\u0646\u0630 \u0627\u0644\u0634\u0631\u0627\u0621 (\u0628\u0627\u0633\u062a\u062b\u0646\u0627\u0621 \u0627\u0644\u062f\u062e\u0644)", "Gold overall \u2014 invested": "\u0627\u0644\u0630\u0647\u0628 \u0625\u062c\u0645\u0627\u0644\u064b\u0627 \u2014 \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u064e\u0631", "Metal funds (paper gold)": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u0645\u0639\u0627\u062f\u0646 (\u0630\u0647\u0628 \u0648\u0631\u0642\u064a)", "Physical gold": "\u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0641\u0639\u0644\u064a", "Office units": "\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629", "Office units \u2014 installment & maintenance schedule": "\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u2014 \u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0648\u0627\u0644\u0635\u064a\u0627\u0646\u0629", "Installment & maintenance schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0648\u0627\u0644\u0635\u064a\u0627\u0646\u0629", "Installment schedule": "\u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637", "Offices, a villa, an apartment, and a residential unit, all still being paid off in installments \u2014 not fully owned yet. The amount paid so far (not the full price) is counted as an asset, and updates automatically as installments get marked paid below.": "\u0645\u0643\u0627\u062a\u0628 \u0648\u0641\u064a\u0644\u0627 \u0648\u0634\u0642\u0629 \u0648\u0648\u062d\u062f\u0629 \u0633\u0643\u0646\u064a\u0629\u060c \u062c\u0645\u064a\u0639\u0647\u0627 \u0645\u0627 \u0632\u0627\u0644\u062a \u062a\u064f\u0633\u062f\u064e\u0651\u062f \u0628\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u2014 \u0644\u064a\u0633\u062a \u0645\u0645\u0644\u0648\u0643\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0628\u0639\u062f. \u0627\u0644\u0645\u0628\u0644\u063a \u0627\u0644\u0645\u062f\u0641\u0648\u0639 \u062d\u062a\u0649 \u0627\u0644\u0622\u0646 (\u0648\u0644\u064a\u0633 \u0627\u0644\u0633\u0639\u0631 \u0627\u0644\u0643\u0627\u0645\u0644) \u064a\u064f\u062d\u062a\u0633\u0628 \u0623\u0635\u0644\u064b\u0627\u060c \u0648\u064a\u062a\u062d\u062f\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0645\u0639 \u062a\u0639\u0644\u064a\u0645 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0643\u0645\u062f\u0641\u0648\u0639\u0629 \u0623\u062f\u0646\u0627\u0647.", "Works for any property below \u2014 detects the due date and which units it covers.": "\u064a\u0639\u0645\u0644 \u0645\u0639 \u0623\u064a \u0639\u0642\u0627\u0631 \u0623\u062f\u0646\u0627\u0647 \u2014 \u064a\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642 \u0648\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u063a\u0637\u064a\u0647\u0627.", "Upload a payment receipt": "\u0631\u0641\u0639 \u0625\u064a\u0635\u0627\u0644 \u062f\u0641\u0639", "Upload payment receipt": "\u0631\u0641\u0639 \u0625\u064a\u0635\u0627\u0644 \u062f\u0641\u0639", "A photo of the bank transfer receipt \u2014 reads the due date and which units it covers, then marks them paid after you confirm.": "\u0635\u0648\u0631\u0629 \u0625\u064a\u0635\u0627\u0644 \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0628\u0646\u0643\u064a \u2014 \u062a\u0642\u0631\u0623 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642 \u0648\u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u063a\u0637\u064a\u0647\u0627\u060c \u062b\u0645 \u062a\u0639\u0644\u0651\u0645\u0647\u0627 \u0643\u0645\u062f\u0641\u0648\u0639\u0629 \u0628\u0639\u062f \u062a\u0623\u0643\u064a\u062f\u0643.", "(already marked paid)": "(\u0645\u0639\u0644\u064e\u0651\u0645 \u0643\u0645\u062f\u0641\u0648\u0639 \u0645\u0633\u0628\u0642\u064b\u0627)", "Installments in this alert": "\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062a\u0646\u0628\u064a\u0647", "Total in this alert": "\u0625\u062c\u0645\u0627\u0644\u064a \u0647\u0630\u0627 \u0627\u0644\u062a\u0646\u0628\u064a\u0647", "View this installment in schedule": "\u0639\u0631\u0636 \u0647\u0630\u0627 \u0627\u0644\u0642\u0633\u0637 \u0641\u064a \u0627\u0644\u062c\u062f\u0648\u0644", "Maturity Date": "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642", "Interest Rate": "\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0626\u062f\u0629", "Per-unit breakdown": "\u0627\u0644\u062a\u0641\u0635\u064a\u0644 \u062d\u0633\u0628 \u0627\u0644\u0648\u062d\u062f\u0629", "Remaining": "\u0627\u0644\u0645\u062a\u0628\u0642\u064a", "Advance paid": "\u0627\u0644\u062f\u0641\u0639\u0629 \u0627\u0644\u0645\u0642\u062f\u0645\u0629", "Amount, USD": "\u0627\u0644\u0645\u0628\u0644\u063a\u060c \u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631", "Total invested in EGP": "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u064e\u0631 \u0628\u0627\u0644\u062c\u0646\u064a\u0647", "Total invested in USD": "\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0633\u062a\u062b\u0645\u064e\u0631 \u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631", "Surrendered to EGP, EGP": "\u0627\u0644\u0645\u062a\u0646\u0627\u0632\u0644 \u0639\u0646\u0647 \u0644\u0644\u062c\u0646\u064a\u0647\u060c \u0628\u0627\u0644\u062c\u0646\u064a\u0647", "Surrendered to EGP, USD": "\u0627\u0644\u0645\u062a\u0646\u0627\u0632\u0644 \u0639\u0646\u0647 \u0644\u0644\u062c\u0646\u064a\u0647\u060c \u0628\u0627\u0644\u062f\u0648\u0644\u0627\u0631", "Running USD balance": "\u0631\u0635\u064a\u062f \u0627\u0644\u062f\u0648\u0644\u0627\u0631 \u0627\u0644\u0645\u062a\u062d\u0631\u0643", "Received from outside": "\u0648\u0627\u0631\u062f \u0645\u0646 \u0627\u0644\u062e\u0627\u0631\u062c", "Transfers in, excludes opening balance": "\u0627\u0644\u062a\u062d\u0648\u064a\u0644\u0627\u062a \u0627\u0644\u0648\u0627\u0631\u062f\u0629\u060c \u0628\u0627\u0633\u062a\u062b\u0646\u0627\u0621 \u0627\u0644\u0631\u0635\u064a\u062f \u0627\u0644\u0627\u0641\u062a\u062a\u0627\u062d\u064a", "Chart range": "\u0646\u0637\u0627\u0642 \u0627\u0644\u0631\u0633\u0645", "Insufficient data": "\u0628\u064a\u0627\u0646\u0627\u062a \u063a\u064a\u0631 \u0643\u0627\u0641\u064a\u0629", "Add a second day to compare trends.": "\u0623\u0636\u0641 \u064a\u0648\u0645\u064b\u0627 \u062b\u0627\u0646\u064a\u064b\u0627 \u0644\u0645\u0642\u0627\u0631\u0646\u0629 \u0627\u0644\u0627\u062a\u062c\u0627\u0647\u0627\u062a.", "Add a second day to see a trend line.": "\u0623\u0636\u0641 \u064a\u0648\u0645\u064b\u0627 \u062b\u0627\u0646\u064a\u064b\u0627 \u0644\u0631\u0624\u064a\u0629 \u062e\u0637 \u0627\u0644\u0627\u062a\u062c\u0627\u0647.", "No headlines yet \u2014 this refreshes automatically a few times a day.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0639\u0646\u0627\u0648\u064a\u0646 \u0628\u0639\u062f \u2014 \u062a\u062a\u062d\u062f\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627 \u0639\u062f\u0629 \u0645\u0631\u0627\u062a \u064a\u0648\u0645\u064a\u064b\u0627.", "Overwrites the entry for this date if one already exists.": "\u064a\u0633\u062a\u0628\u062f\u0644 \u0627\u0644\u0642\u064a\u062f \u0644\u0647\u0630\u0627 \u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0625\u0646 \u0648\u064f\u062c\u062f.", "Paste or upload to fill fund prices": "\u0627\u0644\u0635\u0642 \u0623\u0648 \u0627\u0631\u0641\u0639 \u0644\u062a\u0639\u0628\u0626\u0629 \u0623\u0633\u0639\u0627\u0631 \u0627\u0644\u0635\u0646\u0627\u062f\u064a\u0642", "Copy the price screen from each fund's app (NBE, AZ, Beltone, CIB\u2026) and paste it below, or upload a screenshot directly \u2014 one at a time or all together. This is a best-effort match, always review the detected numbers before filling the form.": "\u0627\u0646\u0633\u062e \u0634\u0627\u0634\u0629 \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0645\u0646 \u062a\u0637\u0628\u064a\u0642 \u0643\u0644 \u0635\u0646\u062f\u0648\u0642 (NBE\u060c AZ\u060c Beltone\u060c CIB\u2026) \u0648\u0627\u0644\u0635\u0642\u0647\u0627 \u0623\u062f\u0646\u0627\u0647\u060c \u0623\u0648 \u0627\u0631\u0641\u0639 \u0644\u0642\u0637\u0629 \u0634\u0627\u0634\u0629 \u0645\u0628\u0627\u0634\u0631\u0629 \u2014 \u0648\u0627\u062d\u062f\u0629 \u062a\u0644\u0648 \u0627\u0644\u0623\u062e\u0631\u0649 \u0623\u0648 \u0643\u0644\u0647\u0627 \u0645\u0639\u064b\u0627. \u0627\u0644\u062a\u0637\u0627\u0628\u0642 \u0628\u0623\u0642\u0635\u0649 \u062c\u0647\u062f\u060c \u0641\u0631\u0627\u062c\u0639 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0627\u0644\u0645\u0643\u062a\u0634\u0641\u0629 \u062f\u0627\u0626\u0645\u064b\u0627 \u0642\u0628\u0644 \u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062c.", "Paste screenshot text here\u2026": "\u0627\u0644\u0635\u0642 \u0646\u0635 \u0644\u0642\u0637\u0629 \u0627\u0644\u0634\u0627\u0634\u0629 \u0647\u0646\u0627\u2026", "Detect prices": "\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0633\u0639\u0627\u0631", "Fill form with checked values": "\u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0628\u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0645\u062d\u062f\u062f\u0629", "No known funds recognized in that text.": "\u0644\u0645 \u064a\u064f\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0623\u064a \u0635\u0646\u0627\u062f\u064a\u0642 \u0645\u0639\u0631\u0648\u0641\u0629 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0646\u0635.", "Filter holdings\u2026": "\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0623\u0635\u0648\u0644\u2026", "Filter facilities\u2026": "\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u062a\u0633\u0647\u064a\u0644\u0627\u062a\u2026", "Filter certificates\u2026": "\u062a\u0635\u0641\u064a\u0629 \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a\u2026", "No holdings match that filter.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u0635\u0648\u0644 \u062a\u0637\u0627\u0628\u0642 \u0647\u0630\u0647 \u0627\u0644\u062a\u0635\u0641\u064a\u0629.", "No facilities match that filter.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u062a\u0633\u0647\u064a\u0644\u0627\u062a \u062a\u0637\u0627\u0628\u0642 \u0647\u0630\u0647 \u0627\u0644\u062a\u0635\u0641\u064a\u0629.", "No certificates match that filter.": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0634\u0647\u0627\u062f\u0627\u062a \u062a\u0637\u0627\u0628\u0642 \u0647\u0630\u0647 \u0627\u0644\u062a\u0635\u0641\u064a\u0629.", "Upload loan statement": "\u0631\u0641\u0639 \u0643\u0634\u0641 \u0642\u0631\u0636", "Upload certificate statement": "\u0631\u0641\u0639 \u0643\u0634\u0641 \u0634\u0647\u0627\u062f\u0627\u062a", "Upload office deal sheet": "\u0631\u0641\u0639 \u062c\u062f\u0648\u0644 \u0635\u0641\u0642\u0629 \u0627\u0644\u0645\u0643\u0627\u062a\u0628", "Upload NBE distribution notice": "\u0631\u0641\u0639 \u0625\u0634\u0639\u0627\u0631 \u062a\u0648\u0632\u064a\u0639\u0627\u062a NBE", "NBE fund distributions": "\u062a\u0648\u0632\u064a\u0639\u0627\u062a \u0635\u0646\u0627\u062f\u064a\u0642 NBE", "Payouts NBE deposits into the account for Fund 1/2/5 \u2014 logged here as a single running total, counted as a cash holding.": "\u0627\u0644\u062a\u0648\u0632\u064a\u0639\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0648\u062f\u0639\u0647\u0627 NBE \u0641\u064a \u0627\u0644\u062d\u0633\u0627\u0628 \u0644\u0644\u0635\u0646\u0627\u062f\u064a\u0642 1/2/5 \u2014 \u062a\u064f\u0633\u062c\u064e\u0651\u0644 \u0647\u0646\u0627 \u0643\u0625\u062c\u0645\u0627\u0644\u064a \u0645\u062a\u062d\u0631\u0643 \u0648\u0627\u062d\u062f\u060c \u0648\u062a\u064f\u062d\u062a\u0633\u0628 \u0623\u0635\u0644\u064b\u0627 \u0646\u0642\u062f\u064a\u064b\u0627.", "An .xlsx export with Account Number, Outstanding Balance, Installment Amount columns \u2014 matches each row to a facility by the last 4 digits of its account number and shows what changed before saving anything.": "\u0645\u0644\u0641 .xlsx \u0628\u0623\u0639\u0645\u062f\u0629 \u0631\u0642\u0645 \u0627\u0644\u062d\u0633\u0627\u0628 \u0648\u0627\u0644\u0631\u0635\u064a\u062f \u0627\u0644\u0645\u0633\u062a\u062d\u0642 \u0648\u0642\u064a\u0645\u0629 \u0627\u0644\u0642\u0633\u0637 \u2014 \u064a\u0637\u0627\u0628\u0642 \u0643\u0644 \u0635\u0641 \u0645\u0639 \u062a\u0633\u0647\u064a\u0644 \u0639\u0628\u0631 \u0622\u062e\u0631 4 \u0623\u0631\u0642\u0627\u0645 \u0645\u0646 \u0631\u0642\u0645 \u062d\u0633\u0627\u0628\u0647 \u0648\u064a\u0639\u0631\u0636 \u0645\u0627 \u062a\u063a\u064a\u0651\u0631 \u0642\u0628\u0644 \u062d\u0641\u0638 \u0623\u064a \u0634\u064a\u0621.", "An .xlsx export with Amount, Open Date, Interest Rate, Maturity Date columns \u2014 matches each row to a certificate by amount and open date (certificates have no unique account number, unlike loans), and only updates rate or maturity date. New or closed certificates are flagged, never added or removed automatically.": "\u0645\u0644\u0641 .xlsx \u0628\u0623\u0639\u0645\u062f\u0629 \u0627\u0644\u0645\u0628\u0644\u063a \u0648\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0641\u062a\u062d \u0648\u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0648\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642 \u2014 \u064a\u0637\u0627\u0628\u0642 \u0643\u0644 \u0635\u0641 \u0645\u0639 \u0634\u0647\u0627\u062f\u0629 \u0639\u0628\u0631 \u0627\u0644\u0645\u0628\u0644\u063a \u0648\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0641\u062a\u062d (\u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0644\u064a\u0633 \u0644\u0647\u0627 \u0631\u0642\u0645 \u062d\u0633\u0627\u0628 \u0641\u0631\u064a\u062f \u0628\u062e\u0644\u0627\u0641 \u0627\u0644\u0642\u0631\u0648\u0636)\u060c \u0648\u064a\u062d\u062f\u0651\u062b \u0633\u0639\u0631 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0623\u0648 \u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642 \u0641\u0642\u0637. \u0627\u0644\u0634\u0647\u0627\u062f\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629 \u0623\u0648 \u0627\u0644\u0645\u063a\u0644\u0642\u0629 \u062a\u064f\u0639\u0644\u064e\u0651\u0645 \u0641\u0642\u0637\u060c \u0648\u0644\u0627 \u062a\u064f\u0636\u0627\u0641 \u0623\u0648 \u062a\u064f\u062d\u0630\u0641 \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627.", "The .xlsx with the office units table and the installment schedule (both sheets read from one file) \u2014 matches units by office number and installments by due date, and shows what changed before saving anything.": "\u0645\u0644\u0641 .xlsx \u0627\u0644\u0630\u064a \u0641\u064a\u0647 \u062c\u062f\u0648\u0644 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0627\u0644\u0645\u0643\u062a\u0628\u064a\u0629 \u0648\u062c\u062f\u0648\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637 (\u064a\u064f\u0642\u0631\u0623 \u0627\u0644\u062c\u062f\u0648\u0644\u0627\u0646 \u0645\u0646 \u0645\u0644\u0641 \u0648\u0627\u062d\u062f) \u2014 \u064a\u0637\u0627\u0628\u0642 \u0627\u0644\u0648\u062d\u062f\u0627\u062a \u0628\u0631\u0642\u0645 \u0627\u0644\u0645\u0643\u062a\u0628 \u0648\u0627\u0644\u0623\u0642\u0633\u0627\u0637 \u0628\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642\u060c \u0648\u064a\u0639\u0631\u0636 \u0645\u0627 \u062a\u063a\u064a\u0651\u0631 \u0642\u0628\u0644 \u062d\u0641\u0638 \u0623\u064a \u0634\u064a\u0621.", "No differences found \u2014 every matched certificate already matches this file.": "\u0644\u0645 \u062a\u064f\u0648\u062c\u062f \u0641\u0631\u0648\u0642 \u2014 \u0643\u0644 \u0634\u0647\u0627\u062f\u0629 \u0645\u062a\u0637\u0627\u0628\u0642\u0629 \u062a\u0637\u0627\u0628\u0642 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0645\u0633\u0628\u0642\u064b\u0627.", "No differences found \u2014 every matched facility already matches this file.": "\u0644\u0645 \u062a\u064f\u0648\u062c\u062f \u0641\u0631\u0648\u0642 \u2014 \u0643\u0644 \u062a\u0633\u0647\u064a\u0644 \u0645\u062a\u0637\u0627\u0628\u0642 \u064a\u0637\u0627\u0628\u0642 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0645\u0633\u0628\u0642\u064b\u0627.", "No differences found \u2014 everything matched already matches this file.": "\u0644\u0645 \u062a\u064f\u0648\u062c\u062f \u0641\u0631\u0648\u0642 \u2014 \u0643\u0644 \u0645\u0627 \u062a\u0645\u062a \u0645\u0637\u0627\u0628\u0642\u062a\u0647 \u064a\u0637\u0627\u0628\u0642 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641 \u0645\u0633\u0628\u0642\u064b\u0627.", "Could not read that file.": "\u062a\u0639\u0630\u0651\u0631\u062a \u0642\u0631\u0627\u0621\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0644\u0641.", "Choose file": "\u0627\u062e\u062a\u064a\u0627\u0631 \u0645\u0644\u0641", "Saved to history": "\u062d\u064f\u0641\u0638 \u0641\u064a \u0627\u0644\u0633\u062c\u0644", "Tracked for": "\u0645\u064f\u062a\u062a\u0628\u064e\u0651\u0639 \u0645\u0646\u0630", "Sign in to view and update the portfolio.": "\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0644\u0639\u0631\u0636 \u0627\u0644\u0645\u062d\u0641\u0638\u0629 \u0648\u062a\u062d\u062f\u064a\u062b\u0647\u0627.", "Username": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645", "Password": "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "Confirm password": "\u062a\u0623\u0643\u064a\u062f \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "Signing in\u2026": "\u062c\u0627\u0631\u064d \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644\u2026", "Sign in": "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", "Don't have an account? Sign up": "\u0644\u064a\u0633 \u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628\u061f \u0623\u0646\u0634\u0626 \u062d\u0633\u0627\u0628\u064b\u0627", "Create an account": "\u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628", "Creating\u2026": "\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0646\u0634\u0627\u0621\u2026", "Create account": "\u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628", "Your request needs the owner's approval before you can see anything.": "\u0637\u0644\u0628\u0643 \u064a\u062d\u062a\u0627\u062c \u0645\u0648\u0627\u0641\u0642\u0629 \u0627\u0644\u0645\u0627\u0644\u0643 \u0642\u0628\u0644 \u0623\u0646 \u062a\u062a\u0645\u0643\u0646 \u0645\u0646 \u0631\u0624\u064a\u0629 \u0623\u064a \u0634\u064a\u0621.", "Passwords don't match.": "\u0643\u0644\u0645\u062a\u0627 \u0627\u0644\u0645\u0631\u0648\u0631 \u063a\u064a\u0631 \u0645\u062a\u0637\u0627\u0628\u0642\u062a\u064a\u0646.", "Already have an account? Sign in": "\u0644\u062f\u064a\u0643 \u062d\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061f \u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644", "Request submitted": "\u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628", "Your account has been created, but you won't see anything until the owner approves your request.": "\u062a\u0645 \u0625\u0646\u0634\u0627\u0621 \u062d\u0633\u0627\u0628\u0643\u060c \u0644\u0643\u0646\u0643 \u0644\u0646 \u062a\u0631\u0649 \u0634\u064a\u0626\u064b\u0627 \u062d\u062a\u0649 \u064a\u0648\u0627\u0641\u0642 \u0627\u0644\u0645\u0627\u0644\u0643 \u0639\u0644\u0649 \u0637\u0644\u0628\u0643.", "Access not granted": "\u0644\u0645 \u064a\u064f\u0645\u0646\u062d \u0627\u0644\u0648\u0635\u0648\u0644", "Waiting for approval": "\u0641\u064a \u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629", "The owner hasn't approved this account. Contact them if you think this is a mistake.": "\u0644\u0645 \u064a\u0648\u0627\u0641\u0642 \u0627\u0644\u0645\u0627\u0644\u0643 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062d\u0633\u0627\u0628. \u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0647 \u0625\u0646 \u0643\u0646\u062a \u062a\u0639\u062a\u0642\u062f \u0623\u0646 \u0647\u0630\u0627 \u062e\u0637\u0623.", "Your request is with the owner. You'll get access as soon as they approve it \u2014 no need to sign up again.": "\u0637\u0644\u0628\u0643 \u0644\u062f\u0649 \u0627\u0644\u0645\u0627\u0644\u0643. \u0633\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0641\u0648\u0631 \u0645\u0648\u0627\u0641\u0642\u062a\u0647 \u2014 \u0644\u0627 \u062d\u0627\u062c\u0629 \u0644\u0644\u062a\u0633\u062c\u064a\u0644 \u0645\u062c\u062f\u062f\u064b\u0627.", "Locked": "\u0645\u0642\u0641\u0644", "Unlock with Face ID / Touch ID to continue.": "\u0627\u0641\u062a\u062d \u0627\u0644\u0642\u0641\u0644 \u0628\u0640 Face ID / Touch ID \u0644\u0644\u0645\u062a\u0627\u0628\u0639\u0629.", "Verifying": "\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0642\u0642", "Unlock": "\u0641\u062a\u062d \u0627\u0644\u0642\u0641\u0644", "Wrong username or password.": "\u0627\u0633\u0645 \u0645\u0633\u062a\u062e\u062f\u0645 \u0623\u0648 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062e\u0627\u0637\u0626\u0629.", "That username is taken.": "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0647\u0630\u0627 \u0645\u0633\u062a\u062e\u062f\u0645.", "Couldn't create the account.": "\u062a\u0639\u0630\u0651\u0631 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062d\u0633\u0627\u0628.", "Couldn't verify \u2014 try again.": "\u062a\u0639\u0630\u0651\u0631 \u0627\u0644\u062a\u062d\u0642\u0642 \u2014 \u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u064b\u0627.", "Accept as editor": "\u0642\u0628\u0648\u0644 \u0643\u0645\u062d\u0631\u0651\u0631", "Accept as viewer": "\u0642\u0628\u0648\u0644 \u0643\u0645\u0637\u064e\u0651\u0644\u0639", "Reject": "\u0631\u0641\u0636", "Revoke": "\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0629", "Role": "\u0627\u0644\u062f\u0648\u0631", "Email": "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a", "Last seen": "\u0622\u062e\u0631 \u0638\u0647\u0648\u0631", "Loading users\u2026": "\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646\u2026", "Viewer access \u2014 you can look, but only an editor can save a new entry.": "\u0635\u0644\u0627\u062d\u064a\u0629 \u0627\u0637\u0651\u0644\u0627\u0639 \u2014 \u064a\u0645\u0643\u0646\u0643 \u0627\u0644\u0645\u0634\u0627\u0647\u062f\u0629\u060c \u0644\u0643\u0646 \u0627\u0644\u0645\u062d\u0631\u0651\u0631 \u0641\u0642\u0637 \u064a\u0645\u0643\u0646\u0647 \u062d\u0641\u0638 \u0642\u064a\u062f \u062c\u062f\u064a\u062f.", "Figures as tracked in the working file. For internal review, not financial advice.": "\u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u0643\u0645\u0627 \u0647\u064a \u0645\u062a\u062a\u0628\u0639\u0629 \u0641\u064a \u0645\u0644\u0641 \u0627\u0644\u0639\u0645\u0644. \u0644\u0644\u0645\u0631\u0627\u062c\u0639\u0629 \u0627\u0644\u062f\u0627\u062e\u0644\u064a\u0629\u060c \u0648\u0644\u064a\u0633\u062a \u0646\u0635\u064a\u062d\u0629 \u0645\u0627\u0644\u064a\u0629.", "Something went wrong": "\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627", "The page hit an error and stopped rendering, rather than failing silently:": "\u0648\u0627\u062c\u0647\u062a \u0627\u0644\u0635\u0641\u062d\u0629 \u062e\u0637\u0623\u064b \u0648\u062a\u0648\u0642\u0641\u062a \u0639\u0646 \u0627\u0644\u0639\u0631\u0636 \u0628\u062f\u0644\u064b\u0627 \u0645\u0646 \u0627\u0644\u0641\u0634\u0644 \u0628\u0635\u0645\u062a:", "Try again": "\u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u064b\u0627", "Marked-to-market": "\u0628\u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0633\u0648\u0642\u064a\u0629", "Purchase value": "\u0642\u064a\u0645\u0629 \u0627\u0644\u0634\u0631\u0627\u0621", "Weighted avg. rate": "\u0645\u062a\u0648\u0633\u0637 \u0627\u0644\u0641\u0627\u0626\u062f\u0629 \u0627\u0644\u0645\u0631\u062c\u0651\u062d", "Secured EGP loans (9 facilities)": "\u0642\u0631\u0648\u0636 \u062c\u0646\u064a\u0647 \u0645\u0636\u0645\u0648\u0646\u0629 (9 \u062a\u0633\u0647\u064a\u0644\u0627\u062a)", "USD loan (CIB)": "\u0642\u0631\u0636 \u062f\u0648\u0644\u0627\u0631\u064a (CIB)", "Properties (paid so far)": "\u0639\u0642\u0627\u0631\u0627\u062a (\u0627\u0644\u0645\u062f\u0641\u0648\u0639 \u062d\u062a\u0649 \u0627\u0644\u0622\u0646)", "EGP certificates & CDs (incl. CIB)": "\u0634\u0647\u0627\u062f\u0627\u062a \u0648\u0648\u062f\u0627\u0626\u0639 \u062c\u0646\u064a\u0647 (\u0628\u0645\u0627 \u0641\u064a\u0647\u0627 CIB)", "New fund": "\u0635\u0646\u062f\u0648\u0642 \u062c\u062f\u064a\u062f", "New loan": "\u0642\u0631\u0636 \u062c\u062f\u064a\u062f", "Gold %": "\u0627\u0644\u0630\u0647\u0628 %", "EGP funds %": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062c\u0646\u064a\u0647 %", "USD funds %": "\u0635\u0646\u0627\u062f\u064a\u0642 \u0627\u0644\u062f\u0648\u0644\u0627\u0631 %", "Project": "\u0627\u0644\u0645\u0634\u0631\u0648\u0639", " (price missing for this day, valued at cost)": " (\u0627\u0644\u0633\u0639\u0631 \u0645\u0641\u0642\u0648\u062f \u0644\u0647\u0630\u0627 \u0627\u0644\u064a\u0648\u0645\u060c \u0645\u064f\u0642\u064a\u064e\u0651\u0645 \u0628\u0627\u0644\u062a\u0643\u0644\u0641\u0629)", " of ": " \u0645\u0646 ", " to ": " \u0625\u0644\u0649 ", " total": " \u0625\u062c\u0645\u0627\u0644\u064a", "\u00b7 ": "\u00b7 ", "v3.0": "v3.0"};
  function getLang() { try { return window.localStorage.getItem("lang") === "ar" ? "ar" : "en"; } catch (e) { return "en"; } }
  function applyLangDir(lang) { try { document.documentElement.lang = lang; document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; } catch (e) {} }
  var langListeners = [];
  function setLang(l) { try { window.localStorage.setItem("lang", l); } catch (e) {} applyLangDir(l); langListeners.slice().forEach((f) => f(l)); if (l === "en") { try { window.location.reload(); } catch (e) {} } }
  function useLang() { const [l, setL] = useState(getLang()); useEffect(() => { const f = (v) => setL(v); langListeners.push(f); return () => { langListeners = langListeners.filter((x) => x !== f); }; }, []); return l; }
    Object.assign(AR_STRINGS, {"Summary":"الملخص","Holdings":"الأصول","Owed":"المستحق","Cash flow":"التدفق"});

  function T(s) { if (typeof s !== "string") return s; return getLang() === "ar" && Object.prototype.hasOwnProperty.call(AR_STRINGS, s) ? AR_STRINGS[s] : s; }
  function L(en, ar) { return getLang() === "ar" ? ar : en; }
  function arDays(n) { return n === 1 ? "يوم واحد" : n === 2 ? "يومين" : n <= 10 ? `${n} أيام` : `${n} يومًا`; }
  function arCount(n, one, two, many) { return n === 1 ? one : n === 2 ? two : `${n} ${many}`; }
  function officeDueSentence(alert, multi) {
    const amt = egp(alert.amount) + (multi ? L(" total", " إجمالي") : "");
    const d = alert.daysUntilDue;
    if (getLang() === "ar") {
      if (d < 0) return `كان مستحقًا ${amt} في ${fmtDate(alert.date)}، منذ ${arDays(Math.abs(d))}.`;
      if (d === 0) return `${amt} مستحق اليوم.`;
      return `${amt} مستحق في ${fmtDate(alert.date)}، خلال ${arDays(d)}.`;
    }
    if (d < 0) return `${amt} was due ${fmtDate(alert.date)}, ${Math.abs(d)} day${Math.abs(d) === 1 ? "" : "s"} ago.`;
    if (d === 0) return `${amt} is due today.`;
    return `${amt} due ${fmtDate(alert.date)}, in ${d} day${d === 1 ? "" : "s"}.`;
  }
  // Arabic pass for dynamic English sentences that are built from fragments at render time.
  var XL_RULES = [
    
    [/^Gold (.+?) since (\S+) \(now (.+?) EGP\/g\)$/, (m) => `الذهب ${m[1]} منذ ${m[2]} (الآن ${m[3]} جنيه/جم)`],
    [/^USD\/EGP rate (.+?) since (\S+) \(now (.+)\)$/, (m) => `سعر الدولار ${m[1]} منذ ${m[2]} (الآن ${m[3]})`],
    [/^Leverage (.+?) points since (\S+) \(now (.+)\)$/, (m) => `المديونية ${m[1]} نقطة منذ ${m[2]} (الآن ${m[3]})`],
    [/^NAV group links a fund to a field in the daily pricing form.*$/, () => "مجموعة NAV تربط الصندوق بخانة في نموذج التسعير اليومي. ضع صفّين في نفس المجموعة (مثل شريحتي CIB Istethmar) ليشتركا في خانة NAV واحدة."],
    [/^Update all (\d+) variable-rate certificates \(corridor change\)$/, (m) => `تحديث كل الـ${m[1]} شهادات متغيرة العائد (تغيير الكوريدور)`],
    [/^Targets add up to (.+?) — usually these should add up to 100%\.$/, (m) => `الأهداف مجموعها ${m[1]}، والمفروض يكون المجموع 100% عادةً.`],
    [/^Delete row$/, () => "حذف الصف"], [/^Edit row$/, () => "تعديل الصف"],
    [/^Secured loan •(\d+)$/, (m) => `قرض مضمون •${m[1]}`],
    [/^Variable-yield monthly platinum CD \((.+)\)$/, (m) => `شهادة بلاتينية شهرية متغيرة العائد (${m[1]})`],
    [/^Platinum monthly CD \((.+)\)$/, (m) => `شهادة بلاتينية شهرية (${m[1].replace("Alexandria","الإسكندرية").replace("Agami","العجمي")})`],
    [/^Tiered-yield platinum CD \((.+)\)$/, (m) => `شهادة بلاتينية متدرجة العائد (${m[1]})`],
    [/^CIB certificate$/, () => "شهادة CIB"],
    [/^(\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)$/, (m) => `${m[1]} ${AR_MONTHS[["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(m[2])]}`],
    [/^Priced as of (.+)\.$/, (m) => `الأسعار حتى ${m[1]}.`],
    [/^Includes (.+) of recorded distributions received \(unverified, may double count\)\. Without it: (.+)\.$/, (m) => `تشمل ${m[1]} توزيعات مسجّلة (غير مؤكدة وقد تتكرر في العد). بدونها: ${m[2]}.`],
    [/^Every holding, loan, and conversion below is editable\..*$/, () => "كل أصل وقرض وتحويل بالأسفل قابل للتعديل. أضف صندوقًا أو شهادة أو قرضًا أو ذهبًا في أي وقت، والنموذج اليومي وكل الإجماليات تلتقطه تلقائيًا. زر \"تنزيل التقرير\" يحفظ ملفًا مستقلًا تقدر تفتحه أو تطبعه PDF أو ترسله لأي حد، من غير نشر."],
    [/^Check date$/, () => "تاريخ المراجعة"],
    [/^A photo of the fund distribution notification — reads the amount, then adds it to the running total \(currently (.+)\) after you confirm\.$/, (m) => `صورة إشعار توزيعات الصندوق، يقرأ المبلغ ثم يضيفه إلى الإجمالي المتحرك (حاليًا ${m[1]}) بعد تأكيدك.`],
    [/^Choose photo$/, () => "اختر صورة"],
    [/^Choose file$/, () => "اختر ملفًا"],
    [/^The (\d+) EGP certificates (?:&|\\u0026) CDs, individually$/, (m) => `الـ${m[1]} شهادة وCD بالجنيه، كل واحدة على حدة`],
    [/^The (\d+) secured EGP facilities, individually$/, (m) => `الـ${m[1]} تسهيلات مضمونة بالجنيه، كل واحد على حدة`],
    [/^(\d+) certificates$/, (m) => `${m[1]} شهادة`],
    [/^(\d+) holdings, (.+?)(?: in total, priced (.+)\. Expand a row for its detail\.)?$/, (m) => m[3] ? `${m[1]} أصل، ${m[2]} إجمالًا، بأسعار ${m[3]}. افتح أي صف للتفاصيل.` : `${m[1]} أصل، ${m[2]}`],
    [/^Every holding, including certificates and properties — .*$/, () => "كل أصل بما فيه الشهادات والعقارات: ما تم دفعه وقيمته الآن والفرق. الأصول الثابتة محسوبة بالتكلفة والدخل المستلم غير مشمول، فهذا ليس عائدًا إجماليًا."],
    [/^Change since records began$/, () => "التغيّر منذ بدء التسجيل"],
    [/^(.+) on funds and gold, (\S+) to today$/, (m) => `${m[1]} على الصناديق والذهب، من ${m[2]} حتى اليوم`],
    [/^(\d+) recorded observations over (\d+) calendar days\. Funds and gold only, adjusted for additions, excludes income\. Not a year-to-date return\.$/, (m) => `${m[1]} قراءة مسجّلة خلال ${m[2]} يومًا. الصناديق والذهب فقط، معدّلة للإضافات، ولا تشمل الدخل. ليست عائدًا منذ بداية السنة.`],
    [/^Last 12 months: not available$/, () => "آخر 12 شهرًا: غير متاح"],
    [/^Only (\d+) calendar days are recorded, not 12 months\. The number shown is the same recorded-period change, not a 1-year return\.$/, (m) => `المسجّل ${m[1]} يومًا فقط وليس 12 شهرًا. الرقم المعروض هو نفس تغيّر الفترة المسجّلة وليس عائد سنة.`],
    [/^Whole portfolio: value vs cost$/, () => "المحفظة كاملة: القيمة مقابل التكلفة"],
    [/^(.+) value minus cost$/, (m) => `${m[1]} القيمة ناقص التكلفة`],
    [/^Whole portfolio, today's value vs amount put in\..*$/, () => "المحفظة كاملة: قيمة اليوم مقابل المبلغ المدفوع. الشهادات بالتكلفة، والدخل وسعر الصرف وقت الشراء غير مشمولين. ليس عائدًا حقيقيًا."],
    [/^Compares today's value with what was paid, for (\d+) of (\d+) holdings \((\d+)% of the amount invested\)\. .*$/, (m) => `يقارن قيمة اليوم بما تم دفعه، لـ${m[1]} من ${m[2]} أصل (${m[3]}% من المبلغ المستثمر). لا يشمل صناديق الدولار والشهادات وأذون الخزانة والعقارات وأي دخل مستلم. ليس عائد فترة ولا عائد المحفظة كاملة.`],
    [/^(\d+) days$/, (m) => arDays(+m[1])],
    [/^"Put in" per category adds up to "You've put in" above; "now" per category adds up to (.+?) \(you've put in \+ gain vs cost\) — USD funds shown in dollars, converted at today's rate for the totals above\.$/, (m) => `"المدفوع" لكل فئة يجمع إلى "ما دفعته" بالأعلى، و"الآن" لكل فئة يجمع إلى ${m[1]} (ما دفعته + الربح مقابل التكلفة). صناديق الدولار معروضة بالدولار ومحوّلة بسعر اليوم في الإجماليات بالأعلى.`],
    [/^(\d+) funds?$/, (m) => `${m[1]} صناديق`],
    [/^(\d+) holdings$/, (m) => `${m[1]} أصول`],
    [/^Monthly EGP cash flow is negative \((.+)\) — loan installments currently outweigh EGP income\.$/, (m) => `التدفق النقدي الشهري بالجنيه سالب (${m[1]}) — أقساط القروض حاليًا أكبر من الدخل بالجنيه.`],
    [/^EGP fixed income is (\d+)% of the portfolio — a large concentration in one category\..*$/, (m) => `الدخل الثابت بالجنيه ${m[1]}% من المحفظة، تركّز كبير في فئة واحدة. توزيع جزء منه على فئات أخرى يقلل تأثر إجمالي المحفظة بحركة فئة واحدة.`],
    [/^Leverage is (.+?) — on the higher side\..*$/, (m) => `المديونية ${m[1]}، وهي مرتفعة نسبيًا. الالتزامات تمثل حصة كبيرة من الأصول؛ سداد جزء من الدين أو زيادة الأصول يخفضها.`],
    [/^Marked-to-market value is (up|down) (.+?) since (\S+) \((\d+) days tracked\)\.$/, (m) => `القيمة السوقية ${m[1]==="up"?"ارتفعت":"انخفضت"} ${m[2].replace("-","")} منذ ${m[3]} (${m[4]} يومًا مسجّلًا).`],
    [/^Since (\S+), the portfolio has (outpaced|lagged) gold by (.+?) \(portfolio (.+?) vs\. gold (.+?)\)\.$/, (m) => `منذ ${m[1]}، المحفظة ${m[2]==="outpaced"?"تفوّقت على":"تأخرت عن"} الذهب بـ${m[3]} (المحفظة ${m[4]} مقابل الذهب ${m[5]}).`],
    [/^— At (.+?) of the portfolio, this single EGP fixed-income category is heavily concentrated and dominates the (.+?) EGP fixed income exposure\.$/, (m) => `— عند ${m[1]} من المحفظة، هذه الفئة الواحدة من الدخل الثابت بالجنيه شديدة التركّز وتهيمن على انكشاف ${m[2]} في الدخل الثابت بالجنيه.`],
    [/^— Gold is only (.+?) of the portfolio, and physical gold would add diversification away from EGP fixed income\.$/, (m) => `— الذهب ${m[1]} فقط من المحفظة، والذهب الفعلي يضيف تنويعًا بعيدًا عن الدخل الثابت بالجنيه.`],
    [/^— USD fixed income is just (.+?) of the portfolio, so adding here improves currency diversification\.$/, (m) => `— الدخل الثابت بالدولار ${m[1]} فقط من المحفظة، والزيادة هنا تحسّن تنويع العملات.`],
    [/^— This daily-redeemable fund is the most liquid holding listed, which helps given the low liquidity score of (\d+) of 100\.$/, (m) => `— هذا الصندوق قابل للاسترداد يوميًا وهو أكثر الأصول سيولة في القائمة، وده يفيد مع درجة السيولة المنخفضة (${m[1]} من 100).`],
    [/^(\d+) loan lines?, (.+?) outstanding — plus (.+?) in remaining property installments (?:&|\\u0026) maintenance \(see section 07\), for (.+?) total liabilities\. Add or remove a loan freely\.$/, (m) => `${m[1]} بند قرض، ${m[2]} مستحق، بالإضافة إلى ${m[3]} أقساط وصيانة عقارات متبقية (انظر القسم 07)، بإجمالي التزامات ${m[4]}. أضف أو احذف أي قرض بحرية.`],
    [/^(\d+) loan lines?, (.+)$/, (m) => `${m[1]} بند قرض، ${m[2]}`],
    [/^(\d+) facilities$/, (m) => `${m[1]} تسهيلات`],
    [/^(\d+) properties, (.+?) full contract price — what's paid so far counts toward Total Assets above\.$/, (m) => `${m[1]} عقارات، سعر العقد الكامل ${m[2]}، وما تم دفعه حتى الآن محسوب ضمن إجمالي الأصول بالأعلى.`],
    [/^(\d+) units$/, (m) => `${m[1]} وحدات`],
    [/^Paid off per each property's installment schedule\. Next due (.+)$/, (m) => `يُسدَّد حسب جدول أقساط كل عقار. القسط القادم ${m[1].replace(/\.$/, "")}.`],
    [/^(\d+) of (\d+) dates fully paid$/, (m) => `${m[1]} من ${m[2]} تاريخ مسدَّد بالكامل`],
    [/^Next due (.+?), (.+?)(?: — in (\d+)d)?\.?$/, (m) => `القسط القادم ${m[1]}، ${m[2].replace(/\.$/, "")}${m[3] ? " — خلال " + arDays(+m[3]) : ""}.`],
    [/^deficit$/, () => "عجز"], [/^surplus$/, () => "فائض"],
    [/^(\d+) transfers?$/, (m) => `${m[1]} تحويلات`],
    [/^received from outside transfers,\s*$/, () => "مستلم من تحويلات خارجية، "],
    [/^remains in USD today — see the conversion history in section 09\.$/, () => "ما زال بالدولار اليوم — انظر سجل التحويل في القسم 09."],
    [/^Show all (\d+) headlines$/, (m) => `عرض كل الـ${m[1]} خبرًا`],
    [/^Today's update$/, () => "تحديث اليوم"],
    [/^Rate and gold pre-filled from live market data, last refreshed (.+?) — you can still edit them below\.$/, (m) => `السعر والذهب معبّآن من بيانات السوق المباشرة، آخر تحديث ${m[1]} — وتقدر تعدّلهم بالأسفل.`],
    [/^same as previous entry$/, () => "نفس القيمة السابقة"],
    [/^Review notes \(not errors\): (\d+) within 3% · (\d+) same as previous entry · (\d+) above 3% · (\d+) empty\. Notes never block saving; gold and USD\/EGP are pre-filled from live rates\.$/, (m) => `ملاحظات المراجعة (ليست أخطاء): ${m[1]} ضمن 3% · ${m[2]} نفس القيمة السابقة · ${m[3]} أعلى من 3% · ${m[4]} فارغ. الملاحظات لا تمنع الحفظ؛ الذهب والدولار/الجنيه معبّآن من الأسعار المباشرة.`],
    [/^Save today's entry$/, () => "حفظ إدخال اليوم"], [/^Save changes$/, () => "حفظ التعديلات"], [/^Saving$/, () => "جارٍ الحفظ"],
    [/^(\d+) days on record for (\d+), funds, Beltone and gold only .*$/, (m) => `${m[1]} يومًا مسجّلًا لسنة ${m[2]}، للصناديق وBeltone والذهب فقط (لا تشمل الشهادات وأذون الخزانة والعقارات والقروض وبند التوزيعات، فهي ليست إجمالي الأصول ولا صافي الثروة). عدّل أي صف لتصحيح خطأ أو احذفه نهائيًا.`],
    [/^All$/, () => "الكل"],
    [/^Funds and gold value vs\. gold vs\. USD\/EGP, since (\S+)$/, (m) => `قيمة الصناديق والذهب مقابل الذهب مقابل الدولار/الجنيه، منذ ${m[1]}`],
    [/^Price change by fund \(excludes income\), since purchase \(or this year's reset\)$/, () => "تغيّر السعر لكل صندوق (بدون الدخل)، منذ الشراء (أو منذ إعادة ضبط هذه السنة)"],
    [/^As of (\S+) — updates automatically the moment a new day's entry is saved\.$/, (m) => `حتى ${m[1]} — يتحدّث تلقائيًا فور حفظ إدخال يوم جديد.`],
    [/^(\d+) ranked$/, (m) => `${m[1]} مرتبة`],
    [/^Since$/, () => "منذ"], [/^Over$/, () => "خلال"],
    [/^recorded days, the marked-to-market portion moved$/, () => "يومًا مسجّلًا، تحرّك الجزء المقيَّم بسعر السوق بمقدار"],
    [/^\)\. The FX rate moved$/, () => "). وتحرّك سعر الصرف بمقدار"],
    [/^, and gold moved$/, () => "، وتحرّك الذهب بمقدار"],
    [/^per gram\. Value rose on$/, () => "للجرام. وارتفعت القيمة في"],
    [/^day-over-day steps\.$/, () => "من الخطوات اليومية."],
    [/^Adjusted for additions only \(cost of holdings added after the start day\)\. No sales or withdrawals are recorded and none are handled\.$/, () => "معدّلة للإضافات فقط (تكلفة الأصول المضافة بعد يوم البداية). لا توجد مبيعات أو سحوبات مسجّلة ولا يتم التعامل معها."],
    [/^No missing fund prices on the recorded days\.$/, () => "لا توجد أسعار صناديق ناقصة في الأيام المسجّلة."],
    [/^Recent momentum,$/, () => "الزخم الأخير،"], [/^over the period \(now$/, () => "خلال الفترة (الآن"], [/^overall\)\.$/, () => "إجمالًا)."],
    [/^Switch language \/ تغيير اللغة$/, () => "تغيير اللغة"], [/^Back to top$/, () => "العودة للأعلى"], [/^Main sections$/, () => "الأقسام الرئيسية"],
    [/^Notifications$/, () => "الإشعارات"], [/^Section index$/, () => "فهرس الأقسام"], [/^Chart range$/, () => "نطاق الرسم"],
    [/^Lower than the last saved entry$/, () => "أقل من آخر إدخال محفوظ"], [/^Higher than the last saved entry$/, () => "أعلى من آخر إدخال محفوظ"],
    [/^Gold Bars - (.+)$/, (m) => `سبائك ذهب - ${m[1]}`], [/^EGP certificates (?:&|\\u0026) CDs \(incl\. CIB\)$/, () => "شهادات وCDs بالجنيه (شاملة CIB)"],
    [/^NBE Treasury Bills \(364-day\)$/, () => "أذون خزانة NBE (364 يومًا)"], [/^USD certificate \(CIB\)$/, () => "شهادة بالدولار (CIB)"],
    [/^Properties \(paid so far\)$/, () => "العقارات (المدفوع حتى الآن)"], [/^NBE fund distributions received$/, () => "توزيعات صناديق NBE المستلمة"],
    [/^USD term deposit \(NBE, 4\.6%, monthly renewal\)$/, () => "وديعة بالدولار لأجل (NBE، 4.6%، تجديد شهري)"],
    [/^(AZ Gold Fund|CIB Istethmar|NBE Fund \d|AZ Opportunities)(?: \((.+)\))?$/, (m) => m[0].replace("(new tranche)", "(شريحة جديدة)").replace("(2nd tranche)", "(الشريحة الثانية)").replace("(3rd tranche)", "(الشريحة الثالثة)").replace("(Daily)", "(يومي)")],
  ];
  function xlText(s) {
    if (!s) return s;
    if (!/[A-Za-z]{3,}/.test(s)) { return /[\u0600-\u06FF]/.test(s) ? s.replace(/(^|[^\u2066\d])([+\u2212]\d[\d,.]*%?)/g, (m, a, b) => a + "\u2066" + b + "\u2069") : s; }
    const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0]; let core = s.trim(); core = core.replace(/^(\d+) property installments \(([^)]+)\)/, (m0, n, names) => n + " أقساط عقارات (\u2066" + names + "\u2069)");
    if (Object.prototype.hasOwnProperty.call(AR_STRINGS, core)) return lead + AR_STRINGS[core] + trail;
    for (const [re, fn] of XL_RULES) { const m = core.match(re); if (m) return lead + fn(m) + trail; }
    s = lead + core + trail;
    return /[\u0600-\u06FF]/.test(s) ? s.replace(/(^|[^\u2066\d])([+\u2212]\d[\d,.]*%?)/g, (m, a, b) => a + "\u2066" + b + "\u2069") : s;
  }
  function xlNode(root) {
    if (getLang() !== "ar") return;
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = []; while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach((n) => { const p = n.parentElement; if (!p || /^(SCRIPT|STYLE|TEXTAREA)$/.test(p.tagName)) return; if (p.tagName === "OPTION") { const o = { fund: "صندوق", gold: "ذهب", fixed: "دخل ثابت" }[n.nodeValue.trim()]; if (o) n.nodeValue = o; return; } const t = xlText(n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; });
    if (root.querySelectorAll) root.querySelectorAll("[aria-label],[title],[placeholder]").forEach((e) => { ["aria-label", "title", "placeholder"].forEach((a) => { const v = e.getAttribute(a); if (v) { const t = xlText(v); if (t !== v) e.setAttribute(a, t); } }); });
  }
  (function startXL() {
    let q = null;
    const run = () => { q = null; try { xlNode(document.body); } catch (e) {} };
    const sched = () => { if (q === null) q = setTimeout(run, 60); };
    const go = () => { new MutationObserver(sched).observe(document.body, { childList: true, subtree: true, characterData: true }); sched(); };
    if (document.body) go(); else document.addEventListener("DOMContentLoaded", go);
  })();

  applyLangDir(getLang());

  var VAPID_PUBLIC_KEY = "BFhwCTvu6g58scgtSpAJxBtUMDj5Vt8UqjNlrNsdZ3mz1OA2wGHCWCx1MnU9S2YHlfQUMqFtOsrOBDpeQ76Wh6M";
  var urlBase64ToUint8Array = (base64String) => {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; i++) outputArray[i] = rawData.charCodeAt(i);
    return outputArray;
  };
  var BIOMETRIC_KEY_PREFIX = "biometricCredential_";
  var bufToBase64Url = (buf) => {
    const bytes = new Uint8Array(buf);
    let str = "";
    for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
    return window.btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  };
  var base64UrlToBuf = (b64url) => {
    const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - b64url.length % 4) % 4);
    const str = window.atob(b64);
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
    return bytes.buffer;
  };
  var registerBiometricCredential = async (uid, label) => {
    const challenge = window.crypto.getRandomValues(new Uint8Array(32));
    const userId = new TextEncoder().encode(uid).slice(0, 64);
    const cred = await navigator.credentials.create({
      publicKey: {
        challenge,
        rp: { name: "Portfolio Readiness" },
        user: { id: userId, name: label || uid, displayName: label || "Portfolio user" },
        pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "required" },
        timeout: 6e4
      }
    });
    return bufToBase64Url(cred.rawId);
  };
  var verifyBiometricCredential = async (credentialIdB64) => {
    const challenge = window.crypto.getRandomValues(new Uint8Array(32));
    await navigator.credentials.get({
      publicKey: {
        challenge,
        allowCredentials: [{ id: base64UrlToBuf(credentialIdB64), type: "public-key" }],
        userVerification: "required",
        timeout: 6e4
      }
    });
  };
  var NAV_PASTE_PATTERNS = {
    nbe1: [/fund\s*0?1\b/i, /first mutual fund/i],
    nbe2: [/fund\s*0?2\b/i, /second mutual fund/i],
    nbe4: [/fund\s*0?4\b/i, /daily income fund/i],
    nbe5: [/fund\s*0?5\b/i, /lottery/i, /fifth (mutual )?fund/i],
    cib: [/ist[ei]thmar/i],
    azopp: [/فرص/, /opportunit/i],
    azgold: [/جولد/, /\bgold\b/i, /precious metals/i],
    beltone: [/beltonefiusd/i, /beltone fixed income/i]
  };
  function parseNavPasteText(text, navFields) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const DATE_SPAN_RE = /\d{1,2}[-/]\d{1,2}[-/](?:19|20)\d{2}|(?:19|20)\d{2}[-/]\d{1,2}[-/]\d{1,2}|\d{1,2}\s+(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?,?\s*(?:19|20)\d{2}/gi;
    const NEGATIVE_CONTEXT_RE = /initial|launch|inception|since|capital at|minimum/i;
    const dateSpans = (line) => {
      const spans = [];
      let m;
      DATE_SPAN_RE.lastIndex = 0;
      while (m = DATE_SPAN_RE.exec(line)) spans.push([m.index, m.index + m[0].length]);
      return spans;
    };
    const numberCandidates = (line) => {
      const spans = dateSpans(line);
      const matches = [...line.matchAll(/\d+(?:,\d{3})*(?:\.\d+)?/g)];
      return matches.filter((m) => !spans.some(([s, e]) => m.index >= s && m.index < e)).map((m) => ({ raw: m[0], value: Number(m[0].replace(/,/g, "")), index: m.index, after: line.slice(m.index + m[0].length, m.index + m[0].length + 12) }));
    };
    const pickFromLine = (line, { allowBare }) => {
      if (NEGATIVE_CONTEXT_RE.test(line)) return null;
      const candidates = numberCandidates(line).filter((c) => {
        if (/^\s*(year|day|days|%)/i.test(c.after)) return false;
        if (c.value < 0.5 || c.value > 5e6) return false;
        if (!c.raw.includes(".") && /^(19|20)\d{2}$/.test(c.raw)) return false;
        return true;
      });
      if (!candidates.length) return null;
      const strong = candidates.find((c) => /^\s*(egp|usd)\b/i.test(c.after) || c.raw.includes("."));
      if (strong) return strong.value;
      return allowBare ? candidates[0].value : null;
    };
    const findNumber = (triggerIdx) => {
      const onTrigger = pickFromLine(lines[triggerIdx], { allowBare: false });
      if (onTrigger !== null) return onTrigger;
      const windowEnd = Math.min(triggerIdx + 6, lines.length);
      for (let i = triggerIdx + 1; i < windowEnd; i++) {
        const val = pickFromLine(lines[i], { allowBare: false });
        if (val !== null) return val;
      }
      for (let i = triggerIdx + 1; i < windowEnd; i++) {
        const val = pickFromLine(lines[i], { allowBare: true });
        if (val !== null) return val;
      }
      return null;
    };
    const results = [];
    navFields.forEach((f) => {
      const patterns = NAV_PASTE_PATTERNS[f.key];
      if (!patterns) return;
      for (let i = 0; i < lines.length; i++) {
        if (patterns.some((p) => p.test(lines[i]))) {
          const value = findNumber(i);
          if (value !== null) {
            results.push({ key: f.key, label: f.label, value, matchedLine: lines[i] });
          }
          break;
        }
      }
    });
    return results;
  }
  var REBALANCE_CATEGORIES = [
    { key: "gold", label: "Gold (funds + physical)" },
    { key: "egpFunds", label: "EGP funds" },
    { key: "usdFunds", label: "USD funds" },
    { key: "egpFixed", label: "EGP fixed income" },
    { key: "usdFixed", label: "USD fixed income" },
    { key: "realEstate", label: "Real estate (office units)" }
  ];
  var classifyHolding = (h) => {
    if (h.type === "gold" || h.type === "fund" && h.navGroup === "azgold") return "gold";
    if (h.type === "fund") return h.currency === "USD" ? "usdFunds" : "egpFunds";
    if (h.id === "offices") return "realEstate";
    return h.currency === "USD" ? "usdFixed" : "egpFixed";
  };
  var parseLoanStatementDate = (v) => {
    if (typeof v === "number" && window.XLSX && window.XLSX.SSF) {
      const d2 = window.XLSX.SSF.parse_date_code(v);
      if (d2) return `${d2.y}-${String(d2.m).padStart(2, "0")}-${String(d2.d).padStart(2, "0")}`;
    }
    if (typeof v === "string" && v) {
      const m = v.match(/^(\d{4})-(\d{2})-(\d{2})/);
      if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    }
    if (v instanceof Date && !isNaN(v)) {
      return `${v.getUTCFullYear()}-${String(v.getUTCMonth() + 1).padStart(2, "0")}-${String(v.getUTCDate()).padStart(2, "0")}`;
    }
    return null;
  };
  var LOAN_STATEMENT_FIELDS = [
    { key: "amountFinanced", column: "Amount Financed", type: "number" },
    { key: "outstanding", column: "Outstanding Balance", type: "number" },
    { key: "installment", column: "Installment Amount", type: "number" },
    { key: "rate", column: "Interest Rate", type: "number" },
    { key: "openDate", column: "Open Date", type: "date" },
    { key: "maturityDate", column: "Maturity Date", type: "date" }
  ];
  function matchLoanStatementRows(rows, facilities) {
    const usedFacilityIndexes = /* @__PURE__ */ new Set();
    const changes = [];
    const unmatchedRows = [];
    const updatedFacilities = facilities.map((f) => ({ ...f }));
    rows.forEach((row) => {
      const acctRaw = row["Account Number"];
      const last4 = acctRaw != null && acctRaw !== "" ? String(acctRaw).slice(-4) : null;
      if (!last4) return;
      const idx = facilities.findIndex((f) => f.label.endsWith(`•${last4}`));
      if (idx === -1) {
        unmatchedRows.push(row);
        return;
      }
      usedFacilityIndexes.add(idx);
      const facility = updatedFacilities[idx];
      const rowChanges = [];
      LOAN_STATEMENT_FIELDS.forEach(({ key, column, type }) => {
        const raw = row[column];
        if (raw === void 0 || raw === null || raw === "") return;
        const newVal = type === "date" ? parseLoanStatementDate(raw) : Number(raw);
        if (newVal === null || type === "number" && Number.isNaN(newVal)) return;
        const oldVal = facility[key];
        const changed = type === "date" ? oldVal !== newVal : Math.abs((oldVal || 0) - newVal) > 5e-3;
        if (changed) {
          rowChanges.push({ key, label: column, oldVal, newVal });
          facility[key] = newVal;
        }
      });
      if (rowChanges.length) changes.push({ label: facility.label, fields: rowChanges });
    });
    const missingFacilities = facilities.filter((f, i) => !usedFacilityIndexes.has(i));
    return { updatedFacilities, changes, unmatchedRows, missingFacilities };
  }
  function matchCertificateStatementRows(rows, certificates) {
    const keyOf = (amount, openDate) => `${Math.round(Number(amount) || 0)}|${openDate || ""}`;
    const indexesByKey = {};
    certificates.forEach((c, i) => {
      const k = keyOf(c.amount, c.openDate);
      (indexesByKey[k] = indexesByKey[k] || []).push(i);
    });
    const rowsByKey = {};
    const unmatchedRows = [];
    const skippedRows = [];
    rows.forEach((row) => {
      const productType = String(row["Product Type"] || "").trim();
      if (productType && productType !== "Certificate Deposit") {
        skippedRows.push(row);
        return;
      }
      const amountRaw = row["Amount"];
      const openDateRaw = row["Open Date"];
      if (amountRaw === void 0 || amountRaw === null || openDateRaw === void 0 || openDateRaw === null) {
        unmatchedRows.push(row);
        return;
      }
      const openDate = parseLoanStatementDate(openDateRaw);
      const amount = Number(amountRaw);
      if (!openDate || Number.isNaN(amount)) {
        unmatchedRows.push(row);
        return;
      }
      const key = keyOf(amount, openDate);
      (rowsByKey[key] = rowsByKey[key] || []).push(row);
    });
    const updatedCertificates = certificates.map((c) => ({ ...c }));
    const changes = [];
    const usedIndexes = /* @__PURE__ */ new Set();
    Object.entries(rowsByKey).forEach(([key, keyRows]) => {
      const indexes = indexesByKey[key] || [];
      if (!indexes.length) {
        keyRows.forEach((r) => unmatchedRows.push(r));
        return;
      }
      keyRows.forEach((row, i) => {
        if (i >= indexes.length) {
          unmatchedRows.push(row);
          return;
        }
        const idx = indexes[i];
        usedIndexes.add(idx);
        const cert = updatedCertificates[idx];
        const rowChanges = [];
        const rateRaw = row["Interest Rate"];
        if (rateRaw !== void 0 && rateRaw !== null && rateRaw !== "") {
          const newRate = Number(rateRaw);
          if (!Number.isNaN(newRate) && Math.abs((cert.rate || 0) - newRate) > 5e-3) {
            rowChanges.push({ key: "rate", label: "Interest Rate", oldVal: cert.rate, newVal: newRate });
            cert.rate = newRate;
          }
        }
        const maturityRaw = row["Maturity Date"];
        if (maturityRaw !== void 0 && maturityRaw !== null && maturityRaw !== "") {
          const newMaturity = parseLoanStatementDate(maturityRaw);
          if (newMaturity && newMaturity !== cert.maturityDate) {
            rowChanges.push({ key: "maturityDate", label: "Maturity Date", oldVal: cert.maturityDate, newVal: newMaturity });
            cert.maturityDate = newMaturity;
          }
        }
        if (rowChanges.length) changes.push({ label: cert.label, fields: rowChanges });
      });
    });
    const missingCertificates = certificates.filter((c, i) => !usedIndexes.has(i));
    return { updatedCertificates, changes, unmatchedRows, skippedRows, missingCertificates };
  }
  function parseOfficeUnitsSheet(grid) {
    const headerRowIdx = grid.findIndex((r) => r.some((c) => String(c || "").trim().toLowerCase() === "office no"));
    if (headerRowIdx === -1) return null;
    const header = grid[headerRowIdx].map((c) => String(c || "").trim().toLowerCase());
    const col = (name) => header.indexOf(name);
    const idxUnit = col("office no");
    const idxSize = col("size");
    const idxParking = col("no of parking");
    const idxAmount = col("amount");
    const idxAdv = col("adv");
    const idxInstallmentTotal = col("installment total");
    const rows = [];
    for (let i = headerRowIdx + 1; i < grid.length; i++) {
      const r = grid[i];
      const unit = r[idxUnit];
      if (!unit || !String(unit).trim()) continue;
      const totalPrice = Number(r[idxAmount]);
      if (!Number.isFinite(totalPrice) || totalPrice <= 0) continue;
      rows.push({
        unit: String(unit).trim(),
        size: r[idxSize] != null ? String(r[idxSize]).trim() : "",
        parking: Number(r[idxParking]) || 0,
        totalPrice,
        advance: Number(r[idxAdv]) || 0,
        remaining: Number(r[idxInstallmentTotal]) || 0
      });
    }
    return rows.length ? rows : null;
  }
  function matchOfficeUnitsRows(rows, units) {
    const OFFICE_UNIT_FIELDS = [
      { key: "size", label: "Size" },
      { key: "parking", label: "Parking" },
      { key: "totalPrice", label: "Total price" },
      { key: "advance", label: "Advance paid" },
      { key: "remaining", label: "Remaining installments" }
    ];
    const updatedUnits = units.map((u) => ({ ...u }));
    const changes = [];
    const unmatchedRows = [];
    const usedIndexes = /* @__PURE__ */ new Set();
    rows.forEach((row) => {
      const idx = units.findIndex((u) => u.unit.trim() === row.unit.trim());
      if (idx === -1) {
        unmatchedRows.push(row);
        return;
      }
      usedIndexes.add(idx);
      const unit = updatedUnits[idx];
      const rowChanges = [];
      OFFICE_UNIT_FIELDS.forEach(({ key, label }) => {
        const newVal = row[key];
        if (newVal === "" || newVal === null || newVal === void 0) return;
        const oldVal = unit[key];
        const changed = key === "size" ? String(oldVal) !== String(newVal) : Math.abs((Number(oldVal) || 0) - (Number(newVal) || 0)) > 0.5;
        if (changed) {
          rowChanges.push({ key, label, oldVal, newVal });
          unit[key] = newVal;
        }
      });
      if (rowChanges.length) changes.push({ label: unit.unit, fields: rowChanges });
    });
    const missingUnits = units.filter((u, i) => !usedIndexes.has(i));
    return { updatedUnits, changes, unmatchedRows, missingUnits };
  }
  function findOfficeUnitColumns(grid, unitLabels) {
    const trimmedLabels = new Set((unitLabels || []).map((u) => String(u).trim()));
    if (!trimmedLabels.size) return null;
    let bestCount = 0, bestMap = null;
    grid.forEach((row) => {
      const map = {};
      let count = 0;
      row.forEach((cell, c) => {
        const v = String(cell || "").trim();
        if (trimmedLabels.has(v)) { map[c] = v; count++; }
      });
      if (count > bestCount) { bestCount = count; bestMap = map; }
    });
    return bestCount > 0 ? bestMap : null;
  }
  function parseOfficeInstallmentsSheet(grid, unitLabels) {
    let dateCol = -1, noCol = -1, totalCol = -1;
    grid.forEach((row) => {
      row.forEach((cell, c) => {
        const v = String(cell || "").trim().toLowerCase();
        if (v === "date" && dateCol === -1) dateCol = c;
        if (v === "no" && noCol === -1) noCol = c;
        if (v === "total installment" && totalCol === -1) totalCol = c;
      });
    });
    if (dateCol === -1 || totalCol === -1) return null;
    const unitCols = findOfficeUnitColumns(grid, unitLabels);
    const byDate = {};
    grid.forEach((row) => {
      const noVal = noCol !== -1 ? row[noCol] : null;
      if (typeof noVal !== "number") return;
      const dateRaw = row[dateCol];
      const amountRaw = row[totalCol];
      if (dateRaw == null || amountRaw == null) return;
      const dateStr = parseLoanStatementDate(dateRaw);
      const amount = Number(amountRaw);
      if (!dateStr || !Number.isFinite(amount)) return;
      if (!byDate[dateStr]) byDate[dateStr] = { amount: 0, byUnit: {} };
      byDate[dateStr].amount += amount;
      if (unitCols) {
        Object.entries(unitCols).forEach(([colIdx, unitLabel]) => {
          const v = Number(row[colIdx]);
          if (Number.isFinite(v)) {
            byDate[dateStr].byUnit[unitLabel] = (byDate[dateStr].byUnit[unitLabel] || 0) + v;
          }
        });
      }
    });
    const rows = Object.entries(byDate).map(([date, d]) => ({
      date,
      amount: Math.round(d.amount),
      byUnit: Object.fromEntries(Object.entries(d.byUnit).map(([k, v]) => [k, Math.round(v)]))
    })).sort((a, b) => a.date.localeCompare(b.date));
    return rows.length ? rows : null;
  }
  function matchOfficeInstallmentsRows(rows, installments) {
    const updatedInstallments = installments.map((i) => ({ ...i }));
    const changes = [];
    const newRows = [];
    const usedIndexes = /* @__PURE__ */ new Set();
    rows.forEach((row) => {
      const idx = installments.findIndex((i) => i.date === row.date);
      if (idx === -1) {
        newRows.push(row);
        return;
      }
      usedIndexes.add(idx);
      const inst = updatedInstallments[idx];
      const fields = [];
      if (Math.abs((Number(inst.amount) || 0) - row.amount) > 0.5) {
        fields.push({ key: "amount", label: "Amount", oldVal: inst.amount, newVal: row.amount });
      }
      const hasNewByUnit = row.byUnit && Object.keys(row.byUnit).length && JSON.stringify(inst.byUnit || null) !== JSON.stringify(row.byUnit);
      if (hasNewByUnit) {
        fields.push({ key: "byUnit", label: "Per-unit breakdown", oldVal: inst.byUnit ? "set" : "not set", newVal: "updated" });
      }
      if (fields.length) changes.push({ label: row.date, fields });
      inst.amount = row.amount;
      if (row.byUnit && Object.keys(row.byUnit).length) inst.byUnit = row.byUnit;
    });
    newRows.forEach((row) => updatedInstallments.push({ ...row }));
    updatedInstallments.sort((a, b) => a.date.localeCompare(b.date));
    const missingInstallments = installments.filter((i, idx) => !usedIndexes.has(idx));
    return { updatedInstallments, changes, newRows, missingInstallments };
  }
  function parseOfficeReceiptText(text, installments, unitLabels) {
    const flat = text.replace(/\s+/g, " ");
    const dateMatch = flat.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    const date = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : null;
    const matchedUnits = unitLabels.filter((label) => {
      const parts = String(label).trim().split("-").map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const re = new RegExp(parts.join("[^A-Za-z0-9]*"), "i");
      return re.test(flat);
    });
    const matchedRow = date ? installments.find((r) => r.date === date) || null : null;
    return { date, matchedUnits, matchedRow };
  }
  function normalizeArabicDigits(s) {
    const map = { "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9" };
    return s.replace(/[٠-٩]/g, (d) => map[d]);
  }
  function parseDistributionAmount(text) {
    const normalized = normalizeArabicDigits(text).replace(/٬/g, ",").replace(/٫/g, ".");
    const matches = normalized.match(/\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d{4,}(?:\.\d+)?/g) || [];
    const amounts = matches.map((m) => Number(m.replace(/,/g, ""))).filter((n) => !isNaN(n) && n >= 10);
    if (!amounts.length) return null;
    return Math.max(...amounts);
  }
  function timeAgo(dateStr) {
    if (!dateStr) return "";
    const target = new Date(dateStr);
    if (isNaN(target.getTime())) return "";
    const diffMs = Date.now() - target.getTime();
    const diffMin = Math.round(diffMs / 6e4);
    const ar = getLang() === "ar";
    if (diffMin < 1) return ar ? "الآن" : "just now";
    if (diffMin < 60) return ar ? `منذ ${diffMin} دقيقة` : `${diffMin}m ago`;
    const diffHr = Math.round(diffMin / 60);
    if (diffHr < 24) return ar ? `منذ ${diffHr} ساعة` : `${diffHr}h ago`;
    const diffDay = Math.round(diffHr / 24);
    return ar ? `منذ ${arDays(diffDay)}` : `${diffDay}d ago`;
  }
  var MATURITY_WARNING_DAYS = 30;
  var daysUntil = (dateStr) => {
    if (!dateStr) return null;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(dateStr + "T00:00:00");
    return Math.round((target - today) / 864e5);
  };
  var costAddedBetween = (prev, curr) => {
    const had = new Set((prev?.rows || []).map((r) => r.id));
    return (curr?.rows || []).filter((r) => !had.has(r.id) && r.purchaseNav != null).reduce((sum, r) => sum + (r.investmentEgp || 0), 0);
  };
  function computeDay(entry, holdings, navAdjust, asOfDate) {
    const rate = Number(entry.rate) || 0;
    const goldPrice = Number(entry.gold) || 0;
    let egpFundsCurrent = 0, egpFundsInvestment = 0;
    let usdFundsCurrentUsd = 0, usdFundsInvestmentUsd = 0;
    let goldCurrent = 0, goldInvestment = 0;
    let fixedEgp = 0;
    const rows = [];
    const dayStr = asOfDate || entry.date;
    holdings.forEach((h) => {
      if (dayStr && h.purchaseDate && h.purchaseDate > dayStr) return;
      if (h.type === "fund") {
        const navRaw = entry[h.navGroup];
        const nav = navRaw !== void 0 && navRaw !== "" ? Number(navRaw) : h.purchaseNav;
        const distAdjust = navAdjust && navAdjust[h.navGroup] || 0;
        const totalReturnNav = nav + distAdjust;
        const current = h.purchaseNav ? h.investment / h.purchaseNav * nav : 0;
        const currentEgp = h.currency === "USD" ? current * rate : current;
        const investmentEgp = h.currency === "USD" ? h.investment * rate : h.investment;
        const gainPct = h.purchaseNav ? (nav - h.purchaseNav) / h.purchaseNav * 100 : 0;
        const gainWithPayoutsPct = h.purchaseNav ? (totalReturnNav - h.purchaseNav) / h.purchaseNav * 100 : 0;
        const priceFallback = !(navRaw !== void 0 && navRaw !== "");
        if (h.navGroup === "azgold") {
          goldCurrent += currentEgp;
          goldInvestment += investmentEgp;
        } else if (h.currency === "USD") {
          usdFundsCurrentUsd += current;
          usdFundsInvestmentUsd += h.investment;
        } else {
          egpFundsCurrent += current;
          egpFundsInvestment += h.investment;
        }
        rows.push({ id: h.id, label: h.label, value: currentEgp, currency: h.currency, currentNative: current, investmentNative: h.investment, note: h.accumulating ? `${h.currency} fund, price change ${pctStr(gainPct)} since purchase. Excludes cash payouts; payout and income records are incomplete, so this is not a return.` : `${h.currency} fund, ${pctStr(gainPct)} since purchase${priceFallback ? " (price missing for this day, valued at cost)" : ""}`, gainPct, gainWithPayoutsPct, priceFallback, purchaseNav: h.purchaseNav, currentNav: nav, purchaseDate: h.purchaseDate, investmentEgp });
      } else if (h.type === "gold") {
        const current = goldPrice * (h.grams || 0);
        goldCurrent += current;
        goldInvestment += h.investment;
        const gainPct = h.purchaseNav ? (goldPrice - h.purchaseNav) / h.purchaseNav * 100 : 0;
        rows.push({ id: h.id, label: h.label, value: current, currency: "EGP", currentNative: current, investmentNative: h.investment, note: `${h.grams?.toLocaleString() || 0}g, ${pctStr(gainPct)} since purchase`, gainPct, purchaseNav: h.purchaseNav, currentNav: goldPrice, purchaseDate: h.purchaseDate, investmentEgp: h.investment });
      } else {
        const val = h.currency === "USD" ? h.investment * rate : h.investment;
        fixedEgp += val;
        rows.push({ id: h.id, label: h.label, value: val, currency: h.currency, currentNative: h.investment, investmentNative: h.investment, note: h.id === "nbeDist" ? "Recorded total of fund distributions received. It mixes notice-confirmed and inferred amounts, may count one payout twice, and is cash already received, not a verified current holding. Included in totals at the recorded amount." : "Fixed principal", unverified: h.id === "nbeDist", gainPct: 0, purchaseNav: null, currentNav: null, purchaseDate: h.purchaseDate, investmentEgp: val });
      }
    });
    const usdFundsCurrentEgp = usdFundsCurrentUsd * rate;
    const markedToMarket = egpFundsCurrent + usdFundsCurrentEgp + goldCurrent;
    const markedToMarketCost = egpFundsInvestment + usdFundsInvestmentUsd * rate + goldInvestment;
    const totalAssets = markedToMarket + fixedEgp;
    const byCategory = {
      gold: { current: goldCurrent, cost: goldInvestment },
      egpFunds: { current: egpFundsCurrent, cost: egpFundsInvestment },
      usdFunds: { current: usdFundsCurrentEgp, cost: usdFundsInvestmentUsd * rate, currentUsd: usdFundsCurrentUsd, costUsd: usdFundsInvestmentUsd }
    };
    return { ...entry, fallbackCount: rows.filter((r) => r.priceFallback).length, rate, gold: goldPrice, rows, markedToMarket, markedToMarketCost, gain: markedToMarket - markedToMarketCost, totalAssets, byCategory };
  }
  function useSortState(defaultKey, defaultDir = "desc") {
    const [sortKey, setSortKey] = useState(defaultKey);
    const [sortDir, setSortDir] = useState(defaultDir);
    const handleSort = (key) => {
      if (key === sortKey) {
        setSortDir((d) => d === "asc" ? "desc" : "asc");
      } else {
        setSortKey(key);
        setSortDir(defaultDir);
      }
    };
    return [sortKey, sortDir, handleSort];
  }
  function sortRows(rows, key, dir, getVal) {
    if (!key) return rows;
    const factor = dir === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const va = getVal(a, key);
      const vb = getVal(b, key);
      if (va == null && vb == null) return 0;
      if (va == null) return 1;
      if (vb == null) return -1;
      if (typeof va === "string") return va.localeCompare(vb) * factor;
      return (va - vb) * factor;
    });
  }
  function SortTh({ label, sortKey, activeKey, dir, onSort, align = "left" }) {
    const active = sortKey === activeKey;
    return /* @__PURE__ */ jsx(
      "th",
      {
        className: `${align === "right" ? "text-right" : "text-left"} py-2 pr-3 cursor-pointer select-none hover:text-neutral-800 transition-colors`,
        onClick: () => onSort(sortKey),
        children: [
          T(label),
          active && /* @__PURE__ */ jsx("span", { className: "ml-1 text-neutral-400", children: dir === "asc" ? "▲" : "▼" })
        ]
      }
    );
  }
  function BottomTabs() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("analysis-glance");
    const go = (id) => { setOpen(false); scrollToId(id); };
    const tabs = [
      { label: "Summary", id: "analysis-glance", from: "analysis-glance" },
      { label: "Holdings", id: "section-01", from: "section-01" },
      { label: "Owed", id: "section-06", from: "section-06" },
      { label: "Cash flow", id: "section-08", from: "section-08" }
    ];
    useEffect(() => {
      const onScroll = () => {
        const line = window.innerHeight * 0.4;
        const top = (id) => { const el = document.getElementById(id); return el ? el.getBoundingClientRect().top : Infinity; };
        let cur = "analysis-glance";
        if (top("section-01") <= line) cur = "section-01";
        if (top("section-06") <= line) cur = "section-06";
        if (top("section-08") <= line) cur = "section-08";
        if (top("section-10") <= line) cur = "more";
        setActive(cur);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    useEffect(() => {
      if (!open) return;
      const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [open]);
    const tabCls = (on) => `flex-1 min-h-[56px] text-sm border-t-2 ${on ? "border-neutral-900 text-neutral-900 font-semibold" : "border-transparent text-neutral-500"} active:bg-neutral-100`;
    return jsx("div", { className: "md:hidden", children: [
      open && jsx("div", { className: "fixed inset-0 z-40 bg-black/30", onClick: () => setOpen(false) }),
      open && jsx("div", { role: "dialog", "aria-label": "All sections", className: "fixed left-0 right-0 bottom-14 z-50 bg-white border-t border-neutral-300 max-h-[75vh] overflow-y-auto", children: [
        jsx("div", { className: "sticky top-0 bg-white flex items-center justify-between px-5 border-b border-neutral-200", children: [
          jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("All sections") }),
          jsx("button", { onClick: () => setOpen(false), "aria-label": "Close sections", className: "min-h-[48px] px-3 -mr-3 text-sm text-neutral-900 underline", children: T("Close") })
        ] }),
        TOC_SECTIONS.map((t) => jsx("button", { key: t.id, onClick: () => go(t.id), className: "flex items-baseline gap-3 w-full text-left px-5 py-4 border-b border-neutral-100 min-h-[52px]", children: [
          jsx("span", { className: "font-mono text-xs text-neutral-400 tabular-nums shrink-0", children: t.index }),
          jsx("span", { className: "text-base text-neutral-900", children: T(t.title) })
        ] }))
      ] }),
      jsx("nav", { "aria-label": "Main sections", className: "fixed bottom-0 left-0 right-0 z-50 flex bg-white border-t border-neutral-300", children: [
        tabs.map((t) => jsx("button", { key: t.id, onClick: () => go(t.id), "aria-current": active === t.id && !open ? "true" : void 0, className: tabCls(active === t.id && !open), children: T(t.label) })),
        jsx("button", { onClick: () => setOpen((v) => !v), "aria-expanded": open, className: tabCls(open || active === "more"), children: T("More") })
      ] })
    ] });
  }
  function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    const btnRef = useRef(null);
    useEffect(() => {
      const onScroll = () => {
        let covers = false;
        const b = btnRef.current ? btnRef.current.getBoundingClientRect() : null;
        if (b) document.querySelectorAll("[data-fab-avoid]").forEach((el) => { const r = el.getBoundingClientRect(); if (r.bottom > b.top - 4 && r.top < b.bottom + 4 && r.right > b.left - 4 && r.left < b.right + 4) covers = true; });
        setVisible(window.scrollY > 480 && !covers);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref: btnRef,
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Back to top",
        className: `fixed bottom-20 md:bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-neutral-900 text-white shadow-lg flex items-center justify-center transition-opacity duration-200 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: /* @__PURE__ */ jsx(ChevronUp, { size: 20 })
      }
    );
  }
  function LoadingSkeleton() {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 font-sans", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-10", children: [
      /* @__PURE__ */ jsx("div", { className: "skeleton-block", style: { height: 40, width: 260, marginBottom: 14 } }),
      /* @__PURE__ */ jsx("div", { className: "skeleton-block", style: { height: 16, width: "60%", marginBottom: 36 } }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4 mb-8", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: "skeleton-block", style: { height: 90, flex: "1 1 160px" } }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "skeleton-block", style: { height: 240, width: "100%" } })
    ] }) });
  }
  var TOC_SECTIONS = [
    { id: "overview", index: "—", title: "Overview" },
    { id: "section-01", index: "01", title: "Holdings" },
    { id: "section-02", index: "02", title: "What the assets are worth" },
    { id: "section-03", index: "03", title: "Metal: funds vs physical" },
    { id: "section-04", index: "04", title: "Portfolio insights" },
    { id: "section-05", index: "05", title: "Investment, by currency" },
    { id: "section-06", index: "06", title: "What is owed" },
    { id: "properties-section", index: "07", title: "Properties" },
    { id: "section-08", index: "08", title: "Monthly cash flow, by currency" },
    { id: "section-09", index: "09", title: "Currency conversion history" },
    { id: "section-10", index: "10", title: "Live markets" },
    { id: "section-11", index: "11", title: "Economic news" },
    { id: "daily-pricing-form", index: "12", title: "Today's pricing" },
    { id: "section-13", index: "13", title: "History and analysis" }
  ];
  var CHART_RANGES = [
    { key: "1W", days: 7 },
    { key: "1M", days: 30 },
    { key: "3M", days: 90 },
    { key: "6M", days: 180 },
    { key: "1Y", days: 365 },
    { key: "5Y", days: 1825 },
    { key: "All", days: null }
  ];
  function ChartRangeSelector({ value, onChange }) {
    return /* @__PURE__ */ jsx("div", { className: "inline-flex items-center gap-0.5 border border-neutral-300 rounded-full p-1 bg-neutral-50", role: "group", "aria-label": "Chart range", children: CHART_RANGES.map((r) => /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => onChange(r.key),
        className: `text-xs px-3 py-1 rounded-full transition-colors ${value === r.key ? "bg-neutral-900 text-white" : "text-neutral-600 hover:text-neutral-800"}`,
        children: r.key
      },
      r.key
    )) });
  }
  function TableOfContents() {
    return /* @__PURE__ */ jsx("nav", { "aria-label": "Section index", className: "hidden md:block mt-10 mb-8 border border-neutral-300 bg-white", children: [
      /* @__PURE__ */ jsx("div", { className: "px-5 py-3 border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-500", children: T("On this page") }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 px-5 py-2", children: TOC_SECTIONS.map((s) => /* @__PURE__ */ jsx("button", { onClick: () => scrollToId(s.id), className: "flex items-baseline gap-3 w-full text-left py-2 group", children: [
        /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-neutral-400 tabular-nums shrink-0", children: s.index }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-neutral-700 group-hover:text-neutral-900 group-hover:underline", children: T(s.title) })
      ] }, s.id)) })
    ] });
  }
  function SectionHeading({ index, title, dek }) {
    return /* @__PURE__ */ jsx("div", { className: "mb-8 flex items-start gap-4 border-b border-neutral-200 pb-4", children: [
      /* @__PURE__ */ jsx("span", { className: "font-mono text-xs text-neutral-400 pt-1 tabular-nums", children: index }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-serif text-2xl md:text-3xl leading-tight text-neutral-900", children: T(title) }),
        dek && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-neutral-500 max-w-xl", children: T(dek) })
      ] })
    ] });
  }
  function AnimatedNumber({ value, format }) {
    const [display, setDisplay] = useState(0);
    useEffect(() => {
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
    }, [value]);
    return /* @__PURE__ */ jsx("span", { children: format(display) });
  }
  function Stat({ label, value, sub, emphasis }) {
    return /* @__PURE__ */ jsx("div", { className: "border-t border-neutral-200 pt-3 pb-1 min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 truncate", children: T(label) }),
      /* @__PURE__ */ jsx("div", { className: `font-mono tabular-nums mt-1 leading-tight break-words ${emphasis ? "text-xl sm:text-2xl md:text-3xl" : "text-lg"} text-neutral-900`, children: value }),
      sub && /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-1", children: T(sub) })
    ] });
  }
  function LedgerRow({ item, total, isOpen, onToggle, breakdown }) {
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
      isOpen && /* @__PURE__ */ jsx("div", { className: "pb-4 pl-7 pr-2 -mt-1 text-xs text-neutral-500 max-w-xl", children: breakdown && breakdown.length ? /* @__PURE__ */ jsx("ul", { children: breakdown.map((b) => /* @__PURE__ */ jsx("li", { className: "flex justify-between gap-4 py-0.5", children: [
        /* @__PURE__ */ jsx("span", { children: b.unit }),
        /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums", children: egp(b.paid) })
      ] }, b.unit)) }) : [
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
      /* @__PURE__ */ jsx("path", { className: "dial-track", d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`, fill: "none", stroke: "#D4D4D4", strokeWidth: "1" }),
      ticks.map((t) => {
        const a = rad(t / 100 * 180);
        const x1 = cx - (r - 6) * Math.cos(a), y1 = cy - (r - 6) * Math.sin(a);
        const x2 = cx - (r + 2) * Math.cos(a), y2 = cy - (r + 2) * Math.sin(a);
        return /* @__PURE__ */ jsx("line", { className: "dial-tick", x1, y1, x2, y2, stroke: "#A3A3A3", strokeWidth: "1" }, t);
      }),
      /* @__PURE__ */ jsx("path", { className: "dial-needle", d: `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${needleX} ${needleY}`, fill: "none", stroke: "#262626", strokeWidth: "3" }),
      /* @__PURE__ */ jsx("line", { className: "dial-needle", x1: cx, y1: cy, x2: needleX, y2: needleY, stroke: "#262626", strokeWidth: "1", strokeDasharray: "1 3" }),
      /* @__PURE__ */ jsx("circle", { className: "dial-needle", cx, cy, r: "3", fill: "#262626" }),
      /* @__PURE__ */ jsx("text", { className: "dial-score", x: cx, y: cy - 14, textAnchor: "middle", fontFamily: "ui-monospace, monospace", fontSize: "26", fill: "#171717", children: Math.round(displayScore) }),
      /* @__PURE__ */ jsx("text", { className: "dial-caption", x: cx, y: cy + 2, textAnchor: "middle", fontSize: "9", letterSpacing: "1", fill: "#737373", children: T("OUT OF 100") })
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
  function TrendChart({ points, labelFn, valueFn }) {
    const [hoverIdx, setHoverIdx] = useState(null);
    const svgRef = useRef(null);
    if (points.length < 2) {
      return /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-400 py-12 text-center border border-dashed border-neutral-300", children: T("Add a second day to see a trend line.") });
    }
    const w = 720, h = 220, padL = 84, padR = 16, padT = 16, padB = 28;
    const values = points.map((p) => p.value);
    const min = Math.min(...values), max = Math.max(...values);
    const range = max - min || 1;
    const x = (i) => padL + i / (points.length - 1) * (w - padL - padR);
    const y = (v) => padT + (1 - (v - min) / range) * (h - padT - padB);
    const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p.value)}`).join(" ");
    const gridLines = 4;
    const fmtValue = valueFn || fmt;
    const indexFromClientX = (clientX) => {
      const svg = svgRef.current;
      if (!svg) return null;
      const rect = svg.getBoundingClientRect();
      if (!rect.width) return null;
      const relX = (clientX - rect.left) / rect.width * w;
      const idx = Math.round((relX - padL) / (w - padL - padR) * (points.length - 1));
      return Math.max(0, Math.min(points.length - 1, idx));
    };
    const tooltipW = 92, tooltipH = 34;
    const activeX = hoverIdx != null ? x(hoverIdx) : null;
    const activeY = hoverIdx != null ? y(points[hoverIdx].value) : null;
    const flip = activeX != null && activeX + 10 + tooltipW > w - padR;
    const boxX = activeX != null ? (flip ? activeX - 10 - tooltipW : activeX + 10) : 0;
    const boxY = activeY != null ? Math.max(padT, Math.min(activeY - tooltipH / 2, h - padB - tooltipH)) : 0;
    return /* @__PURE__ */ jsx(
      "svg",
      {
        ref: svgRef,
        viewBox: `0 0 ${w} ${h}`,
        className: "w-full h-auto",
        onMouseMove: (e) => setHoverIdx(indexFromClientX(e.clientX)),
        onMouseLeave: () => setHoverIdx(null),
        onTouchStart: (e) => setHoverIdx(indexFromClientX(e.touches[0].clientX)),
        onTouchMove: (e) => setHoverIdx(indexFromClientX(e.touches[0].clientX)),
        children: [
          Array.from({ length: gridLines + 1 }, (_, i) => {
            const gy = padT + i / gridLines * (h - padT - padB);
            const val = max - i / gridLines * range;
            return /* @__PURE__ */ jsx("g", { children: [
              /* @__PURE__ */ jsx("line", { className: "chart-grid-line", x1: padL, y1: gy, x2: w - padR, y2: gy, stroke: "#E5E5E5", strokeWidth: "1" }),
              /* @__PURE__ */ jsx("text", { className: "chart-grid-label", x: padL - 8, y: gy + 3, textAnchor: "end", fontSize: "9", fill: "#A3A3A3", fontFamily: "ui-monospace, monospace", children: fmt(val) })
            ] }, i);
          }),
          /* @__PURE__ */ jsx("path", { className: "chart-line", d: path, fill: "none", stroke: "#171717", strokeWidth: "2" }),
          points.map((p, i) => (points.length <= 20 || i === points.length - 1) && /* @__PURE__ */ jsx("circle", { className: "chart-dot", cx: x(i), cy: y(p.value), r: i === points.length - 1 ? 4 : 2.5, fill: "#171717" }, i)),
          points.map((p, i) => (i === 0 || i === points.length - 1 || points.length <= 8) && /* @__PURE__ */ jsx("text", { className: "chart-axis-label", x: x(i), y: h - 8, textAnchor: "middle", fontSize: "9", fill: "#737373", fontFamily: "ui-monospace, monospace", children: labelFn(p.date) }, `lbl-${i}`)),
          hoverIdx != null && /* @__PURE__ */ jsx("g", { pointerEvents: "none", children: [
            /* @__PURE__ */ jsx("line", { x1: activeX, y1: padT, x2: activeX, y2: h - padB, stroke: "#9CA3AF", strokeWidth: "1", strokeDasharray: "3 3" }),
            /* @__PURE__ */ jsx("circle", { cx: activeX, cy: activeY, r: "5", fill: "#171717", stroke: "#fff", strokeWidth: "1.5" }),
            /* @__PURE__ */ jsx("rect", { x: boxX, y: boxY, width: tooltipW, height: tooltipH, rx: "4", fill: "#171717", fillOpacity: "0.94" }),
            /* @__PURE__ */ jsx("text", { x: boxX + 8, y: boxY + 14, fontSize: "9", fill: "#D4D4D4", fontFamily: "ui-monospace, monospace", children: labelFn(points[hoverIdx].date) }),
            /* @__PURE__ */ jsx("text", { x: boxX + 8, y: boxY + 27, fontSize: "11", fontWeight: "600", fill: "#fff", fontFamily: "ui-monospace, monospace", children: fmtValue(points[hoverIdx].value) })
          ] })
        ]
      }
    );
  }
  function ComparisonChart({ series, labelFn }) {
    const [hoverIdx, setHoverIdx] = useState(null);
    const svgRef = useRef(null);
    const normalized = series.map((s) => {
      const first = s.points[0]?.value;
      if (!first) return { ...s, pct: s.points.map(() => 0) };
      return { ...s, pct: s.points.map((p) => (p.value / first - 1) * 100) };
    });
    if (!normalized.length || normalized[0].points.length < 2) {
      return /* @__PURE__ */ jsx("div", { className: "text-sm text-neutral-400 py-12 text-center border border-dashed border-neutral-300", children: T("Add a second day to compare trends.") });
    }
    const points = normalized[0].points;
    const w = 720, h = 220, padL = 48, padR = 16, padT = 16, padB = 28;
    const allPct = normalized.flatMap((s) => s.pct);
    const min = Math.min(0, ...allPct), max = Math.max(0, ...allPct);
    const range = max - min || 1;
    const x = (i) => padL + i / (points.length - 1) * (w - padL - padR);
    const y = (v) => padT + (1 - (v - min) / range) * (h - padT - padB);
    const gridLines = 4;
    const indexFromClientX = (clientX) => {
      const svg = svgRef.current;
      if (!svg) return null;
      const rect = svg.getBoundingClientRect();
      if (!rect.width) return null;
      const relX = (clientX - rect.left) / rect.width * w;
      const idx = Math.round((relX - padL) / (w - padL - padR) * (points.length - 1));
      return Math.max(0, Math.min(points.length - 1, idx));
    };
    const maxLineLen = Math.max(...normalized.map((s) => `${s.label}: +000.0%`.length));
    const tooltipW = Math.min(300, Math.max(130, maxLineLen * 5 + 24)), lineH = 13, tooltipH = 16 + normalized.length * lineH;
    const activeX = hoverIdx != null ? x(hoverIdx) : null;
    const flip = activeX != null && activeX + 10 + tooltipW > w - padR;
    const boxX = activeX != null ? Math.max(2, Math.min((flip ? activeX - 10 - tooltipW : activeX + 10), w - tooltipW - 2)) : 0;
    const boxY = padT;
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx(
        "svg",
        {
          ref: svgRef,
          viewBox: `0 0 ${w} ${h}`,
          className: "w-full h-auto",
          onMouseMove: (e) => setHoverIdx(indexFromClientX(e.clientX)),
          onMouseLeave: () => setHoverIdx(null),
          onTouchStart: (e) => setHoverIdx(indexFromClientX(e.touches[0].clientX)),
          onTouchMove: (e) => setHoverIdx(indexFromClientX(e.touches[0].clientX)),
          children: [
            Array.from({ length: gridLines + 1 }, (_, i) => {
              const gy = padT + i / gridLines * (h - padT - padB);
              const val = max - i / gridLines * range;
              return /* @__PURE__ */ jsx("g", { children: [
                /* @__PURE__ */ jsx("line", { className: "chart-grid-line", x1: padL, y1: gy, x2: w - padR, y2: gy, stroke: "#E5E5E5", strokeWidth: "1" }),
                /* @__PURE__ */ jsx("text", { className: "chart-grid-label", x: padL - 6, y: gy + 3, textAnchor: "end", fontSize: "9", fill: "#A3A3A3", fontFamily: "ui-monospace, monospace", children: `${val.toFixed(0)}%` })
              ] }, i);
            }),
            normalized.map((s) => {
              const path = s.pct.map((v, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(v)}`).join(" ");
              return /* @__PURE__ */ jsx("path", { d: path, fill: "none", stroke: s.color, strokeWidth: "2" }, s.key);
            }),
            normalized.map((s) => /* @__PURE__ */ jsx("circle", { cx: x(s.pct.length - 1), cy: y(s.pct[s.pct.length - 1]), r: 3.5, fill: s.color }, `dot-${s.key}`)),
            points.map((p, i) => (i === 0 || i === points.length - 1 || points.length <= 8) && /* @__PURE__ */ jsx("text", { className: "chart-axis-label", x: x(i), y: h - 8, textAnchor: "middle", fontSize: "9", fill: "#737373", fontFamily: "ui-monospace, monospace", children: labelFn(p.date) }, `lbl-${i}`)),
            hoverIdx != null && /* @__PURE__ */ jsx("g", { pointerEvents: "none", children: [
              /* @__PURE__ */ jsx("line", { x1: activeX, y1: padT, x2: activeX, y2: h - padB, stroke: "#9CA3AF", strokeWidth: "1", strokeDasharray: "3 3" }),
              normalized.map((s) => /* @__PURE__ */ jsx("circle", { cx: activeX, cy: y(s.pct[hoverIdx]), r: "4", fill: s.color, stroke: "#fff", strokeWidth: "1.2" }, `hoverdot-${s.key}`)),
              /* @__PURE__ */ jsx("rect", { x: boxX, y: boxY, width: tooltipW, height: tooltipH, rx: "4", fill: "#171717", fillOpacity: "0.94" }),
              /* @__PURE__ */ jsx("text", { x: boxX + 8, y: boxY + 13, fontSize: "9", fill: "#D4D4D4", fontFamily: "ui-monospace, monospace", children: labelFn(points[hoverIdx].date) }),
              normalized.map((s, si) => /* @__PURE__ */ jsx("g", { children: [
                /* @__PURE__ */ jsx("circle", { cx: boxX + 11, cy: boxY + 13 + lineH * (si + 1) - 3, r: "3", fill: s.color }),
                /* @__PURE__ */ jsx("text", { x: boxX + 19, y: boxY + 13 + lineH * (si + 1), fontSize: "9.5", fill: "#fff", fontFamily: "ui-monospace, monospace", children: `${s.label}: ${pctStr(s.pct[hoverIdx])}` })
              ] }, `tt-${s.key}`))
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-5 gap-y-1.5 mt-3", children: normalized.map((s) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 text-xs text-neutral-600", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block w-2.5 h-2.5 rounded-full", style: { backgroundColor: s.color } }),
        s.label,
        /* @__PURE__ */ jsx("span", { className: `font-mono tabular-nums ${s.pct[s.pct.length - 1] >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(s.pct[s.pct.length - 1]) })
      ] }, s.key)) })
    ] });
  }
  function TradingViewWidget({ symbols, height = 400, dark = false }) {
    const containerRef = useRef(null);
    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;
      el.innerHTML = '<div class="tradingview-widget-container__widget"></div>';
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.async = true;
      script.text = JSON.stringify({
        symbols,
        chartOnly: false,
        width: "100%",
        height,
        locale: "en",
        colorTheme: dark ? "dark" : "light",
        autosize: false,
        showVolume: false,
        showMA: false,
        hideDateRanges: false,
        hideMarketStatus: false,
        hideSymbolLogo: false,
        scalePosition: "right",
        scaleMode: "Normal",
        fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        fontSize: "10",
        noTimeScale: false,
        valuesTracking: "1",
        changeMode: "price-and-percent",
        chartType: "area",
        gridLineColor: dark ? "rgba(38, 38, 38, 0)" : "rgba(240, 243, 250, 0)",
        lineWidth: 2
      });
      el.appendChild(script);
      return () => {
        el.innerHTML = "";
      };
    }, [JSON.stringify(symbols), height, dark]);
    return /* @__PURE__ */ jsx("div", { className: "tradingview-widget-container", ref: containerRef, style: { minHeight: `${height}px` } });
  }
  function CollapsibleSection({ id, label, summary, children, defaultExpanded = false, className }) {
    const [expanded, setExpanded] = useState(defaultExpanded);
    return /* @__PURE__ */ jsx("div", { id, className, children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setExpanded(!expanded), "aria-expanded": expanded, className: "w-full flex items-center justify-between gap-3 text-xs uppercase tracking-wide border border-neutral-300 px-3 py-2 hover:border-neutral-600 transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ChevronDown, { size: 14, strokeWidth: 1.5, className: `shrink-0 text-neutral-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}` }),
          expanded ? `${T("Hide")} ${T(label)}` : `${T("Show")} ${T(label)}`
        ] }),
        summary ? /* @__PURE__ */ jsx("span", { className: "text-neutral-500 normal-case tracking-normal", children: T(summary) }) : null
      ] }),
      expanded && /* @__PURE__ */ jsx("div", { className: "mt-4", children })
    ] });
  }
  function NewsFeed({ newsFeed }) {
    const [expanded, setExpanded] = useState(false);
    const items = newsFeed?.items || [];
    const VISIBLE_COUNT = 8;
    if (!items.length) {
      return /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500", children: T("No headlines yet — this refreshes automatically a few times a day.") });
    }
    const shown = expanded ? items : items.slice(0, VISIBLE_COUNT);
    return /* @__PURE__ */ jsx("div", { children: [
      newsFeed.updatedAt && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4", children: `Updated ${timeAgo(newsFeed.updatedAt)}.` }),
      /* @__PURE__ */ jsx("ul", { className: "divide-y divide-neutral-200", children: shown.map((item, i) => /* @__PURE__ */ jsx("li", { className: "py-3", children: /* @__PURE__ */ jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", className: "block group", children: [
        /* @__PURE__ */ jsx("div", { dir: "auto", className: "text-sm text-neutral-900 group-hover:underline", children: item.title }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-1", children: `${item.source || "Unknown source"} \xB7 ${timeAgo(item.pubDate)}` })
      ] }) }, item.link || i)) }),
      items.length > VISIBLE_COUNT && /* @__PURE__ */ jsx("button", { onClick: () => setExpanded(!expanded), className: "mt-4 text-xs uppercase tracking-wide text-neutral-500 hover:text-neutral-800 transition-colors", children: expanded ? "Show fewer" : `Show all ${items.length} headlines` })
    ] });
  }
  function TableSearch({ value, onChange, placeholder = "Filter…" }) {
    return /* @__PURE__ */ jsx("div", { className: "relative mb-3 max-w-xs", children: [
      /* @__PURE__ */ jsx(Search, { size: 14, className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" }),
      /* @__PURE__ */ jsx("input", { type: "text", value, onChange: (e) => onChange(e.target.value), placeholder, className: "w-full pl-8 pr-3 py-1.5 text-sm border border-neutral-300 focus:border-neutral-800 focus:outline-none bg-transparent" })
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
      T(label)
    ] });
  }
  function HoldingsTable({ holdings, onChange, currentValueById, currentValueCurrencyById, canEdit = true }) {
    const [sortKey, sortDir, handleSort] = useSortState(null);
    const [query, setQuery] = useState("");
    const update = (id, patch) => onChange(holdings.map((h) => h.id === id ? { ...h, ...patch } : h));
    const remove = (id) => onChange(holdings.filter((h) => h.id !== id));
    const add = () => onChange([...holdings, { id: uid(), type: "fund", label: "New fund", currency: "EGP", investment: 0, purchaseNav: 100, purchaseDate: "", navGroup: "new" + holdings.length, grams: 0 }]);
    const sortedAll = sortRows(holdings, sortKey, sortDir, (h, k) => k === "currentValue" ? currentValueById?.[h.id] ?? 0 : h[k]);
    const sorted = query.trim() ? sortedAll.filter((h) => h.label.toLowerCase().includes(query.trim().toLowerCase())) : sortedAll;
    return /* @__PURE__ */ jsx("div", { children: [
      holdings.length > 5 && /* @__PURE__ */ jsx(TableSearch, { value: query, onChange: setQuery, placeholder: T("Filter holdings…") }),
      query.trim() && sorted.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mb-3", children: T("No holdings match that filter.") }),
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx(SortTh, { label: "Type", sortKey: "type", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Label", sortKey: "label", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Currency", sortKey: "currency", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Purchase date", sortKey: "purchaseDate", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Investment", sortKey: "investment", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Purchase NAV / price", sortKey: "purchaseNav", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Grams", sortKey: "grams", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "NAV group", sortKey: "navGroup", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Current value", sortKey: "currentValue", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: sorted.map((h) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Type"), className: "py-1.5 pr-3 w-28", children: /* @__PURE__ */ jsx(Select, { value: h.type, onChange: (v) => update(h.id, { type: v }), options: ["fund", "gold", "fixed"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Label"), className: "py-1.5 pr-3 min-w-40", children: /* @__PURE__ */ jsx(Cell, { value: h.label, onChange: (v) => update(h.id, { label: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Currency"), className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Select, { value: h.currency, onChange: (v) => update(h.id, { currency: v }), options: ["EGP", "USD"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Purchase date"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "date", value: h.purchaseDate || "", onChange: (v) => update(h.id, { purchaseDate: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Investment"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.investment, onChange: (v) => update(h.id, { investment: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Purchase NAV / price"), className: "py-1.5 pr-3 w-28", children: h.type !== "fixed" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.purchaseNav, onChange: (v) => update(h.id, { purchaseNav: Number(v) || 0 }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Grams"), className: "py-1.5 pr-3 w-20", children: h.type === "gold" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: h.grams, onChange: (v) => update(h.id, { grams: Number(v) || 0 }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("NAV group"), className: "py-1.5 pr-3 w-24", children: h.type === "fund" ? /* @__PURE__ */ jsx(Cell, { value: h.navGroup, onChange: (v) => update(h.id, { navGroup: v }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Current value"), className: "py-1.5 pr-3 w-32 text-right font-mono tabular-nums text-neutral-700", children: currentValueById?.[h.id] != null ? currentValueCurrencyById?.[h.id] === "USD" ? usd(currentValueById[h.id]) : egp(currentValueById[h.id]) : "\u2014" }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(h.id) }) })
        ] }, h.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add holding" }),
      canEdit && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mt-2 max-w-xl", children: T("NAV group links a fund to a field in the daily pricing form \u2014 give two rows the same group (like both CIB Istethmar tranches) to share one NAV input.") })
    ] });
  }
  function LoansTable({ loans, onChange, canEdit = true }) {
    const [sortKey, sortDir, handleSort] = useSortState(null);
    const update = (id, patch) => onChange(loans.map((l) => l.id === id ? { ...l, ...patch } : l));
    const remove = (id) => onChange(loans.filter((l) => l.id !== id));
    const add = () => onChange([...loans, { id: uid(), label: "New loan", currency: "EGP", amount: 0, rate: "", installment: 0 }]);
    const sorted = sortRows(loans, sortKey, sortDir, (l, k) => l[k]);
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx(SortTh, { label: "Label", sortKey: "label", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Currency", sortKey: "currency", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Amount", sortKey: "amount", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Rate %", sortKey: "rate", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Monthly installment", sortKey: "installment", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: sorted.map((l) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Label"), className: "py-1.5 pr-3 min-w-48", children: /* @__PURE__ */ jsx(Cell, { value: l.label, onChange: (v) => update(l.id, { label: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Currency"), className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Select, { value: l.currency, onChange: (v) => update(l.id, { currency: v }), options: ["EGP", "USD"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Amount"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.amount, onChange: (v) => update(l.id, { amount: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Rate %"), className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.rate, onChange: (v) => update(l.id, { rate: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Monthly installment"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: l.installment, onChange: (v) => update(l.id, { installment: Number(v) || 0 }), readOnly: !canEdit }) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(l.id) }) })
        ] }, l.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add loan" })
    ] });
  }
  function OfficeUnitsTable({ units, onChange, canEdit = true, installments, payments }) {
    const [sortKey, sortDir, handleSort] = useSortState("totalPrice");
    const update = (unit, patch) => onChange(units.map((u) => u.unit === unit ? { ...u, ...patch } : u));
    const remove = (unit) => onChange(units.filter((u) => u.unit !== unit));
    const add = () => onChange([...units, { unit: `New unit ${units.length + 1}`, size: "", parking: 0, totalPrice: 0, advance: 0, remaining: 0 }]);
    const hasSchedule = (u) => !!installments && installments.some((row) => row.byUnit && u.unit in row.byUnit);
    const paidSoFar = (u) => hasSchedule(u) ? officeUnitPaidSoFar(u.unit, installments, payments) : u.advance || 0;
    const effectiveRemaining = (u) => hasSchedule(u) ? Math.max(0, u.totalPrice - paidSoFar(u)) : u.remaining || 0;
    const totals = units.reduce((s, u) => ({
      totalPrice: s.totalPrice + u.totalPrice,
      advance: s.advance + paidSoFar(u),
      remaining: s.remaining + effectiveRemaining(u)
    }), { totalPrice: 0, advance: 0, remaining: 0 });
    const sorted = sortRows(units, sortKey, sortDir, (u, k) => k === "remaining" ? effectiveRemaining(u) : k === "advance" ? paidSoFar(u) : u[k]);
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx(SortTh, { label: "Unit", sortKey: "unit", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Size") }),
          /* @__PURE__ */ jsx(SortTh, { label: "Parking", sortKey: "parking", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Total price", sortKey: "totalPrice", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Paid so far", sortKey: "advance", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Remaining installments", sortKey: "remaining", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: sorted.map((u) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Unit"), className: "py-1.5 pr-3 font-mono text-xs min-w-32", children: /* @__PURE__ */ jsx(Cell, { value: u.unit, onChange: (v) => update(u.unit, { unit: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Size"), className: "py-1.5 pr-3 w-24", children: /* @__PURE__ */ jsx(Cell, { value: u.size, onChange: (v) => update(u.unit, { size: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Parking"), className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: u.parking, onChange: (v) => update(u.unit, { parking: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Total price"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: u.totalPrice, onChange: (v) => update(u.unit, { totalPrice: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Paid so far"), className: "py-1.5 pr-3 w-32", children: hasSchedule(u) ? /* @__PURE__ */ jsx("div", { className: "text-right font-mono tabular-nums", title: T("Computed from the installment schedule below — sum of everything marked paid. Not editable directly."), children: egp(paidSoFar(u)) }) : /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: u.advance, onChange: (v) => update(u.unit, { advance: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Remaining installments"), className: "py-1.5 pr-3 w-32", children: hasSchedule(u) ? /* @__PURE__ */ jsx("div", { className: "text-right font-mono tabular-nums", title: T("Total price minus what's marked paid — not editable directly."), children: egp(effectiveRemaining(u)) }) : /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: u.remaining, onChange: (v) => update(u.unit, { remaining: Number(v) || 0 }), readOnly: !canEdit }) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(u.unit) }) })
        ] }, u.unit)) }),
        /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${units.length})` }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Total price"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.totalPrice) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Paid so far"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.advance) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Remaining installments"), className: "py-2 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(totals.remaining) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-2" })
        ] }) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add property" })
    ] });
  }
  function OfficeReceiptUpload({ installments, units, payments, onMarkPaid, canEdit }) {
    const [ocrBusy, setOcrBusy] = useState(false);
    const [ocrError, setOcrError] = useState("");
    const [preview, setPreview] = useState(null);
    const [applying, setApplying] = useState(false);
    const inputRef = useRef(null);
    if (!canEdit) return null;
    const unitLabels = units.map((u) => u.unit);
    const handleFile = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      setOcrError("");
      setPreview(null);
      setOcrBusy(true);
      try {
        await ensureTesseract();
        if (!window.Tesseract) throw new Error("Receipt reader did not load — check your connection and try again.");
        const worker = await window.Tesseract.createWorker("eng+ara");
        await worker.setParameters({ tessedit_pageseg_mode: "4" });
        let text = "";
        try {
          const { data } = await worker.recognize(file);
          text = data?.text || "";
        } finally {
          await worker.terminate();
        }
        const { date, matchedUnits, matchedRow } = parseOfficeReceiptText(text, installments, unitLabels);
        if (!date) {
          setOcrError("Could not detect a due date on that receipt — try a clearer photo, or mark it manually below.");
          return;
        }
        if (!matchedRow) {
          setOcrError(`Detected date ${fmtDate(date)}, but that isn't a known installment date — check the receipt, or mark it manually below.`);
          return;
        }
        if (!matchedUnits.length) {
          setOcrError(`Detected date ${fmtDate(date)}, but no unit codes were recognized on the receipt — check the photo, or mark it manually below.`);
          return;
        }
        const dk = sanitizeFbKey(date);
        setPreview({
          date,
          amount: matchedRow.amount,
          matchedUnits,
          checked: Object.fromEntries(matchedUnits.map((u) => [u, true])),
          alreadyPaid: matchedUnits.filter((u) => !!payments?.[dk]?.[sanitizeFbKey(u)])
        });
      } catch (err) {
        setOcrError(err.message || "Could not read that receipt.");
      } finally {
        setOcrBusy(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    const handleApply = async () => {
      if (!preview) return;
      setApplying(true);
      const toMark = preview.matchedUnits.filter((u) => preview.checked[u]);
      await Promise.all(toMark.map((u) => onMarkPaid(preview.date, u, true)));
      setApplying(false);
      setPreview(null);
    };
    const toggleChecked = (unit) => setPreview((p) => ({ ...p, checked: { ...p.checked, [unit]: !p.checked[unit] } }));
    return /* @__PURE__ */ jsx("div", { className: "mb-6 border border-dashed border-neutral-300 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Upload payment receipt") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 max-w-md", children: T("A photo of the bank transfer receipt — reads the due date and which units it covers, then marks them paid after you confirm.") })
        ] }),
        /* @__PURE__ */ jsx("label", { className: `shrink-0 cursor-pointer text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors ${ocrBusy ? "opacity-40 pointer-events-none" : ""}`, children: [
          ocrBusy ? /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5", children: [/* @__PURE__ */ jsx(Loader2, { size: 12, className: "animate-spin" }), "Reading receipt…"] }) : "Choose photo",
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept: "image/*", onChange: handleFile, disabled: ocrBusy, className: "hidden" })
        ] })
      ] }),
      ocrError && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-3", children: ocrError }),
      preview && /* @__PURE__ */ jsx("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-700", children: [
          "Detected ",
          /* @__PURE__ */ jsx("b", { children: fmtDate(preview.date) }),
          `, ${egp(preview.amount)} total. Units mentioned:`
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 space-y-1.5", children: preview.matchedUnits.map((u) => /* @__PURE__ */ jsx("label", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: !!preview.checked[u], onChange: () => toggleChecked(u) }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-neutral-900", children: u }),
          preview.alreadyPaid.includes(u) && /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: T("(already marked paid)") })
        ] }, u)) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handleApply, disabled: applying || !preview.matchedUnits.some((u) => preview.checked[u]), className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: applying ? "Saving…" : `Mark ${preview.matchedUnits.filter((u) => preview.checked[u]).length} paid` }),
          /* @__PURE__ */ jsx("button", { onClick: () => setPreview(null), className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Cancel") })
        ] })
      ] })
    ] });
  }
  function NbeDistributionUpload({ currentTotal, onApply, canEdit }) {
    const [ocrBusy, setOcrBusy] = useState(false);
    const [ocrError, setOcrError] = useState("");
    const [preview, setPreview] = useState(null);
    const [applying, setApplying] = useState(false);
    const inputRef = useRef(null);
    if (!canEdit) return null;
    const handleFile = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      setOcrError("");
      setPreview(null);
      setOcrBusy(true);
      try {
        await ensureTesseract();
        if (!window.Tesseract) throw new Error("Receipt reader did not load — check your connection and try again.");
        const worker = await window.Tesseract.createWorker("eng+ara");
        await worker.setParameters({ tessedit_pageseg_mode: "4" });
        let text = "";
        try {
          const { data } = await worker.recognize(file);
          text = data?.text || "";
        } finally {
          await worker.terminate();
        }
        const amount = parseDistributionAmount(text);
        if (!amount) {
          setOcrError("Could not detect an amount on that image — enter it manually below.");
          setPreview({ amount: 0 });
          return;
        }
        setPreview({ amount });
      } catch (err) {
        setOcrError(err.message || "Could not read that image.");
      } finally {
        setOcrBusy(false);
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    const handleApply = async () => {
      if (!preview || !preview.amount) return;
      setApplying(true);
      await onApply(preview.amount);
      setApplying(false);
      setPreview(null);
    };
    return /* @__PURE__ */ jsx("div", { className: "mb-6 border border-dashed border-neutral-300 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Upload NBE distribution notice") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 max-w-md", children: `A photo of the fund distribution notification — reads the amount, then adds it to the running total (currently ${egp(currentTotal)}) after you confirm.` })
        ] }),
        /* @__PURE__ */ jsx("label", { className: `shrink-0 cursor-pointer text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors ${ocrBusy ? "opacity-40 pointer-events-none" : ""}`, children: [
          ocrBusy ? /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5", children: [/* @__PURE__ */ jsx(Loader2, { size: 12, className: "animate-spin" }), "Reading…"] }) : "Choose photo",
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept: "image/*", onChange: handleFile, disabled: ocrBusy, className: "hidden" })
        ] })
      ] }),
      ocrError && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-3", children: ocrError }),
      preview && /* @__PURE__ */ jsx("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs text-neutral-700 flex items-center gap-2 flex-wrap", children: [
          "Detected amount:",
          /* @__PURE__ */ jsx(Cell, { type: "number", value: preview.amount, onChange: (v) => setPreview((p) => ({ ...p, amount: Number(v) || 0 })), width: "w-32", align: "right" }),
          "EGP — check it against the photo before adding."
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handleApply, disabled: applying || !preview.amount, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: applying ? "Saving…" : `Add ${egp(preview.amount)} to total` }),
          /* @__PURE__ */ jsx("button", { onClick: () => setPreview(null), className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Cancel") })
        ] })
      ] })
    ] });
  }
  function PropertySummaryCard({ unit, onChangeField, canEdit, paidSoFar, remaining }) {
    return /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4 mb-4 grid grid-cols-2 sm:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-2 sm:col-span-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Project") }),
        /* @__PURE__ */ jsx(Cell, { value: unit.project || "", onChange: (v) => onChangeField({ project: v }), readOnly: !canEdit, width: "w-full mt-1" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Type") }),
        /* @__PURE__ */ jsx(Cell, { value: unit.size, onChange: (v) => onChangeField({ size: v }), readOnly: !canEdit, width: "w-full mt-1" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Total price") }),
        /* @__PURE__ */ jsx(Cell, { type: "number", value: unit.totalPrice, onChange: (v) => onChangeField({ totalPrice: Number(v) || 0 }), readOnly: !canEdit, width: "w-full mt-1" })
      ] }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Paid so far") }),
        /* @__PURE__ */ jsx("div", { className: "font-mono tabular-nums text-sm mt-1", children: egp(paidSoFar) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Remaining") }),
        /* @__PURE__ */ jsx("div", { className: "font-mono tabular-nums text-sm mt-1", children: egp(remaining) })
      ] })
    ] });
  }
  function filterScheduleForUnits(schedule, unitNames) {
    const nameSet = new Set(unitNames);
    return schedule.map((row) => {
      const byUnit = Object.fromEntries(Object.entries(row.byUnit || {}).filter(([u]) => nameSet.has(u)));
      if (!Object.keys(byUnit).length) return null;
      return { date: row.date, amount: Object.values(byUnit).reduce((s, v) => s + v, 0), byUnit };
    }).filter(Boolean);
  }
  function domId(s) {
    return String(s).replace(/[^a-zA-Z0-9_-]/g, "-");
  }
  function scrollToId(id) {
    if (!id || typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function openInstallmentTarget(date, units) {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    window.dispatchEvent(new CustomEvent("pf-open-installment", { detail: { date, units } }));
    const find = () => {
      for (const u of units) {
        const c = document.getElementById(`property-${domId(u)}`);
        const r = c && c.querySelector(`tr[data-inst-date="${date}"]`);
        if (r) return r;
      }
      const g = document.getElementById("office-units-schedule");
      return g && g.querySelector(`tr[data-inst-date="${date}"]`);
    };
    const go = (flash) => {
      const el = find();
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (flash) {
        el.style.transition = "background-color 0.6s";
        el.style.backgroundColor = "#fde68a";
        setTimeout(() => { el.style.backgroundColor = ""; }, 2500);
      }
      return true;
    };
    setTimeout(() => {
      if (!go(true)) {
        const c = units.map((u) => document.getElementById(`property-${domId(u)}`)).find(Boolean) || document.getElementById("office-units-schedule") || document.getElementById("properties-section");
        if (c) c.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 250);
  }
  function InstallmentAlertSummary({ row, payments, onClose }) {
    const dialogRef = useRef(null);
    useEffect(() => {
      const dialog = dialogRef.current;
      if (dialog && !dialog.open) dialog.showModal();
      return () => { if (dialog && dialog.open) dialog.close(); };
    }, []);
    const entries = Object.entries(row.byUnit || {});
    const dk = sanitizeFbKey(row.date);
    return jsx("dialog", { ref: dialogRef, "aria-labelledby": "installment-alert-title", onCancel: onClose,
      onClick: (e) => { if (e.target === e.currentTarget) { const r = e.currentTarget.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose(); } },
      className: "installment-alert-dialog bg-white text-neutral-900 border border-neutral-300 p-0", children: [
        jsx("div", { className: "p-5 border-b border-neutral-200 flex items-start justify-between gap-4", children: [
          jsx("div", { children: [jsx("h2", { id: "installment-alert-title", className: "font-serif text-xl", children: T("Installments in this alert") }), jsx("p", { className: "text-sm text-neutral-500 mt-1", children: `Due ${fmtDate(row.date)}` })] }),
          jsx("button", { type: "button", onClick: onClose, className: "text-xs underline p-2", children: T("Close") })
        ] }),
        jsx("div", { className: "p-5", children: [
          jsx("p", { className: "text-xs text-neutral-500 mb-3", children: `${entries.length} property installment${entries.length === 1 ? "" : "s"}. View each schedule below.` }),
          ...entries.map(([unit, amount]) => {
            const paid = !!payments?.[dk]?.[sanitizeFbKey(unit)];
            return jsx("div", { className: "border border-neutral-200 p-4 mb-3", children: [
              jsx("h3", { className: "text-sm font-medium break-words", children: unit }),
              jsx("div", { className: "flex flex-wrap items-center justify-between gap-2 mt-2", children: [jsx("span", { className: "font-mono text-base tabular-nums", children: egp(amount) }), jsx("span", { className: `text-xs uppercase ${paid ? "text-emerald-700" : "text-neutral-500"}`, children: paid ? "Paid" : "Not paid" })] }),
              jsx("button", { type: "button", onClick: () => { onClose(); openInstallmentTarget(row.date, [unit]); }, "aria-label": `View schedule for ${unit}`, className: "text-xs underline py-2 mt-2", children: T("View this installment in schedule") })
            ] }, unit);
          }),
          jsx("div", { className: "border-t border-neutral-300 pt-3 flex flex-wrap items-center justify-between gap-2", children: [jsx("span", { className: "text-xs uppercase tracking-wide", children: T("Total in this alert") }), jsx("span", { className: "font-mono text-lg tabular-nums", children: egp(row.amount) })] })
        ] })
      ] });
  }
  function PropertyScheduleGroup({ id, title, unitNames, units, installments, installmentPayments, onToggleInstallment, maintenance, maintenancePayments, onToggleMaintenance, canEdit }) {
    const groupUnits = useMemo(() => units.filter((u) => unitNames.includes(u.unit)), [units, unitNames]);
    const groupInstallments = useMemo(() => filterScheduleForUnits(installments, unitNames), [installments, unitNames]);
    const groupMaintenance = useMemo(() => filterScheduleForUnits(maintenance, unitNames), [maintenance, unitNames]);
    return /* @__PURE__ */ jsx("div", { id, className: "mt-8", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-3", children: title }),
      /* @__PURE__ */ jsx(OfficeInstallmentScheduleTable, { installments: groupInstallments, units: groupUnits, payments: installmentPayments, onTogglePayment: onToggleInstallment, canEdit, label: "installment schedule" }),
      groupMaintenance.length > 0 && /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(OfficeInstallmentScheduleTable, { installments: groupMaintenance, units: groupUnits, payments: maintenancePayments, onTogglePayment: onToggleMaintenance, canEdit, label: "maintenance schedule" }) })
    ] });
  }
  function OfficeInstallmentScheduleTable({ installments, units, payments, onTogglePayment, canEdit = true, label = "installment schedule" }) {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
      if (label !== "installment schedule") return;
      const onOpen = (e) => {
        const d = e.detail || {};
        if (installments.some((row) => row.date === d.date && Object.keys(row.byUnit || {}).some((u) => (d.units || []).includes(u)))) setExpanded(true);
      };
      window.addEventListener("pf-open-installment", onOpen);
      return () => window.removeEventListener("pf-open-installment", onOpen);
    }, [installments, label]);
    const unitLabels = useMemo(() => {
      const known = units.map((u) => u.unit).filter((u) => installments.some((row) => row.byUnit && u in row.byUnit));
      const extra = [];
      const seen = new Set(known);
      installments.forEach((row) => {
        Object.keys(row.byUnit || {}).forEach((k) => {
          if (!seen.has(k)) { seen.add(k); extra.push(k); }
        });
      });
      return [...known, ...extra];
    }, [installments, units]);
    if (!unitLabels.length) return null;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const totals = { amount: 0 };
    unitLabels.forEach((u) => { totals[u] = 0; });
    installments.forEach((row) => {
      totals.amount += row.amount || 0;
      unitLabels.forEach((u) => { totals[u] += row.byUnit?.[u] || 0; });
    });
    const paidDatesCount = installments.filter((row) => {
      const dk = sanitizeFbKey(row.date);
      const rowUnits = Object.keys(row.byUnit || {});
      return rowUnits.length > 0 && rowUnits.every((u) => !!payments?.[dk]?.[sanitizeFbKey(u)]);
    }).length;
    return /* @__PURE__ */ jsx("div", { children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setExpanded(!expanded), "aria-expanded": expanded, className: "w-full flex items-center justify-between gap-3 text-xs uppercase tracking-wide border border-neutral-300 px-3 py-2 hover:border-neutral-600 transition-colors", children: [
        /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ChevronDown, { size: 14, strokeWidth: 1.5, className: `shrink-0 text-neutral-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}` }),
          expanded ? `${T("Hide")} ${T(label)}` : `${T("Show")} ${T(label)}`
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-neutral-500 normal-case tracking-normal", children: `${paidDatesCount} of ${installments.length} dates fully paid` })
      ] }),
      expanded && /* @__PURE__ */ jsx("div", { className: "mt-4 rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Date") }),
        ...unitLabels.map((u) => /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: u }, u)),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Total") })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: installments.map((row) => {
        const dk = sanitizeFbKey(row.date);
        const past = row.date < todayStr;
        return /* @__PURE__ */ jsx("tr", { "data-inst-date": label === "installment schedule" ? row.date : void 0, className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Date"), className: `py-1.5 pr-3 ${past ? "text-neutral-500" : "text-neutral-900"}`, children: fmtDate(row.date) }),
          ...unitLabels.map((u) => {
            const amount = row.byUnit?.[u];
            const uk = sanitizeFbKey(u);
            const paid = !!payments?.[dk]?.[uk];
            return /* @__PURE__ */ jsx("td", { "data-label": u, className: "py-1.5 pr-3 text-right", children: amount == null ? /* @__PURE__ */ jsx("span", { className: "text-neutral-300", children: "—" }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col items-end gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums", children: egp(amount) }),
              canEdit ? /* @__PURE__ */ jsx("button", { onClick: () => onTogglePayment(row.date, u), className: `text-[10px] uppercase tracking-wide px-1.5 py-0.5 border rounded ${paid ? "border-emerald-300 text-emerald-700 bg-emerald-50" : "border-neutral-300 text-neutral-400"}`, children: paid ? "Paid" : "Not paid" }) : /* @__PURE__ */ jsx("span", { className: `text-[10px] uppercase tracking-wide ${paid ? "text-emerald-700" : "text-neutral-400"}`, children: paid ? "Paid" : "Not paid" })
            ] }) }, u);
          }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Total"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(row.amount) })
        ] }, row.date);
      }) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: T("Total") }),
        ...unitLabels.map((u) => /* @__PURE__ */ jsx("td", { "data-label": u, className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals[u]) }, u)),
        /* @__PURE__ */ jsx("td", { "data-label": T("Total"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.amount) })
      ] }) })
    ] }) })
    ] });
  }
  function LoanFacilitiesTable({ facilities }) {
    const [sortKey, sortDir, handleSort] = useSortState("outstanding");
    const [query, setQuery] = useState("");
    const totals = facilities.reduce((s, f) => ({
      amountFinanced: s.amountFinanced + f.amountFinanced,
      outstanding: s.outstanding + f.outstanding,
      installment: s.installment + f.installment
    }), { amountFinanced: 0, outstanding: 0, installment: 0 });
    const sortedAll = sortRows(facilities, sortKey, sortDir, (f, k) => f[k]);
    const sorted = query.trim() ? sortedAll.filter((f) => f.label.toLowerCase().includes(query.trim().toLowerCase())) : sortedAll;
    return /* @__PURE__ */ jsx("div", { children: [
      facilities.length > 5 && /* @__PURE__ */ jsx(TableSearch, { value: query, onChange: setQuery, placeholder: T("Filter facilities…") }),
      query.trim() && sorted.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mb-3", children: T("No facilities match that filter.") }),
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx(SortTh, { label: "Facility", sortKey: "label", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
        /* @__PURE__ */ jsx(SortTh, { label: "Rate %", sortKey: "rate", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Amount financed", sortKey: "amountFinanced", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Outstanding balance", sortKey: "outstanding", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Monthly installment", sortKey: "installment", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Opened", sortKey: "openDate", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
        /* @__PURE__ */ jsx(SortTh, { label: "Matures", sortKey: "maturityDate", activeKey: sortKey, dir: sortDir, onSort: handleSort })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: sorted.map((f) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
        /* @__PURE__ */ jsx("td", { "data-label": T("Facility"), className: "py-1.5 pr-3 font-mono text-xs", children: f.label }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Rate %"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: f.rate.toFixed(1) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Amount financed"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(f.amountFinanced) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Outstanding balance"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(f.outstanding) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Monthly installment"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(f.installment) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Opened"), className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(f.openDate) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Matures"), className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(f.maturityDate) })
      ] }, f.label)) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${facilities.length})` }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Amount financed"), className: "py-2 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(totals.amountFinanced) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Outstanding balance"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.outstanding) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Monthly installment"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.installment) }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" })
      ] }) })
      ] }) })
    ] });
  }
  function LoanStatementUpload({ facilities, onApply, canEdit }) {
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const inputRef = useRef(null);
    if (!canEdit) return null;
    const handleFile = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      setError("");
      setPreview(null);
      try {
        await ensureXLSX();
        if (!window.XLSX) throw new Error("Spreadsheet reader did not load — check your connection and try again.");
        const buf = await file.arrayBuffer();
        const wb = window.XLSX.read(buf, { type: "array" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const grid = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        const headerRowIdx = grid.findIndex((r) => r.some((cell) => String(cell || "").trim() === "Account Number"));
        if (headerRowIdx === -1) throw new Error('Could not find a header row with "Account Number" in this file.');
        const rows = window.XLSX.utils.sheet_to_json(sheet, { range: headerRowIdx, defval: null });
        const result = matchLoanStatementRows(rows, facilities);
        setPreview(result);
      } catch (err) {
        setError(err.message || "Could not read that file.");
      } finally {
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    const handleApply = async () => {
      if (!preview) return;
      setBusy(true);
      await onApply(preview.updatedFacilities);
      setBusy(false);
      setPreview(null);
    };
    const fmtVal = (key, v) => key === "openDate" || key === "maturityDate" ? fmtDate(v) : key === "rate" ? `${Number(v).toFixed(2)}%` : egp(v);
    return /* @__PURE__ */ jsx("div", { className: "mb-6 border border-dashed border-neutral-300 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Upload loan statement") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 max-w-md", children: T("An .xlsx export with Account Number, Outstanding Balance, Installment Amount columns — matches each row to a facility by the last 4 digits of its account number and shows what changed before saving anything.") })
        ] }),
        /* @__PURE__ */ jsx("label", { className: "shrink-0 cursor-pointer text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors", children: [
          "Choose file",
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept: ".xlsx,.xls", onChange: handleFile, className: "hidden" })
        ] })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-3", children: error }),
      preview && /* @__PURE__ */ jsx("div", { className: "mt-4", children: [
        preview.changes.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500", children: T("No differences found — every matched facility already matches this file.") }) : /* @__PURE__ */ jsx("div", { className: "space-y-2", children: preview.changes.map((c) => /* @__PURE__ */ jsx("div", { className: "text-xs border-b border-neutral-100 pb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-neutral-900", children: c.label }),
          ...c.fields.map((f) => /* @__PURE__ */ jsx("div", { className: "text-neutral-500 pl-3", children: `${f.label}: ${fmtVal(f.key, f.oldVal)} → ${fmtVal(f.key, f.newVal)}` }))
        ] }, c.label)) }),
        preview.unmatchedRows.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-amber-700 mt-3", children: `${preview.unmatchedRows.length} row(s) in the file did not match any existing facility by account number — not added automatically.` }),
        preview.missingFacilities.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-1", children: `${preview.missingFacilities.length} existing facilit${preview.missingFacilities.length === 1 ? "y" : "ies"} not present in this file — left unchanged: ${preview.missingFacilities.map((f) => f.label).join(", ")}.` }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handleApply, disabled: busy || preview.changes.length === 0, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: busy ? "Saving…" : `Apply ${preview.changes.length} update${preview.changes.length === 1 ? "" : "s"}` }),
          /* @__PURE__ */ jsx("button", { onClick: () => setPreview(null), className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Cancel") })
        ] })
      ] })
    ] });
  }
  function CertificateStatementUpload({ certificates, onApply, canEdit }) {
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const inputRef = useRef(null);
    if (!canEdit) return null;
    const handleFile = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      setError("");
      setPreview(null);
      try {
        await ensureXLSX();
        if (!window.XLSX) throw new Error("Spreadsheet reader did not load — check your connection and try again.");
        const buf = await file.arrayBuffer();
        const wb = window.XLSX.read(buf, { type: "array" });
        const sheet = wb.Sheets[wb.SheetNames[0]];
        const grid = window.XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
        const headerRowIdx = grid.findIndex((r) => r.some((cell) => String(cell || "").trim() === "Account Number"));
        if (headerRowIdx === -1) throw new Error('Could not find a header row with "Account Number" in this file.');
        const rows = window.XLSX.utils.sheet_to_json(sheet, { range: headerRowIdx, defval: null });
        const result = matchCertificateStatementRows(rows, certificates);
        setPreview(result);
      } catch (err) {
        setError(err.message || "Could not read that file.");
      } finally {
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    const handleApply = async () => {
      if (!preview) return;
      setBusy(true);
      await onApply(preview.updatedCertificates);
      setBusy(false);
      setPreview(null);
    };
    const fmtVal = (key, v) => key === "maturityDate" ? fmtDate(v) : `${Number(v).toFixed(2)}%`;
    return /* @__PURE__ */ jsx("div", { className: "mb-6 border border-dashed border-neutral-300 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Upload certificate statement") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 max-w-md", children: T("An .xlsx export with Amount, Open Date, Interest Rate, Maturity Date columns — matches each row to a certificate by amount and open date (certificates have no unique account number, unlike loans), and only updates rate or maturity date. New or closed certificates are flagged, never added or removed automatically.") })
        ] }),
        /* @__PURE__ */ jsx("label", { className: "shrink-0 cursor-pointer text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors", children: [
          "Choose file",
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept: ".xlsx,.xls", onChange: handleFile, className: "hidden" })
        ] })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-3", children: error }),
      preview && /* @__PURE__ */ jsx("div", { className: "mt-4", children: [
        preview.changes.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500", children: T("No differences found — every matched certificate already matches this file.") }) : /* @__PURE__ */ jsx("div", { className: "space-y-2", children: preview.changes.map((c, i) => /* @__PURE__ */ jsx("div", { className: "text-xs border-b border-neutral-100 pb-2", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-neutral-900", children: c.label }),
          ...c.fields.map((f) => /* @__PURE__ */ jsx("div", { className: "text-neutral-500 pl-3", children: `${f.label}: ${fmtVal(f.key, f.oldVal)} → ${fmtVal(f.key, f.newVal)}` }))
        ] }, i)) }),
        preview.unmatchedRows.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-amber-700 mt-3", children: `${preview.unmatchedRows.length} row(s) in the file did not match any existing certificate by amount + open date — could be a new certificate, not added automatically.` }),
        preview.skippedRows.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mt-1", children: `${preview.skippedRows.length} row(s) skipped — not a Certificate Deposit (e.g. a time deposit), out of scope here.` }),
        preview.missingCertificates.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-1", children: `${preview.missingCertificates.length} existing certificate${preview.missingCertificates.length === 1 ? "" : "s"} not present in this file — left unchanged: ${preview.missingCertificates.map((c) => c.label).join(", ")}.` }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handleApply, disabled: busy || preview.changes.length === 0, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: busy ? "Saving…" : `Apply ${preview.changes.length} update${preview.changes.length === 1 ? "" : "s"}` }),
          /* @__PURE__ */ jsx("button", { onClick: () => setPreview(null), className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Cancel") })
        ] })
      ] })
    ] });
  }
  function OfficeDealUpload({ units, installments, onApplyUnits, onApplyInstallments, canEdit }) {
    const [preview, setPreview] = useState(null);
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);
    const inputRef = useRef(null);
    if (!canEdit) return null;
    const handleFile = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      setError("");
      setPreview(null);
      try {
        await ensureXLSX();
        if (!window.XLSX) throw new Error("Spreadsheet reader did not load — check your connection and try again.");
        const buf = await file.arrayBuffer();
        const wb = window.XLSX.read(buf, { type: "array" });
        const unitLabels = units.map((u) => u.unit);
        let unitRows = null, installmentRows = null;
        wb.SheetNames.forEach((name) => {
          const grid = window.XLSX.utils.sheet_to_json(wb.Sheets[name], { header: 1, defval: null });
          if (!unitRows) unitRows = parseOfficeUnitsSheet(grid);
          if (!installmentRows) installmentRows = parseOfficeInstallmentsSheet(grid, unitLabels);
        });
        if (!unitRows && !installmentRows) throw new Error('Could not find an "Office no" units table or a "Total installment" schedule in this file.');
        const unitsResult = unitRows ? matchOfficeUnitsRows(unitRows, units) : null;
        const installmentsResult = installmentRows ? matchOfficeInstallmentsRows(installmentRows, installments) : null;
        setPreview({ unitsResult, installmentsResult });
      } catch (err) {
        setError(err.message || "Could not read that file.");
      } finally {
        if (inputRef.current) inputRef.current.value = "";
      }
    };
    const handleApply = async () => {
      if (!preview) return;
      setBusy(true);
      if (preview.unitsResult) await onApplyUnits(preview.unitsResult.updatedUnits);
      if (preview.installmentsResult) await onApplyInstallments(preview.installmentsResult.updatedInstallments);
      setBusy(false);
      setPreview(null);
    };
    const fmtVal = (key, v) => key === "totalPrice" || key === "advance" || key === "remaining" || key === "amount" ? egp(v) : String(v);
    const unitChanges = preview?.unitsResult?.changes || [];
    const instChanges = preview?.installmentsResult?.changes || [];
    const instNewRows = preview?.installmentsResult?.newRows || [];
    const totalUpdates = unitChanges.length + instChanges.length + instNewRows.length;
    return /* @__PURE__ */ jsx("div", { className: "mb-6 border border-dashed border-neutral-300 p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Upload office deal sheet") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 max-w-md", children: T("The .xlsx with the office units table and the installment schedule (both sheets read from one file) — matches units by office number and installments by due date, and shows what changed before saving anything.") })
        ] }),
        /* @__PURE__ */ jsx("label", { className: "shrink-0 cursor-pointer text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors", children: [
          "Choose file",
          /* @__PURE__ */ jsx("input", { ref: inputRef, type: "file", accept: ".xlsx,.xls", onChange: handleFile, className: "hidden" })
        ] })
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-3", children: error }),
      preview && /* @__PURE__ */ jsx("div", { className: "mt-4", children: [
        totalUpdates === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500", children: T("No differences found — everything matched already matches this file.") }),
        unitChanges.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-1", children: T("Office units") }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: unitChanges.map((c, i) => /* @__PURE__ */ jsx("div", { className: "text-xs border-b border-neutral-100 pb-2", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-neutral-900", children: c.label }),
            ...c.fields.map((f) => /* @__PURE__ */ jsx("div", { className: "text-neutral-500 pl-3", children: `${f.label}: ${fmtVal(f.key, f.oldVal)} → ${fmtVal(f.key, f.newVal)}` }))
          ] }, i)) })
        ] }),
        (instChanges.length > 0 || instNewRows.length > 0) && /* @__PURE__ */ jsx("div", { className: "mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-1", children: T("Installment schedule") }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
            ...instChanges.map((c, i) => /* @__PURE__ */ jsx("div", { className: "text-xs border-b border-neutral-100 pb-2", children: [
              /* @__PURE__ */ jsx("div", { className: "font-mono text-neutral-900", children: fmtDate(c.label) }),
              ...c.fields.map((f) => /* @__PURE__ */ jsx("div", { className: "text-neutral-500 pl-3", children: `${f.label}: ${fmtVal(f.key, f.oldVal)} → ${fmtVal(f.key, f.newVal)}` }))
            ] }, `c${i}`)),
            ...instNewRows.map((r, i) => /* @__PURE__ */ jsx("div", { className: "text-xs border-b border-neutral-100 pb-2 text-emerald-700", children: `New: ${fmtDate(r.date)} — ${egp(r.amount)}` }, `n${i}`))
          ] })
        ] }),
        preview.unitsResult?.unmatchedRows.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-amber-700 mt-1", children: `${preview.unitsResult.unmatchedRows.length} unit row(s) in the file did not match any existing office unit — not added automatically.` }),
        preview.unitsResult?.missingUnits.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-1", children: `${preview.unitsResult.missingUnits.length} existing unit(s) not present in this file — left unchanged: ${preview.unitsResult.missingUnits.map((u) => u.unit).join(", ")}.` }),
        preview.installmentsResult?.missingInstallments.length > 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-1", children: `${preview.installmentsResult.missingInstallments.length} previously tracked installment date(s) not present in this file — left unchanged.` }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-4", children: [
          /* @__PURE__ */ jsx("button", { onClick: handleApply, disabled: busy || totalUpdates === 0, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: busy ? "Saving…" : `Apply ${totalUpdates} update${totalUpdates === 1 ? "" : "s"}` }),
          /* @__PURE__ */ jsx("button", { onClick: () => setPreview(null), className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Cancel") })
        ] })
      ] })
    ] });
  }
  function MetalRowsTable({ rows, showGrams }) {
    const [sortKey, sortDir, handleSort] = useSortState("value");
    const totals = rows.reduce((s, r) => ({ invested: s.invested + (r.investmentNative || 0), value: s.value + (r.value || 0), grams: s.grams + (r.grams || 0) }), { invested: 0, value: 0, grams: 0 });
    const totalGain = totals.value - totals.invested;
    const totalGainPct = totals.invested ? totalGain / totals.invested * 100 : 0;
    const sorted = sortRows(rows, sortKey, sortDir, (r, k) => k === "investmentNative" ? r.investmentNative || 0 : k === "value" ? r.value || 0 : k === "gainPct" ? r.gainPct || 0 : r[k]);
    return /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx(SortTh, { label: "Holding", sortKey: "label", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
        showGrams && /* @__PURE__ */ jsx(SortTh, { label: "Grams", sortKey: "grams", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Invested", sortKey: "investmentNative", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Current value", sortKey: "value", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Price change", sortKey: "gainPct", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
        /* @__PURE__ */ jsx(SortTh, { label: "Purchased", sortKey: "purchaseDate", activeKey: sortKey, dir: sortDir, onSort: handleSort })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: sorted.map((r) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
        /* @__PURE__ */ jsx("td", { "data-label": T("Holding"), className: "py-1.5 pr-3", children: r.label }),
        showGrams && /* @__PURE__ */ jsx("td", { "data-label": T("Grams"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: (r.grams || 0).toLocaleString() }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Invested"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(r.investmentNative || 0) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Current value"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(r.value || 0) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Gain / loss"), className: `py-1.5 pr-3 text-right font-mono tabular-nums ${(r.gainPct || 0) >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(r.gainPct || 0) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Purchased"), className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(r.purchaseDate) })
      ] }, r.id)) }),
      /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${rows.length})` }),
        showGrams && /* @__PURE__ */ jsx("td", { "data-label": T("Grams"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: totals.grams.toLocaleString() }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Invested"), className: "py-2 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(totals.invested) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Current value"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totals.value) }),
        /* @__PURE__ */ jsx("td", { "data-label": T("Gain / loss"), className: `py-2 pr-3 text-right font-mono tabular-nums ${totalGain >= 0 ? "text-emerald-700" : "text-red-700"}`, children: [
          signedEgp(totalGain),
          /* @__PURE__ */ jsx("span", { className: "block text-xs font-normal", children: pctStr(totalGainPct) })
        ] }),
        /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" })
      ] }) })
    ] }) });
  }
  function AnalysisGlance({ netWorth, totalAssets, totalLiabilities, debtRatioPct, distLine, wholePortfolio, categories, historyDays, observationCount, pricedCount, assetCount, cashFlow, egpNet, liquidityScore, leverageScore, nextInstallment, onOpenInstallments, aiInsight, latestDate }) {
    const goTo = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); };
    const Chip = ({ tone, children }) => jsx("span", { className: `inline-block text-[10px] uppercase tracking-wide border px-1.5 py-0.5 mr-1.5 ${tone === "amber" ? "border-neutral-900 text-neutral-900" : "border-neutral-400 text-neutral-500"}`, children });
    const Card = ({ title, children }) => jsx("div", { className: "border border-neutral-200 p-4", children: [jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-3", children: T(title) }), ...children] });
    const Row = ({ label, sub, value, cls, stack }) => jsx("div", { className: `${stack ? "flex flex-col md:flex-row gap-1 md:gap-3 md:items-baseline md:justify-between" : "flex items-baseline justify-between gap-3"} py-3 md:py-2 border-t border-neutral-200 first:border-t-0`, children: [jsx("div", { className: "text-base md:text-sm min-w-0", children: [T(label), sub ? jsx("div", { className: "text-xs md:text-xs text-neutral-500", children: T(sub) }) : null] }), jsx("div", { "data-fab-avoid": "1", className: `font-mono text-base md:text-sm tabular-nums text-right ${stack ? "self-end md:self-auto" : ""} shrink-0 ${cls || ""}`, children: value })] });
    const Link = ({ id, children }) => jsx("button", { type: "button", onClick: () => goTo(id), className: "text-sm md:text-xs underline py-3 md:py-2 mr-4 inline-flex items-center min-h-[44px] md:min-h-0", children });
    const rows = (categories || []).map((c) => ({ key: c.key, label: c.key === "gold" ? "Gold (funds and bars)" : c.label, delta: (c.current || 0) - (c.cost || 0), usdDelta: c.key === "usdFunds" ? (c.currentUsd || 0) - (c.costUsd || 0) : null }));
    const maxAbs = Math.max(1, ...rows.map((r) => Math.abs(r.delta)));
    const tone = (n) => n >= 0 ? "text-emerald-700" : "text-red-700";
    const days = nextInstallment ? daysUntil(nextInstallment.date) : null;
    const units = nextInstallment ? Object.keys(nextInstallment.byUnit || {}) : [];
    const aiGenerated = aiInsight?.generatedAt;
    const aiOlder = aiInsight?.basedOnDate && latestDate && aiInsight.basedOnDate < latestDate;
    return jsx("section", { id: "analysis-glance", className: "order-first md:order-none py-6 md:py-10 border-t border-neutral-200", children: [
      jsx("h2", { className: "font-serif text-2xl text-neutral-900", children: T("Analysis at a glance") }),
      jsx("p", { className: "text-sm text-neutral-500 mt-1 mb-5 max-w-xl", children: T("Where you stand, how value compares with cost, what needs attention soon, and what these numbers leave out.") }),
      jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        Card({ title: T("1 \u00b7 Where you stand"), children: [
          Row({ label: T("Net worth"), value: egp(netWorth), cls: "text-base text-neutral-900" }),
          Row({ label: T("Assets / liabilities"), value: `${(totalAssets / 1e6).toFixed(1)}M / ${(totalLiabilities / 1e6).toFixed(1)}M` }),
          Row({ label: T("Leverage"), sub: T("liabilities / assets"), value: `${debtRatioPct.toFixed(1)}%` }),
          jsx("p", { className: "text-xs text-neutral-500 mt-2", children: [Chip({ children: T("Recorded values") }), distLine ? L(`Includes ${egp(distLine.value)} of distributions marked unverified (may double count).`, `تشمل ${egp(distLine.value)} توزيعات معلَّمة كغير مؤكدة (قد تتكرر في العد).`) : T("Values as recorded on this site.")] }),
          jsx("div", { children: Link({ id: "section-01", children: T("Holdings \u25b8") }) })
        ] }),
        Card({ title: T("2 \u00b7 Value vs what you put in"), children: [
          jsx("div", { className: `font-mono text-2xl ${tone(wholePortfolio.totalProfit)}`, children: [signedEgp(wholePortfolio.totalProfit), jsx("span", { className: "text-sm ml-2", children: Math.abs(wholePortfolio.returnPct) > 0 && Math.abs(wholePortfolio.returnPct) < 0.01 ? `${wholePortfolio.returnPct < 0 ? sgM() : ""}<0.01%` : pctStr(wholePortfolio.returnPct, 2).replace("-", "\u2212") })] }),
          jsx("p", { className: "text-xs text-neutral-500 mt-2", children: [Chip({ tone: "amber", children: T("Not a return") }), T("Certificates are at cost. Income received and FX at purchase are not recorded.")] }),
          jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mt-4 mb-1", children: T("Value minus cost, by category") }),
          ...rows.map((r) => Row({ key: r.key, stack: true, label: r.label, sub: r.usdDelta != null ? L(`${r.usdDelta >= 0 ? sgP() : sgM()}$${fmt(Math.abs(r.usdDelta))} at today's rate; FX at purchase not recorded`, `${r.usdDelta >= 0 ? sgP() : sgM()}$${fmt(Math.abs(r.usdDelta))} بسعر اليوم؛ سعر الصرف وقت الشراء غير مسجّل`) : null,
            value: jsx("span", { className: tone(r.delta), children: [jsx("span", { className: `inline-block h-2 mr-2 align-middle ${r.delta >= 0 ? "bg-emerald-600" : "bg-red-600"}`, style: { width: `${Math.max(3, Math.abs(r.delta) / maxAbs * 70)}px` } }), `${r.usdDelta != null ? "\u2248 " : ""}${signedEgp(r.delta)}`] }) })),
          jsx("p", { className: "text-xs text-neutral-500 mt-2", children: T("Attribution of value minus cost by category, not what drove a period. Funds, gold and Beltone only.") }),
          jsx("div", { children: Link({ id: "section-02", children: T("Details and other views \u25b8") }) })
        ] }),
        Card({ title: T("3 \u00b7 Needs your attention"), children: [
          nextInstallment ? Row({ label: L(`${fmtDate(nextInstallment.date)}, ${units.length} propert${units.length === 1 ? "y" : "ies"}`, `${fmtDate(nextInstallment.date)}، ${arCount(units.length, "عقار واحد", "عقارين", "عقارات")}`), sub: L(`${units.join(" + ")}${days != null ? ` · in ${days} day${days === 1 ? "" : "s"}` : ""}`, `${units.join(" + ")}${days != null ? ` · خلال ${arDays(days)}` : ""}`), value: egp(nextInstallment.amount) }) : Row({ label: T("Next property installment"), value: T("none due") }),
          Row({ label: T("Monthly EGP cash flow"), sub: jsx("span", { children: [Chip({ tone: "amber", children: T("Modelled monthly average") }), L(`Not cash received. Income side is certificate interest only (${egp(cashFlow.egp.income)}); other income is not recorded. Less ${egp(cashFlow.egp.outflow)} loans and ${egp(cashFlow.egp.propertyMonthly)} property average.`, `ليس نقدًا مستلمًا. جانب الدخل هو فائدة الشهادات فقط (${egp(cashFlow.egp.income)})؛ باقي الدخل غير مسجّل. يُخصم ${egp(cashFlow.egp.outflow)} قروض و${egp(cashFlow.egp.propertyMonthly)} متوسط عقارات.`)] }), value: signedEgp(egpNet), cls: tone(egpNet) }),
          Row({ label: T("Liquidity score"), sub: L(`Leverage score ${Math.round(leverageScore)}`, `درجة المديونية ${Math.round(leverageScore)}`), value: `${Math.round(liquidityScore)} / 100` }),
          jsx("div", { children: [nextInstallment ? jsx("button", { type: "button", onClick: onOpenInstallments, className: "text-xs underline py-2 mr-4", children: T("Open installments \u25b8") }) : null, Link({ id: "section-08", children: T("Cash flow \u25b8") })] })
        ] }),
        Card({ title: T("4 \u00b7 What the numbers do not cover"), children: [
          Row({ label: T("History"), sub: L(`Over ${historyDays} calendar days`, `عبر ${historyDays} يومًا`), value: L(`${observationCount} observations`, `${observationCount} قراءة`) }),
          Row({ label: T("EGP funds and gold change"), sub: T("section 02, change vs cost"), value: L(`${pricedCount} of ${assetCount} holdings`, `${pricedCount} من ${assetCount} أصول`) }),
          Row({ label: T("Income received"), sub: distLine ? L(`Fund distributions are recorded (${egp(distLine.value)}, unverified). Certificate interest received is not recorded.`, `توزيعات الصناديق مسجّلة (${egp(distLine.value)}، غير مؤكدة). فائدة الشهادات المستلمة غير مسجّلة.`) : T("Not recorded"), value: jsx(Chip, { children: T("Partial, unverified") }) }),
          aiGenerated ? Row({ label: T("AI paragraph (section 04)"), sub: L(`Written ${timeAgo(aiGenerated)} from data dated ${aiInsight.basedOnDate || "unknown"}${aiOlder ? `, older than the latest saved data (${latestDate})` : ""}. Its figures can differ from the live numbers here.`, `كُتبت ${timeAgo(aiGenerated)} من بيانات بتاريخ ${aiInsight.basedOnDate || "غير معروف"}${aiOlder ? `، أقدم من أحدث بيانات محفوظة (${latestDate})` : ""}. قد تختلف أرقامها عن الأرقام المباشرة هنا.`), value: jsx(Chip, { tone: aiOlder ? "amber" : undefined, children: aiOlder ? "Older data" : "Check date" }) }) : null,
          jsx("div", { children: Link({ id: "section-04", children: T("Insights \u25b8") }) })
        ].filter(Boolean) })
      ] })
    ] });
  }
  function PortfolioInsights({ insights, allocationRows, aiInsight }) {
    const severityStyle = {
      notice: "border-amber-300 bg-amber-50 text-amber-900",
      good: "border-emerald-300 bg-emerald-50 text-emerald-900",
      info: "border-neutral-300 bg-neutral-50 text-neutral-700"
    };
    return /* @__PURE__ */ jsx("div", { children: [
      aiInsight?.text && /* @__PURE__ */ jsx("div", { className: "mb-4 border border-neutral-300 bg-neutral-900 text-white px-4 py-3", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wide text-neutral-400 mb-1.5", children: `AI analysis · ${timeAgo(aiInsight.generatedAt)}` }),
        /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: aiInsight.text })
      ] }),
      insights.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-500", children: T("No notable observations right now — nothing here looks out of the ordinary.") }) : /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-6", children: insights.map((ins, i) => /* @__PURE__ */ jsx("div", { className: `text-sm border px-3 py-2 ${severityStyle[ins.severity]}`, children: ins.text }, i)) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-1 text-xs text-neutral-500 pt-4 border-t border-neutral-200", children: allocationRows.map((r) => /* @__PURE__ */ jsx("span", { children: `${T(r.label)}: ${r.currentPct.toFixed(1)}%` }, r.key)) })
    ] });
  }
  function AiSuggestedMoves({ moves, onSetOwnTargets, canEdit }) {
    const actionStyle = {
      add: "border-emerald-300 bg-emerald-50 text-emerald-900",
      trim: "border-amber-300 bg-amber-50 text-amber-900"
    };
    return /* @__PURE__ */ jsx("div", { className: "border border-neutral-300 bg-white p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-1 gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("AI-suggested moves") }),
        canEdit && /* @__PURE__ */ jsx("button", { onClick: onSetOwnTargets, className: "text-xs uppercase tracking-wide text-neutral-500 underline", children: T("Set manual targets instead") })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4", children: T("Specific holdings to add to or trim, based on today's numbers — not saved anywhere, just a suggestion.") }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: moves.map((m, i) => /* @__PURE__ */ jsx("div", { className: `text-sm border px-3 py-2 ${actionStyle[m.action]}`, children: [
        /* @__PURE__ */ jsx("span", { className: "font-semibold uppercase text-xs tracking-wide mr-2", children: m.action === "add" ? T("Add") : T("Trim") }),
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: m.holding }),
        m.reason && /* @__PURE__ */ jsx("span", { className: "text-neutral-600", children: ` — ${m.reason}` })
      ] }, i)) })
    ] });
  }
  function RebalanceCard({ allocationRows, targets, totalAssets, onChange, canEdit, aiSuggestedMoves }) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState({});
    const hasTargets = REBALANCE_CATEGORIES.some((c) => targets[c.key] != null);
    const startEditing = () => {
      const seed = {};
      REBALANCE_CATEGORIES.forEach((c) => {
        seed[c.key] = targets[c.key] != null ? String(targets[c.key]) : "";
      });
      setDraft(seed);
      setEditing(true);
    };
    const save = () => {
      const next = {};
      REBALANCE_CATEGORIES.forEach((c) => {
        const n = Number(draft[c.key]);
        if (draft[c.key] !== "" && Number.isFinite(n)) next[c.key] = n;
      });
      onChange(next);
      setEditing(false);
    };
    if (editing) {
      const draftSum = REBALANCE_CATEGORIES.reduce((s, c) => s + (Number(draft[c.key]) || 0), 0);
      return /* @__PURE__ */ jsx("div", { className: "border border-neutral-300 bg-white p-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-3", children: T("Set your target allocation") }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: REBALANCE_CATEGORIES.map((c) => /* @__PURE__ */ jsx("label", { className: "flex items-center justify-between gap-3 text-sm text-neutral-700", children: [
          /* @__PURE__ */ jsx("span", { children: T(c.label) }),
          /* @__PURE__ */ jsx("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("input", { type: "number", step: "0.1", min: "0", max: "100", value: draft[c.key], onChange: (e) => setDraft((d) => ({ ...d, [c.key]: e.target.value })), className: "w-20 font-mono text-sm border border-neutral-300 px-2 py-1 text-right focus:outline-none focus:border-neutral-800" }),
            /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "%" })
          ] })
        ] }, c.key)) }),
        /* @__PURE__ */ jsx("p", { className: `text-xs mt-3 ${Math.abs(draftSum - 100) > 0.5 ? "text-amber-700" : "text-neutral-400"}`, children: `Targets add up to ${draftSum.toFixed(1)}%${Math.abs(draftSum - 100) > 0.5 ? " — usually these should add up to 100%" : ""}.` }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mt-3", children: [
          /* @__PURE__ */ jsx("button", { onClick: save, className: "text-xs uppercase tracking-wide bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-700 transition-colors", children: T("Save targets") }),
          /* @__PURE__ */ jsx("button", { onClick: () => setEditing(false), className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Cancel") })
        ] })
      ] });
    }
    if (!hasTargets && aiSuggestedMoves?.length) {
      return /* @__PURE__ */ jsx(AiSuggestedMoves, { moves: aiSuggestedMoves, onSetOwnTargets: startEditing, canEdit });
    }
    if (!hasTargets) {
      return canEdit ? /* @__PURE__ */ jsx("div", { className: "border border-neutral-300 bg-white p-4 flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: T("No target allocation set — set one to see how far current holdings are from where you want them, or wait for AI-suggested moves (generates daily).") }),
        /* @__PURE__ */ jsx("button", { onClick: startEditing, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors shrink-0", children: T("Set targets") })
      ] }) : null;
    }
    return /* @__PURE__ */ jsx("div", { className: "border border-neutral-300 bg-white p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-3 gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Current vs. target allocation") }),
        canEdit && /* @__PURE__ */ jsx("button", { onClick: startEditing, className: "text-xs uppercase tracking-wide text-neutral-500 underline", children: T("Edit targets") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rtable", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: T("Category") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2", children: T("Current") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2", children: T("Target") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2", children: T("Difference") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2", children: T("Suggested move") })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: allocationRows.map((r) => {
          const target = targets[r.key];
          if (target == null) return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
            /* @__PURE__ */ jsx("td", { "data-label": T("Category"), className: "py-2", children: r.label }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Current"), className: "py-2 text-right font-mono", children: `${r.currentPct.toFixed(1)}%` }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Target"), className: "py-2 text-right font-mono text-neutral-400", children: "—" }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Difference"), className: "py-2 text-right font-mono text-neutral-400", children: "—" }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Suggested move"), className: "py-2 text-right font-mono text-neutral-400", children: "—" })
          ] }, r.key);
          const diff = r.currentPct - target;
          const moveEgp = (target - r.currentPct) / 100 * totalAssets;
          const overweight = diff > 0.5;
          const underweight = diff < -0.5;
          return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
            /* @__PURE__ */ jsx("td", { "data-label": T("Category"), className: "py-2", children: r.label }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Current"), className: "py-2 text-right font-mono", children: `${r.currentPct.toFixed(1)}%` }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Target"), className: "py-2 text-right font-mono text-neutral-700", children: `${target.toFixed(1)}%` }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Difference"), className: `py-2 text-right font-mono ${overweight ? "text-amber-700" : underweight ? "text-amber-700" : "text-neutral-400"}`, children: `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}pp` }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Suggested move"), className: `py-2 text-right font-mono ${overweight ? "text-red-700" : underweight ? "text-emerald-700" : "text-neutral-400"}`, children: overweight ? `Trim ${egp(Math.abs(moveEgp))}` : underweight ? `Add ${egp(Math.abs(moveEgp))}` : "On target" })
          ] }, r.key);
        }) })
      ] }) })
    ] });
  }
  function VariableRateBump({ certificates, onChange }) {
    const [open, setOpen] = useState(false);
    const [newRate, setNewRate] = useState("");
    const variableCerts = certificates.filter((c) => c.label.toLowerCase().includes("variable"));
    if (!variableCerts.length) return null;
    const apply = () => {
      const n = Number(newRate);
      if (!Number.isFinite(n)) return;
      onChange(certificates.map((c) => c.label.toLowerCase().includes("variable") ? { ...c, rate: n } : c));
      setNewRate("");
      setOpen(false);
    };
    if (!open) {
      return /* @__PURE__ */ jsx("button", { onClick: () => setOpen(true), className: "mb-3 text-xs uppercase tracking-wide border border-neutral-300 px-3 py-1.5 hover:border-neutral-600 transition-colors", children: `Update all ${variableCerts.length} variable-rate certificate${variableCerts.length === 1 ? "" : "s"} (corridor change)` });
    }
    return /* @__PURE__ */ jsx("div", { className: "mb-3 border border-neutral-300 bg-neutral-50 p-3 flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-600", children: `New rate for all ${variableCerts.length} "variable" certificate${variableCerts.length === 1 ? "" : "s"} (currently ${Array.from(new Set(variableCerts.map((c) => c.rate))).join(", ")}%):` }),
      /* @__PURE__ */ jsx("input", { type: "number", step: "0.1", value: newRate, onChange: (e) => setNewRate(e.target.value), autoFocus: true, className: "w-24 font-mono text-sm border border-neutral-300 px-2 py-1 text-right focus:outline-none focus:border-neutral-800" }),
      /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "%" }),
      /* @__PURE__ */ jsx("button", { onClick: apply, disabled: newRate === "", className: "text-xs uppercase tracking-wide bg-neutral-900 text-white px-3 py-1.5 hover:bg-neutral-700 transition-colors disabled:opacity-50", children: T("Apply") }),
      /* @__PURE__ */ jsx("button", { onClick: () => { setOpen(false); setNewRate(""); }, className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Cancel") })
    ] });
  }
  function CertificatesTable({ certificates, onChange, canEdit = true }) {
    const [sortKey, sortDir, handleSort] = useSortState("amount");
    const [query, setQuery] = useState("");
    const update = (idx, patch) => onChange(certificates.map((c, i) => i === idx ? { ...c, ...patch } : c));
    const total = certificates.reduce((s, c) => s + c.amount, 0);
    const totalMonthlyInterest = certificates.reduce((s, c) => s + c.amount * c.rate / 100 / 12, 0);
    const maturedCount = certificates.filter((c) => { const d = daysUntil(c.maturityDate); return d !== null && d < 0; }).length;
    const maturingSoonCount = certificates.filter((c) => { const d = daysUntil(c.maturityDate); return d !== null && d >= 0 && d <= MATURITY_WARNING_DAYS; }).length;
    const sortedAll = sortRows(certificates, sortKey, sortDir, (c, k) => k === "monthlyInterest" ? c.amount * c.rate / 100 / 12 : c[k]);
    const sorted = query.trim() ? sortedAll.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase())) : sortedAll;
    return /* @__PURE__ */ jsx("div", { children: [
      (maturedCount > 0 || maturingSoonCount > 0) && /* @__PURE__ */ jsx("div", { className: "mb-3 text-xs text-amber-700 bg-amber-50 border border-amber-300 px-3 py-2", children: [
        maturedCount > 0 && `${maturedCount} certificate${maturedCount === 1 ? "" : "s"} already past maturity. `,
        maturingSoonCount > 0 && `${maturingSoonCount} maturing within ${MATURITY_WARNING_DAYS} days.`
      ] }),
      canEdit && /* @__PURE__ */ jsx(VariableRateBump, { certificates, onChange }),
      certificates.length > 5 && /* @__PURE__ */ jsx(TableSearch, { value: query, onChange: setQuery, placeholder: T("Filter certificates…") }),
      query.trim() && sorted.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mb-3", children: T("No certificates match that filter.") }),
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx(SortTh, { label: "Certificate", sortKey: "label", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Rate %", sortKey: "rate", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Amount", sortKey: "amount", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Monthly interest", sortKey: "monthlyInterest", activeKey: sortKey, dir: sortDir, onSort: handleSort, align: "right" }),
          /* @__PURE__ */ jsx(SortTh, { label: "Opened", sortKey: "openDate", activeKey: sortKey, dir: sortDir, onSort: handleSort }),
          /* @__PURE__ */ jsx(SortTh, { label: "Matures", sortKey: "maturityDate", activeKey: sortKey, dir: sortDir, onSort: handleSort })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: sorted.map((c, i) => {
          const days = daysUntil(c.maturityDate);
          const matured = days !== null && days < 0;
          const maturingSoon = days !== null && days >= 0 && days <= MATURITY_WARNING_DAYS;
          const idx = certificates.indexOf(c);
          return /* @__PURE__ */ jsx("tr", { className: `border-b border-neutral-100 ${matured ? "bg-red-50" : maturingSoon ? "bg-amber-50" : ""}`, children: [
            /* @__PURE__ */ jsx("td", { "data-label": T("Certificate"), className: "py-1.5 pr-3 font-mono text-xs", children: c.label }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Rate %"), className: "py-1.5 pr-3 w-20", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: c.rate, onChange: (v) => update(idx, { rate: Number(v) || 0 }), readOnly: !canEdit }) }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Amount"), className: "py-1.5 pr-3 text-right font-mono tabular-nums", children: egp(c.amount) }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Monthly interest"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: egp(c.amount * c.rate / 100 / 12) }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Opened"), className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(c.openDate) }),
            /* @__PURE__ */ jsx("td", { "data-label": T("Matures"), className: `py-1.5 pr-3 ${matured ? "text-red-700" : maturingSoon ? "text-amber-700" : "text-neutral-500"}`, children: [
              fmtDate(c.maturityDate),
              matured && ` — matured ${Math.abs(days)}d ago`,
              maturingSoon && ` — in ${days}d`
            ] })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsx("tfoot", { children: /* @__PURE__ */ jsx("tr", { className: "border-t-2 border-neutral-900 font-medium", children: [
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3", children: `Total (${certificates.length})` }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Amount"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(total) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Monthly interest"), className: "py-2 pr-3 text-right font-mono tabular-nums", children: egp(totalMonthlyInterest) }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" }),
          /* @__PURE__ */ jsx("td", { className: "py-2 pr-3" })
        ] }) })
      ] }) })
    ] });
  }
  function PerformanceRankingTable({ rows }) {
    const signedNative = (amount, currency) => {
      const sign = amount >= 0 ? sgP() : sgM();
      const abs = currency === "USD" ? usd(Math.abs(amount)) : egp(Math.abs(amount));
      return `${sign}${abs}`;
    };
    return /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Rank") }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Holding") }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Purchase date") }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Purchase value") }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Current value") }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Net gain / loss") }),
        /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Price change since purchase (excl. income)") })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: rows.map((r, i) => {
        const netGain = r.currentNative - r.investmentNative;
        return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Rank"), className: "py-1.5 pr-3 font-mono text-xs text-neutral-400", children: i + 1 }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Holding"), className: "py-1.5 pr-3", children: r.label }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Purchase date"), className: "py-1.5 pr-3 text-neutral-500", children: fmtDate(r.purchaseDate) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Purchase value"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-500", children: r.currency === "USD" ? usd(r.investmentNative) : egp(r.investmentNative) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Current value"), className: "py-1.5 pr-3 text-right font-mono tabular-nums text-neutral-700", children: r.currency === "USD" ? usd(r.currentNative) : egp(r.value) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Net gain / loss"), className: `py-1.5 pr-3 text-right font-mono tabular-nums ${netGain >= 0 ? "text-emerald-700" : "text-red-700"}`, children: signedNative(netGain, r.currency) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Gain since purchase"), className: `py-1.5 pr-3 text-right font-mono tabular-nums ${r.gainPct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(r.gainPct) })
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
      /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Date") }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Type") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Amount, USD") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Rate") }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Note") }),
          /* @__PURE__ */ jsx("th", { className: "text-right py-2 pr-3", children: T("Running USD balance") }),
          canEdit && /* @__PURE__ */ jsx("th", { className: "py-2" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: withRunning.map((c) => /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Date"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "date", value: c.date, onChange: (v) => update(c.id, { date: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Type"), className: "py-1.5 pr-3 w-28", children: /* @__PURE__ */ jsx(Select, { value: c.type, onChange: (v) => update(c.id, { type: v }), options: ["opening", "in", "convert"], readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Amount, USD"), className: "py-1.5 pr-3 w-32", children: /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: c.amountUsd, onChange: (v) => update(c.id, { amountUsd: Number(v) || 0 }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Rate"), className: "py-1.5 pr-3 w-20", children: c.type === "convert" ? /* @__PURE__ */ jsx(Cell, { type: "number", align: "right", value: c.rate, onChange: (v) => update(c.id, { rate: v }), readOnly: !canEdit }) : /* @__PURE__ */ jsx("span", { className: "text-neutral-300 text-xs", children: "\u2014" }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Note"), className: "py-1.5 pr-3 min-w-40", children: /* @__PURE__ */ jsx(Cell, { value: c.note, onChange: (v) => update(c.id, { note: v }), readOnly: !canEdit }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Running USD balance"), className: "py-1.5 pr-3 w-32 text-right font-mono tabular-nums text-neutral-700", children: usd(c.running) }),
          canEdit && /* @__PURE__ */ jsx("td", { className: "py-1.5", children: /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => remove(c.id) }) })
        ] }, c.id)) })
      ] }) }),
      canEdit && /* @__PURE__ */ jsx(AddRowButton, { onClick: add, label: "Add conversion" })
    ] });
  }
  function NavPasteFill({ navFields, onFill }) {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");
    const [results, setResults] = useState(null);
    const [included, setIncluded] = useState({});
    const [ocrBusy, setOcrBusy] = useState(false);
    const [ocrError, setOcrError] = useState("");
    const imageInputRef = useRef(null);
    const handleParse = () => {
      const found = parseNavPasteText(text, navFields);
      setResults(found);
      setIncluded(Object.fromEntries(found.map((r) => [r.key, true])));
    };
    const handleFill = () => {
      const values = {};
      (results || []).forEach((r) => {
        if (included[r.key]) values[r.key] = r.value;
      });
      onFill(values);
      setText("");
      setResults(null);
    };
    const handleEditValue = (key, newValue) => {
      setResults((rs) => rs.map((r) => r.key === key ? { ...r, value: newValue } : r));
    };
    const handleImages = async (e) => {
      const files = Array.from(e.target.files || []);
      if (!files.length) return;
      setOcrError("");
      setOcrBusy(true);
      try {
        await ensureTesseract();
        if (!window.Tesseract) throw new Error("Screenshot reader did not load — check your connection and try again.");
        const worker = await window.Tesseract.createWorker("eng+ara");
        await worker.setParameters({ tessedit_pageseg_mode: "4" });
        let combined = "";
        try {
          for (const file of files) {
            const { data } = await worker.recognize(file);
            combined += (data?.text || "") + "\n";
          }
        } finally {
          await worker.terminate();
        }
        setText((t) => (t ? `${t}\n${combined}` : combined));
      } catch (err) {
        setOcrError(err.message || "Could not read that image.");
      } finally {
        setOcrBusy(false);
        if (imageInputRef.current) imageInputRef.current.value = "";
      }
    };
    if (!open) {
      return /* @__PURE__ */ jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsx("button", { onClick: () => setOpen(true), className: "text-xs uppercase tracking-wide text-neutral-500 underline", children: T("Paste or upload to fill fund prices") }) });
    }
    return /* @__PURE__ */ jsx("div", { className: "mx-4 mt-3 border border-dashed border-neutral-300 p-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-2", children: T("Copy the price screen from each fund's app (NBE, AZ, Beltone, CIB…) and paste it below, or upload a screenshot directly — one at a time or all together. This is a best-effort match, always review the detected numbers before filling the form.") }),
      /* @__PURE__ */ jsx("textarea", { value: text, onChange: (e) => setText(e.target.value), rows: 4, className: "w-full text-xs font-mono border border-neutral-300 p-2 focus:outline-none focus:border-neutral-800", placeholder: T("Paste screenshot text here…") }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 mt-2 flex-wrap items-center", children: [
        /* @__PURE__ */ jsx("button", { onClick: handleParse, disabled: !text.trim(), className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors disabled:opacity-40 disabled:pointer-events-none", children: T("Detect prices") }),
        /* @__PURE__ */ jsx("label", { className: `text-xs uppercase tracking-wide border border-neutral-300 px-3 py-1.5 cursor-pointer hover:border-neutral-900 transition-colors ${ocrBusy ? "opacity-40 pointer-events-none" : ""}`, children: [
          ocrBusy ? /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5", children: [/* @__PURE__ */ jsx(Loader2, { size: 12, className: "animate-spin" }), "Reading screenshot…"] }) : "Upload screenshot",
          /* @__PURE__ */ jsx("input", { ref: imageInputRef, type: "file", accept: "image/*", multiple: true, onChange: handleImages, disabled: ocrBusy, className: "hidden" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => { setOpen(false); setText(""); setResults(null); setOcrError(""); }, className: "text-xs uppercase tracking-wide text-neutral-500 px-3 py-1.5", children: T("Close") })
      ] }),
      ocrError && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700 mt-2", children: ocrError }),
      results && (results.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-3", children: T("No known funds recognized in that text.") }) : /* @__PURE__ */ jsx("div", { className: "mt-3 space-y-1.5", children: [
        results.map((r) => /* @__PURE__ */ jsx("label", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsx("input", { type: "checkbox", checked: !!included[r.key], onChange: (e) => setIncluded((inc) => ({ ...inc, [r.key]: e.target.checked })) }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-700 w-32 shrink-0", children: r.label }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "0.0001", value: r.value, onChange: (e) => handleEditValue(r.key, e.target.value), className: "font-mono text-neutral-900 w-24 border-b border-neutral-300 focus:border-neutral-800 focus:outline-none bg-transparent" }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-400 truncate", children: `— "${r.matchedLine}"` })
        ] }, r.key)),
        /* @__PURE__ */ jsx("button", { onClick: handleFill, className: "text-xs uppercase tracking-wide border border-neutral-900 px-3 py-1.5 hover:bg-neutral-900 hover:text-white transition-colors mt-2", children: T("Fill form with checked values") })
      ] }))
    ] });
  }
  function DailyPricingForm({ onSave, saving, defaults, compareBase, navFields, liveRates, canEdit = true, isEditing = false }) {
    const [form, setForm] = useState(defaults);
    const [touchedFields, setTouchedFields] = useState(() => new Set(defaults.changedFields || []));
    useEffect(() => {
      setForm(defaults);
      setTouchedFields(new Set(defaults.changedFields || []));
    }, [defaults]);
    const set = (key) => (e) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setTouchedFields((t) => new Set(t).add(key));
    };
    const handlePasteFill = (values) => {
      setForm((f) => ({ ...f, ...values }));
      setTouchedFields((t) => new Set([...t, ...Object.keys(values)]));
    };
    const isChanged = (key) => touchedFields.has(key);
    const ChangedMark = ({ fieldKey }) => isChanged(fieldKey) ? /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-0.5 text-emerald-700", title: T("Changed from the pre-filled value — stays marked after saving"), children: [
      /* @__PURE__ */ jsx(Check, { size: 11, strokeWidth: 3 }),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wide", children: T("changed") })
    ] }) : null;
    const changeDirection = (key) => {
      if (!compareBase) return null;
      const prev = Number(compareBase[key]);
      const curRaw = form[key];
      if (curRaw === void 0 || curRaw === null || curRaw === "") return null;
      const cur = Number(curRaw);
      if (!Number.isFinite(prev) || !Number.isFinite(cur)) return null;
      if (cur > prev) return "up";
      if (cur < prev) return "down";
      return null;
    };
    const DirectionArrow = ({ fieldKey }) => {
      const dir = changeDirection(fieldKey);
      if (!dir) return null;
      const Icon = dir === "up" ? ArrowUpRight : ArrowDownRight;
      return /* @__PURE__ */ jsx("span", { className: `inline-flex items-center ${dir === "up" ? "text-emerald-700" : "text-red-600"}`, title: dir === "up" ? "Higher than the last saved entry" : "Lower than the last saved entry", children: /* @__PURE__ */ jsx(Icon, { size: 12, strokeWidth: 3 }) });
    };
    const REVIEW_THRESHOLD_PCT = 3;
    const reviewState = (key) => {
      const curRaw = form[key];
      if (curRaw === void 0 || curRaw === null || curRaw === "") return { kind: "missing" };
      const cur = Number(curRaw);
      if (!Number.isFinite(cur)) return { kind: "missing" };
      const prev = compareBase ? Number(compareBase[key]) : NaN;
      if (!Number.isFinite(prev) || !prev) return { kind: "ok", pct: null };
      const pct = (cur / prev - 1) * 100;
      if (Math.abs(pct) > REVIEW_THRESHOLD_PCT) return { kind: "big", pct };
      if (cur === prev) return { kind: "same", pct: 0 };
      return { kind: "ok", pct };
    };
    const ReviewBadge = ({ fieldKey }) => {
      const st = reviewState(fieldKey);
      const pctTxt = st.pct === null || st.pct === void 0 || st.kind === "same" || st.kind === "notyet" ? "" : `${st.pct > 0 ? "+" : ""}${st.pct.toFixed(2)}%`;
      const cls = st.kind === "big" ? "text-red-600 font-semibold" : st.kind === "missing" ? "text-amber-700" : "text-neutral-500";
      const note = st.kind === "big" ? `check: above ${REVIEW_THRESHOLD_PCT}%` : st.kind === "missing" ? "missing" : st.kind === "same" ? "same as previous entry" : "";
      return /* @__PURE__ */ jsx("span", { "data-review": st.kind, className: `text-[11px] min-h-[14px] ${cls}`, children: [pctTxt, pctTxt && note ? " \u00b7 " : "", note].join("") });
    };
    const reviewCounts = navFields.reduce((acc, f) => {
      const k = reviewState(f.key).kind;
      if (k === "ok") acc.ok++;
      else if (k === "missing") acc.missing++;
      else if (k === "big") acc.big++;
      else acc.same++;
      return acc;
    }, { ok: 0, same: 0, big: 0, missing: 0 });
    return /* @__PURE__ */ jsx("div", { className: "border border-neutral-300", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 text-white px-4 py-2 flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide", children: isEditing ? "Editing entry" : "Today's update" }),
        /* @__PURE__ */ jsx("input", { type: "date", value: form.date, onChange: set("date"), disabled: !canEdit, className: "bg-neutral-900 text-white font-mono text-xs border border-neutral-600 px-2 py-1 disabled:opacity-60" })
      ] }),
      liveRates?.updatedAt && /* @__PURE__ */ jsx("div", { className: "px-4 pt-3 text-xs text-neutral-400", children: `Rate and gold pre-filled from live market data, last refreshed ${new Date(liveRates.updatedAt).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })} — you can still edit them below.` }),
      canEdit && navFields.length > 0 && /* @__PURE__ */ jsx(NavPasteFill, { navFields, onFill: handlePasteFill }),
      /* @__PURE__ */ jsx("div", { className: "p-4 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
        /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("USD / EGP rate") }),
            /* @__PURE__ */ jsx(DirectionArrow, { fieldKey: "rate" }),
            /* @__PURE__ */ jsx(ChangedMark, { fieldKey: "rate" })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "0.01", value: form.rate, onChange: set("rate"), disabled: !canEdit, className: "font-mono text-sm border border-neutral-300 bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60" })
        ] }),
        /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Gold, EGP/gram") }),
            /* @__PURE__ */ jsx(DirectionArrow, { fieldKey: "gold" }),
            /* @__PURE__ */ jsx(ChangedMark, { fieldKey: "gold" })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "1", value: form.gold, onChange: set("gold"), disabled: !canEdit, className: "font-mono text-sm border border-neutral-300 bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60" })
        ] }),
        navFields.map((f) => /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: f.label }),
            /* @__PURE__ */ jsx(DirectionArrow, { fieldKey: f.key }),
            /* @__PURE__ */ jsx(ChangedMark, { fieldKey: f.key })
          ] }),
          /* @__PURE__ */ jsx("input", { type: "number", step: "0.0001", value: form[f.key] ?? "", onChange: set(f.key), disabled: !canEdit, className: `font-mono text-sm border ${reviewState(f.key).kind === "big" ? "border-red-500" : reviewState(f.key).kind === "missing" ? "border-amber-500 border-dashed" : "border-neutral-300"} bg-yellow-50 px-2 py-1.5 focus:outline-none focus:border-neutral-800 disabled:opacity-60` }),
          /* @__PURE__ */ jsx(ReviewBadge, { fieldKey: f.key })
        ] }, f.key))
      ] }),
      navFields.length > 0 && /* @__PURE__ */ jsx("div", { "data-review-summary": "1", className: "px-4 pb-3 text-xs text-neutral-500", children: `Review notes (not errors): ${reviewCounts.ok} within ${REVIEW_THRESHOLD_PCT}% \u00b7 ${reviewCounts.same} same as previous entry \u00b7 ${reviewCounts.big} above ${REVIEW_THRESHOLD_PCT}% \u00b7 ${reviewCounts.missing} empty. Notes never block saving; gold and USD/EGP are pre-filled from live rates.` }),
      canEdit ? /* @__PURE__ */ jsx("div", { className: "px-4 pb-4 flex flex-wrap items-center gap-x-3 gap-y-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => onSave(form, Array.from(touchedFields)), disabled: saving, className: "inline-flex items-center gap-2 whitespace-nowrap bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2 disabled:opacity-50", children: [
          saving ? /* @__PURE__ */ jsx(Loader2, { size: 14, className: "animate-spin" }) : isEditing ? /* @__PURE__ */ jsx(Check, { size: 14 }) : /* @__PURE__ */ jsx(Plus, { size: 14 }),
          saving ? "Saving" : isEditing ? "Save changes" : "Save today's entry"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Overwrites the entry for this date if one already exists.") })
      ] }) : /* @__PURE__ */ jsx("div", { className: "px-4 pb-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Viewer access — you can look, but only an editor can save a new entry.") }) })
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
      return /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400", children: T("Loading users…") });
    }
    const entries = Object.entries(roles).sort((a, b) => (a[1]?.email || "").localeCompare(b[1]?.email || ""));
    return /* @__PURE__ */ jsx("div", { className: "rtable overflow-x-auto sm:[mask-image:none]", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Email") }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Role") }),
        /* @__PURE__ */ jsx("th", { className: "text-left py-2 pr-3", children: T("Last seen") }),
        /* @__PURE__ */ jsx("th", { className: "py-2" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: entries.map(([entryUid, r]) => {
        const isOwnerOrService = r?.role === "owner" || r?.role === "service";
        const isPendingOrRejected = r?.role === "pending" || r?.role === "rejected";
        return /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-100", children: [
          /* @__PURE__ */ jsx("td", { "data-label": T("Email"), className: "py-1.5 pr-3 font-mono text-xs", children: r?.email || entryUid }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Role"), className: "py-1.5 pr-3 w-32", children: isOwnerOrService ? /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500", children: r.role }) : isPendingOrRejected ? /* @__PURE__ */ jsx("span", { className: `text-xs uppercase tracking-wide ${r.role === "pending" ? "text-amber-600" : "text-red-600"}`, children: r.role }) : /* @__PURE__ */ jsx(Select, { value: r?.role || "viewer", onChange: (v) => changeRole(entryUid, v), options: ["viewer", "editor"] }) }),
          /* @__PURE__ */ jsx("td", { "data-label": T("Last seen"), className: "py-1.5 pr-3 text-xs text-neutral-500", children: formatLastSeen(r?.lastSeenAt) }),
          /* @__PURE__ */ jsx("td", { className: "py-1.5 pr-3 text-right", children: isOwnerOrService ? null : updating === entryUid ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Saving…") }) : isPendingOrRejected ? /* @__PURE__ */ jsx("div", { className: "flex gap-2 justify-end", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "viewer"), className: "text-xs border border-neutral-300 px-2 py-1 hover:border-neutral-600", children: T("Accept as viewer") }),
            /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "editor"), className: "text-xs border border-neutral-300 px-2 py-1 hover:border-neutral-600", children: T("Accept as editor") }),
            r.role !== "rejected" && /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "rejected"), className: "text-xs text-red-600 border border-red-300 px-2 py-1 hover:border-red-600", children: T("Reject") }),
            /* @__PURE__ */ jsx("button", { onClick: () => removeUser(entryUid), className: "text-xs text-neutral-400 hover:text-red-600", children: T("Delete") })
          ] }) : /* @__PURE__ */ jsx("button", { onClick: () => changeRole(entryUid, "rejected"), className: "text-xs text-neutral-400 hover:text-red-600", children: T("Revoke") }) })
        ] }, entryUid);
      }) })
    ] }) });
  }
  function PortfolioReadinessApp({ onSignOut, role, uid, biometricSupported, biometricEnabled, onEnableBiometricLock, onDisableBiometricLock, dark, onToggleDark }) {
    const canEdit = role === "owner" || role === "editor";
    const isOwner = role === "owner";
    const [openAsset, setOpenAsset] = useState(null);
    const [ccy, setCcy] = useState("egp");
    const [holdings, setHoldings] = useState(SEED_HOLDINGS);
    const [loans, setLoans] = useState(SEED_LOANS);
    const [loanFacilities, setLoanFacilities] = useState(SEED_LOAN_FACILITIES);
    const [certificates, setCertificates] = useState(SEED_CERTIFICATES);
    const [officeUnits, setOfficeUnits] = useState(SEED_OFFICE_UNITS);
    const [officeInstallments, setOfficeInstallments] = useState(SEED_OFFICE_INSTALLMENTS);
    const [officeInstallmentPayments, setOfficeInstallmentPayments] = useState({});
    const [officeMaintenance, setOfficeMaintenance] = useState(SEED_OFFICE_MAINTENANCE);
    const [officeMaintenancePayments, setOfficeMaintenancePayments] = useState({});
    const [newsFeed, setNewsFeed] = useState(SEED_NEWS_FEED);
    const [aiInsight, setAiInsight] = useState(null);
    const [yearCloses, setYearCloses] = useState({});
    const [rebalanceTargets, setRebalanceTargets] = useState({});
    const [distAdjustments, setDistAdjustments] = useState({});
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
    const [pendingSignups, setPendingSignups] = useState([]);
    const [biometricBusy, setBiometricBusy] = useState(false);
    const [biometricError, setBiometricError] = useState("");
    const showAdmin = isOwner && view === "admin";
    const saveTimers = useRef({});
    useEffect(() => {
      let cancelled = false;
      (async () => {
        const [h, l, lf, cert, c, lr, ou, oi, oip, om, omp, nf, yc, rt, ai, da] = await Promise.all([
          loadJson("holdings", SEED_HOLDINGS),
          loadJson("loans", SEED_LOANS),
          loadJson("loanFacilities", SEED_LOAN_FACILITIES),
          loadJson("certificates", SEED_CERTIFICATES),
          loadJson("conversions", SEED_CONVERSIONS),
          loadJson("liveRates", null),
          loadJson("officeUnits", SEED_OFFICE_UNITS),
          loadJson("officeInstallments", SEED_OFFICE_INSTALLMENTS),
          loadJson("officeInstallmentPayments", {}),
          loadJson("officeMaintenance", SEED_OFFICE_MAINTENANCE),
          loadJson("officeMaintenancePayments", {}),
          loadJson("newsFeed", SEED_NEWS_FEED),
          loadJson("yearCloses", {}),
          loadJson("rebalanceTargets", {}),
          loadJson("aiInsight", null),
          loadJson("distAdjustments", {})
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
          setLoanFacilities(lf);
          setCertificates(cert);
          setConversions(c);
          setHistory(dailyEntries);
          setLiveRates(lr);
          setOfficeUnits(ou);
          setOfficeInstallments(oi);
          setOfficeInstallmentPayments(oip);
          setOfficeMaintenance(om);
          setOfficeMaintenancePayments(omp);
          setNewsFeed(nf);
          setAiInsight(ai || null);
          setYearCloses(yc || {});
          setRebalanceTargets(rt || {});
          setDistAdjustments(da || {});
          setLoadState("ready");
        }
      })();
      return () => {
        cancelled = true;
      };
    }, []);
    useEffect(() => {
      if (!db) return;
      const ref = db.ref("liveRates");
      const onValueChange = (snap) => setLiveRates(snap.val());
      ref.on("value", onValueChange);
      return () => ref.off("value", onValueChange);
    }, []);
    useEffect(() => {
      if (!isOwner || !db) return;
      const ref = db.ref("roles");
      const onValueChange = (snap) => {
        const roles = snap.val() || {};
        setPendingSignups(
          Object.entries(roles).filter(([, r]) => r?.role === "pending").map(([uid, r]) => ({ uid, email: r.email }))
        );
      };
      ref.on("value", onValueChange);
      return () => ref.off("value", onValueChange);
    }, [isOwner]);
    const debouncedSave = useCallback((key, value, setter) => {
      setter(value);
      clearTimeout(saveTimers.current[key]);
      saveTimers.current[key] = setTimeout(() => saveJson(key, value), 500);
    }, []);
    const handleHoldingsChange = (next) => debouncedSave("holdings", next, setHoldings);
    const handleLoansChange = (next) => debouncedSave("loans", next, setLoans);
    const handleCertificatesChange = (next) => debouncedSave("certificates", next, setCertificates);
    const handleOfficeUnitsChange = (next) => debouncedSave("officeUnits", next, setOfficeUnits);
    const handleOfficeUnitsTableChange = (nextOfficeOnly) => {
      const others = officeUnits.filter((u) => !officeGroupUnitNames.includes(u.unit));
      handleOfficeUnitsChange([...nextOfficeOnly, ...others]);
    };
    const handlePropertyFieldChange = (unitName, patch) => {
      handleOfficeUnitsChange(officeUnits.map((u) => u.unit === unitName ? { ...u, ...patch } : u));
    };
    const handleOfficeInstallmentsChange = (next) => debouncedSave("officeInstallments", next, setOfficeInstallments);
    const handleSetOfficeInstallmentPayment = async (dateKey, unitKey, paid) => {
      const dk = sanitizeFbKey(dateKey);
      const uk = sanitizeFbKey(unitKey);
      setOfficeInstallmentPayments((prev) => ({ ...prev, [dk]: { ...(prev[dk] || {}), [uk]: paid } }));
      if (db) {
        try {
          await db.ref(`officeInstallmentPayments/${dk}/${uk}`).set(paid);
        } catch {
        }
      } else {
        saveJson("officeInstallmentPayments", { ...officeInstallmentPayments, [dk]: { ...(officeInstallmentPayments[dk] || {}), [uk]: paid } });
      }
    };
    const handleToggleOfficeInstallmentPayment = (dateKey, unitKey) => {
      const dk = sanitizeFbKey(dateKey);
      const uk = sanitizeFbKey(unitKey);
      return handleSetOfficeInstallmentPayment(dateKey, unitKey, !officeInstallmentPayments?.[dk]?.[uk]);
    };
    const handleOfficeMaintenanceChange = (next) => debouncedSave("officeMaintenance", next, setOfficeMaintenance);
    const handleSetOfficeMaintenancePayment = async (dateKey, unitKey, paid) => {
      const dk = sanitizeFbKey(dateKey);
      const uk = sanitizeFbKey(unitKey);
      setOfficeMaintenancePayments((prev) => ({ ...prev, [dk]: { ...(prev[dk] || {}), [uk]: paid } }));
      if (db) {
        try {
          await db.ref(`officeMaintenancePayments/${dk}/${uk}`).set(paid);
        } catch {
        }
      } else {
        saveJson("officeMaintenancePayments", { ...officeMaintenancePayments, [dk]: { ...(officeMaintenancePayments[dk] || {}), [uk]: paid } });
      }
    };
    const handleToggleOfficeMaintenancePayment = (dateKey, unitKey) => {
      const dk = sanitizeFbKey(dateKey);
      const uk = sanitizeFbKey(unitKey);
      return handleSetOfficeMaintenancePayment(dateKey, unitKey, !officeMaintenancePayments?.[dk]?.[uk]);
    };
    useEffect(() => {
      if (!canEdit || loadState !== "ready") return;
      const officesHolding = holdings.find((h) => h.id === "offices");
      if (!officesHolding) return;
      const totalPaidSoFar = officeUnits.reduce((s, u) => {
        const hasSchedule = officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
        return s + (hasSchedule ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0);
      }, 0);
      const patch = {};
      if (Math.abs(totalPaidSoFar - officesHolding.investment) > 0.5) patch.investment = totalPaidSoFar;
      if (officesHolding.label !== "Properties (paid so far)") patch.label = "Properties (paid so far)";
      if (Object.keys(patch).length) {
        handleHoldingsChange(holdings.map((h) => h.id === "offices" ? { ...h, ...patch } : h));
      }
    }, [officeUnits, officeInstallments, officeInstallmentPayments, holdings, canEdit, loadState]);
    const handleApplyLoanStatement = async (updatedFacilities) => {
      setSaving(true);
      const totals = updatedFacilities.reduce((s, f) => ({ outstanding: s.outstanding + f.outstanding, installment: s.installment + f.installment }), { outstanding: 0, installment: 0 });
      const nextLoans = loans.map((l) => l.id === "loan-egp" ? { ...l, amount: totals.outstanding, installment: totals.installment } : l);
      await saveJson("loanFacilities", updatedFacilities);
      await saveJson("loans", nextLoans);
      setLoanFacilities(updatedFacilities);
      setLoans(nextLoans);
      setSaving(false);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1800);
    };
    const handleApplyCertificateStatement = async (updatedCertificates) => {
      setSaving(true);
      const total = updatedCertificates.reduce((s, c) => s + c.amount, 0);
      const nextHoldings = holdings.map((h) => h.id === "certs" ? { ...h, investment: total } : h);
      await saveJson("certificates", updatedCertificates);
      await saveJson("holdings", nextHoldings);
      setCertificates(updatedCertificates);
      setHoldings(nextHoldings);
      setSaving(false);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1800);
    };
    const handleAddNbeDistribution = async (amount) => {
      setSaving(true);
      const existing = holdings.find((h) => h.id === "nbeDist");
      const nextHoldings = existing
        ? holdings.map((h) => h.id === "nbeDist" ? { ...h, investment: (h.investment || 0) + amount } : h)
        : [...holdings, { id: "nbeDist", type: "fixed", currency: "EGP", label: "NBE fund distributions received", investment: amount, navGroup: "", purchaseNav: 0, grams: 0 }];
      await saveJson("holdings", nextHoldings);
      setHoldings(nextHoldings);
      setSaving(false);
      setSavedFlash(true);
      setTimeout(() => setSavedFlash(false), 1800);
    };
    const handleConversionsChange = (next) => debouncedSave("conversions", next, setConversions);
    const handleRebalanceTargetsChange = (next) => debouncedSave("rebalanceTargets", next, setRebalanceTargets);
    const navFields = useMemo(() => {
      const seen = /* @__PURE__ */ new Map();
      holdings.filter((h) => h.type === "fund" && h.navGroup).forEach((h) => {
        if (!seen.has(h.navGroup)) seen.set(h.navGroup, h.label);
      });
      return Array.from(seen.entries()).map(([key, label]) => ({ key, label }));
    }, [holdings]);
    const accumulatingGroups = useMemo(() => Array.from(new Set(holdings.filter((h) => h.type === "fund" && h.accumulating).map((h) => h.navGroup))), [holdings]);
    const unitsByGroup = useMemo(() => {
      const out = {};
      holdings.filter((h) => h.type === "fund" && h.accumulating && h.purchaseNav).forEach((h) => {
        out[h.navGroup] = (out[h.navGroup] || 0) + h.investment / h.purchaseNav;
      });
      return out;
    }, [holdings]);
    const latest = history[history.length - 1];
    const defaultsForForm = useMemo(() => {
      const base = latest || { date: "2026-07-30", rate: 51.1, gold: 6800 };
      const today = /* @__PURE__ */ new Date();
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      const alreadySavedToday = latest && latest.date === todayStr;
      const rate = !alreadySavedToday && liveRates?.rate ? liveRates.rate : base.rate;
      const gold = !alreadySavedToday && liveRates?.gold ? liveRates.gold : base.gold;
      return { ...base, date: todayStr, rate, gold, changedFields: alreadySavedToday ? base.changedFields || [] : [] };
    }, [latest, liveRates]);
    const editingEntry = useMemo(() => editingDate ? history.find((e) => e.date === editingDate) : null, [editingDate, history]);
    const formDefaults = editingEntry || defaultsForForm;
    const compareBase = useMemo(() => {
      if (editingEntry) {
        const idx = history.findIndex((e) => e.date === editingEntry.date);
        return idx > 0 ? history[idx - 1] : null;
      }
      const todayStr = formDefaults.date;
      const alreadySavedToday = latest && latest.date === todayStr;
      return alreadySavedToday ? history[history.length - 2] || null : latest || null;
    }, [editingEntry, history, latest, formDefaults]);
    const daysSinceLastEntry = useMemo(() => {
      if (!latest?.date) return null;
      const today = /* @__PURE__ */ new Date();
      const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const lastDate = new Date(latest.date + "T00:00:00");
      return Math.round((todayMidnight - lastDate) / 864e5);
    }, [latest]);
    const handleSaveDay = useCallback(async (form, changedFields) => {
      const clean = { ...form };
      clean.rate = Number(clean.rate) || 0;
      clean.gold = Number(clean.gold) || 0;
      clean.changedFields = changedFields || [];
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
      const appliedManual = {};
      const sorted = [...history].sort((a, b) => a.date.localeCompare(b.date));
      let prevYear = null;
      sorted.forEach((entry) => {
        const entryYear = entry.date.slice(0, 4);
        if (prevYear !== null && entryYear !== prevYear && yearCloses[prevYear]) {
          Object.keys(running).forEach((g) => {
            running[g] = 0;
          });
          Object.keys(lastNav).forEach((g) => {
            delete lastNav[g];
          });
          Object.keys(appliedManual).forEach((g) => {
            appliedManual[g] = 0;
          });
        }
        prevYear = entryYear;
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
          // Distributions the NAV-drop detection above missed (e.g. nobody
          // updated the fund's price on the actual payout date) — confirmed
          // against the real notice and recorded in cash EGP, converted here
          // to NAV points so it folds into the same running adjustment.
          const manualList = distAdjustments[g] || [];
          let i = appliedManual[g] || 0;
          while (i < manualList.length && manualList[i].date <= entry.date) {
            const units = unitsByGroup[g];
            if (units) running[g] = (running[g] || 0) + manualList[i].amount / units;
            i++;
          }
          appliedManual[g] = i;
          adj[g] = running[g] || 0;
        });
        out[entry.date] = adj;
      });
      return out;
    }, [history, accumulatingGroups, yearCloses, distAdjustments, unitsByGroup]);
    const holdingsForYear = useMemo(() => {
      const cache = {};
      return (year) => {
        if (cache[year]) return cache[year];
        const close = yearCloses[year];
        const result = close?.basis ? holdings.map((h) => close.basis[h.id] ? { ...h, ...close.basis[h.id] } : h) : holdings;
        cache[year] = result;
        return result;
      };
    }, [holdings, yearCloses]);
    const computedHistory = useMemo(() => history.map((e) => computeDay(e, holdingsForYear(e.date.slice(0, 4)), navAdjustByDate[e.date])), [history, holdingsForYear, navAdjustByDate]);
    const latestComputed = computedHistory[computedHistory.length - 1];
    const fallbackQuotes = computedHistory.reduce((n, d) => n + (d.fallbackCount || 0), 0);
    const ADDITIONS_ONLY_NOTE = "Adjusted for additions only (cost of holdings added after the start day). No sales or withdrawals are recorded and none are handled.";
    const firstComputed = computedHistory[0];
    const today = /* @__PURE__ */ new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const isLivePreview = !!(liveRates && latestComputed && latestComputed.date !== todayStr && (liveRates.rate || liveRates.gold));
    const displayComputed = useMemo(() => {
      if (!isLivePreview) return latestComputed;
      const liveEntry = { ...latestComputed, rate: liveRates.rate ?? latestComputed.rate, gold: liveRates.gold ?? latestComputed.gold };
      return computeDay(liveEntry, holdings, navAdjustByDate[latestComputed.date], todayStr);
    }, [isLivePreview, latestComputed, liveRates, holdings, navAdjustByDate]);
    const asOfLabel = isLivePreview ? `${todayStr} (live)` : latestComputed?.date || "";
    const ASSETS = displayComputed?.rows || [];
    const totalAssets = displayComputed?.totalAssets || 0;
    const distLine = (displayComputed?.rows || []).find((r) => r.id === "nbeDist");
    const performanceRanking = useMemo(() => ASSETS.filter((a) => a.purchaseNav != null).sort((a, b) => b.gainPct - a.gainPct), [ASSETS]);
    const variableInvestments = useMemo(() => {
      const totalInvested = displayComputed?.markedToMarketCost || 0;
      const totalProfit = displayComputed?.gain || 0;
      const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
      const durationDays = firstComputed && latestComputed ? Math.max(0, Math.round((new Date(latestComputed.date + "T00:00:00") - new Date(firstComputed.date + "T00:00:00")) / 864e5)) : 0;
      return { totalInvested, totalProfit, returnPct, durationDays };
    }, [firstComputed, latestComputed, displayComputed]);
    const variableInvestmentsByCategory = useMemo(() => {
      const bc = displayComputed?.byCategory || {};
      const build = (cat) => {
        const c = bc[cat] || { current: 0, cost: 0 };
        return { current: c.current, cost: c.cost, pct: c.cost ? (c.current - c.cost) / c.cost * 100 : 0 };
      };
      const usdCat = bc.usdFunds || { current: 0, cost: 0, currentUsd: 0, costUsd: 0 };
      return [
        { key: "gold", label: "Gold", currency: "EGP", ...build("gold") },
        { key: "usdFunds", label: "USD funds", currency: "USD", ...build("usdFunds"), currentUsd: usdCat.currentUsd || 0, costUsd: usdCat.costUsd || 0 },
        { key: "egpFunds", label: "EGP funds", currency: "EGP", ...build("egpFunds") }
      ];
    }, [displayComputed]);
    const wholePortfolio = useMemo(() => {
      const totalInvested = ASSETS.reduce((s, a) => s + (a.investmentEgp ?? 0), 0);
      const totalCurrent = totalAssets;
      const totalProfit = totalCurrent - totalInvested;
      const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
      return { totalInvested, totalCurrent, totalProfit, returnPct };
    }, [ASSETS, totalAssets]);
    const availableYears = useMemo(() => {
      const ys = new Set(computedHistory.map((d) => Number(d.date.slice(0, 4))));
      ys.add((/* @__PURE__ */ new Date()).getFullYear());
      return Array.from(ys).sort((a, b) => b - a);
    }, [computedHistory]);
    const periodReturns = useMemo(() => {
      const todayRate = displayComputed?.rate || 0;
      const wholePortfolioAt = (entry) => {
        const totalInvested = (entry?.rows || []).reduce((s, a) => {
          const native = a.investmentNative ?? 0;
          return s + (a.currency === "USD" ? native * todayRate : native);
        }, 0);
        return { totalInvested, totalCurrent: entry?.totalAssets || 0 };
      };
      const buildPeriod = (baseEntry) => {
        const base = wholePortfolioAt(baseEntry);
        const totalInvested = base.totalInvested;
        const totalCurrent = wholePortfolio.totalCurrent;
        const totalProfit = totalCurrent - totalInvested;
        const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
        return { totalInvested, totalCurrent, totalProfit, returnPct };
      };
      if (!computedHistory.length) {
        const zero = { totalInvested: 0, totalCurrent: 0, totalProfit: 0, returnPct: 0 };
        return { ytd: zero, oneYear: zero, sinceInception: zero };
      }
      const currentYearStr = String(availableYears[0]);
      const ytdFirstEntry = computedHistory.find((d) => d.date.slice(0, 4) === currentYearStr) || computedHistory[0];
      const oneYearAgo = /* @__PURE__ */ new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      const oneYearEntry = computedHistory.find((d) => new Date(d.date + "T00:00:00") >= oneYearAgo) || computedHistory[0];
      return {
        ytd: buildPeriod(ytdFirstEntry),
        oneYear: buildPeriod(oneYearEntry),
        sinceInception: buildPeriod(computedHistory[0])
      };
    }, [computedHistory, availableYears, wholePortfolio, displayComputed]);
    const [viewYear, setViewYear] = useState(null);
    const [chartRange, setChartRange] = useState("All");
    const effectiveViewYear = viewYear ?? availableYears[0];
    const isCurrentYearView = effectiveViewYear === availableYears[0];
    const yearComputedHistory = useMemo(
      () => computedHistory.filter((d) => Number(d.date.slice(0, 4)) === effectiveViewYear),
      [computedHistory, effectiveViewYear]
    );
    const yearFirstComputed = yearComputedHistory[0];
    const yearLatestComputed = isCurrentYearView ? displayComputed : yearComputedHistory[yearComputedHistory.length - 1];
    const yearAssets = yearLatestComputed?.rows || [];
    const yearPerformanceRanking = useMemo(
      () => yearAssets.filter((a) => a.purchaseNav != null).sort((a, b) => b.gainPct - a.gainPct),
      [yearAssets]
    );
    const yearVariableInvestments = useMemo(() => {
      const totalInvested = yearLatestComputed?.markedToMarketCost || 0;
      const totalProfit = yearLatestComputed?.gain || 0;
      const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
      const durationDays = yearFirstComputed && yearLatestComputed ? Math.max(0, Math.round((new Date(yearLatestComputed.date + "T00:00:00") - new Date(yearFirstComputed.date + "T00:00:00")) / 864e5)) : 0;
      return { totalInvested, totalProfit, returnPct, durationDays };
    }, [yearFirstComputed, yearLatestComputed]);
    const yearVariableInvestmentsByCategory = useMemo(() => {
      const bc = yearLatestComputed?.byCategory || {};
      const build = (cat) => {
        const c = bc[cat] || { current: 0, cost: 0 };
        return { current: c.current, cost: c.cost, pct: c.cost ? (c.current - c.cost) / c.cost * 100 : 0 };
      };
      const usdCat = bc.usdFunds || { current: 0, cost: 0, currentUsd: 0, costUsd: 0 };
      return [
        { key: "gold", label: "Gold", currency: "EGP", ...build("gold") },
        { key: "usdFunds", label: "USD funds", currency: "USD", ...build("usdFunds"), currentUsd: usdCat.currentUsd || 0, costUsd: usdCat.costUsd || 0 },
        { key: "egpFunds", label: "EGP funds", currency: "EGP", ...build("egpFunds") }
      ];
    }, [yearLatestComputed]);
    const yearWholePortfolio = useMemo(() => {
      const totalInvested = yearAssets.reduce((s, a) => s + (a.investmentEgp ?? 0), 0);
      const totalCurrent = yearLatestComputed?.totalAssets || 0;
      const totalProfit = totalCurrent - totalInvested;
      const returnPct = totalInvested ? totalProfit / totalInvested * 100 : 0;
      return { totalInvested, totalCurrent, totalProfit, returnPct };
    }, [yearAssets, yearLatestComputed]);
    const yearAnalysis = useMemo(() => {
      if (!yearFirstComputed || !yearLatestComputed || yearComputedHistory.length < 2) return null;
      const changeVal = yearLatestComputed.markedToMarket - yearFirstComputed.markedToMarket - costAddedBetween(yearFirstComputed, yearLatestComputed);
      const changePct = yearFirstComputed.markedToMarket ? changeVal / yearFirstComputed.markedToMarket * 100 : 0;
      const firstByLabel = new Map(yearFirstComputed.rows.filter((r) => r.purchaseNav != null).map((r) => [r.label, r.gainPct]));
      const movers = yearLatestComputed.rows.filter((r) => firstByLabel.has(r.label)).map((r) => ({ label: r.label, delta: r.gainPct - firstByLabel.get(r.label), last: r.gainPct }));
      const byLevel = [...movers].sort((a, b) => b.last - a.last);
      const strongest = byLevel[0];
      const weakest = byLevel[byLevel.length - 1];
      const byMomentum = [...movers].sort((a, b) => b.delta - a.delta);
      const mostImproved = byMomentum[0];
      const mostDeclined = byMomentum[byMomentum.length - 1];
      const rateChangePct = yearFirstComputed.rate ? (yearLatestComputed.rate - yearFirstComputed.rate) / yearFirstComputed.rate * 100 : 0;
      const goldChangePct = yearFirstComputed.gold ? (yearLatestComputed.gold - yearFirstComputed.gold) / yearFirstComputed.gold * 100 : 0;
      const upDays = yearComputedHistory.slice(1).filter((d, i) => d.markedToMarket - costAddedBetween(yearComputedHistory[i], d) >= yearComputedHistory[i].markedToMarket).length;
      return { days: yearComputedHistory.length, changeVal, changePct, rateChangePct, goldChangePct, upDays, totalDays: yearComputedHistory.length - 1, strongest, weakest, mostImproved, mostDeclined };
    }, [yearComputedHistory, yearFirstComputed, yearLatestComputed]);
    const chartHistory = useMemo(() => {
      const range = CHART_RANGES.find((r) => r.key === chartRange);
      if (!range || range.days == null || yearComputedHistory.length === 0) return yearComputedHistory;
      const lastDate = new Date(yearComputedHistory[yearComputedHistory.length - 1].date + "T00:00:00");
      const cutoff = new Date(lastDate);
      cutoff.setDate(cutoff.getDate() - range.days);
      return yearComputedHistory.filter((d) => new Date(d.date + "T00:00:00") >= cutoff);
    }, [yearComputedHistory, chartRange]);
    const yearFundSeries = useMemo(() => holdings.filter((h) => h.type === "fund" && h.navGroup).map((holding) => {
      const points = chartHistory.map((d) => {
        const row = d.rows.find((r) => r.id === holding.id);
        return { date: d.date, value: row ? row.gainPct : 0 };
      });
      return { key: holding.id, label: holding.label, points };
    }), [holdings, chartHistory]);
    const currentValueById = useMemo(() => Object.fromEntries(ASSETS.map((a) => [a.id, a.currency === "USD" ? a.currentNative : a.value])), [ASSETS]);
    const currentValueCurrencyById = useMemo(() => Object.fromEntries(ASSETS.map((a) => [a.id, a.currency])), [ASSETS]);
    const metalFundRows = useMemo(
      () => ASSETS.filter((a) => holdings.find((h) => h.id === a.id)?.navGroup === "azgold"),
      [ASSETS, holdings]
    );
    const metalPhysicalRows = useMemo(
      () => holdings.filter((h) => h.type === "gold").map((h) => {
        const a = ASSETS.find((x) => x.id === h.id);
        return { ...h, value: a?.value ?? 0, gainPct: a?.gainPct ?? 0, investmentNative: h.investment };
      }),
      [holdings, ASSETS]
    );
    const metalOverall = useMemo(() => {
      const rows = [...metalFundRows, ...metalPhysicalRows];
      const invested = rows.reduce((s, r) => s + (r.investmentNative || 0), 0);
      const value = rows.reduce((s, r) => s + (r.value || 0), 0);
      const gain = value - invested;
      return { invested, value, gain, gainPct: invested ? gain / invested * 100 : 0 };
    }, [metalFundRows, metalPhysicalRows]);
    const yearHoldings = useMemo(() => holdingsForYear(String(effectiveViewYear)), [holdingsForYear, effectiveViewYear]);
    const yearMetalFundRows = useMemo(
      () => yearAssets.filter((a) => yearHoldings.find((h) => h.id === a.id)?.navGroup === "azgold"),
      [yearAssets, yearHoldings]
    );
    const yearMetalPhysicalRows = useMemo(
      () => yearHoldings.filter((h) => h.type === "gold").map((h) => {
        const a = yearAssets.find((x) => x.id === h.id);
        return { ...h, value: a?.value ?? 0, gainPct: a?.gainPct ?? 0, investmentNative: h.investment };
      }),
      [yearHoldings, yearAssets]
    );
    const yearMetalOverall = useMemo(() => {
      const rows = [...yearMetalFundRows, ...yearMetalPhysicalRows];
      const invested = rows.reduce((s, r) => s + (r.investmentNative || 0), 0);
      const value = rows.reduce((s, r) => s + (r.value || 0), 0);
      const gain = value - invested;
      return { invested, value, gain, gainPct: invested ? gain / invested * 100 : 0 };
    }, [yearMetalFundRows, yearMetalPhysicalRows]);
    const allocationRows = useMemo(() => {
      const totals = {};
      REBALANCE_CATEGORIES.forEach((c) => totals[c.key] = 0);
      ASSETS.forEach((a) => {
        const h = holdings.find((x) => x.id === a.id);
        if (!h) return;
        const key = classifyHolding(h);
        totals[key] = (totals[key] || 0) + a.value;
      });
      return REBALANCE_CATEGORIES.map((c) => {
        const value = totals[c.key] || 0;
        const currentPct = totalAssets ? value / totalAssets * 100 : 0;
        return { ...c, value, currentPct };
      });
    }, [ASSETS, holdings, totalAssets]);
    const propertiesOutstanding = useMemo(() => {
      const instRemaining = officeUnits.reduce((s, u) => {
        const hasSchedule = officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
        const paid = hasSchedule ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0;
        const remaining = hasSchedule ? Math.max(0, u.totalPrice - paid) : u.remaining || 0;
        return s + remaining;
      }, 0);
      const maintRemaining = officeUnits.reduce((s, u) => {
        const total = officeMaintenance.reduce((s2, row) => s2 + (row.byUnit?.[u.unit] || 0), 0);
        if (!total) return s;
        const paid = officeUnitPaidSoFar(u.unit, officeMaintenance, officeMaintenancePayments);
        return s + Math.max(0, total - paid);
      }, 0);
      return instRemaining + maintRemaining;
    }, [officeUnits, officeInstallments, officeInstallmentPayments, officeMaintenance, officeMaintenancePayments]);
    const loansOutstanding = useMemo(
      () => loans.reduce((s, l) => s + (l.currency === "USD" ? l.amount * (displayComputed?.rate || 0) : l.amount), 0),
      [loans, displayComputed]
    );
    const totalLiabilities = useMemo(() => loansOutstanding + propertiesOutstanding, [loansOutstanding, propertiesOutstanding]);
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
      const goldDelta = prevDay.gold ? (currDay.gold - prevDay.gold) / prevDay.gold * 100 : 0;
      const triggers = [];
      const LEVERAGE_THRESHOLD_POINTS = 0.5;
      const RATE_THRESHOLD_PCT = 0.5;
      const GOLD_THRESHOLD_PCT = 0.5;
      if (Math.abs(leverageDelta) >= LEVERAGE_THRESHOLD_POINTS) {
        triggers.push(L(`Leverage ${leverageDelta >= 0 ? sgP() : sgM()}${Math.abs(leverageDelta).toFixed(1)} points since ${prevDay.date} (now ${currLeverage.toFixed(1)}%)`, `المديونية ${leverageDelta >= 0 ? sgP() : sgM()}${Math.abs(leverageDelta).toFixed(1)} نقطة منذ ${prevDay.date} (الآن ${currLeverage.toFixed(1)}%)`));
      }
      if (Math.abs(rateDelta) >= RATE_THRESHOLD_PCT) {
        triggers.push(L(`USD/EGP rate ${rateDelta >= 0 ? sgP() : sgM()}${Math.abs(rateDelta).toFixed(1)}% since ${prevDay.date} (now ${fmt(currDay.rate, 2)})`, `سعر الدولار ${rateDelta >= 0 ? sgP() : sgM()}${Math.abs(rateDelta).toFixed(1)}% منذ ${prevDay.date} (الآن ${fmt(currDay.rate, 2)})`));
      }
      if (Math.abs(goldDelta) >= GOLD_THRESHOLD_PCT) {
        triggers.push(L(`Gold ${goldDelta >= 0 ? sgP() : sgM()}${Math.abs(goldDelta).toFixed(1)}% since ${prevDay.date} (now ${fmt(currDay.gold)} EGP/g)`, `الذهب ${goldDelta >= 0 ? sgP() : sgM()}${Math.abs(goldDelta).toFixed(1)}% منذ ${prevDay.date} (الآن ${fmt(currDay.gold)} جنيه/جم)`));
      }
      return triggers.length ? { date: currDay.date, triggers } : null;
    }, [computedHistory, totalLiabilities]);
    const OFFICE_DUE_WARNING_DAYS = 14;
    const nextOfficeInstallmentRow = nextOfficeInstallment(officeInstallments, officeInstallmentPayments);
    const officeNextDueDate = nextOfficeInstallmentRow ? nextOfficeInstallmentRow.date : null;
    const officeNextDueAmount = nextOfficeInstallmentRow ? nextOfficeInstallmentRow.amount : 0;
    const officeDaysUntilDue = daysUntil(officeNextDueDate);
    const officeDueAlert = officeDaysUntilDue !== null && officeDaysUntilDue <= OFFICE_DUE_WARNING_DAYS ? { date: officeNextDueDate, amount: officeNextDueAmount, daysUntilDue: officeDaysUntilDue } : null;
    const officeGroupUnitNames = useMemo(() => officeUnits.filter((u) => u.unit.startsWith("2A-D2-")).map((u) => u.unit), [officeUnits]);
    const individualProperties = useMemo(() => officeUnits.filter((u) => !u.unit.startsWith("2A-D2-")), [officeUnits]);
    const officeNextDueLabel = useMemo(() => {
      const units = Object.keys(nextOfficeInstallmentRow?.byUnit || {});
      if (!units.length || units.every((u) => officeGroupUnitNames.includes(u))) return "Office installment";
      if (units.length === 1) return `${units[0]} installment`;
      const names = [];
      let hasOffice = false;
      units.forEach((u) => { if (officeGroupUnitNames.includes(u)) hasOffice = true; else names.push(u); });
      if (hasOffice) names.push("office units");
      return `${names.length} property installments (${names.join(" + ")})`;
    }, [nextOfficeInstallmentRow, officeGroupUnitNames]);
    const [installmentSummaryOpen, setInstallmentSummaryOpen] = useState(false);
    const openOfficeDue = useCallback(() => {
      if (nextOfficeInstallmentRow) setInstallmentSummaryOpen(true);
      else scrollToId("properties-section");
    }, [nextOfficeInstallmentRow]);
    const officeNextDueTargetId = useMemo(() => {
      const units = Object.keys(nextOfficeInstallmentRow?.byUnit || {});
      if (!units.length || units.every((u) => officeGroupUnitNames.includes(u))) return "office-units-schedule";
      if (units.length === 1) return `property-${domId(units[0])}`;
      return "properties-section";
    }, [nextOfficeInstallmentRow, officeGroupUnitNames]);
    const officeDueMulti = /property installments \(/.test(officeNextDueLabel);
    const officeGroupSchedule = useMemo(() => filterScheduleForUnits(officeInstallments, officeGroupUnitNames), [officeInstallments, officeGroupUnitNames]);
    const officeGroupNextDueRow = nextOfficeInstallment(officeGroupSchedule, officeInstallmentPayments);
    const officeGroupNextDueDate = officeGroupNextDueRow ? officeGroupNextDueRow.date : null;
    const officeGroupNextDueAmount = officeGroupNextDueRow ? officeGroupNextDueRow.amount : 0;
    const officeGroupDaysUntilDue = daysUntil(officeGroupNextDueDate);
    const officeGroupDueAlert = officeGroupDaysUntilDue !== null && officeGroupDaysUntilDue <= OFFICE_DUE_WARNING_DAYS ? { date: officeGroupNextDueDate, amount: officeGroupNextDueAmount, daysUntilDue: officeGroupDaysUntilDue } : null;
    const officePaidBreakdown = useMemo(() => officeUnits.map((u) => {
      const hasSchedule = officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
      const paid = hasSchedule ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0;
      return { unit: u.unit, paid };
    }).filter((x) => x.paid > 0), [officeUnits, officeInstallments, officeInstallmentPayments]);
    const activeAlerts = useMemo(() => {
      const list = [];
      if (dailyAlert && dailyAlert.date !== dismissedAlertDate) {
        list.push({ id: `daily-${dailyAlert.date}`, targetId: "overview", severity: "warning", text: L(`Notable move today — ${dailyAlert.triggers.join(" · ")}`, `تحرك ملحوظ اليوم — ${dailyAlert.triggers.join(" · ")}`) });
      }
      if (officeDueAlert && officeDueAlert.date !== dismissedOfficeDueDate) {
        const amt = egp(officeDueAlert.amount) + (officeDueMulti ? " total" : "");
        list.push({ id: `office-${officeDueAlert.date}`, targetId: officeNextDueTargetId, onOpen: openOfficeDue, severity: officeDueAlert.daysUntilDue < 0 ? "danger" : "warning", text: `${T(officeNextDueLabel)} ${officeDueSentence(officeDueAlert, officeDueMulti)}` });
      }
      certificates.forEach((c, i) => {
        const d = daysUntil(c.maturityDate);
        if (d === null || d > MATURITY_WARNING_DAYS) return;
        list.push({ id: `cert-${i}-${c.maturityDate}`, targetId: "certificates-section", severity: d < 0 ? "danger" : "warning", text: d < 0 ? L(`${c.label} matured ${fmtDate(c.maturityDate)}, ${Math.abs(d)}d ago`, `${c.label} استحقت في ${fmtDate(c.maturityDate)}، منذ ${arDays(Math.abs(d))}`) : L(`${c.label} matures ${fmtDate(c.maturityDate)}, in ${d}d`, `${c.label} تستحق في ${fmtDate(c.maturityDate)}، خلال ${arDays(d)}`) });
      });
      loanFacilities.forEach((l, i) => {
        const d = daysUntil(l.maturityDate);
        if (d === null || d > MATURITY_WARNING_DAYS) return;
        list.push({ id: `loan-${i}-${l.maturityDate}`, targetId: "loan-facilities-section", severity: d < 0 ? "danger" : "warning", text: d < 0 ? L(`${l.label} matured ${fmtDate(l.maturityDate)}, ${Math.abs(d)}d ago`, `${l.label} استحق في ${fmtDate(l.maturityDate)}، منذ ${arDays(Math.abs(d))}`) : L(`${l.label} matures ${fmtDate(l.maturityDate)}, in ${d}d`, `${l.label} يستحق في ${fmtDate(l.maturityDate)}، خلال ${arDays(d)}`) });
      });
      return list;
    }, [dailyAlert, dismissedAlertDate, officeDueAlert, dismissedOfficeDueDate, officeDueMulti, officeNextDueLabel, officeNextDueTargetId, openOfficeDue, loanFacilities, certificates]);
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
    const toggleBiometricLock = useCallback(async () => {
      setBiometricError("");
      setBiometricBusy(true);
      try {
        if (biometricEnabled) {
          onDisableBiometricLock();
        } else {
          await onEnableBiometricLock();
        }
      } catch {
        setBiometricError("Couldn't set up Face ID / Touch ID — try again.");
      }
      setBiometricBusy(false);
    }, [biometricEnabled, onEnableBiometricLock, onDisableBiometricLock]);
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
    const conversionSummary = useMemo(() => {
      const totalOpeningUsd = conversions.filter((c) => c.type === "opening").reduce((s, c) => s + (Number(c.amountUsd) || 0), 0);
      const converted = conversions.filter((c) => c.type === "convert");
      const totalConvertedUsd = converted.reduce((s, c) => s + (Number(c.amountUsd) || 0), 0);
      const totalConvertedEgp = converted.reduce((s, c) => s + (Number(c.amountUsd) || 0) * (Number(c.rate) || 0), 0);
      const weightedRate = totalConvertedUsd ? totalConvertedEgp / totalConvertedUsd : 0;
      return { totalOpeningUsd, totalConvertedUsd, totalConvertedEgp, weightedRate };
    }, [conversions]);
    const fundsAndGoldValue = ASSETS.filter((a) => {
      const h = holdings.find((hh) => hh.id === a.id);
      return h && (h.type === "fund" || h.type === "gold");
    }).reduce((s, a) => s + a.value, 0);
    const liquidityScore = totalAssets ? fundsAndGoldValue / totalAssets * 100 : 0;
    const largestWeightPct = totalAssets && ASSETS.length ? Math.max(...ASSETS.map((a) => a.value), 0) / totalAssets * 100 : 0;
    const diversificationScore = 100 - largestWeightPct;
    const leverageScore = Math.max(0, 100 - debtRatioPct * 2);
    const cashFlow = useMemo(() => {
      const today = /* @__PURE__ */ new Date();
      today.setHours(0, 0, 0, 0);
      const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      const in12Months = new Date(today);
      in12Months.setFullYear(in12Months.getFullYear() + 1);
      const in12MonthsStr = `${in12Months.getFullYear()}-${String(in12Months.getMonth() + 1).padStart(2, "0")}-${String(in12Months.getDate()).padStart(2, "0")}`;
      const sumUnpaidInWindow = (schedule, payments) => schedule.reduce((s, row) => {
        if (row.date < todayStr || row.date > in12MonthsStr) return s;
        const dk = sanitizeFbKey(row.date);
        const rowUnits = Object.keys(row.byUnit || {});
        const unpaidSum = rowUnits.reduce((s2, u) => !payments?.[dk]?.[sanitizeFbKey(u)] ? s2 + (row.byUnit[u] || 0) : s2, 0);
        return s + unpaidSum;
      }, 0);
      const propertyInstallmentsMonthly = sumUnpaidInWindow(officeInstallments, officeInstallmentPayments) / 12;
      const propertyMaintenanceMonthly = sumUnpaidInWindow(officeMaintenance, officeMaintenancePayments) / 12;
      const egpCertIncome = certificates.reduce((s, c) => s + c.amount * c.rate / 100 / 12, 0);
      const egpLoanOutflow = loans.filter((l) => l.currency === "EGP").reduce((s, l) => s + l.installment, 0);
      const usdCertIncome = holdings.filter((h) => h.currency === "USD" && h.type === "fixed" && h.rate).reduce((s, h) => s + h.investment * h.rate / 100 / 12, 0);
      const usdLoanOutflow = loans.filter((l) => l.currency === "USD").reduce((s, l) => s + l.installment, 0);
      return {
        egp: { income: egpCertIncome, outflow: egpLoanOutflow, propertyMonthly: propertyInstallmentsMonthly + propertyMaintenanceMonthly },
        usd: { income: usdCertIncome, outflow: usdLoanOutflow }
      };
    }, [certificates, holdings, loans, officeInstallments, officeInstallmentPayments, officeMaintenance, officeMaintenancePayments]);
    const usdNet = cashFlow.usd.income - cashFlow.usd.outflow;
    const currencyScore = cashFlow.usd.outflow > 0 ? Math.min(100, cashFlow.usd.income / cashFlow.usd.outflow * 100) : 100;
    const readiness = ASSETS.length ? Math.round((leverageScore + liquidityScore + diversificationScore + currencyScore) / 4) : 0;
    const readinessLabel = readiness >= 75 ? T("Well positioned") : readiness >= 55 ? T("Adequate, room to improve") : T("Needs attention");
    const egpNet = cashFlow.egp.income - cashFlow.egp.outflow - cashFlow.egp.propertyMonthly;
    const analysis = useMemo(() => {
      if (!firstComputed || !latestComputed || computedHistory.length < 2) return null;
      const changeVal = latestComputed.markedToMarket - firstComputed.markedToMarket - costAddedBetween(firstComputed, latestComputed);
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
      const upDays = computedHistory.slice(1).filter((d, i) => d.markedToMarket - costAddedBetween(computedHistory[i], d) >= computedHistory[i].markedToMarket).length;
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
    const portfolioInsights = useMemo(() => {
      const list = [];
      const CONCENTRATION_THRESHOLD_PCT = 45;
      allocationRows.filter((r) => r.currentPct >= CONCENTRATION_THRESHOLD_PCT).forEach((r) => {
        list.push({ severity: "notice", text: `${r.label} is ${r.currentPct.toFixed(0)}% of the portfolio — a large concentration in one category. Spreading some of that into others would reduce how much a single asset class can move your total.` });
      });
      if (debtRatioPct > 25) {
        list.push({ severity: "notice", text: `Leverage is ${debtRatioPct.toFixed(1)}% — on the higher side. Liabilities are a meaningful share of assets; paying down debt or growing assets would bring this down.` });
      } else if (debtRatioPct < 10) {
        list.push({ severity: "good", text: `Leverage is ${debtRatioPct.toFixed(1)}% — low and stable.` });
      } else {
        list.push({ severity: "info", text: `Leverage is ${debtRatioPct.toFixed(1)}% — moderate.` });
      }
      if (egpNet < 0) {
        list.push({ severity: "notice", text: `Monthly EGP cash flow is negative (${signedEgp(egpNet)}) — loan installments currently outweigh EGP income.` });
      } else if (egpNet > 0) {
        list.push({ severity: "good", text: `Monthly EGP cash flow is positive: ${signedEgp(egpNet)} surplus.` });
      }
      const upcoming = [
        ...certificates.map((c) => ({ label: c.label, amount: c.amount, maturityDate: c.maturityDate })),
        ...loanFacilities.map((f) => ({ label: f.label, amount: f.outstanding, maturityDate: f.maturityDate }))
      ].map((item) => ({ ...item, daysUntil: daysUntil(item.maturityDate) })).filter((item) => item.daysUntil !== null && item.daysUntil >= 0 && item.daysUntil <= 90);
      if (upcoming.length) {
        const total = upcoming.reduce((s, item) => s + (item.amount || 0), 0);
        list.push({ severity: "notice", text: `${upcoming.length} certificate${upcoming.length === 1 ? "" : "s"}/loan${upcoming.length === 1 ? "" : "s"} matures within 90 days, totaling ${egp(total)} — worth planning ahead for reinvestment or repayment.` });
      }
      if (analysis && analysis.days >= 5) {
        if (analysis.changePct > 0) {
          list.push({ severity: "good", text: `Marked-to-market value is up ${pctStr(analysis.changePct)} since ${firstComputed.date} (${analysis.days} days tracked).` });
        } else if (analysis.changePct < 0) {
          list.push({ severity: "notice", text: `Marked-to-market value is down ${pctStr(analysis.changePct)} since ${firstComputed.date} (${analysis.days} days tracked).` });
        }
        if (firstComputed.gold) {
          const goldChangePct = (latestComputed.gold / firstComputed.gold - 1) * 100;
          const gap = analysis.changePct - goldChangePct;
          if (Math.abs(gap) >= 2) {
            list.push({ severity: "info", text: `Since ${firstComputed.date}, the portfolio has ${gap >= 0 ? "outpaced" : "trailed"} gold by ${Math.abs(gap).toFixed(1)}pt (portfolio ${pctStr(analysis.changePct)} vs. gold ${pctStr(goldChangePct)}).` });
          }
        }
      }
      const usdSharePct = (allocationRows.find((r) => r.key === "usdFunds")?.currentPct || 0) + (allocationRows.find((r) => r.key === "usdFixed")?.currentPct || 0);
      if (usdSharePct > 0 && usdSharePct < 10) {
        list.push({ severity: "info", text: `Only ${usdSharePct.toFixed(0)}% of the portfolio is USD-denominated — most of it would move together with any EGP depreciation.` });
      }
      const severityRank = { notice: 0, info: 1, good: 2 };
      return list.sort((a, b) => severityRank[a.severity] - severityRank[b.severity]);
    }, [allocationRows, debtRatioPct, egpNet, loanFacilities, certificates, analysis, firstComputed, latestComputed]);
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
    const handleExportExcel = useCallback(async () => {
      await ensureExcelJS();
      if (!window.ExcelJS) {
        window.alert("Spreadsheet export did not load — check your connection and try again.");
        return;
      }
      const MONEY_FMT = "#,##0";
      const RATE_FMT = "#,##0.0000";
      const PRICE_FMT = "#,##0.00";
      const PCT_FMT = '0.0"%";−0.0"%"';
      const wb = new window.ExcelJS.Workbook();
      wb.creator = "Portfolio Readiness";
      wb.created = /* @__PURE__ */ new Date();
      const addSheet = (name, columns, rows) => {
        const ws = wb.addWorksheet(name, { views: [{ state: "frozen", ySplit: 1 }] });
        ws.columns = columns;
        ws.addRows(rows);
        const headerRow = ws.getRow(1);
        headerRow.eachCell((cell) => {
          cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
          cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF171717" } };
          cell.alignment = { vertical: "middle" };
        });
        headerRow.height = 20;
        ws.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: columns.length } };
        for (let r = 2; r <= ws.rowCount; r++) {
          if (r % 2 === 0) {
            ws.getRow(r).eachCell((cell) => {
              cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FFF5F5F4" } };
            });
          }
        }
      };
      addSheet("Holdings", [
        { header: "Holding", key: "label", width: 30 },
        { header: "Purchase date", key: "purchaseDate", width: 14 },
        { header: "Currency", key: "currency", width: 10 },
        { header: "Purchase amount", key: "purchaseAmount", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Bought at", key: "boughtAt", width: 14, style: { numFmt: RATE_FMT } },
        { header: "Now", key: "now", width: 14, style: { numFmt: RATE_FMT } },
        { header: "Gain %", key: "gainPct", width: 12, style: { numFmt: PCT_FMT } },
        { header: "Value (EGP)", key: "value", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "% of total", key: "pctTotal", width: 12, style: { numFmt: PCT_FMT } }
      ], ASSETS.map((a) => ({
        label: a.label,
        purchaseDate: a.purchaseDate || "",
        currency: a.currency,
        purchaseAmount: a.currency === "USD" ? a.investmentNative : a.investmentEgp,
        boughtAt: a.purchaseNav,
        now: a.currentNav,
        gainPct: a.purchaseNav != null ? a.gainPct : null,
        value: a.value,
        pctTotal: totalAssets ? a.value / totalAssets * 100 : 0
      })));
      addSheet("Daily history", [
        { header: "Date", key: "date", width: 14 },
        { header: "Rate", key: "rate", width: 12, style: { numFmt: PRICE_FMT } },
        { header: "Gold EGP/g", key: "gold", width: 14, style: { numFmt: PRICE_FMT } },
        { header: "Marked to market", key: "mtm", width: 20, style: { numFmt: MONEY_FMT } },
        { header: "Gain / loss", key: "gain", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Total %", key: "totalPct", width: 12, style: { numFmt: PCT_FMT } },
        { header: "Gold %", key: "goldPct", width: 12, style: { numFmt: PCT_FMT } },
        { header: "USD funds %", key: "usdPct", width: 14, style: { numFmt: PCT_FMT } },
        { header: "EGP funds %", key: "egpPct", width: 14, style: { numFmt: PCT_FMT } }
      ], computedHistory.map((d) => {
        const catPct = (cat) => cat && cat.cost ? (cat.current - cat.cost) / cat.cost * 100 : null;
        return {
          date: d.date,
          rate: d.rate,
          gold: d.gold,
          mtm: d.markedToMarket,
          gain: d.gain,
          totalPct: d.markedToMarketCost ? d.gain / d.markedToMarketCost * 100 : null,
          goldPct: catPct(d.byCategory?.gold),
          usdPct: catPct(d.byCategory?.usdFunds),
          egpPct: catPct(d.byCategory?.egpFunds)
        };
      }));
      addSheet("Certificates", [
        { header: "Certificate", key: "label", width: 36 },
        { header: "Rate %", key: "rate", width: 10, style: { numFmt: PCT_FMT } },
        { header: "Amount (EGP)", key: "amount", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Monthly interest", key: "interest", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Opened", key: "opened", width: 14 },
        { header: "Matures", key: "matures", width: 14 }
      ], certificates.map((c) => ({
        label: c.label,
        rate: c.rate,
        amount: c.amount,
        interest: c.amount * c.rate / 100 / 12,
        opened: c.openDate || "",
        matures: c.maturityDate || ""
      })));
      addSheet("Loans", [
        { header: "Loan", key: "label", width: 30 },
        { header: "Currency", key: "currency", width: 10 },
        { header: "Amount", key: "amount", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Monthly installment", key: "installment", width: 20, style: { numFmt: MONEY_FMT } }
      ], loans.map((l) => ({ label: l.label, currency: l.currency, amount: l.amount, installment: l.installment })));
      addSheet("Loan facilities", [
        { header: "Facility", key: "label", width: 24 },
        { header: "Rate %", key: "rate", width: 10, style: { numFmt: PCT_FMT } },
        { header: "Amount financed", key: "financed", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Outstanding", key: "outstanding", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Monthly installment", key: "installment", width: 20, style: { numFmt: MONEY_FMT } },
        { header: "Opened", key: "opened", width: 14 },
        { header: "Matures", key: "matures", width: 14 }
      ], loanFacilities.map((f) => ({
        label: f.label,
        rate: f.rate,
        financed: f.amountFinanced,
        outstanding: f.outstanding,
        installment: f.installment,
        opened: f.openDate || "",
        matures: f.maturityDate || ""
      })));
      addSheet("Office units", [
        { header: "Unit", key: "unit", width: 18 },
        { header: "Project", key: "project", width: 24 },
        { header: "Total price (EGP)", key: "totalPrice", width: 18, style: { numFmt: MONEY_FMT } },
        { header: "Paid so far", key: "paid", width: 16, style: { numFmt: MONEY_FMT } },
        { header: "Remaining", key: "remaining", width: 16, style: { numFmt: MONEY_FMT } }
      ], officeUnits.map((u) => {
        const hasSchedule = officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
        const paid = hasSchedule ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0;
        const remaining = hasSchedule ? Math.max(0, u.totalPrice - paid) : u.remaining || 0;
        return { unit: u.unit, project: u.project || "", totalPrice: u.totalPrice, paid, remaining };
      }));
      addSheet("Conversions", [
        { header: "Date", key: "date", width: 14 },
        { header: "Type", key: "type", width: 12 },
        { header: "Amount (USD)", key: "amountUsd", width: 16, style: { numFmt: MONEY_FMT } },
        { header: "Running balance (USD)", key: "running", width: 20, style: { numFmt: MONEY_FMT } }
      ], conversionsWithRunning.map((c) => ({ date: c.date, type: c.type, amountUsd: c.amountUsd, running: c.running })));
      const buffer = await wb.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `portfolio-export-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    }, [ASSETS, totalAssets, computedHistory, certificates, loans, loanFacilities, officeUnits, officeInstallments, officeInstallmentPayments, conversionsWithRunning]);
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
      const certificateRowsHtml = certificates.map((c) => `<tr><td>${c.label}</td><td class="num mono">${c.rate.toFixed(2)}%</td><td class="num mono">${egp(c.amount)}</td><td class="num mono">${egp(c.amount * c.rate / 100 / 12)}</td><td>${fmtDate(c.openDate)}</td><td>${fmtDate(c.maturityDate)}</td></tr>`).join("");
      const certificateTotal = certificates.reduce((s, c) => s + c.amount, 0);
      const certificateMonthlyInterestTotal = certificates.reduce((s, c) => s + c.amount * c.rate / 100 / 12, 0);
      const loanFacilityRowsHtml = loanFacilities.map((f) => `<tr><td>${f.label}</td><td class="num mono">${f.rate.toFixed(1)}%</td><td class="num mono">${egp(f.amountFinanced)}</td><td class="num mono">${egp(f.outstanding)}</td><td class="num mono">${egp(f.installment)}</td><td>${fmtDate(f.openDate)}</td><td>${fmtDate(f.maturityDate)}</td></tr>`).join("");
      const loanFacilityTotals = loanFacilities.reduce((s, f) => ({ amountFinanced: s.amountFinanced + f.amountFinanced, outstanding: s.outstanding + f.outstanding, installment: s.installment + f.installment }), { amountFinanced: 0, outstanding: 0, installment: 0 });
      const convRowsHtml = conversionsWithRunning.map((c) => `<tr><td>${c.date}</td><td style="text-transform:capitalize">${c.type}</td><td class="num mono">${usd(c.amountUsd)}</td><td class="num mono">${usd(c.running)}</td></tr>`).join("");
      const officeUnitHasSchedule = (u) => officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
      const officeUnitPaidSoFarDisplay = (u) => officeUnitHasSchedule(u) ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0;
      const officeUnitEffectiveRemaining = (u) => officeUnitHasSchedule(u) ? Math.max(0, u.totalPrice - officeUnitPaidSoFarDisplay(u)) : u.remaining || 0;
      const officeOnlyUnits = officeUnits.filter((u) => officeGroupUnitNames.includes(u.unit));
      const officeUnitsRowsHtml = officeOnlyUnits.map((u) => `<tr><td>${u.unit}</td><td>${u.size}</td><td class="num mono">${u.parking}</td><td class="num mono">${egp(u.totalPrice)}</td><td class="num mono">${egp(officeUnitPaidSoFarDisplay(u))}</td><td class="num mono">${egp(officeUnitEffectiveRemaining(u))}</td></tr>`).join("");
      const officeUnitsTotals = officeOnlyUnits.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, advance: s.advance + officeUnitPaidSoFarDisplay(u), remaining: s.remaining + officeUnitEffectiveRemaining(u) }), { totalPrice: 0, advance: 0, remaining: 0 });
      const unitNextDueText = (u) => {
        const row = nextOfficeInstallment(filterScheduleForUnits(officeInstallments, [u.unit]), officeInstallmentPayments);
        return row ? `${fmtDate(row.date)}, ${egp(row.amount)}` : "—";
      };
      const individualPropertyRowsHtml = individualProperties.map((u) => `<tr><td>${u.unit}</td><td>${u.project || ""}</td><td>${u.size}</td><td class="num mono">${egp(u.totalPrice)}</td><td class="num mono">${egp(officeUnitPaidSoFarDisplay(u))}</td><td class="num mono">${egp(officeUnitEffectiveRemaining(u))}</td><td>${unitNextDueText(u)}</td></tr>`).join("");
      const individualPropertyTotals = individualProperties.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, paid: s.paid + officeUnitPaidSoFarDisplay(u), remaining: s.remaining + officeUnitEffectiveRemaining(u) }), { totalPrice: 0, paid: 0, remaining: 0 });
      const catPctHtml = (cat) => cat && cat.cost ? pctStr((cat.current - cat.cost) / cat.cost * 100) : "—";
      const historyRowsHtml = [...yearComputedHistory].reverse().map((d) => `<tr><td>${d.date}</td><td class="num mono">${fmt(d.rate, 2)}</td><td class="num mono">${fmt(d.gold)}</td><td class="num mono">${egp(d.markedToMarket)}</td><td class="num mono">${signedEgp(d.gain)}</td><td class="num mono">${d.markedToMarketCost ? pctStr(d.gain / d.markedToMarketCost * 100) : "—"}</td><td class="num mono">${catPctHtml(d.byCategory?.gold)}</td><td class="num mono">${catPctHtml(d.byCategory?.usdFunds)}</td><td class="num mono">${catPctHtml(d.byCategory?.egpFunds)}</td></tr>`).join("");
      const metalFundRowsHtml = yearMetalFundRows.map((r) => `<tr><td>${r.label}</td><td class="num mono">${egp(r.investmentNative || 0)}</td><td class="num mono">${egp(r.value || 0)}</td><td class="num mono">${pctStr(r.gainPct || 0)}</td><td>${fmtDate(r.purchaseDate)}</td></tr>`).join("");
      const metalPhysicalRowsHtml = yearMetalPhysicalRows.map((r) => `<tr><td>${r.label}</td><td class="num mono">${(r.grams || 0).toLocaleString()}</td><td class="num mono">${egp(r.investmentNative || 0)}</td><td class="num mono">${egp(r.value || 0)}</td><td class="num mono">${pctStr(r.gainPct || 0)}</td><td>${fmtDate(r.purchaseDate)}</td></tr>`).join("");
      const metalOverallGain = yearMetalOverall.value - yearMetalOverall.invested;
      const performanceRankingRowsHtml = yearPerformanceRanking.map((r, i) => {
        const netGain = r.currentNative - r.investmentNative;
        const fmtNative = (n) => r.currency === "USD" ? usd(n) : egp(n);
        const signedNative = `${netGain >= 0 ? sgP() : sgM()}${fmtNative(Math.abs(netGain))}`;
        return `<tr><td class="mono">${i + 1}</td><td>${r.label}</td><td>${fmtDate(r.purchaseDate)}</td><td class="num mono">${fmtNative(r.investmentNative)}</td><td class="num mono">${r.currency === "USD" ? usd(r.currentNative) : egp(r.value)}</td><td class="num mono">${signedNative}</td><td class="num mono">${pctStr(r.gainPct)}</td></tr>`;
      }).join("");
      const analysisHtml = yearAnalysis ? `
      <h2>Since ${yearFirstComputed.date} (${yearAnalysis.days} days)</h2>
      <p class="note">Marked-to-market moved <b>${signedEgp(yearAnalysis.changeVal)}</b> (${pctStr(yearAnalysis.changePct)}). FX moved ${pctStr(yearAnalysis.rateChangePct)}; gold moved ${pctStr(yearAnalysis.goldChangePct)} per gram. Funds and gold only. ${ADDITIONS_ONLY_NOTE} ${fallbackQuotes ? fallbackQuotes + " holding-day prices are missing and valued at cost." : "No missing fund prices on the recorded days."}
      ${yearAnalysis.strongest ? `Strongest holding overall: <b>${yearAnalysis.strongest.label}</b> (${pctStr(yearAnalysis.strongest.last)}).` : ""}
      ${yearAnalysis.weakest ? `Weakest: <b>${yearAnalysis.weakest.label}</b> (${pctStr(yearAnalysis.weakest.last)}).` : ""}</p>
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
  .toc { border:1px solid #E5E5E5; border-radius:6px; padding:14px 18px; margin:6px 0 28px; background:#fff; }
  .toc-title { font-size:10px; text-transform:uppercase; letter-spacing:.08em; color:#737373; margin-bottom:8px; }
  .toc-list { columns:2; column-gap:24px; font-size:12.5px; list-style:none; margin:0; padding:0; }
  .toc-list li { break-inside:avoid; margin-bottom:5px; }
  .toc-list a { color:#171717; text-decoration:none; }
  .toc-list a:hover { text-decoration:underline; }
  @media print {
    .no-print { display:none !important; }
    .toc { border:none; padding:0; }
    .toc-list { columns:1; }
    h2 { page-break-after:avoid; break-after:avoid; }
    table { page-break-inside:auto; }
    tr { page-break-inside:avoid; break-inside:avoid; }
  }
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
  ${ASSETS.find((a) => a.id === "nbeDist") ? `<p class="note">Total assets include ${egp(ASSETS.find((a) => a.id === "nbeDist").value)} of "NBE fund distributions received" at the recorded amount. It mixes notice-confirmed and inferred payouts, may count one payout twice, and is cash already received, so it is not a verified current holding. Total assets without it: ${egp(totalAssets - ASSETS.find((a) => a.id === "nbeDist").value)}.</p>` : ""}

  ${!isCurrentYearView ? `<p class="note">Showing <b>${effectiveViewYear}</b> (closed) for the sections below that track yearly performance — that year's profit tracking reset to zero at the start of ${effectiveViewYear + 1}. The totals just above, and "Performance over time" below, are always today's live numbers.</p>` : ""}

  <nav class="toc"><div class="toc-title">On this page</div><ul class="toc-list">
    <li><a href="#r-holdings">Holdings</a></li>
    <li><a href="#r-whole-portfolio">Whole portfolio</a></li>
    <li><a href="#r-performance">Performance over time</a></li>
    <li><a href="#r-variable-investments">Variable investments</a></li>
    <li><a href="#r-metal">Metal: funds vs physical</a></li>
    <li><a href="#r-insights">Portfolio insights</a></li>
    <li><a href="#r-by-currency">Investment, by currency</a></li>
    <li><a href="#r-owed">What is owed</a></li>
    <li><a href="#r-office-units">Office units</a></li>
    <li><a href="#r-other-properties">Other properties</a></li>
    <li><a href="#r-cash-flow">Monthly cash flow</a></li>
    <li><a href="#r-conversions">Currency conversion history</a></li>
    <li><a href="#r-ranking">Performance ranking</a></li>
    <li><a href="#r-history">History</a></li>
  </ul></nav>

  <h2 id="r-holdings">Holdings</h2>
  <table><tr><th>Holding</th><th>Purchase date</th><th class="num">Purchase amount</th><th class="num">Bought at</th><th class="num">Now</th><th class="num">Gain</th><th class="num">Value</th><th class="num">% of total</th></tr>${rowsHtml}</table>
  <p class="note">The ${certificates.length} EGP certificates & CDs, individually — these roll up into the single "EGP certificates & CDs" holding above.</p>
  <table><tr><th>Certificate</th><th class="num">Rate</th><th class="num">Amount</th><th class="num">Monthly interest</th><th>Opened</th><th>Matures</th></tr>${certificateRowsHtml}<tr><td><b>Total (${certificates.length})</b></td><td></td><td class="num mono"><b>${egp(certificateTotal)}</b></td><td class="num mono"><b>${egp(certificateMonthlyInterestTotal)}</b></td><td></td><td></td></tr></table>
  <p class="note">Total monthly interest across all certificates reconciles with the "EGP — certificate & fund income" line in the cash flow section below.</p>

  <h2 id="r-whole-portfolio">Whole portfolio (everything, including certificates and properties)</h2>
  <p class="note">Value minus cost only. Fixed lines are carried at cost and income received is not included, so this is not a total return.</p>
  <table>
    <tr><td>We put in</td><td class="num mono">${egp(yearWholePortfolio.totalInvested)}</td></tr>
    <tr><td>Worth now</td><td class="num mono">${egp(yearWholePortfolio.totalCurrent)}</td></tr>
    <tr><td>Value minus cost</td><td class="num mono">${signedEgp(yearWholePortfolio.totalProfit)}</td></tr>
    <tr><td>Change vs cost</td><td class="num mono">${pctStr(yearWholePortfolio.returnPct)}</td></tr>
  </table>

  <h2 id="r-performance">Performance over time</h2>
  <p class="note">${analysis ? `Funds and gold since records began on ${firstComputed.date} (${analysis.days} recorded observations over ${Math.round((new Date(latestComputed.date + "T00:00:00") - new Date(firstComputed.date + "T00:00:00")) / 864e5)} calendar days; no year-to-date or 12-month figure exists yet): <b>${pctStr(analysis.changePct)}</b> (${signedEgp(analysis.changeVal)}), adjusted for additions only, income excluded, no sales or withdrawals handled.` : ""} Whole portfolio, value vs amount put in: <b>${pctStr(wholePortfolio.returnPct)}</b> (${signedEgp(wholePortfolio.totalProfit)}). These are not verified returns.</p>

  <h2 id="r-variable-investments">Variable investments (funds, gold, Beltone — excludes certificates)</h2>
  <table>
    <tr><td>Total invested</td><td class="num mono">${egp(yearVariableInvestments.totalInvested)}</td></tr>
    <tr><td>Duration tracked</td><td class="num mono">${yearVariableInvestments.durationDays} day${yearVariableInvestments.durationDays === 1 ? "" : "s"}</td></tr>
    <tr><td>Change vs cost</td><td class="num mono">${pctStr(yearVariableInvestments.returnPct)}</td></tr>
    <tr><td>Value minus cost</td><td class="num mono">${signedEgp(yearVariableInvestments.totalProfit)}</td></tr>
  </table>
  <p class="note">By category — "invested" adds up to "Total invested" above; "current value" adds up to total invested + value minus cost above. USD funds shown in dollars, converted at today's rate for the totals above.</p>
  <table>
    <tr><th>Category</th><th class="num">Invested</th><th class="num">Current value</th><th class="num">Change vs cost</th></tr>
    ${yearVariableInvestmentsByCategory.map((c) => `<tr><td>${c.label}</td><td class="num mono">${c.currency === "USD" ? usd(c.costUsd) : egp(c.cost)}</td><td class="num mono">${c.currency === "USD" ? usd(c.currentUsd) : egp(c.current)}</td><td class="num mono">${pctStr(c.pct)}</td></tr>`).join("")}
  </table>

  <h2 id="r-metal">Metal: funds vs physical</h2>
  <table>
    <tr><td>Total invested</td><td class="num mono">${egp(yearMetalOverall.invested)}</td></tr>
    <tr><td>Current value</td><td class="num mono">${egp(yearMetalOverall.value)}</td></tr>
    <tr><td>Gain / loss</td><td class="num mono">${signedEgp(metalOverallGain)} (${pctStr(yearMetalOverall.gainPct)})</td></tr>
  </table>
  <p class="note">Gold funds</p>
  <table><tr><th>Holding</th><th class="num">Invested</th><th class="num">Current value</th><th class="num">Gain</th><th>Purchased</th></tr>${metalFundRowsHtml}</table>
  <p class="note">Physical gold</p>
  <table><tr><th>Holding</th><th class="num">Grams</th><th class="num">Invested</th><th class="num">Current value</th><th class="num">Gain</th><th>Purchased</th></tr>${metalPhysicalRowsHtml}</table>

  <h2 id="r-insights">Portfolio insights</h2>
  ${aiInsight?.text ? `<p class="note"><b>AI analysis</b> (generated ${fmtDate(aiInsight.basedOnDate)}): ${aiInsight.text}</p>` : ""}
  <p class="note">Automatic observations from the numbers above — concentration, leverage, cash flow, and upcoming maturities.</p>
  ${portfolioInsights.length === 0 ? '<p class="note">No notable observations right now — nothing here looks out of the ordinary.</p>' : `<ul style="margin:0 0 12px;padding-left:18px;">${portfolioInsights.map((ins) => `<li class="note" style="margin:0 0 6px;"><b>${ins.severity === "notice" ? "Notice" : ins.severity === "good" ? "Good" : "Note"}:</b> ${ins.text}</li>`).join("")}</ul>`}

  <h2 id="r-by-currency">Investment, by currency</h2>
  <table>
    <tr><td>Total invested in EGP</td><td class="num mono">${egp(totalEgpInvestment)}</td></tr>
    <tr><td>Total invested in USD</td><td class="num mono">${usd(totalUsdInvestment)}</td></tr>
    <tr><td>Received from outside transfers</td><td class="num mono">${usd(totalIncomingUsd)}</td></tr>
    <tr><td>Remaining in USD today</td><td class="num mono">${usd(conversionRunningBalance)}</td></tr>
  </table>

  <h2 id="r-owed">What is owed</h2>
  <table><tr><th>Facility</th><th class="num">Amount</th><th class="num">Monthly installment</th></tr>${loanRowsHtml}</table>
  <p class="note">The ${loanFacilities.length} secured EGP facilities, individually — these roll up into the single "Secured EGP loans" row above.</p>
  <table><tr><th>Facility</th><th class="num">Rate</th><th class="num">Amount financed</th><th class="num">Outstanding balance</th><th class="num">Monthly installment</th><th>Opened</th><th>Matures</th></tr>${loanFacilityRowsHtml}<tr><td><b>Total (${loanFacilities.length})</b></td><td></td><td class="num mono"><b>${egp(loanFacilityTotals.amountFinanced)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.outstanding)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.installment)}</b></td><td></td><td></td></tr></table>

  <h2 id="r-office-units">Office units</h2>
  <p class="note">Still being paid off in installments per the payment schedule — what's been paid so far (${egp(officeUnitsTotals.advance)}) is counted toward Total Assets above. Next due ${fmtDate(officeGroupNextDueDate)}${officeGroupNextDueDate ? `, ${egp(officeGroupNextDueAmount)}` : ""}.</p>
  <table><tr><th>Unit</th><th>Size</th><th class="num">Parking</th><th class="num">Total price</th><th class="num">Paid so far</th><th class="num">Remaining installments</th></tr>${officeUnitsRowsHtml}<tr><td><b>Total (${officeOnlyUnits.length})</b></td><td></td><td></td><td class="num mono"><b>${egp(officeUnitsTotals.totalPrice)}</b></td><td class="num mono"><b>${egp(officeUnitsTotals.advance)}</b></td><td class="num mono"><b>${egp(officeUnitsTotals.remaining)}</b></td></tr></table>

  <h2 id="r-other-properties">Other properties</h2>
  <p class="note">Each property has its own distinct payment schedule — what's been paid so far (${egp(individualPropertyTotals.paid)}) is counted toward Total Assets above.</p>
  <table><tr><th>Unit</th><th>Project</th><th>Type</th><th class="num">Total price</th><th class="num">Paid so far</th><th class="num">Remaining</th><th>Next due</th></tr>${individualPropertyRowsHtml}<tr><td><b>Total (${individualProperties.length})</b></td><td></td><td></td><td class="num mono"><b>${egp(individualPropertyTotals.totalPrice)}</b></td><td class="num mono"><b>${egp(individualPropertyTotals.paid)}</b></td><td class="num mono"><b>${egp(individualPropertyTotals.remaining)}</b></td><td></td></tr></table>

  <h2 id="r-cash-flow">Monthly cash flow</h2>
  <table>
    <tr><td>EGP \u2014 certificate income</td><td class="num mono">${egp(cashFlow.egp.income)}</td></tr>
    <tr><td>EGP \u2014 loan installments</td><td class="num mono">${egp(cashFlow.egp.outflow)}</td></tr>
    <tr><td>EGP \u2014 property installments &amp; maintenance (avg/mo, next 12mo)</td><td class="num mono">${egp(cashFlow.egp.propertyMonthly)}</td></tr>
    <tr><td><b>EGP \u2014 net monthly ${egpNet >= 0 ? "surplus" : "deficit"}</b></td><td class="num mono"><b>${egp(egpNet)}</b></td></tr>
    <tr><td>USD \u2014 certificate &amp; deposit income</td><td class="num mono">${usd(cashFlow.usd.income)}</td></tr>
    <tr><td>USD \u2014 loan installments</td><td class="num mono">${usd(cashFlow.usd.outflow)}</td></tr>
    <tr><td><b>USD \u2014 net monthly ${usdNet >= 0 ? "surplus" : "deficit"}</b></td><td class="num mono"><b>${usd(usdNet)}</b></td></tr>
  </table>

  <h2 id="r-conversions">Currency conversion history</h2>
  <table>
    <tr><td>Received from outside (transfers in)</td><td class="num mono">${usd(totalIncomingUsd)}</td></tr>
    <tr><td>Surrendered to EGP, USD</td><td class="num mono">${usd(conversionSummary.totalConvertedUsd)}</td></tr>
    <tr><td>Surrendered to EGP, EGP</td><td class="num mono">${egp(conversionSummary.totalConvertedEgp)}</td></tr>
    <tr><td>Weighted average rate</td><td class="num mono">${conversionSummary.weightedRate ? fmt(conversionSummary.weightedRate, 2) : "—"}</td></tr>
  </table>
  <table><tr><th>Date</th><th>Type</th><th class="num">Amount, USD</th><th class="num">Running balance</th></tr>${convRowsHtml}</table>

  <h2 id="r-ranking">Performance ranking, strongest to weakest</h2>
  <p class="note">As of ${asOfLabel} — regenerate this report after any new day's entry to refresh the ranking.</p>
  <table><tr><th>Rank</th><th>Holding</th><th>Purchase date</th><th class="num">Purchase value</th><th class="num">Current value</th><th class="num">Net gain / loss</th><th class="num">Price change since purchase (excl. income)</th></tr>${performanceRankingRowsHtml}</table>

  <h2 id="r-history">History</h2>
  ${analysisHtml}
  <table><tr><th>Date</th><th class="num">Rate</th><th class="num">Gold</th><th class="num">Marked-to-market</th><th class="num">Gain / loss</th><th class="num">Total %</th><th class="num">Gold %</th><th class="num">USD funds %</th><th class="num">EGP funds %</th></tr>${historyRowsHtml}</table>

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
      yearPerformanceRanking,
      loans,
      conversionsWithRunning,
      yearComputedHistory,
      yearAnalysis,
      yearFirstComputed,
      yearVariableInvestments,
      periodReturns,
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
      officeGroupNextDueDate,
      officeGroupNextDueAmount,
      yearWholePortfolio,
      yearVariableInvestmentsByCategory,
      yearMetalFundRows,
      yearMetalPhysicalRows,
      yearMetalOverall,
      loanFacilities,
      certificates,
      officeUnits,
      officeInstallments,
      officeInstallmentPayments,
      conversionSummary,
      portfolioInsights,
      cashFlow,
      officeGroupUnitNames,
      individualProperties,
      effectiveViewYear,
      isCurrentYearView
    ]);
    const downloadLiabilitiesReport = useCallback(() => {
      const loanRowsHtml = loans.map((l) => {
        const amt = l.currency === "USD" ? usd(l.amount) : egp(l.amount);
        const inst = l.currency === "USD" ? usd(l.installment) : egp(l.installment);
        return `<tr><td>${l.label}</td><td>${l.currency}</td><td class="num mono">${amt}</td><td class="num mono">${inst}</td></tr>`;
      }).join("");
      const loanFacilityRowsHtml = loanFacilities.map((f) => `<tr><td>${f.label}</td><td class="num mono">${f.rate.toFixed(1)}%</td><td class="num mono">${egp(f.amountFinanced)}</td><td class="num mono">${egp(f.outstanding)}</td><td class="num mono">${egp(f.installment)}</td><td>${fmtDate(f.openDate)}</td><td>${fmtDate(f.maturityDate)}</td></tr>`).join("");
      const loanFacilityTotals = loanFacilities.reduce((s, f) => ({ amountFinanced: s.amountFinanced + f.amountFinanced, outstanding: s.outstanding + f.outstanding, installment: s.installment + f.installment }), { amountFinanced: 0, outstanding: 0, installment: 0 });
      const propHasSchedule = (u) => officeInstallments.some((row) => row.byUnit && u.unit in row.byUnit);
      const propPaidSoFar = (u) => propHasSchedule(u) ? officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments) : u.advance || 0;
      const propRemaining = (u) => propHasSchedule(u) ? Math.max(0, u.totalPrice - propPaidSoFar(u)) : u.remaining || 0;
      const propTotals = officeUnits.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, paid: s.paid + propPaidSoFar(u), remaining: s.remaining + propRemaining(u) }), { totalPrice: 0, paid: 0, remaining: 0 });
      const officeUnitsForLiab = officeUnits.filter((u) => officeGroupUnitNames.includes(u.unit));
      const propRowsHtmlOffice = officeUnitsForLiab.map((u) => `<tr><td>${u.unit}</td><td class="num mono">${egp(u.totalPrice)}</td><td class="num mono">${egp(propPaidSoFar(u))}</td><td class="num mono">${egp(propRemaining(u))}</td></tr>`).join("");
      const propTotalsOffice = officeUnitsForLiab.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, paid: s.paid + propPaidSoFar(u), remaining: s.remaining + propRemaining(u) }), { totalPrice: 0, paid: 0, remaining: 0 });
      const propRowsHtmlIndividual = individualProperties.map((u) => `<tr><td>${u.unit}</td><td>${u.project || ""}</td><td class="num mono">${egp(u.totalPrice)}</td><td class="num mono">${egp(propPaidSoFar(u))}</td><td class="num mono">${egp(propRemaining(u))}</td></tr>`).join("");
      const propTotalsIndividual = individualProperties.reduce((s, u) => ({ totalPrice: s.totalPrice + u.totalPrice, paid: s.paid + propPaidSoFar(u), remaining: s.remaining + propRemaining(u) }), { totalPrice: 0, paid: 0, remaining: 0 });
      const maintHasSchedule = (u) => officeMaintenance.some((row) => row.byUnit && u.unit in row.byUnit);
      const maintPaidSoFar = (u) => officeUnitPaidSoFar(u.unit, officeMaintenance, officeMaintenancePayments);
      const maintTotal = (u) => officeMaintenance.reduce((s, row) => s + (row.byUnit?.[u.unit] || 0), 0);
      const maintRemaining = (u) => Math.max(0, maintTotal(u) - maintPaidSoFar(u));
      const propsWithMaint = officeUnits.filter((u) => maintHasSchedule(u));
      const maintTotals = propsWithMaint.reduce((s, u) => ({ total: s.total + maintTotal(u), paid: s.paid + maintPaidSoFar(u), remaining: s.remaining + maintRemaining(u) }), { total: 0, paid: 0, remaining: 0 });
      const propsWithMaintOffice = officeUnitsForLiab.filter((u) => maintHasSchedule(u));
      const maintRowsHtmlOffice = propsWithMaintOffice.map((u) => `<tr><td>${u.unit}</td><td class="num mono">${egp(maintTotal(u))}</td><td class="num mono">${egp(maintPaidSoFar(u))}</td><td class="num mono">${egp(maintRemaining(u))}</td></tr>`).join("");
      const maintTotalsOffice = propsWithMaintOffice.reduce((s, u) => ({ total: s.total + maintTotal(u), paid: s.paid + maintPaidSoFar(u), remaining: s.remaining + maintRemaining(u) }), { total: 0, paid: 0, remaining: 0 });
      const propsWithMaintIndividual = individualProperties.filter((u) => maintHasSchedule(u));
      const maintRowsHtmlIndividual = propsWithMaintIndividual.map((u) => `<tr><td>${u.unit}</td><td>${u.project || ""}</td><td class="num mono">${egp(maintTotal(u))}</td><td class="num mono">${egp(maintPaidSoFar(u))}</td><td class="num mono">${egp(maintRemaining(u))}</td></tr>`).join("");
      const maintTotalsIndividual = propsWithMaintIndividual.reduce((s, u) => ({ total: s.total + maintTotal(u), paid: s.paid + maintPaidSoFar(u), remaining: s.remaining + maintRemaining(u) }), { total: 0, paid: 0, remaining: 0 });
      const nextInstRow = nextOfficeInstallment(officeInstallments, officeInstallmentPayments);
      const grandTotalOutstanding = loansOutstanding + propTotals.remaining + maintTotals.remaining;
      const variableCurrentValue = variableInvestments.totalInvested + variableInvestments.totalProfit;
      const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Portfolio Readiness — Liabilities report ${latest?.date || ""}</title>
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
  .toc { border:1px solid #E5E5E5; border-radius:6px; padding:14px 18px; margin:6px 0 28px; background:#fff; }
  .toc-title { font-size:10px; text-transform:uppercase; letter-spacing:.08em; color:#737373; margin-bottom:8px; }
  .toc-list { columns:2; column-gap:24px; font-size:12.5px; list-style:none; margin:0; padding:0; }
  .toc-list li { break-inside:avoid; margin-bottom:5px; }
  .toc-list a { color:#171717; text-decoration:none; }
  .toc-list a:hover { text-decoration:underline; }
  @media print {
    .no-print { display:none !important; }
    .toc { border:none; padding:0; }
    .toc-list { columns:1; }
    h2 { page-break-after:avoid; break-after:avoid; }
    table { page-break-inside:auto; }
    tr { page-break-inside:avoid; break-inside:avoid; }
  }
</style></head>
<body>
  <div class="no-print" style="background:#171717;color:#fff;padding:10px 16px;margin:-32px -40px 24px;display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:11px;text-transform:uppercase;letter-spacing:.08em;">This is a standalone file — open it anywhere, share it with anyone</span>
    <button onclick="window.print()" style="background:transparent;border:1px solid #737373;color:#fff;padding:6px 12px;font-size:11px;text-transform:uppercase;letter-spacing:.05em;cursor:pointer;">Print / Save as PDF</button>
  </div>
  <div class="eyebrow"><span>Portfolio Readiness</span><span>Liabilities report, as of ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}</span></div>
  <h1>Everything owed</h1>
  <p class="dek">Loans, secured facilities, and what's still owed on every property — installments and maintenance, each tracked separately.</p>
  <div class="grid4">
    <div><div class="stat-label">Loans outstanding</div><div class="stat-value mono">${egp(loansOutstanding)}</div></div>
    <div><div class="stat-label">Properties, remaining installments</div><div class="stat-value mono">${egp(propTotals.remaining)}</div></div>
    <div><div class="stat-label">Properties, remaining maintenance</div><div class="stat-value mono">${egp(maintTotals.remaining)}</div></div>
    <div><div class="stat-label">Total outstanding</div><div class="stat-value mono">${egp(grandTotalOutstanding)}</div></div>
  </div>
  <p class="note">For reference — variable investments (funds, gold, Beltone): ${egp(variableInvestments.totalInvested)} invested, ${egp(variableCurrentValue)} current value (${pctStr(variableInvestments.returnPct)}). Not a liability, shown here just as context against the totals above.</p>

  <nav class="toc"><div class="toc-title">On this page</div><ul class="toc-list">
    <li><a href="#l-loans">Loans</a></li>
    <li><a href="#l-facilities">Secured EGP facilities</a></li>
    <li><a href="#l-office-inst">Office units — installments</a></li>
    <li><a href="#l-office-maint">Office units — maintenance</a></li>
    <li><a href="#l-other-inst">Other properties — installments</a></li>
    <li><a href="#l-other-maint">Other properties — maintenance</a></li>
    <li><a href="#l-cash-flow">Monthly cash flow</a></li>
  </ul></nav>

  <h2 id="l-loans">Loans</h2>
  <table><tr><th>Loan</th><th>Currency</th><th class="num">Amount</th><th class="num">Installment</th></tr>${loanRowsHtml}<tr><td><b>Total</b></td><td></td><td class="num mono"><b>${egp(loansOutstanding)}</b></td><td></td></tr></table>

  <h2 id="l-facilities">Secured EGP facilities, individually</h2>
  <table><tr><th>Facility</th><th class="num">Rate</th><th class="num">Amount financed</th><th class="num">Outstanding</th><th class="num">Installment</th><th>Opened</th><th>Matures</th></tr>${loanFacilityRowsHtml}<tr><td><b>Total (${loanFacilities.length})</b></td><td></td><td class="num mono"><b>${egp(loanFacilityTotals.amountFinanced)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.outstanding)}</b></td><td class="num mono"><b>${egp(loanFacilityTotals.installment)}</b></td><td></td><td></td></tr></table>

  <h2 id="l-office-inst">Office units — remaining installments</h2>
  <p class="note">Next due ${fmtDate(nextInstRow?.date)}${nextInstRow ? `, ${egp(nextInstRow.amount)}` : ""}.</p>
  <table><tr><th>Unit</th><th class="num">Total price</th><th class="num">Paid so far</th><th class="num">Remaining</th></tr>${propRowsHtmlOffice}<tr><td><b>Total (${officeUnitsForLiab.length})</b></td><td class="num mono"><b>${egp(propTotalsOffice.totalPrice)}</b></td><td class="num mono"><b>${egp(propTotalsOffice.paid)}</b></td><td class="num mono"><b>${egp(propTotalsOffice.remaining)}</b></td></tr></table>

  <h2 id="l-office-maint">Office units — remaining maintenance</h2>
  <p class="note">Not counted toward Total Assets, but is included in Total outstanding above.</p>
  <table><tr><th>Unit</th><th class="num">Total maintenance</th><th class="num">Paid</th><th class="num">Remaining</th></tr>${maintRowsHtmlOffice}<tr><td><b>Total (${propsWithMaintOffice.length})</b></td><td class="num mono"><b>${egp(maintTotalsOffice.total)}</b></td><td class="num mono"><b>${egp(maintTotalsOffice.paid)}</b></td><td class="num mono"><b>${egp(maintTotalsOffice.remaining)}</b></td></tr></table>

  <h2 id="l-other-inst">Other properties — remaining installments</h2>
  <table><tr><th>Unit</th><th>Project</th><th class="num">Total price</th><th class="num">Paid so far</th><th class="num">Remaining</th></tr>${propRowsHtmlIndividual}<tr><td><b>Total (${individualProperties.length})</b></td><td></td><td class="num mono"><b>${egp(propTotalsIndividual.totalPrice)}</b></td><td class="num mono"><b>${egp(propTotalsIndividual.paid)}</b></td><td class="num mono"><b>${egp(propTotalsIndividual.remaining)}</b></td></tr></table>

  <h2 id="l-other-maint">Other properties — remaining maintenance</h2>
  <p class="note">Not counted toward Total Assets, but is included in Total outstanding above.</p>
  <table><tr><th>Unit</th><th>Project</th><th class="num">Total maintenance</th><th class="num">Paid</th><th class="num">Remaining</th></tr>${maintRowsHtmlIndividual}<tr><td><b>Total (${propsWithMaintIndividual.length})</b></td><td></td><td class="num mono"><b>${egp(maintTotalsIndividual.total)}</b></td><td class="num mono"><b>${egp(maintTotalsIndividual.paid)}</b></td><td class="num mono"><b>${egp(maintTotalsIndividual.remaining)}</b></td></tr></table>

  <h2 id="l-cash-flow">Monthly cash flow</h2>
  <p class="note">Cash in (recurring monthly income) against cash out (loan installments, plus property installments &amp; maintenance averaged over the next 12 months).</p>
  <table>
    <tr><td>EGP — cash in (certificates)</td><td class="num mono">${egp(cashFlow.egp.income)}</td></tr>
    <tr><td>EGP — cash out, loans</td><td class="num mono">${egp(cashFlow.egp.outflow)}</td></tr>
    <tr><td>EGP — cash out, properties (avg/mo)</td><td class="num mono">${egp(cashFlow.egp.propertyMonthly)}</td></tr>
    <tr><td><b>EGP — net monthly</b></td><td class="num mono"><b>${egp(cashFlow.egp.income - cashFlow.egp.outflow - cashFlow.egp.propertyMonthly)}</b></td></tr>
    <tr><td>USD — cash in (certificates &amp; deposits)</td><td class="num mono">${usd(cashFlow.usd.income)}</td></tr>
    <tr><td>USD — cash out, loans</td><td class="num mono">${usd(cashFlow.usd.outflow)}</td></tr>
    <tr><td><b>USD — net monthly</b></td><td class="num mono"><b>${usd(cashFlow.usd.income - cashFlow.usd.outflow)}</b></td></tr>
  </table>

  <div class="footer"><span>Figures as tracked in the working file. For internal review, not financial advice.</span><span>Generated ${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}</span></div>
</body></html>`;
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `portfolio-liabilities-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 2e3);
    }, [loans, loanFacilities, officeUnits, officeInstallments, officeInstallmentPayments, officeMaintenance, officeMaintenancePayments, loansOutstanding, officeNextDueDate, officeNextDueAmount, latest, variableInvestments, cashFlow, officeGroupUnitNames, individualProperties]);
    if (loadState === "loading") {
      return /* @__PURE__ */ jsx(LoadingSkeleton, {});
    }
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen pb-16 md:pb-0 bg-neutral-50 text-neutral-900 font-sans animate-fadein", key: view, children: [
      !showAdmin && dailyAlert && dailyAlert.date !== dismissedAlertDate && /* @__PURE__ */ jsx("div", { className: "bg-neutral-100 border-b border-neutral-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-1.5 md:py-2 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { role: "button", tabIndex: 0, onClick: () => scrollToId("overview"), className: "text-xs md:text-sm text-neutral-700 leading-relaxed cursor-pointer hover:underline min-w-0 flex-1 truncate md:whitespace-normal", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("Market note — ") }),
          dailyAlert.triggers.join(" · ")
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDismissedAlertDate(dailyAlert.date), className: "text-xs text-neutral-500 underline shrink-0 whitespace-nowrap py-1 pl-3", children: T("Dismiss") })
      ] }) }),
      !showAdmin && officeDueAlert && officeDueAlert.date !== dismissedOfficeDueDate && /* @__PURE__ */ jsx("div", { className: `border-b-2 ${officeDueAlert.daysUntilDue < 0 ? "bg-red-50 border-red-400" : "bg-amber-50 border-amber-400"}`, children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-2 md:py-3 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { role: "button", tabIndex: 0, onClick: openOfficeDue, onKeyDown: (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openOfficeDue(); } }, className: `text-xs md:text-sm leading-relaxed cursor-pointer hover:underline ${officeDueAlert.daysUntilDue < 0 ? "text-red-900" : "text-amber-900"}`, children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif italic hidden md:inline", children: `${officeNextDueLabel} — ` }),
          /* @__PURE__ */ jsx("span", { className: "font-serif italic md:hidden", children: T("Installments — ") }),
          officeDueSentence(officeDueAlert, officeDueMulti)
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setDismissedOfficeDueDate(officeDueAlert.date), className: `text-xs underline shrink-0 whitespace-nowrap py-1 pl-3 ${officeDueAlert.daysUntilDue < 0 ? "text-red-700" : "text-amber-700"}`, children: T("Dismiss") })
      ] }) }),
      !showAdmin && isOwner && pendingSignups.length > 0 && /* @__PURE__ */ jsx("div", { className: "bg-emerald-50 border-b-2 border-emerald-300", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 py-3 flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm text-emerald-900 leading-relaxed", children: [
          /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("New sign-up request — ") }),
          pendingSignups.length === 1 ? pendingSignups[0].email || "one account" : `${pendingSignups.length} accounts waiting for review`
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setView("admin"), className: "text-xs text-emerald-700 underline shrink-0 whitespace-nowrap", children: T("Review") })
      ] }) }),
      installmentSummaryOpen && nextOfficeInstallmentRow && jsx(InstallmentAlertSummary, { row: nextOfficeInstallmentRow, payments: officeInstallmentPayments, onClose: () => setInstallmentSummaryOpen(false) }),
      /* @__PURE__ */ jsx(ScrollToTopButton, {}),
      !showAdmin && jsx(BottomTabs, {}),
      /* @__PURE__ */ jsx("header", { className: "border-b-2 border-neutral-900 bg-neutral-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto px-6 pt-3 pb-3 md:pt-8 md:pb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-end md:justify-between font-mono text-xs uppercase tracking-wide text-neutral-500", children: [
          /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: T("Portfolio Review \u2014 No. 006") }),
          /* @__PURE__ */ jsx("div", { className: "flex items-baseline gap-3", children: [
            availableYears.length > 1 && /* @__PURE__ */ jsx(
              "select",
              {
                value: effectiveViewYear,
                onChange: (e) => setViewYear(Number(e.target.value)),
                "aria-label": "Viewing year",
                title: T("Switch between years — profit tracking resets to zero at the start of each year"),
                className: "border border-neutral-300 bg-white text-neutral-700 font-mono text-xs px-2 py-1 uppercase tracking-wide focus:outline-none focus:border-neutral-800",
                children: availableYears.map((y) => /* @__PURE__ */ jsx("option", { value: y, children: y === availableYears[0] ? `${y}${T(" (current)")}` : y }, y))
              }
            ),
            role && role !== "owner" && /* @__PURE__ */ jsx("span", { className: `px-2 py-0.5 border ${canEdit ? "border-neutral-400 text-neutral-600" : "border-amber-400 text-amber-700 bg-amber-50"}`, children: role }),
            /* @__PURE__ */ jsx("span", { children: (/* @__PURE__ */ new Date()).toLocaleDateString(getLang() === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "2-digit", month: "long", year: "numeric" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center md:items-start justify-between gap-3 md:gap-6 mt-1 md:mt-3", children: [
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-lg md:text-6xl whitespace-nowrap md:whitespace-normal leading-tight tracking-tight text-neutral-900", children: showAdmin ? "Manage access" : "Portfolio Readiness" }),
          /* @__PURE__ */ jsx("div", { className: "shrink-0 mt-2 flex items-center gap-1.5 md:gap-2", children: showAdmin ? /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setView("dashboard"),
              className: "inline-flex items-center gap-2 border border-neutral-300 text-neutral-700 text-xs uppercase tracking-wide px-4 py-2 hover:bg-neutral-100 transition-colors",
              children: T("\u2190 Back to portfolio")
            }
          ) : [
            /* @__PURE__ */ jsx("button", { onClick: () => setLang(getLang() === "ar" ? "en" : "ar"), className: "inline-flex items-center justify-center border border-neutral-300 text-neutral-700 px-2 md:px-3 py-3 md:py-2 text-xs hover:bg-neutral-100 transition-colors", "aria-label": "Switch language / تغيير اللغة", children: getLang() === "ar" ? "EN" : "عربي" }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setBellOpen((v) => !v),
                  className: "relative inline-flex items-center justify-center border border-neutral-300 text-neutral-700 p-2.5 md:p-2 hover:bg-neutral-100 transition-colors",
                  "aria-label": "Notifications",
                  children: [
                    /* @__PURE__ */ jsx(Bell, { size: 14 }),
                    activeAlerts.length > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 rounded-full bg-red-600 text-white text-[10px] leading-4 text-center font-mono", children: activeAlerts.length })
                  ]
                }
              ),
              bellOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10", onClick: () => setBellOpen(false) }),
              bellOpen && /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 w-80 max-w-[calc(100vw-2rem)] bg-white border border-neutral-300 shadow-lg z-20", children: [
                /* @__PURE__ */ jsx("div", { className: "px-4 py-2.5 border-b border-neutral-200 text-xs uppercase tracking-wide text-neutral-500", children: T("Notifications") }),
                activeAlerts.length === 0 ? /* @__PURE__ */ jsx("div", { className: "px-4 py-4 text-xs text-neutral-400", children: T("No active alerts.") }) : /* @__PURE__ */ jsx("div", { className: "max-h-72 overflow-y-auto", children: activeAlerts.map((a) => /* @__PURE__ */ jsx("button", { onClick: () => { setBellOpen(false); if (a.onOpen) a.onOpen(); else scrollToId(a.targetId); }, className: `w-full text-left px-4 py-2.5 text-xs leading-relaxed border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${a.severity === "danger" ? "text-red-800" : "text-amber-800"}`, children: a.text }, a.id)) }),
                /* @__PURE__ */ jsx("div", { className: "px-4 py-2.5 border-t border-neutral-200", children: pushStatus === "unsupported" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Push notifications aren't supported here.") }) : pushStatus === "subscribed" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-700", children: T("Push notifications enabled \u2014 you'll get these even if the site is closed.") }) : notifPermission === "denied" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Notifications blocked \u2014 enable them in your browser's site settings.") }) : pushStatus === "subscribing" ? /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-400", children: T("Enabling\u2026") }) : /* @__PURE__ */ jsx("button", { onClick: subscribeToPush, className: "text-xs underline text-neutral-700", children: T("Enable push notifications") }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setMenuOpen((v) => !v),
                  className: "inline-flex items-center gap-2 border border-neutral-900 text-neutral-900 text-xs uppercase tracking-wide px-3 md:px-4 py-3 md:py-2 hover:bg-neutral-100 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(menuOpen ? X : Menu, { size: 14 }),
                    T(" Menu")
                  ]
                }
              ),
              menuOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-10", onClick: () => setMenuOpen(false) }),
              menuOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-52 bg-white border border-neutral-300 shadow-lg z-20 flex flex-col", children: [
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); downloadReport(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  T(" Download report")
                ] }),
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); downloadLiabilitiesReport(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  T(" Download liabilities report")
                ] }),
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); handleExportExcel(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  T(" Export to Excel")
                ] }),
                /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); handleExportBackup(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(FileDown, { size: 14 }),
                  T(" Backup data")
                ] }),
                biometricSupported && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); toggleBiometricLock(); }, disabled: biometricBusy, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200 disabled:opacity-50", children: [
                  /* @__PURE__ */ jsx(Lock, { size: 14 }),
                  biometricBusy ? T(" Working…") : biometricEnabled ? T(" Disable Face ID lock") : T(" Enable Face ID lock")
                ] }),
                isOwner && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); setView("admin"); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(Users, { size: 14 }),
                  T(" Manage access")
                ] }),
                onToggleDark && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); onToggleDark(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-700 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: [
                  /* @__PURE__ */ jsx(dark ? Sun : Moon, { size: 14 }),
                  dark ? T(" Light mode") : T(" Dark mode")
                ] }),
                onSignOut && /* @__PURE__ */ jsx("button", { onClick: () => { setMenuOpen(false); onSignOut(); }, className: "flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wide text-neutral-500 hover:bg-neutral-100 transition-colors text-left border-t border-neutral-200", children: T("Log out") })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "hidden md:block mt-3 max-w-xl text-neutral-600 text-base leading-relaxed", children: showAdmin ? "Only you see this page. Share the signup link with anyone you want to give view-only access to, then upgrade them to editor here if needed." : canEdit ? 'Every holding, loan, and conversion below is editable. Add a new fund, certificate, loan, or gold position at any time \u2014 the daily form and every total pick it up automatically. "Download report" saves a standalone file you can open, print to PDF, or send to anyone \u2014 no publishing needed.' : 'You have view-only access \u2014 every number below is live, but editing is off. "Download report" saves a standalone file you can open, print to PDF, or send to anyone.' }),
        !showAdmin && jsx("details", { className: "md:hidden mt-1 text-sm text-neutral-600", children: [jsx("summary", { className: "cursor-pointer text-xs uppercase tracking-wide text-neutral-500 py-2", children: T("About this page") }), jsx("p", { className: "mt-2 leading-relaxed", children: showAdmin ? "Only you see this page. Share the signup link with anyone you want to give view-only access to, then upgrade them to editor here if needed." : canEdit ? 'Every holding, loan, and conversion below is editable. Add a new fund, certificate, loan, or gold position at any time \u2014 the daily form and every total pick it up automatically. "Download report" saves a standalone file you can open, print to PDF, or send to anyone \u2014 no publishing needed.' : 'You have view-only access \u2014 every number below is live, but editing is off. "Download report" saves a standalone file you can open, print to PDF, or send to anyone.' })] }),
        showAdmin && jsx("p", { className: "md:hidden mt-3 text-neutral-600 text-sm leading-relaxed", children: showAdmin ? "Only you see this page. Share the signup link with anyone you want to give view-only access to, then upgrade them to editor here if needed." : canEdit ? 'Every holding, loan, and conversion below is editable. Add a new fund, certificate, loan, or gold position at any time \u2014 the daily form and every total pick it up automatically. "Download report" saves a standalone file you can open, print to PDF, or send to anyone \u2014 no publishing needed.' : 'You have view-only access \u2014 every number below is live, but editing is off. "Download report" saves a standalone file you can open, print to PDF, or send to anyone.' }),
        biometricError && /* @__PURE__ */ jsx("div", { className: "mt-3 inline-flex items-center gap-2 text-xs text-red-700 border border-red-300 bg-red-50 px-3 py-1.5", children: [
          biometricError,
          /* @__PURE__ */ jsx("button", { onClick: () => setBiometricError(""), className: "underline shrink-0", children: T("Dismiss") })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("main", { className: "max-w-5xl mx-auto px-6 bg-neutral-50 flex flex-col", children: showAdmin ? [
        /* @__PURE__ */ jsx("section", { className: "py-10", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-6 border border-neutral-300 bg-white p-4 flex flex-col sm:flex-row sm:items-center gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500 shrink-0", children: T("Signup link") }),
            /* @__PURE__ */ jsx("code", { className: "text-xs text-neutral-700 break-all", children: typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}?signup=1` : "" })
          ] }),
          /* @__PURE__ */ jsx(UsersAdminPanel, {})
        ] })
      ] : [
        /* @__PURE__ */ jsx(TableOfContents, {}),
        /* @__PURE__ */ jsx("section", { id: "overview", className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-10 border-b border-neutral-200", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center md:items-start md:col-span-1", children: [
            /* @__PURE__ */ jsx(ReadinessDial, { score: readiness }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-center md:text-left", children: [
              /* @__PURE__ */ jsx("div", { className: "font-serif text-xl text-neutral-900", children: readinessLabel }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-1 max-w-xs", children: T("Composite of leverage, liquidity, diversification and currency coverage, equally weighted.") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:col-span-2 flex flex-col gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1.5 text-xs", children: isLivePreview ? [
              /* @__PURE__ */ jsx("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" }),
                /* @__PURE__ */ jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500" })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: L(`Live pricing — USD/EGP ${fmt(liveRates.rate, 2)}, gold ${fmt(liveRates.gold)} EGP/g. Not yet saved as today's entry.`, `تسعير مباشر — دولار/جنيه ${fmt(liveRates.rate, 2)}، الذهب ${fmt(liveRates.gold)} جنيه/جم. لم يُحفظ بعد كقيد اليوم.`) })
            ] : /* @__PURE__ */ jsx("span", { className: "text-neutral-400", children: `Priced as of ${latest?.date || ""}.` }) }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-x-6 gap-y-6", children: [
              /* @__PURE__ */ jsx(Stat, { label: "Total assets", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalAssets, format: egp }), sub: distLine ? `Includes ${egp(distLine.value)} of recorded distributions received (unverified, may double count). Without it: ${egp(totalAssets - distLine.value)}.` : void 0, emphasis: true }),
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
        jsx(AnalysisGlance, { netWorth, totalAssets, totalLiabilities, debtRatioPct, distLine, wholePortfolio, categories: yearVariableInvestmentsByCategory, historyDays: yearVariableInvestments.durationDays, observationCount: analysis?.days ?? 0, pricedCount: ASSETS.filter((a) => a.purchaseNav != null && a.currency === "EGP").length, assetCount: ASSETS.length, cashFlow, egpNet, liquidityScore, leverageScore, nextInstallment: nextOfficeInstallmentRow, onOpenInstallments: () => setInstallmentSummaryOpen(true), aiInsight, latestDate: latest?.date }),
        /* @__PURE__ */ jsx("section", { id: "section-01", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "01", title: T("Holdings"), dek: "Every fund, certificate, gold position, and cash balance. Edit any cell, or add a new row." }),
          /* @__PURE__ */ jsx(CollapsibleSection, { label: "holdings", summary: `${holdings.length} holdings, ${egp(totalAssets)}`, children: /* @__PURE__ */ jsx(HoldingsTable, { holdings, onChange: handleHoldingsChange, currentValueById, currentValueCurrencyById, canEdit }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: T("NBE fund distributions") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("Payouts NBE deposits into the account for Fund 1/2/5 — logged here as a single running total, counted as a cash holding.") }),
            /* @__PURE__ */ jsx(NbeDistributionUpload, { currentTotal: holdings.find((h) => h.id === "nbeDist")?.investment || 0, onApply: handleAddNbeDistribution, canEdit })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: `The ${certificates.length} EGP certificates & CDs, individually` }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("For reference — these roll up into the single “EGP certificates & CDs” holding above. Monthly interest reconciles with the “EGP — certificate & fund income” line in section 08.") }),
            /* @__PURE__ */ jsx(CertificateStatementUpload, { certificates, onApply: handleApplyCertificateStatement, canEdit }),
            /* @__PURE__ */ jsx(CollapsibleSection, { id: "certificates-section", label: "certificates", summary: `${certificates.length} certificates`, children: /* @__PURE__ */ jsx(CertificatesTable, { certificates, onChange: handleCertificatesChange, canEdit }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-02", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "02", title: T("What the assets are worth"), dek: `${ASSETS.length} holdings, ${egp(totalAssets)} in total, priced ${asOfLabel}. Expand a row for its detail.` }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 border border-neutral-300 bg-neutral-50 p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between mb-1 gap-3 flex-wrap", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900", children: T("Your whole portfolio, in plain terms") }),
              !isCurrentYearView && /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-wide text-neutral-400 border border-neutral-300 px-1.5 py-0.5", children: `${effectiveViewYear}, closed` })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: isCurrentYearView ? "Every holding, including certificates and properties — what's been put in, what it's worth now, and the difference. Fixed lines are carried at cost and income received is not included, so this is not a total return." : `As tracked through the end of ${effectiveViewYear} — profit tracking reset to zero at the start of ${effectiveViewYear + 1}.` }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("We put in") }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearWholePortfolio.totalInvested, format: egp }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Worth now") }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearWholePortfolio.totalCurrent, format: egp }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Value minus cost") }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${yearWholePortfolio.totalProfit >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearWholePortfolio.totalProfit, format: signedEgp }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Change vs cost") }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${yearWholePortfolio.returnPct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearWholePortfolio.returnPct, format: pctStr }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 border border-neutral-300 bg-white p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: T("Performance over time") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("These are value changes from the recorded prices, not verified returns: income received, FX at purchase dates and sales or withdrawals are not recorded, and additions are subtracted only where a purchase price is on file.") }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: (() => {
              const days = analysis?.days || 0;
              const span = firstComputed && latestComputed ? Math.round((new Date(latestComputed.date + "T00:00:00") - new Date(firstComputed.date + "T00:00:00")) / 864e5) : 0;
              const since = firstComputed?.date || "";
              const adj = analysis ? { v: analysis.changePct, sub: `${signedEgp(analysis.changeVal)} on funds and gold, ${since} to today` } : null;
              return [
                { label: "Change since records began", v: adj?.v, sub: adj?.sub, note: `${days} recorded observations over ${span} calendar days. Funds and gold only, adjusted for additions, excludes income. Not a year-to-date return.` },
                { label: "Last 12 months: not available", v: adj?.v, sub: adj?.sub, note: `Only ${span} calendar days are recorded, not 12 months. The number shown is the same recorded-period change, not a 1-year return.` },
                { label: "Whole portfolio: value vs cost", v: wholePortfolio.returnPct, sub: `${signedEgp(wholePortfolio.totalProfit)} value minus cost`, note: "Whole portfolio, today's value vs amount put in. Certificates at cost, income and FX at purchase not included. Not a true return." }
              ];
            })().map(({ label, v, sub, note }) => /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-2", children: label }),
              v == null ? /* @__PURE__ */ jsx("div", { className: "font-serif text-lg text-neutral-700", children: T("Insufficient data") }) : /* @__PURE__ */ jsx("div", { className: `font-mono text-2xl ${v >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(v) }),
              sub && /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-neutral-600 mt-1", children: sub }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-2", children: note })
            ] }, label)) }),
            (() => {
              const priced = ASSETS.filter((a) => a.purchaseNav != null && a.currency === "EGP");
              const cost = priced.reduce((sum, a) => sum + (a.investmentEgp || 0), 0);
              const val = priced.reduce((sum, a) => sum + (a.value || 0), 0);
              const pct = cost ? (val - cost) / cost * 100 : 0;
              const totalCost = ASSETS.reduce((sum, a) => sum + (a.investmentEgp ?? 0), 0);
              const share = totalCost ? cost / totalCost * 100 : 0;
              return /* @__PURE__ */ jsx("div", { className: "mt-4 border border-neutral-200 p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-1", children: T("Change vs cost: EGP funds and gold") }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl ${pct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(pct) }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mt-2 max-w-xl", children: `Compares today's value with what was paid, for ${priced.length} of ${ASSETS.length} holdings (${share.toFixed(0)}% of the amount invested). Excludes USD funds, certificates, treasury bills, properties and any income received. Not a period return and not a whole-portfolio return.` })
              ] });
            })()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 border border-neutral-300 bg-neutral-50 p-5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: T("Your variable investments, in plain terms") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("Funds, gold, and Beltone — the holdings whose price moves day to day. Certificates (fixed principal) aren't included here.") }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("You've put in") }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearVariableInvestments.totalInvested, format: egp }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Tracked for") }),
                /* @__PURE__ */ jsx("div", { className: "font-mono text-xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearVariableInvestments.durationDays, format: (v) => `${Math.round(v)} day${Math.round(v) === 1 ? "" : "s"}` }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Change vs cost") }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${yearVariableInvestments.returnPct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearVariableInvestments.returnPct, format: pctStr }) })
              ] }),
              /* @__PURE__ */ jsx("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Gain vs cost") }),
                /* @__PURE__ */ jsx("div", { className: `font-mono text-xl mt-1 ${yearVariableInvestments.totalProfit >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: yearVariableInvestments.totalProfit, format: signedEgp }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6 pt-4 mt-4 border-t border-neutral-200", children: yearVariableInvestmentsByCategory.map((c) => /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T(c.label) }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wide text-neutral-400 mt-1.5", children: T("put in") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-sm text-neutral-700", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: c.currency === "USD" ? c.costUsd : c.cost, format: c.currency === "USD" ? usd : egp }) }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wide text-neutral-400 mt-1.5", children: T("now") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-base text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: c.currency === "USD" ? c.currentUsd : c.current, format: c.currency === "USD" ? usd : egp }) }),
              /* @__PURE__ */ jsx("div", { className: `font-mono text-xs mt-1 ${c.pct >= 0 ? "text-emerald-700" : "text-red-700"}`, children: /* @__PURE__ */ jsx(AnimatedNumber, { value: c.pct, format: pctStr }) })
            ] }, c.key)) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mt-3", children: `"Put in" per category adds up to "You've put in" above; "now" per category adds up to ${egp(yearVariableInvestments.totalInvested + yearVariableInvestments.totalProfit)} (you've put in + gain vs cost) — USD funds shown in dollars, converted at today's rate for the totals above.` })
          ] }),
          /* @__PURE__ */ jsx("div", { children: ASSETS.map((a) => /* @__PURE__ */ jsx(LedgerRow, { item: a, total: totalAssets, isOpen: openAsset === a.id, onToggle: () => setOpenAsset(openAsset === a.id ? null : a.id), breakdown: a.id === "offices" ? officePaidBreakdown : null }, a.id)) })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-03", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "03", title: T("Metal: funds vs physical"), dek: isCurrentYearView ? "Paper gold exposure (AZ Gold Fund) against the actual bars in hand, side by side." : `As tracked through the end of ${effectiveViewYear} — paper gold exposure (AZ Gold Fund) against the actual bars in hand, side by side.` }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 border border-neutral-300 bg-white p-4 flex flex-wrap gap-x-8 gap-y-3", children: [
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Gold overall — invested") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg text-neutral-900", children: egp(yearMetalOverall.invested) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Current value") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg text-neutral-900", children: egp(yearMetalOverall.value) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Total gain / loss") }),
              /* @__PURE__ */ jsx("div", { className: `font-mono text-lg ${yearMetalOverall.gain >= 0 ? "text-emerald-700" : "text-red-700"}`, children: [
                signedEgp(yearMetalOverall.gain),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm", children: `(${pctStr(yearMetalOverall.gainPct)})` })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-3", children: T("Metal funds (paper gold)") }),
            /* @__PURE__ */ jsx(CollapsibleSection, { label: "metal funds", summary: `${yearMetalFundRows.length} funds`, children: /* @__PURE__ */ jsx(MetalRowsTable, { rows: yearMetalFundRows, showGrams: false }) })
          ] }),
          /* @__PURE__ */ jsx("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-3", children: T("Physical gold") }),
            /* @__PURE__ */ jsx(CollapsibleSection, { label: "physical gold", summary: `${yearMetalPhysicalRows.length} holdings`, children: /* @__PURE__ */ jsx(MetalRowsTable, { rows: yearMetalPhysicalRows, showGrams: true }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-04", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "04", title: T("Portfolio insights"), dek: "Automatic observations from the numbers already on this site — concentration, leverage, cash flow, and upcoming maturities. Optionally set a target allocation below to see how far you are from it." }),
          /* @__PURE__ */ jsx(PortfolioInsights, { insights: portfolioInsights, allocationRows, aiInsight }),
          /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(RebalanceCard, { allocationRows, targets: rebalanceTargets, totalAssets, onChange: handleRebalanceTargetsChange, canEdit, aiSuggestedMoves: aiInsight?.suggestedMoves || null }) })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-05", className: "py-10", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "05", title: T("Investment, by currency"), dek: "What is actually committed in each currency, at cost \u2014 drawn live from the holdings list below." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Total invested in EGP") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl md:text-3xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalEgpInvestment, format: egp }) }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-2", children: T("Certificates, EGP funds, gold and brokerage, at cost.") })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Total invested in USD") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-2xl md:text-3xl mt-1 text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: totalUsdInvestment, format: usd }) }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-500 mt-2", children: T("Beltone, the CIB certificate, and the NBE term deposit.") })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-neutral-500", children: [
            "Of ",
            usd(totalIncomingUsd),
            " received from outside transfers, ",
            usd(conversionRunningBalance),
            " remains in USD today \u2014 see the conversion history in section 09."
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-06", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "06", title: T("What is owed"), dek: `${loans.length} loan line${loans.length === 1 ? "" : "s"}, ${egp(loansOutstanding)} outstanding — plus ${egp(propertiesOutstanding)} in remaining property installments & maintenance (see section 07), for ${egp(totalLiabilities)} total liabilities. Add or remove a loan freely.` }),
          /* @__PURE__ */ jsx(CollapsibleSection, { label: "loans", summary: `${loans.length} loan lines, ${egp(loansOutstanding)}`, children: /* @__PURE__ */ jsx(LoansTable, { loans, onChange: handleLoansChange, canEdit }) }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: `The ${loanFacilities.length} secured EGP facilities, individually` }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("For reference — these roll up into the single “Secured EGP loans” row above.") }),
            /* @__PURE__ */ jsx(LoanStatementUpload, { facilities: loanFacilities, onApply: handleApplyLoanStatement, canEdit }),
            /* @__PURE__ */ jsx(CollapsibleSection, { id: "loan-facilities-section", label: "facilities", summary: `${loanFacilities.length} facilities`, children: /* @__PURE__ */ jsx(LoanFacilitiesTable, { facilities: loanFacilities }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between pt-4 mt-4 border-t-2 border-neutral-900", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-serif italic text-neutral-700", children: T("Net worth") }),
            /* @__PURE__ */ jsx("span", { className: "font-mono tabular-nums text-lg text-neutral-900", children: /* @__PURE__ */ jsx(AnimatedNumber, { value: netWorth, format: egp }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "properties-section", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "07", title: T("Properties"), dek: `${officeUnits.length} properties, ${egp(officeUnits.reduce((s, u) => s + u.totalPrice, 0))} full contract price — what's paid so far counts toward Total Assets above.` }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-6 max-w-2xl", children: T("Offices, a villa, an apartment, and a residential unit, all still being paid off in installments — not fully owned yet. The amount paid so far (not the full price) is counted as an asset, and updates automatically as installments get marked paid below.") }),
          /* @__PURE__ */ jsx(OfficeDealUpload, { units: officeUnits, installments: officeInstallments, onApplyUnits: handleOfficeUnitsChange, onApplyInstallments: handleOfficeInstallmentsChange, canEdit }),
          /* @__PURE__ */ jsx(CollapsibleSection, { label: "office units", summary: `${officeGroupUnitNames.length} units`, children: /* @__PURE__ */ jsx(OfficeUnitsTable, { units: officeUnits.filter((u) => officeGroupUnitNames.includes(u.unit)), onChange: handleOfficeUnitsTableChange, canEdit, installments: officeInstallments, payments: officeInstallmentPayments }) }),
          /* @__PURE__ */ jsx("p", { className: `text-xs mt-4 ${officeGroupDueAlert ? officeGroupDueAlert.daysUntilDue < 0 ? "text-red-700" : "text-amber-700" : "text-neutral-500"}`, children: `Paid off per each property's installment schedule. Next due ${fmtDate(officeGroupNextDueDate)}${officeGroupNextDueDate ? `, ${egp(officeGroupNextDueAmount)}` : ""}${officeGroupDueAlert ? officeGroupDueAlert.daysUntilDue < 0 ? ` — ${Math.abs(officeGroupDueAlert.daysUntilDue)}d overdue` : ` — in ${officeGroupDueAlert.daysUntilDue}d` : ""}.` }),
          /* @__PURE__ */ jsx("div", { className: "mt-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-1", children: T("Upload a payment receipt") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-4 max-w-xl", children: T("Works for any property below — detects the due date and which units it covers.") }),
            /* @__PURE__ */ jsx(OfficeReceiptUpload, { installments: officeInstallments, units: officeUnits, payments: officeInstallmentPayments, onMarkPaid: handleSetOfficeInstallmentPayment, canEdit })
          ] }),
          officeGroupUnitNames.length > 0 && /* @__PURE__ */ jsx(PropertyScheduleGroup, { id: "office-units-schedule", title: T("Office units — installment & maintenance schedule"), unitNames: officeGroupUnitNames, units: officeUnits, installments: officeInstallments, installmentPayments: officeInstallmentPayments, onToggleInstallment: handleToggleOfficeInstallmentPayment, maintenance: officeMaintenance, maintenancePayments: officeMaintenancePayments, onToggleMaintenance: handleToggleOfficeMaintenancePayment, canEdit }),
          individualProperties.map((u) => {
            const paidSoFar = officeUnitPaidSoFar(u.unit, officeInstallments, officeInstallmentPayments);
            const remaining = Math.max(0, u.totalPrice - paidSoFar);
            const unitNextDueRow = nextOfficeInstallment(filterScheduleForUnits(officeInstallments, [u.unit]), officeInstallmentPayments);
            const unitNextDueDate = unitNextDueRow ? unitNextDueRow.date : null;
            const unitNextDueAmount = unitNextDueRow ? unitNextDueRow.amount : 0;
            const unitDaysUntilDue = daysUntil(unitNextDueDate);
            const unitDueAlert = unitDaysUntilDue !== null && unitDaysUntilDue <= OFFICE_DUE_WARNING_DAYS ? { daysUntilDue: unitDaysUntilDue } : null;
            return /* @__PURE__ */ jsx("div", { id: `property-${domId(u.unit)}`, className: "mt-10 pt-8 border-t border-neutral-200", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm font-serif text-neutral-900 mb-3", children: u.unit }),
              /* @__PURE__ */ jsx(PropertySummaryCard, { unit: u, onChangeField: (patch) => handlePropertyFieldChange(u.unit, patch), canEdit, paidSoFar, remaining }),
              /* @__PURE__ */ jsx("p", { className: `text-xs mt-4 mb-4 ${unitDueAlert ? unitDueAlert.daysUntilDue < 0 ? "text-red-700" : "text-amber-700" : "text-neutral-500"}`, children: `Next due ${fmtDate(unitNextDueDate)}${unitNextDueDate ? `, ${egp(unitNextDueAmount)}` : ""}${unitDueAlert ? unitDueAlert.daysUntilDue < 0 ? ` — ${Math.abs(unitDueAlert.daysUntilDue)}d overdue` : ` — in ${unitDueAlert.daysUntilDue}d` : ""}.` }),
              /* @__PURE__ */ jsx(PropertyScheduleGroup, { title: T("Installment & maintenance schedule"), unitNames: [u.unit], units: officeUnits, installments: officeInstallments, installmentPayments: officeInstallmentPayments, onToggleInstallment: handleToggleOfficeInstallmentPayment, maintenance: officeMaintenance, maintenancePayments: officeMaintenancePayments, onToggleMaintenance: handleToggleOfficeMaintenancePayment, canEdit })
            ] }, u.unit);
          })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-08", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "08", title: T("Monthly cash flow, by currency"), dek: "Certificate income measured against loan installments and property obligations, each currency on its own terms." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 mb-6", children: /* @__PURE__ */ jsx(Toggle, { options: [{ id: "egp", label: "EGP" }, { id: "usd", label: "USD" }], value: ccy, onChange: setCcy }) }),
          ccy === "egp" ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-4 gap-6", children: [
            /* @__PURE__ */ jsx(Stat, { label: "Certificate income", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: cashFlow.egp.income, format: egp }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Loan installments", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: cashFlow.egp.outflow, format: egp }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Property installments & maintenance", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: cashFlow.egp.propertyMonthly, format: egp }), sub: "avg/month, next 12mo" }),
            /* @__PURE__ */ jsx(Stat, { label: "Net monthly position", value: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1", children: [
              egpNet >= 0 ? /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5 }) : /* @__PURE__ */ jsx(ArrowDownRight, { size: 18, strokeWidth: 1.5 }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: egpNet, format: egp })
            ] }), emphasis: true, sub: egpNet >= 0 ? "surplus" : "deficit" })
          ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsx(Stat, { label: "Certificate & deposit income", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: cashFlow.usd.income, format: usd }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Loan installments", value: /* @__PURE__ */ jsx(AnimatedNumber, { value: cashFlow.usd.outflow, format: usd }), sub: "per month" }),
            /* @__PURE__ */ jsx(Stat, { label: "Net monthly position", value: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1", children: [
              usdNet >= 0 ? /* @__PURE__ */ jsx(ArrowUpRight, { size: 18, strokeWidth: 1.5 }) : /* @__PURE__ */ jsx(ArrowDownRight, { size: 18, strokeWidth: 1.5 }),
              /* @__PURE__ */ jsx(AnimatedNumber, { value: usdNet, format: usd })
            ] }), emphasis: true, sub: usdNet >= 0 ? "surplus" : "deficit" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-09", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "09", title: T("Currency conversion history"), dek: "Every transfer in and every surrender to EGP, with a running USD balance." }),
          /* @__PURE__ */ jsx("div", { className: "mb-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border border-neutral-200 p-5", children: [
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Received from outside") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg mt-1 text-neutral-900", children: usd(totalIncomingUsd) }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-neutral-400 mt-1", children: T("Transfers in, excludes opening balance") })
            ] }),
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Surrendered to EGP, USD") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg mt-1 text-neutral-900", children: usd(conversionSummary.totalConvertedUsd) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Surrendered to EGP, EGP") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg mt-1 text-neutral-900", children: egp(conversionSummary.totalConvertedEgp) })
            ] }),
            /* @__PURE__ */ jsx("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Weighted avg. rate") }),
              /* @__PURE__ */ jsx("div", { className: "font-mono text-lg mt-1 text-neutral-900", children: conversionSummary.weightedRate ? fmt(conversionSummary.weightedRate, 2) : "—" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CollapsibleSection, { label: "conversion history", summary: `${conversions.length} transfers`, children: /* @__PURE__ */ jsx(ConversionsTable, { conversions, onChange: handleConversionsChange, canEdit }) })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-10", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "10", title: T("Live markets"), dek: "Gold, USD/EGP, oil, and the major indices — the leverage/FX alert (site banner, email, push) watches gold and USD/EGP; a separate 1% move alert watches the rest." }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["Gold", "OANDA:XAUUSD|1D"]], height: 400, dark }),
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["USD/EGP", "FX_IDC:USDEGP|1D"]], height: 400, dark }),
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["Oil (WTI)", "TVC:USOIL|1D"]], height: 400, dark }),
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["EGX 30", "EGX:EGX30|1D"]], height: 400, dark }),
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["EGX 70", "EGX:EGX70EWI|1D"]], height: 400, dark }),
            /* @__PURE__ */ jsx(TradingViewWidget, { symbols: [["S&P 500", "FOREXCOM:SPXUSD|1D"], ["Nasdaq", "FOREXCOM:NSXUSD|1D"], ["Dow Jones", "FOREXCOM:DJI|1D"]], height: 300, dark })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-11", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "11", title: T("Economic news"), dek: "Headlines likely to move the numbers above — the Egyptian pound, EGX, gold, and major global decisions (the Fed, interest rates). Refreshed automatically a few times a day." }),
          /* @__PURE__ */ jsx(NewsFeed, { newsFeed })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "daily-pricing-form", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "12", title: T("Today's pricing"), dek: "Update the rate, gold price, and each fund's NAV. New holdings above appear here automatically. Editing an existing day? Use the pencil icon on its row in History and analysis below." }),
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
            /* @__PURE__ */ jsx("button", { onClick: () => setEditingDate(null), className: "text-xs underline shrink-0", children: T("Cancel") })
          ] }),
          /* @__PURE__ */ jsx(DailyPricingForm, { onSave: handleSaveDay, saving, defaults: formDefaults, compareBase, navFields, liveRates, canEdit, isEditing: !!editingEntry }),
          savedFlash && /* @__PURE__ */ jsx("div", { className: "mt-3 inline-flex items-center gap-2 text-xs text-neutral-600 border border-neutral-300 px-3 py-1.5", children: [
            /* @__PURE__ */ jsx(Check, { size: 13 }),
            " Saved to history"
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { id: "section-13", className: "py-10 border-t border-neutral-200", children: [
          /* @__PURE__ */ jsx(SectionHeading, { index: "13", title: T("History and analysis"), dek: isCurrentYearView ? `${yearComputedHistory.length} day${yearComputedHistory.length === 1 ? "" : "s"} on record for ${effectiveViewYear}, funds, Beltone and gold only (excludes certificates, T-bills, properties, loans and the distributions line, so it is not total assets or net worth). Edit a row to fix a mistake, or delete it outright.` : `${yearComputedHistory.length} day${yearComputedHistory.length === 1 ? "" : "s"} on record for ${effectiveViewYear} — this year is closed, profit tracking reset at the start of ${effectiveViewYear + 1}.` }),
          /* @__PURE__ */ jsx("div", { className: "mb-4 flex items-center justify-between gap-3 flex-wrap", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-wide text-neutral-500", children: T("Chart range") }),
            /* @__PURE__ */ jsx(ChartRangeSelector, { value: chartRange, onChange: setChartRange })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(TrendChart, { points: chartHistory.map((d) => ({ date: d.date, value: d.markedToMarket })), labelFn: (d) => (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }), valueFn: egp }) }),
          chartHistory.length >= 2 && /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-3", children: `Funds and gold value vs. gold vs. USD/EGP, since ${chartHistory[0].date}` }),
            /* @__PURE__ */ jsx(ComparisonChart, {
              series: [
                { key: "networth", label: T("Funds and gold value (not net worth)"), color: dark ? "#e5e5e5" : "#171717", points: chartHistory.map((d) => ({ date: d.date, value: d.markedToMarket })) },
                { key: "gold", label: T("Gold, EGP/g"), color: dark ? "#fbbf24" : "#B45309", points: chartHistory.map((d) => ({ date: d.date, value: d.gold })) },
                { key: "usd", label: "USD/EGP", color: dark ? "#38bdf8" : "#0369A1", points: chartHistory.map((d) => ({ date: d.date, value: d.rate })) }
              ],
              labelFn: (d) => (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short" })
            })
          ] }),
          yearFundSeries.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-3", children: `Price change by fund (excludes income), since ${isCurrentYearView ? "purchase (or this year's reset)" : `the start of ${effectiveViewYear}`}` }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: yearFundSeries.map((f) => {
              const lastVal = f.points[f.points.length - 1]?.value ?? 0;
              return /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-baseline justify-between mb-1", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-600 truncate", children: f.label }),
                  /* @__PURE__ */ jsx("span", { className: `font-mono text-xs tabular-nums ${lastVal >= 0 ? "text-emerald-700" : "text-red-700"}`, children: pctStr(lastVal) })
                ] }),
                /* @__PURE__ */ jsx(TrendChart, { points: f.points, labelFn: (d) => (/* @__PURE__ */ new Date(d + "T00:00:00")).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }), valueFn: pctStr })
              ] }, f.key);
            }) })
          ] }),
          yearPerformanceRanking.length > 0 && /* @__PURE__ */ jsx("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-1", children: T("Performance ranking, strongest to weakest") }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-400 mb-3", children: isCurrentYearView ? `As of ${asOfLabel} — updates automatically the moment a new day's entry is saved.` : `As of ${yearLatestComputed?.date || effectiveViewYear} — ${effectiveViewYear} is closed.` }),
            /* @__PURE__ */ jsx(CollapsibleSection, { label: "performance ranking", summary: `${yearPerformanceRanking.length} ranked`, children: /* @__PURE__ */ jsx(PerformanceRankingTable, { rows: yearPerformanceRanking }) })
          ] }),
          yearAnalysis && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-2", children: [
                "Since ",
                yearFirstComputed.date
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                "Over ",
                yearAnalysis.days,
                " recorded days, the marked-to-market portion moved",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: signedEgp(yearAnalysis.changeVal) }),
                " (",
                pctStr(yearAnalysis.changePct),
                "). The FX rate moved ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: pctStr(yearAnalysis.rateChangePct) }),
                ", and gold moved",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-mono", children: pctStr(yearAnalysis.goldChangePct) }),
                " per gram. Value rose on ",
                yearAnalysis.upDays,
                " of ",
                yearAnalysis.totalDays,
                " day-over-day steps. ", ADDITIONS_ONLY_NOTE, " ", fallbackQuotes ? `${fallbackQuotes} holding-day prices are missing and valued at cost.` : "No missing fund prices on the recorded days."
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "border border-neutral-200 p-4", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mb-2", children: T("Overall standing, since purchase") }),
              yearAnalysis.strongest && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("Strongest:") }),
                " ",
                yearAnalysis.strongest.label,
                ", ",
                pctStr(yearAnalysis.strongest.last),
                "."
              ] }),
              yearAnalysis.weakest && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("Weakest:") }),
                " ",
                yearAnalysis.weakest.label,
                ", ",
                pctStr(yearAnalysis.weakest.last),
                "."
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wide text-neutral-500 mt-4 mb-2", children: [
                "Recent momentum, ",
                yearFirstComputed.date,
                " to ",
                yearLatestComputed.date
              ] }),
              yearAnalysis.mostImproved && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("Most improved:") }),
                " ",
                yearAnalysis.mostImproved.label,
                ", ",
                pctStr(yearAnalysis.mostImproved.delta),
                " over the period (now ",
                pctStr(yearAnalysis.mostImproved.last),
                " overall)."
              ] }),
              yearAnalysis.mostDeclined && /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-700 leading-relaxed mt-2", children: [
                /* @__PURE__ */ jsx("span", { className: "font-serif italic", children: T("Most declined:") }),
                " ",
                yearAnalysis.mostDeclined.label,
                ", ",
                pctStr(yearAnalysis.mostDeclined.delta),
                " over the period (now ",
                pctStr(yearAnalysis.mostDeclined.last),
                " overall)."
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CollapsibleSection, { label: "daily history", summary: `${yearComputedHistory.length} days`, children: /* @__PURE__ */ jsx("div", { className: "rtable border border-neutral-200 overflow-x-auto", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm sm:min-w-max", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "border-b border-neutral-300 text-xs uppercase tracking-wide text-neutral-500", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left py-2 px-3", children: T("Date") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Rate") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Gold") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Marked-to-market") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Gain / loss") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Total %") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("Gold %") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("USD funds %") }),
              /* @__PURE__ */ jsx("th", { className: "text-right py-2 px-3", children: T("EGP funds %") }),
              canEdit && /* @__PURE__ */ jsx("th", { className: "py-2 px-3" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: [...yearComputedHistory].reverse().map((d) => {
              const catPct = (cat) => cat && cat.cost ? pctStr((cat.current - cat.cost) / cat.cost * 100) : "—";
              const totalPct = d.markedToMarketCost ? pctStr(d.gain / d.markedToMarketCost * 100) : "—";
              return /* @__PURE__ */ jsx("tr", { className: `border-b border-neutral-100 ${d.date === editingDate ? "bg-neutral-50" : ""}`, children: [
              /* @__PURE__ */ jsx("td", { "data-label": T("Date"), className: "py-2 px-3 font-mono text-neutral-700", children: d.date }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Rate"), className: "py-2 px-3 font-mono text-right text-neutral-700", children: fmt(d.rate, 2) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Gold"), className: "py-2 px-3 font-mono text-right text-neutral-700", children: fmt(d.gold) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Marked-to-market"), className: "py-2 px-3 font-mono text-right text-neutral-900", children: egp(d.markedToMarket) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Gain / loss"), className: `py-2 px-3 font-mono text-right ${d.gain >= 0 ? "text-neutral-900" : "text-neutral-500"}`, children: signedEgp(d.gain) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Total %"), className: `py-2 px-3 font-mono text-right ${d.gain >= 0 ? "text-neutral-900" : "text-neutral-500"}`, children: totalPct }),
              /* @__PURE__ */ jsx("td", { "data-label": T("Gold %"), className: "py-2 px-3 font-mono text-right text-neutral-700", children: catPct(d.byCategory?.gold) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("USD funds %"), className: "py-2 px-3 font-mono text-right text-neutral-700", children: catPct(d.byCategory?.usdFunds) }),
              /* @__PURE__ */ jsx("td", { "data-label": T("EGP funds %"), className: "py-2 px-3 font-mono text-right text-neutral-700", children: catPct(d.byCategory?.egpFunds) }),
              canEdit && /* @__PURE__ */ jsx("td", { className: "py-2 px-3 text-right whitespace-nowrap", children: [
                /* @__PURE__ */ jsx(RowEditButton, { onClick: () => {
                  setEditingDate(d.date);
                  document.getElementById("daily-pricing-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                } }),
                /* @__PURE__ */ jsx(RowDeleteButton, { onClick: () => handleDeleteDay(d.date) })
              ] })
            ] }, d.date);
            }) })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("footer", { className: "py-10 border-t-2 border-neutral-900 text-xs text-neutral-500 flex justify-between", children: [
          /* @__PURE__ */ jsx("span", { children: T("Figures as tracked in the working file. For internal review, not financial advice.") }),
          /* @__PURE__ */ jsx("span", { className: "font-mono", children: T("v3.0") })
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
          /* @__PURE__ */ jsx("div", { className: "font-serif text-xl mb-2", children: T("Something went wrong") }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-3", children: T("The page hit an error and stopped rendering, rather than failing silently:") }),
          /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono bg-neutral-100 p-3 overflow-x-auto whitespace-pre-wrap", children: String(this.state.error?.message || this.state.error) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => this.setState({ error: null }),
              className: "mt-4 bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2",
              children: T("Try again")
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
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-1", children: T("Portfolio Readiness") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-6", children: T("Sign in to view and update the portfolio.") }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Username") }),
            /* @__PURE__ */ jsx("input", { type: "text", autoComplete: "username", value: username, onChange: (e) => setUsername(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Password") }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "current-password", value: password, onChange: (e) => setPassword(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: error }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2.5 disabled:opacity-50", children: loading ? "Signing in…" : "Sign in" }),
          /* @__PURE__ */ jsx("a", { href: "?signup=1", className: "block text-center text-xs text-neutral-400 hover:text-neutral-700 mt-4", children: T("Don't have an account? Sign up") })
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
        /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-3", children: T("Request submitted") }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600", children: T("Your account has been created, but you won't see anything until the owner approves your request.") })
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
          /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-1", children: T("Create an account") }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-neutral-500 mb-6", children: T("Your request needs the owner's approval before you can see anything.") }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Username") }),
            /* @__PURE__ */ jsx("input", { type: "text", autoComplete: "username", value: username, onChange: (e) => setUsername(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Password") }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "new-password", value: password, onChange: (e) => setPassword(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          /* @__PURE__ */ jsx("label", { className: "flex flex-col gap-1 mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs text-neutral-500", children: T("Confirm password") }),
            /* @__PURE__ */ jsx("input", { type: "password", autoComplete: "new-password", value: confirm, onChange: (e) => setConfirm(e.target.value), className: "border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:border-neutral-800" })
          ] }),
          password && confirm && password !== confirm && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: T("Passwords don't match.") }),
          error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mb-4", children: error }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: loading, className: "w-full bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2.5 disabled:opacity-50", children: loading ? "Creating…" : "Create account" }),
          /* @__PURE__ */ jsx("a", { href: "?", className: "block text-center text-xs text-neutral-400 hover:text-neutral-700 mt-4", children: T("Already have an account? Sign in") })
        ]
      }
    ) });
  }
  function PendingApprovalScreen({ role, onSignOut }) {
    const rejected = role === "rejected";
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm border border-neutral-300 bg-white p-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-3", children: rejected ? "Access not granted" : "Waiting for approval" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-5", children: rejected ? "The owner hasn't approved this account. Contact them if you think this is a mistake." : "Your request is with the owner. You'll get access as soon as they approve it — no need to sign up again." }),
      /* @__PURE__ */ jsx("button", { onClick: onSignOut, className: "text-xs uppercase tracking-wide border border-neutral-300 px-4 py-2 hover:bg-neutral-100 transition-colors", children: T("Log out") })
    ] }) });
  }
  function LockScreen({ onUnlock, onSignOut, error, unlocking }) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-neutral-50 flex items-center justify-center p-6 font-sans", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm border border-neutral-300 bg-white p-6 text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-2xl text-neutral-900 mb-3", children: T("Locked") }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-neutral-600 mb-5", children: T("Unlock with Face ID / Touch ID to continue.") }),
      /* @__PURE__ */ jsx("button", { onClick: onUnlock, disabled: unlocking, className: "w-full inline-flex items-center justify-center gap-2 bg-neutral-900 text-white text-xs uppercase tracking-wide px-4 py-2.5 hover:bg-neutral-700 transition-colors disabled:opacity-50", children: [
        unlocking ? /* @__PURE__ */ jsx(Loader2, { size: 14, className: "animate-spin" }) : null,
        unlocking ? T("Verifying") : T("Unlock")
      ] }),
      error && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mt-3", children: error }),
      /* @__PURE__ */ jsx("button", { onClick: onSignOut, className: "text-xs text-neutral-400 underline mt-5", children: T("Log out instead") })
    ] }) });
  }
  function PortfolioReadiness() {
    useLang();
    const [dark, setDark] = useState(() => {
      try {
        const stored = window.localStorage.getItem("theme");
        if (stored === "dark") return true;
        if (stored === "light") return false;
        return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      } catch {
        return false;
      }
    });
    useEffect(() => {
      document.documentElement.classList.toggle("dark", dark);
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute("content", dark ? "#0a0a0a" : "#171717");
      try {
        window.localStorage.setItem("theme", dark ? "dark" : "light");
      } catch {
      }
    }, [dark]);
    const toggleDark = () => setDark((d) => !d);
    const [user, setUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [signInError, setSignInError] = useState("");
    const [signingIn, setSigningIn] = useState(false);
    const [signUpError, setSignUpError] = useState("");
    const [signingUp, setSigningUp] = useState(false);
    const [signedUp, setSignedUp] = useState(false);
    const [role, setRole] = useState(null);
    const [locked, setLocked] = useState(false);
    const [lockError, setLockError] = useState("");
    const [unlocking, setUnlocking] = useState(false);
    const [biometricSupported, setBiometricSupported] = useState(false);
    const [biometricEnabled, setBiometricEnabled] = useState(false);
    const skipNextLockRef = useRef(false);
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
    const hasBiometricCredential = (uid) => {
      try {
        return !!window.localStorage.getItem(`${BIOMETRIC_KEY_PREFIX}${uid}`);
      } catch {
        return false;
      }
    };
    useEffect(() => {
      if (typeof window === "undefined" || !window.PublicKeyCredential || !window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable) {
        return;
      }
      window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable().then(setBiometricSupported).catch(() => {
      });
    }, []);
    useEffect(() => {
      const enabled = user ? hasBiometricCredential(user.uid) : false;
      setBiometricEnabled(enabled);
      if (enabled && !skipNextLockRef.current) setLocked(true);
      skipNextLockRef.current = false;
    }, [user]);
    useEffect(() => {
      if (!user || !hasBiometricCredential(user.uid)) return;
      const onVisibility = () => {
        if (document.visibilityState === "hidden") setLocked(true);
      };
      document.addEventListener("visibilitychange", onVisibility);
      return () => document.removeEventListener("visibilitychange", onVisibility);
    }, [user]);
    const handleUnlock = async () => {
      setLockError("");
      setUnlocking(true);
      try {
        const credId = window.localStorage.getItem(`${BIOMETRIC_KEY_PREFIX}${user.uid}`);
        await verifyBiometricCredential(credId);
        setLocked(false);
      } catch {
        setLockError("Couldn't verify — try again.");
      }
      setUnlocking(false);
    };
    const handleEnableBiometricLock = async () => {
      const credId = await registerBiometricCredential(user.uid, user.email);
      window.localStorage.setItem(`${BIOMETRIC_KEY_PREFIX}${user.uid}`, credId);
      setBiometricEnabled(true);
    };
    const handleDisableBiometricLock = () => {
      window.localStorage.removeItem(`${BIOMETRIC_KEY_PREFIX}${user.uid}`);
      setBiometricEnabled(false);
    };
    const handleSignIn = async (username, password) => {
      setSignInError("");
      setSigningIn(true);
      try {
        const email = username.includes("@") ? username : `${username}@${AUTH_EMAIL_DOMAIN}`;
        skipNextLockRef.current = true;
        await window.firebase.auth(firebaseApp).signInWithEmailAndPassword(email, password);
      } catch {
        skipNextLockRef.current = false;
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
      return /* @__PURE__ */ jsx(LoadingSkeleton, {});
    }
    if (!user) {
      if (isSignupMode) {
        return /* @__PURE__ */ jsx(SignupScreen, { onSignUp: handleSignUp, error: signUpError, success: signedUp, loading: signingUp });
      }
      return /* @__PURE__ */ jsx(LoginScreen, { onSignIn: handleSignIn, error: signInError, loading: signingIn });
    }
    if (locked) {
      return /* @__PURE__ */ jsx(LockScreen, { onUnlock: handleUnlock, onSignOut: handleSignOut, error: lockError, unlocking });
    }
    if (role === null) {
      return /* @__PURE__ */ jsx(LoadingSkeleton, {});
    }
    if (role !== "owner" && role !== "editor" && role !== "viewer" && role !== "service") {
      return /* @__PURE__ */ jsx(PendingApprovalScreen, { role, onSignOut: handleSignOut });
    }
    return /* @__PURE__ */ jsx(ReportErrorBoundary, { children: /* @__PURE__ */ jsx(PortfolioReadinessApp, { onSignOut: handleSignOut, role, uid: user.uid, biometricSupported, biometricEnabled, onEnableBiometricLock: handleEnableBiometricLock, onDisableBiometricLock: handleDisableBiometricLock, dark, onToggleDark: toggleDark }) });
  }

  // entry.jsx
  var root = createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ jsx(PortfolioReadiness, {}));
})();

