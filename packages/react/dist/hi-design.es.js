export * from "@hi-design/tokens";
import * as n from "react";
import pe, { forwardRef as he, useMemo as je, useState as ve, useCallback as me, memo as Lr, createContext as Fr, useRef as Zr, useEffect as ze } from "react";
import { createPortal as Hr } from "react-dom";
var Er = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cr;
function Kr() {
  if (Cr) return Be;
  Cr = 1;
  var a = pe, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(p, d, y) {
    var v, E = {}, w = null, S = null;
    y !== void 0 && (w = "" + y), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) l.call(d, v) && !h.hasOwnProperty(v) && (E[v] = d[v]);
    if (p && p.defaultProps) for (v in d = p.defaultProps, d) E[v] === void 0 && (E[v] = d[v]);
    return { $$typeof: o, type: p, key: w, ref: S, props: E, _owner: u.current };
  }
  return Be.Fragment = s, Be.jsx = b, Be.jsxs = b, Be;
}
var He = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function qr() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = pe, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), M = Symbol.iterator, Z = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var A = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        P("error", e, t);
      }
    }
    function P(e, r, t) {
      {
        var i = A.ReactDebugCurrentFrame, m = i.getStackAddendum();
        m !== "" && (r += "%s", t = t.concat([m]));
        var g = t.map(function(f) {
          return String(f);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var z = !1, H = !1, ie = !1, K = !1, G = !1, V;
    V = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === h || G || e === u || e === y || e === v || K || e === S || z || H || ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === b || e.$$typeof === p || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === V || e.getModuleId !== void 0));
    }
    function Q(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var m = r.displayName || r.name || "";
      return m !== "" ? t + "(" + m + ")" : t;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case h:
          return "Profiler";
        case u:
          return "StrictMode";
        case y:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return Y(r) + ".Consumer";
          case b:
            var t = e;
            return Y(t._context) + ".Provider";
          case d:
            return Q(e, e.render, "ForwardRef");
          case E:
            var i = e.displayName || null;
            return i !== null ? i : L(e.type) || "Memo";
          case w: {
            var m = e, g = m._payload, f = m._init;
            try {
              return L(f(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, N = 0, ee, I, q, ce, le, te, $;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function ke() {
      {
        if (N === 0) {
          ee = console.log, I = console.info, q = console.warn, ce = console.error, le = console.group, te = console.groupCollapsed, $ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ae() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ee
            }),
            info: F({}, e, {
              value: I
            }),
            warn: F({}, e, {
              value: q
            }),
            error: F({}, e, {
              value: ce
            }),
            group: F({}, e, {
              value: le
            }),
            groupCollapsed: F({}, e, {
              value: te
            }),
            groupEnd: F({}, e, {
              value: $
            })
          });
        }
        N < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = A.ReactCurrentDispatcher, ue;
    function ae(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (m) {
            var i = m.stack.trim().match(/\n( *(at )?)/);
            ue = i && i[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var D = !1, re;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new qe();
    }
    function Oe(e, r) {
      if (!e || D)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      D = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = se.current, se.current = null, ke();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (O) {
              i = O;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (O) {
              i = O;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            i = O;
          }
          e();
        }
      } catch (O) {
        if (O && i && typeof O.stack == "string") {
          for (var c = O.stack.split(`
`), k = i.stack.split(`
`), _ = c.length - 1, x = k.length - 1; _ >= 1 && x >= 0 && c[_] !== k[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (c[_] !== k[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || c[_] !== k[x]) {
                    var T = `
` + c[_].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, T), T;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        D = !1, se.current = g, Ae(), Error.prepareStackTrace = m;
      }
      var X = e ? e.displayName || e.name : "", W = X ? ae(X) : "";
      return typeof e == "function" && re.set(e, W), W;
    }
    function Je(e, r, t) {
      return Oe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function fe(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Xe(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case y:
          return ae("Suspense");
        case v:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case E:
            return fe(e.type, r, t);
          case w: {
            var i = e, m = i._payload, g = i._init;
            try {
              return fe(g(m), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Se = {}, Ce = A.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(e, r, t, i, m) {
      {
        var g = Function.call.bind(ne);
        for (var f in e)
          if (g(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var k = Error((i || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              c = e[f](r, f, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              c = _;
            }
            c && !(c instanceof Error) && (de(m), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, f, typeof c), de(null)), c instanceof Error && !(c.message in Se) && (Se[c.message] = !0, de(m), j("Failed %s type: %s", t, c.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function ge(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Me(e) {
      if (rr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Te(e);
    }
    var Pe = A.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Fe;
    function ar(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      typeof e.ref == "string" && Pe.current;
    }
    function ir(e, r) {
      {
        var t = function() {
          Le || (Le = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, i, m, g, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function cr(e, r, t, i, m) {
      {
        var g, f = {}, c = null, k = null;
        t !== void 0 && (Me(t), c = "" + t), nr(r) && (Me(r.key), c = "" + r.key), ar(r) && (k = r.ref, or(r));
        for (g in r)
          ne.call(r, g) && !tr.hasOwnProperty(g) && (f[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            f[g] === void 0 && (f[g] = _[g]);
        }
        if (c || k) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(f, x), k && lr(f, x);
        }
        return sr(e, c, k, m, i, Pe.current, f);
      }
    }
    var be = A.ReactCurrentOwner, Ze = A.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        Ze.setExtraStackFrame(t);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ne() {
      {
        if (be.current) {
          var e = L(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var $e = {};
    function fr(e) {
      {
        var r = Ne();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var i = "";
        e && e._owner && e._owner !== be.current && (i = " It was passed a child from " + L(e._owner.type) + "."), J(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), J(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            _e(i) && De(i, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = C(e);
          if (typeof m == "function" && m !== e.entries)
            for (var g = m.call(e), f; !(f = g.next()).done; )
              _e(f.value) && De(f.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = L(r);
          Ge(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var m = L(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            J(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    var We = {};
    function Ve(e, r, t, i, m, g) {
      {
        var f = B(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = ur();
          k ? c += k : c += Ne();
          var _;
          e === null ? _ = "null" : ge(e) ? _ = "array" : e !== void 0 && e.$$typeof === o ? (_ = "<" + (L(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, c);
        }
        var x = cr(e, r, t, m, g);
        if (x == null)
          return x;
        if (f) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (ge(T)) {
                for (var X = 0; X < T.length; X++)
                  Ie(T[X], e);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(T, e);
        }
        if (ne.call(r, "key")) {
          var W = L(e), O = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), we = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[W + we]) {
            var gr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, W, gr, W), We[W + we] = !0;
          }
        }
        return e === l ? pr(x) : dr(x), x;
      }
    }
    function mr(e, r, t) {
      return Ve(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Ve(e, r, t, !1);
    }
    var yr = vr, hr = mr;
    He.Fragment = l, He.jsx = yr, He.jsxs = hr;
  }()), He;
}
process.env.NODE_ENV === "production" ? Er.exports = Kr() : Er.exports = qr();
var ye = Er.exports;
function Nr(a) {
  var o, s, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var u = a.length;
    for (o = 0; o < u; o++) a[o] && (s = Nr(a[o])) && (l && (l += " "), l += s);
  } else for (s in a) a[s] && (l && (l += " "), l += s);
  return l;
}
function Ke() {
  for (var a, o, s = 0, l = "", u = arguments.length; s < u; s++) (a = arguments[s]) && (o = Nr(a)) && (l && (l += " "), l += o);
  return l;
}
const $r = he(
  ({
    // Layout
    display: a = "block",
    // Flexbox
    flexDirection: o,
    justifyContent: s,
    alignItems: l,
    flexWrap: u,
    gap: h,
    // Grid
    gridTemplateColumns: b,
    gridTemplateRows: p,
    gridGap: d,
    // Spacing
    padding: y,
    margin: v,
    paddingTop: E,
    paddingBottom: w,
    paddingLeft: S,
    paddingRight: M,
    // Dimensions
    width: Z,
    height: C,
    minWidth: A,
    maxWidth: j,
    minHeight: P,
    maxHeight: z,
    // Colors
    backgroundColor: H,
    color: ie,
    borderColor: K,
    borderWidth: G,
    borderRadius: V,
    // Position
    position: B = "static",
    top: Q,
    right: Y,
    bottom: L,
    left: F,
    zIndex: N,
    // Other
    opacity: ee,
    overflow: I,
    cursor: q,
    // Base props
    className: ce,
    style: le,
    children: te,
    testID: $,
    responsive: U,
    // Rest for any additional HTML attributes
    ...ke
  }, Ae) => {
    const se = je(() => {
      if (!U) return {};
      const D = {};
      return U.mobile && Object.assign(D, U.mobile), U.tablet && (D["@media (min-width: 768px)"] = U.tablet), U.desktop && (D["@media (min-width: 1024px)"] = U.desktop), D;
    }, [U]), ue = je(() => {
      const D = {
        display: a,
        flexDirection: o,
        justifyContent: s,
        alignItems: l,
        flexWrap: u,
        gap: h,
        gridTemplateColumns: b,
        gridTemplateRows: p,
        gridGap: d,
        padding: y,
        margin: v,
        paddingTop: E,
        paddingBottom: w,
        paddingLeft: S,
        paddingRight: M,
        width: Z,
        height: C,
        minWidth: A,
        maxWidth: j,
        minHeight: P,
        maxHeight: z,
        backgroundColor: H,
        color: ie,
        borderColor: K,
        borderWidth: G,
        borderRadius: V,
        position: B,
        top: Q,
        right: Y,
        bottom: L,
        left: F,
        zIndex: N,
        opacity: ee,
        overflow: I,
        cursor: q,
        ...se,
        ...le
      };
      return Object.keys(D).forEach((re) => {
        D[re] === void 0 && delete D[re];
      }), D;
    }, [
      a,
      o,
      s,
      l,
      u,
      h,
      b,
      p,
      d,
      y,
      v,
      E,
      w,
      S,
      M,
      Z,
      C,
      A,
      j,
      P,
      z,
      H,
      ie,
      K,
      G,
      V,
      B,
      Q,
      Y,
      L,
      F,
      N,
      ee,
      I,
      q,
      se,
      le
    ]), ae = Ke(
      "box",
      a && `box--display-${a}`,
      ce
    );
    return /* @__PURE__ */ ye.jsx(
      "div",
      {
        ref: Ae,
        className: ae,
        style: ue,
        "data-testid": $,
        ...ke,
        children: te
      }
    );
  }
);
$r.displayName = "Box";
const wr = he(
  ({
    variant: a = "body1",
    weight: o,
    color: s,
    align: l = "left",
    textDecoration: u = "none",
    textTransform: h = "none",
    lineHeight: b,
    letterSpacing: p,
    isNoWrap: d = !1,
    numberOfLines: y,
    fontSize: v,
    className: E,
    style: w,
    children: S,
    testID: M,
    ...Z
  }, C) => {
    const A = je(() => {
      const P = {
        textAlign: l,
        textDecoration: u,
        textTransform: h,
        lineHeight: b,
        letterSpacing: p,
        fontSize: v,
        color: s,
        fontWeight: o,
        ...w
      };
      return y && (P.display = "-webkit-box", P.WebkitLineClamp = y, P.WebkitBoxOrient = "vertical", P.overflow = "hidden"), d && (P.whiteSpace = "nowrap", P.overflow = "hidden", P.textOverflow = "ellipsis"), Object.keys(P).forEach((z) => {
        P[z] === void 0 && delete P[z];
      }), P;
    }, [
      l,
      u,
      h,
      b,
      p,
      v,
      s,
      o,
      y,
      d,
      w
    ]), j = Ke(
      "text",
      `text--variant-${a}`,
      o && `text--weight-${o}`,
      l && `text--align-${l}`,
      d && "text--no-wrap",
      y && "text--truncate",
      E
    );
    return /* @__PURE__ */ ye.jsx(
      "p",
      {
        ref: C,
        className: j,
        style: A,
        "data-testid": M,
        ...Z,
        children: S
      }
    );
  }
);
wr.displayName = "Text";
const xr = he(
  ({
    // Interaction handlers
    onPress: a,
    onClick: o,
    onFocus: s,
    onBlur: l,
    onMouseDown: u,
    onMouseUp: h,
    onMouseLeave: b,
    // State
    disabled: p = !1,
    // State styling
    pressStyle: d,
    hoverStyle: y,
    focusStyle: v,
    // Rendering
    as: E = "button",
    href: w,
    tabIndex: S = 0,
    // Accessibility
    role: M,
    ariaLabel: Z,
    ariaProps: C = {},
    // Base props
    className: A,
    style: j,
    children: P,
    testID: z,
    // Rest for any additional HTML attributes
    ...H
  }, ie) => {
    const [K, G] = ve(!1), [V, B] = ve(!1), [Q, Y] = ve(!1), L = me(
      ($) => {
        p || (G(!0), u == null || u($));
      },
      [p, u]
    ), F = me(
      ($) => {
        p || (G(!1), h == null || h($), K && (a == null || a(), o == null || o($)));
      },
      [p, K, a, o, h]
    ), N = me(() => {
      p || B(!0);
    }, [p]), ee = me(
      ($) => {
        p || (G(!1), B(!1), b == null || b($));
      },
      [p, b]
    ), I = me(
      ($) => {
        p || (Y(!0), s == null || s($));
      },
      [p, s]
    ), q = me(
      ($) => {
        Y(!1), l == null || l($);
      },
      [l]
    ), ce = {
      ...j,
      ...K && d,
      ...V && y,
      ...Q && v
    }, le = Ke(
      "pressable",
      p && "pressable--disabled",
      K && "pressable--pressed",
      V && "pressable--hovered",
      Q && "pressable--focused",
      A
    ), te = {
      ref: ie,
      className: le,
      style: ce,
      "data-testid": z,
      "aria-disabled": p,
      "aria-label": Z,
      tabIndex: p ? -1 : S,
      role: M,
      onMouseEnter: N,
      onMouseLeave: ee,
      onMouseDown: L,
      onMouseUp: F,
      onFocus: I,
      onBlur: q,
      ...C,
      ...H
    };
    return E === "a" ? /* @__PURE__ */ ye.jsx("a", { ...te, href: p ? void 0 : w, children: P }) : E === "div" ? /* @__PURE__ */ ye.jsx("div", { ...te, children: P }) : /* @__PURE__ */ ye.jsx(
      "button",
      {
        ...te,
        type: "button",
        disabled: p,
        onClick: void 0,
        children: P
      }
    );
  }
);
xr.displayName = "Pressable";
const Jr = {
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "32px",
  xl: "48px",
  "2xl": "64px"
}, Dr = he(
  ({
    name: a,
    size: o = "md",
    color: s,
    variant: l = "outlined",
    rotate: u = 0,
    flip: h,
    className: b,
    style: p,
    testID: d,
    ariaLabel: y = "",
    role: v = "img",
    ...E
  }, w) => {
    const S = je(() => typeof o == "number" ? `${o}px` : Jr[o] || o, [o]), M = je(() => {
      const C = {
        width: S,
        height: S,
        color: s,
        transform: "",
        ...p
      };
      return u && (C.transform = `rotate(${u}deg)`), h === "horizontal" ? C.transform = `${C.transform} scaleX(-1)`.trim() : h === "vertical" ? C.transform = `${C.transform} scaleY(-1)`.trim() : h === "both" && (C.transform = `${C.transform} scale(-1, -1)`.trim()), C;
    }, [S, s, u, h, p]), Z = Ke(
      "icon",
      `icon--variant-${l}`,
      b
    );
    return /* @__PURE__ */ ye.jsxs(
      "svg",
      {
        ref: w,
        className: Z,
        style: M,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "data-testid": d,
        "aria-label": y,
        role: y ? v : void 0,
        "aria-hidden": !y,
        ...E,
        children: [
          /* @__PURE__ */ ye.jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
          /* @__PURE__ */ ye.jsx(
            "text",
            {
              x: "12",
              y: "12",
              textAnchor: "middle",
              dominantBaseline: "middle",
              fontSize: "10",
              fill: "currentColor",
              children: a.slice(0, 2)
            }
          )
        ]
      }
    );
  }
);
Dr.displayName = "Icon";
var _r = { exports: {} }, Ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function Xr() {
  if (Mr) return Ye;
  Mr = 1;
  var a = pe, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(p, d, y) {
    var v, E = {}, w = null, S = null;
    y !== void 0 && (w = "" + y), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) l.call(d, v) && !h.hasOwnProperty(v) && (E[v] = d[v]);
    if (p && p.defaultProps) for (v in d = p.defaultProps, d) E[v] === void 0 && (E[v] = d[v]);
    return { $$typeof: o, type: p, key: w, ref: S, props: E, _owner: u.current };
  }
  return Ye.Fragment = s, Ye.jsx = b, Ye.jsxs = b, Ye;
}
var Ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pr;
function Gr() {
  return Pr || (Pr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = pe, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), M = Symbol.iterator, Z = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var A = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        P("error", e, t);
      }
    }
    function P(e, r, t) {
      {
        var i = A.ReactDebugCurrentFrame, m = i.getStackAddendum();
        m !== "" && (r += "%s", t = t.concat([m]));
        var g = t.map(function(f) {
          return String(f);
        });
        g.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var z = !1, H = !1, ie = !1, K = !1, G = !1, V;
    V = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === h || G || e === u || e === y || e === v || K || e === S || z || H || ie || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === b || e.$$typeof === p || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === V || e.getModuleId !== void 0));
    }
    function Q(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var m = r.displayName || r.name || "";
      return m !== "" ? t + "(" + m + ")" : t;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case h:
          return "Profiler";
        case u:
          return "StrictMode";
        case y:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return Y(r) + ".Consumer";
          case b:
            var t = e;
            return Y(t._context) + ".Provider";
          case d:
            return Q(e, e.render, "ForwardRef");
          case E:
            var i = e.displayName || null;
            return i !== null ? i : L(e.type) || "Memo";
          case w: {
            var m = e, g = m._payload, f = m._init;
            try {
              return L(f(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, N = 0, ee, I, q, ce, le, te, $;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function ke() {
      {
        if (N === 0) {
          ee = console.log, I = console.info, q = console.warn, ce = console.error, le = console.group, te = console.groupCollapsed, $ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        N++;
      }
    }
    function Ae() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: ee
            }),
            info: F({}, e, {
              value: I
            }),
            warn: F({}, e, {
              value: q
            }),
            error: F({}, e, {
              value: ce
            }),
            group: F({}, e, {
              value: le
            }),
            groupCollapsed: F({}, e, {
              value: te
            }),
            groupEnd: F({}, e, {
              value: $
            })
          });
        }
        N < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = A.ReactCurrentDispatcher, ue;
    function ae(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (m) {
            var i = m.stack.trim().match(/\n( *(at )?)/);
            ue = i && i[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var D = !1, re;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      re = new qe();
    }
    function Oe(e, r) {
      if (!e || D)
        return "";
      {
        var t = re.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      D = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = se.current, se.current = null, ke();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (O) {
              i = O;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (O) {
              i = O;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            i = O;
          }
          e();
        }
      } catch (O) {
        if (O && i && typeof O.stack == "string") {
          for (var c = O.stack.split(`
`), k = i.stack.split(`
`), _ = c.length - 1, x = k.length - 1; _ >= 1 && x >= 0 && c[_] !== k[x]; )
            x--;
          for (; _ >= 1 && x >= 0; _--, x--)
            if (c[_] !== k[x]) {
              if (_ !== 1 || x !== 1)
                do
                  if (_--, x--, x < 0 || c[_] !== k[x]) {
                    var T = `
` + c[_].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, T), T;
                  }
                while (_ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        D = !1, se.current = g, Ae(), Error.prepareStackTrace = m;
      }
      var X = e ? e.displayName || e.name : "", W = X ? ae(X) : "";
      return typeof e == "function" && re.set(e, W), W;
    }
    function Je(e, r, t) {
      return Oe(e, !1);
    }
    function Xe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function fe(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Xe(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case y:
          return ae("Suspense");
        case v:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case E:
            return fe(e.type, r, t);
          case w: {
            var i = e, m = i._payload, g = i._init;
            try {
              return fe(g(m), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Se = {}, Ce = A.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(e, r, t, i, m) {
      {
        var g = Function.call.bind(ne);
        for (var f in e)
          if (g(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var k = Error((i || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              c = e[f](r, f, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              c = _;
            }
            c && !(c instanceof Error) && (de(m), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, f, typeof c), de(null)), c instanceof Error && !(c.message in Se) && (Se[c.message] = !0, de(m), j("Failed %s type: %s", t, c.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function ge(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function rr(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Me(e) {
      if (rr(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Te(e);
    }
    var Pe = A.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Fe;
    function ar(e) {
      if (ne.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (ne.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      typeof e.ref == "string" && Pe.current;
    }
    function ir(e, r) {
      {
        var t = function() {
          Le || (Le = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(e, r, t, i, m, g, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function cr(e, r, t, i, m) {
      {
        var g, f = {}, c = null, k = null;
        t !== void 0 && (Me(t), c = "" + t), nr(r) && (Me(r.key), c = "" + r.key), ar(r) && (k = r.ref, or(r, m));
        for (g in r)
          ne.call(r, g) && !tr.hasOwnProperty(g) && (f[g] = r[g]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (g in _)
            f[g] === void 0 && (f[g] = _[g]);
        }
        if (c || k) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(f, x), k && lr(f, x);
        }
        return sr(e, c, k, m, i, Pe.current, f);
      }
    }
    var be = A.ReactCurrentOwner, Ze = A.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = fe(e.type, e._source, r ? r.type : null);
        Ze.setExtraStackFrame(t);
      } else
        Ze.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ne() {
      {
        if (be.current) {
          var e = L(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      return "";
    }
    var $e = {};
    function fr(e) {
      {
        var r = Ne();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if ($e[t])
          return;
        $e[t] = !0;
        var i = "";
        e && e._owner && e._owner !== be.current && (i = " It was passed a child from " + L(e._owner.type) + "."), J(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), J(null);
      }
    }
    function Ie(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            _e(i) && De(i, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = C(e);
          if (typeof m == "function" && m !== e.entries)
            for (var g = m.call(e), f; !(f = g.next()).done; )
              _e(f.value) && De(f.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = L(r);
          Ge(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var m = L(r);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            J(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), J(null);
            break;
          }
        }
        e.ref !== null && (J(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), J(null));
      }
    }
    var We = {};
    function Ve(e, r, t, i, m, g) {
      {
        var f = B(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = ur();
          k ? c += k : c += Ne();
          var _;
          e === null ? _ = "null" : ge(e) ? _ = "array" : e !== void 0 && e.$$typeof === o ? (_ = "<" + (L(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, c);
        }
        var x = cr(e, r, t, m, g);
        if (x == null)
          return x;
        if (f) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (ge(T)) {
                for (var X = 0; X < T.length; X++)
                  Ie(T[X], e);
                Object.freeze && Object.freeze(T);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(T, e);
        }
        if (ne.call(r, "key")) {
          var W = L(e), O = Object.keys(r).filter(function(br) {
            return br !== "key";
          }), we = O.length > 0 ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[W + we]) {
            var gr = O.length > 0 ? "{" + O.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, we, W, gr, W), We[W + we] = !0;
          }
        }
        return e === l ? pr(x) : dr(x), x;
      }
    }
    function mr(e, r, t) {
      return Ve(e, r, t, !0);
    }
    function vr(e, r, t) {
      return Ve(e, r, t, !1);
    }
    var yr = vr, hr = mr;
    Ue.Fragment = l, Ue.jsx = yr, Ue.jsxs = hr;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? _r.exports = Xr() : _r.exports = Gr();
var R = _r.exports;
function Ir(a) {
  var o, s, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var u = a.length;
    for (o = 0; o < u; o++) a[o] && (s = Ir(a[o])) && (l && (l += " "), l += s);
  } else for (s in a) a[s] && (l && (l += " "), l += s);
  return l;
}
function xe() {
  for (var a, o, s = 0, l = "", u = arguments.length; s < u; s++) (a = arguments[s]) && (o = Ir(a)) && (l && (l += " "), l += o);
  return l;
}
const Qr = (a) => xe(
  "button",
  `button--${a.variant}`,
  `button--${a.size}`,
  `button--${a.color}`,
  a.fullWidth && "button--full-width",
  a.disabled && "button--disabled",
  a.loading && "button--loading",
  a.className
), et = he(
  ({
    variant: a = "primary",
    size: o = "md",
    color: s = "primary",
    disabled: l = !1,
    loading: u = !1,
    fullWidth: h = !1,
    onPress: b,
    className: p,
    children: d,
    testID: y,
    icon: v,
    ...E
  }, w) => /* @__PURE__ */ R.jsxs(
    xr,
    {
      ref: w,
      className: Qr({ variant: a, size: o, color: s, fullWidth: h, disabled: l, loading: u, className: p }),
      disabled: l || u,
      onPress: b,
      testID: y,
      "aria-busy": u,
      ...E,
      children: [
        u && /* @__PURE__ */ R.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ R.jsx("span", { className: "sr-only", children: "Loading..." }) }),
        v && !u && /* @__PURE__ */ R.jsx(Dr, { name: v, size: o, className: "button__icon", "aria-hidden": "true" }),
        d && /* @__PURE__ */ R.jsx(wr, { variant: "button", className: "button__content", children: d })
      ]
    }
  )
);
et.displayName = "Button";
const rt = (a) => xe(
  "card",
  `card--elevation-${a.elevation}`,
  `card--padding-${a.padding}`,
  `card--radius-${a.radius}`,
  a.isPressable && "card--pressable",
  a.className
), Wr = he(
  ({
    elevation: a = "md",
    padding: o = "md",
    radius: s = "md",
    isPressable: l = !1,
    onPress: u,
    className: h,
    children: b,
    testID: p,
    ...d
  }, y) => {
    const E = { className: rt({ elevation: a, padding: o, radius: s, isPressable: l, className: h }), testID: p, ...d };
    return l ? /* @__PURE__ */ R.jsx(xr, { ref: y, onPress: u, ...E, children: b }) : /* @__PURE__ */ R.jsx($r, { ref: y, ...E, children: b });
  }
);
Wr.displayName = "Card";
const gt = Lr(Wr), tt = (a, o) => {
  const [s, l] = ve(() => o || ""), u = a !== void 0;
  return {
    value: u ? a : s,
    setValue: (h) => {
      u || l(h);
    }
  };
}, at = he(
  ({
    value: a,
    defaultValue: o,
    placeholder: s,
    type: l = "text",
    variant: u = "outline",
    size: h = "md",
    state: b = "default",
    disabled: p = !1,
    fullWidth: d = !1,
    required: y = !1,
    label: v,
    helperText: E,
    errorText: w,
    className: S,
    onChange: M,
    onChangeText: Z,
    onSubmit: C,
    testID: A,
    name: j,
    ...P
  }, z) => {
    const H = `input-${Math.random().toString(36).substr(2, 9)}`, { value: ie, setValue: K } = tt(a, o), [G, V] = ve(!1), B = b === "error" && !!w, Q = `${H}-helper`, Y = `${H}-error`, L = (I) => {
      const q = I.target.value;
      K(q), M == null || M(I), Z == null || Z(q);
    }, F = (I) => {
      I.key === "Enter" && (C == null || C(I));
    }, N = xe(
      "input__container",
      `input__container--${h}`,
      d && "input__container--full-width"
    ), ee = xe(
      "input",
      `input--${u}`,
      `input--${h}`,
      `input--${b}`,
      G && "input--focused",
      p && "input--disabled",
      S
    );
    return /* @__PURE__ */ R.jsxs("div", { className: N, children: [
      v && /* @__PURE__ */ R.jsxs("label", { className: "input__label", htmlFor: H, children: [
        v,
        y && /* @__PURE__ */ R.jsx("span", { className: "input__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ R.jsx(
        "input",
        {
          ref: z,
          id: H,
          type: l,
          className: ee,
          value: ie,
          placeholder: s,
          disabled: p,
          required: y,
          onChange: L,
          onFocus: () => V(!0),
          onBlur: () => V(!1),
          onKeyDown: F,
          "data-testid": A,
          name: j,
          "aria-invalid": b === "error",
          "aria-describedby": B ? Y : E ? Q : void 0,
          "aria-required": y,
          ...P
        }
      ),
      (E || B) && /* @__PURE__ */ R.jsx("div", { className: "input__helper", id: B ? Y : Q, children: B ? /* @__PURE__ */ R.jsx("span", { className: "input__error", role: "alert", children: w }) : /* @__PURE__ */ R.jsx("span", { className: "input__helper-text", children: E }) })
    ] });
  }
);
at.displayName = "Input";
const nt = Fr({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), Re = n.forwardRef(
  (a, o) => {
    const {
      alt: s,
      color: l,
      size: u,
      weight: h,
      mirrored: b,
      children: p,
      weights: d,
      ...y
    } = a, {
      color: v = "currentColor",
      size: E,
      weight: w = "regular",
      mirrored: S = !1,
      ...M
    } = n.useContext(nt);
    return /* @__PURE__ */ n.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: u ?? E,
        height: u ?? E,
        fill: l ?? v,
        viewBox: "0 0 256 256",
        transform: b || S ? "scale(-1, 1)" : void 0,
        ...M,
        ...y
      },
      !!s && /* @__PURE__ */ n.createElement("title", null, s),
      p,
      d.get(h ?? w)
    );
  }
);
Re.displayName = "IconBase";
const ot = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ n.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Vr = n.forwardRef((a, o) => /* @__PURE__ */ n.createElement(Re, { ref: o, ...a, weights: ot }));
Vr.displayName = "CheckCircleIcon";
const it = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement(
      "path",
      {
        d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ n.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }))
  ]
]), jr = n.forwardRef((a, o) => /* @__PURE__ */ n.createElement(Re, { ref: o, ...a, weights: it }));
jr.displayName = "XIcon";
const lt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ n.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Br = n.forwardRef((a, o) => /* @__PURE__ */ n.createElement(Re, { ref: o, ...a, weights: lt }));
Br.displayName = "XCircleIcon";
const st = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ n.createElement("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Yr = n.forwardRef((a, o) => /* @__PURE__ */ n.createElement(Re, { ref: o, ...a, weights: st }));
Yr.displayName = "InfoIcon";
const ct = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ n.createElement(n.Fragment, null, /* @__PURE__ */ n.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z" }))
  ]
]), Ur = n.forwardRef((a, o) => /* @__PURE__ */ n.createElement(Re, { ref: o, ...a, weights: ct }));
Ur.displayName = "WarningCircleIcon";
const Rr = ({
  title: a,
  showCloseButton: o = !0,
  onClose: s,
  className: l,
  testID: u
}) => {
  const h = xe("modal__header", l);
  return /* @__PURE__ */ R.jsxs("div", { className: h, "data-testid": u, children: [
    a && /* @__PURE__ */ R.jsx("h2", { className: "modal__title", id: `${u || "modal"}-title`, children: a }),
    o && /* @__PURE__ */ R.jsx(
      "button",
      {
        className: "modal__close",
        onClick: s,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": u ? `${u}-close` : "modal-close",
        children: /* @__PURE__ */ R.jsx(jr, { size: 20, weight: "regular" })
      }
    )
  ] });
}, kr = ({
  size: a = "md",
  prefersReduced: o = !1,
  children: s,
  className: l,
  testID: u,
  modalId: h,
  titleId: b
}) => {
  const p = xe(
    "modal",
    `modal--${a}`,
    o && "modal--no-animation",
    l
  );
  return /* @__PURE__ */ R.jsx(
    "div",
    {
      className: p,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": b,
      id: h,
      "data-testid": u || "modal-content",
      children: s
    }
  );
}, Ar = ({
  closeOnBackdropPress: a = !0,
  onClose: o,
  prefersReduced: s = !1,
  className: l,
  testID: u,
  children: h
}) => {
  const b = xe(
    "modal-overlay",
    s && "modal-overlay--no-animation",
    l
  );
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      className: b,
      "data-testid": u || "modal-overlay",
      role: "presentation",
      children: [
        a ? /* @__PURE__ */ R.jsx(
          "button",
          {
            className: "modal-overlay__backdrop",
            onClick: o,
            "aria-label": "Close modal",
            type: "button",
            "data-testid": u ? `${u}-backdrop` : "modal-backdrop"
          }
        ) : /* @__PURE__ */ R.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" }),
        h
      ]
    }
  );
}, ut = Fr(void 0), Or = ({
  visible: a,
  onClose: o,
  modalRef: s,
  children: l
}) => {
  const [u, h] = ve(a), b = Zr(null);
  ze(() => {
    const d = (y) => {
      y.key === "Escape" && a && o && o();
    };
    return a && (document.addEventListener("keydown", d), b.current = document.activeElement), () => {
      document.removeEventListener("keydown", d);
    };
  }, [a, o]), ze(() => {
    if (!a || !s.current)
      return;
    const d = Array.from(
      s.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), y = d[0], v = d[d.length - 1];
    y == null || y.focus();
    const E = (w) => {
      w.key === "Tab" && (w.shiftKey ? document.activeElement === y && (w.preventDefault(), v == null || v.focus()) : document.activeElement === v && (w.preventDefault(), y == null || y.focus()));
    };
    return document.addEventListener("keydown", E), () => {
      var w;
      document.removeEventListener("keydown", E), (w = b.current) == null || w.focus();
    };
  }, [a]), ze(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const p = {
    isOpen: u,
    onClose: me(() => {
      h(!1), o();
    }, [o]),
    modalRef: s,
    previousActiveElement: b
  };
  return a ? /* @__PURE__ */ R.jsx(ut.Provider, { value: p, children: l }) : null;
}, Sr = ({
  children: a,
  className: o,
  testID: s
}) => /* @__PURE__ */ R.jsx("div", { className: `modal__body ${o || ""}`, "data-testid": s, children: a });
function ft() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function dt() {
  const [a, o] = pe.useState(() => ft());
  return pe.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const oe = ({
  visible: a = !1,
  title: o,
  size: s = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: u = !0,
  onClose: h = () => {
  },
  children: b,
  testID: p = "modal"
}) => {
  const d = Zr(null), y = dt();
  return a ? Hr(/* @__PURE__ */ R.jsx(Or, { visible: a, onClose: h, modalRef: d, children: /* @__PURE__ */ R.jsx(
    Ar,
    {
      closeOnBackdropPress: l,
      onClose: h,
      prefersReduced: y,
      testID: p,
      children: /* @__PURE__ */ R.jsxs(kr, { size: s, prefersReduced: y, testID: p, children: [
        (o || u) && /* @__PURE__ */ R.jsx(
          Rr,
          {
            title: o,
            showCloseButton: u,
            onClose: h,
            testID: p
          }
        ),
        /* @__PURE__ */ R.jsx(Sr, { children: b })
      ] })
    }
  ) }), document.body) : null;
};
oe.Header = Rr;
oe.Content = kr;
oe.Overlay = Ar;
oe.Provider = Or;
oe.Body = Sr;
oe.displayName = "Modal";
oe.Header = Rr;
oe.Content = kr;
oe.Overlay = Ar;
oe.Provider = Or;
oe.Body = Sr;
function pt(a = "component") {
  return `${a}-${Math.random().toString(36).substr(2, 9)}`;
}
function mt() {
  const [a, o] = pe.useState(() => typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return pe.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const zr = pe.forwardRef(({
  visible: a = !1,
  message: o,
  variant: s = "info",
  duration: l = 3e3,
  position: u = "top",
  onClose: h,
  testID: b
}, p) => {
  const [d, y] = ve(a), [v, E] = ve(!1), w = mt(), S = je(() => b || pt("toast"), [b]), M = me(() => {
    E(!0), setTimeout(() => {
      y(!1), h == null || h();
    }, 300);
  }, [h]);
  ze(() => {
    a && (y(!0), E(!1));
  }, [a]), ze(() => {
    if (!d || l <= 0 || v)
      return;
    const A = setTimeout(() => {
      M();
    }, l);
    return () => clearTimeout(A);
  }, [d, l, v, M]);
  const Z = () => {
    M();
  };
  if (!d || !o) return null;
  const C = () => {
    const A = {
      size: 24,
      weight: "regular"
    };
    switch (s) {
      case "success":
        return /* @__PURE__ */ R.jsx(Vr, { ...A });
      case "error":
        return /* @__PURE__ */ R.jsx(Br, { ...A });
      case "warning":
        return /* @__PURE__ */ R.jsx(Ur, { ...A });
      default:
        return /* @__PURE__ */ R.jsx(Yr, { ...A });
    }
  };
  return /* @__PURE__ */ R.jsxs(
    "div",
    {
      ref: p,
      className: `toast toast--${s} toast--${u} ${v ? "toast--exiting" : ""} ${w ? "toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": S,
      children: [
        /* @__PURE__ */ R.jsx("div", { className: "toast__icon", children: C() }),
        /* @__PURE__ */ R.jsx("div", { className: "toast__message", children: o }),
        /* @__PURE__ */ R.jsx(
          "button",
          {
            className: "toast__close",
            onClick: Z,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ R.jsx(jr, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
});
zr.displayName = "Toast";
const bt = Lr(zr), vt = he(
  ({ variant: a = "body1", weight: o, color: s, align: l, noWrap: u, numberOfLines: h, className: b, style: p, children: d, testID: y }, v) => /* @__PURE__ */ R.jsx(
    wr,
    {
      ref: v,
      variant: a,
      weight: o,
      color: s,
      align: l,
      isNoWrap: u,
      numberOfLines: h,
      className: b,
      style: p,
      testID: y,
      children: d
    }
  )
);
vt.displayName = "Typography";
export {
  $r as Box,
  et as Button,
  gt as Card,
  Dr as Icon,
  at as Input,
  oe as Modal,
  xr as Pressable,
  wr as PrimitiveText,
  vt as Text,
  bt as Toast,
  vt as Typography
};
