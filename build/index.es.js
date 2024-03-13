import j, { useState as y, useEffect as _ } from "react";
import w from "react-dom";
var k = { exports: {} }, f = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R;
function I() {
  if (R)
    return f;
  R = 1;
  var a = j, i = Symbol.for("react.element"), n = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(o, e, u) {
    var t, d = {}, r = null, s = null;
    u !== void 0 && (r = "" + u), e.key !== void 0 && (r = "" + e.key), e.ref !== void 0 && (s = e.ref);
    for (t in e)
      c.call(e, t) && !m.hasOwnProperty(t) && (d[t] = e[t]);
    if (o && o.defaultProps)
      for (t in e = o.defaultProps, e)
        d[t] === void 0 && (d[t] = e[t]);
    return { $$typeof: i, type: o, key: r, ref: s, props: d, _owner: h.current };
  }
  return f.Fragment = n, f.jsx = p, f.jsxs = p, f;
}
k.exports = I();
var l = k.exports, g = {}, v = w;
g.createRoot = v.createRoot, g.hydrateRoot = v.hydrateRoot;
function C({
  avatarUrl: a,
  color: i = "#3b82f6",
  gradient: n = "linear-gradient(145deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
  name: c,
  seen: h,
  status: m,
  small: p
}) {
  const [o, e] = y(!1), [u, t] = y(!0), d = () => {
    if (a)
      return;
    const s = "AA";
    if (!c)
      return s;
    const x = c.split(" ");
    return !x || x.length === 0 ? s : x.map((b) => {
      if (b[0])
        return b[0].toUpperCase();
    }).join("");
  }, r = (s = !1) => s ? p ? "42px" : "54px" : p ? "36px" : "50px";
  return _(() => {
    u || e(!1);
  }, [u]), _(() => {
    o && setTimeout(() => {
      t(!0);
    }, 250);
  }, [o]), /* @__PURE__ */ l.jsxs("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, children: [
    u && /* @__PURE__ */ l.jsx(
      "div",
      {
        style: {
          zIndex: 10,
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          background: "black"
        },
        onClick: () => t(!1),
        children: /* @__PURE__ */ l.jsx("h1", { style: {
          color: "white",
          textAlign: "center"
        }, children: "Hello this is a story" })
      }
    ),
    /* @__PURE__ */ l.jsxs("div", { style: {
      display: "flex",
      alignContent: "center",
      alignItems: "center",
      background: m ? h ? "#ccc" : n : "",
      padding: "3px",
      width: r(!0),
      height: r(!0),
      borderRadius: r(!0)
    }, children: [
      /* @__PURE__ */ l.jsx(
        "div",
        {
          style: {
            zIndex: o ? 2 : -1,
            position: "absolute",
            width: r(!0),
            height: r(!0),
            background: "black",
            borderRadius: "100px"
          },
          onClick: () => e(!o),
          className: o ? "grow-fast" : ""
        }
      ),
      /* @__PURE__ */ l.jsx(
        "div",
        {
          style: {
            zIndex: 1,
            backgroundImage: `url(${a})`,
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "700",
            width: r(),
            height: r(),
            borderRadius: r(),
            backgroundColor: i,
            cursor: "pointer",
            backgroundSize: "cover"
          },
          onClick: () => e(!o),
          children: d()
        }
      )
    ] })
  ] });
}
const A = (a) => a.replace(/-([a-z])/g, (i, n) => n.toUpperCase());
class S extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const i = this.getPropsFromAttributes();
    g.createRoot(this.shadowRoot).render(/* @__PURE__ */ l.jsx(C, { ...i }));
  }
  getPropsFromAttributes() {
    const i = {};
    for (let n = 0; n < this.attributes.length; n++) {
      const c = this.attributes[n];
      i[A(c.name)] = c.value;
    }
    return i;
  }
}
customElements.define("storees", S);
