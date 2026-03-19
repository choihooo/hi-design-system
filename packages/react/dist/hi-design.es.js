export * from "@hi-design/tokens";
import * as o from "react";
import me, { forwardRef as ge, useMemo as Re, useState as ye, useCallback as ve, memo as Mr, createContext as Pr, useRef as Lr, useEffect as Ue } from "react";
import { createPortal as Hr } from "react-dom";
var gr = { exports: {} }, We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kr;
function qr() {
  if (kr) return We;
  kr = 1;
  var a = me, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, d, h) {
    var v, _ = {}, w = null, S = null;
    h !== void 0 && (w = "" + h), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) i.call(d, v) && !g.hasOwnProperty(v) && (_[v] = d[v]);
    if (m && m.defaultProps) for (v in d = m.defaultProps, d) _[v] === void 0 && (_[v] = d[v]);
    return { $$typeof: l, type: m, key: w, ref: S, props: _, _owner: f.current };
  }
  return We.Fragment = s, We.jsx = E, We.jsxs = E, We;
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
var Sr;
function Kr() {
  return Sr || (Sr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = me, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, F = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = T && e[T] || e[F];
      return typeof t == "function" ? t : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), c = 1; c < t; c++)
          n[c - 1] = arguments[c];
        M("error", e, n);
      }
    }
    function M(e, t, n) {
      {
        var c = k.ReactDebugCurrentFrame, y = c.getStackAddendum();
        y !== "" && (t += "%s", n = n.concat([y]));
        var p = n.map(function(u) {
          return String(u);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var H = !1, q = !1, oe = !1, K = !1, G = !1, W;
    W = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === g || G || e === f || e === h || e === v || K || e === S || H || q || oe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === m || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === W || e.getModuleId !== void 0));
    }
    function Q(e, t, n) {
      var c = e.displayName;
      if (c)
        return c;
      var y = t.displayName || t.name || "";
      return y !== "" ? n + "(" + y + ")" : n;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case f:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return Y(t) + ".Consumer";
          case E:
            var n = e;
            return Y(n._context) + ".Provider";
          case d:
            return Q(e, e.render, "ForwardRef");
          case _:
            var c = e.displayName || null;
            return c !== null ? c : P(e.type) || "Memo";
          case w: {
            var y = e, p = y._payload, u = y._init;
            try {
              return P(u(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, Z = 0, ee, V, J, ce, le, te, $;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Ae() {
      {
        if (Z === 0) {
          ee = console.log, V = console.info, J = console.warn, ce = console.error, le = console.group, te = console.groupCollapsed, $ = console.groupEnd;
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
        Z++;
      }
    }
    function Oe() {
      {
        if (Z--, Z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ee
            }),
            info: L({}, e, {
              value: V
            }),
            warn: L({}, e, {
              value: J
            }),
            error: L({}, e, {
              value: ce
            }),
            group: L({}, e, {
              value: le
            }),
            groupCollapsed: L({}, e, {
              value: te
            }),
            groupEnd: L({}, e, {
              value: $
            })
          });
        }
        Z < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, ue;
    function ae(e, t, n) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (y) {
            var c = y.stack.trim().match(/\n( *(at )?)/);
            ue = c && c[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var D = !1, re;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ke();
    }
    function ke(e, t) {
      if (!e || D)
        return "";
      {
        var n = re.get(e);
        if (n !== void 0)
          return n;
      }
      var c;
      D = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = ie.current, ie.current = null, Ae();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (z) {
              c = z;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (z) {
              c = z;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            c = z;
          }
          e();
        }
      } catch (z) {
        if (z && c && typeof z.stack == "string") {
          for (var b = z.stack.split(`
`), A = c.stack.split(`
`), x = b.length - 1, O = A.length - 1; x >= 1 && O >= 0 && b[x] !== A[O]; )
            O--;
          for (; x >= 1 && O >= 0; x--, O--)
            if (b[x] !== A[O]) {
              if (x !== 1 || O !== 1)
                do
                  if (x--, O--, O < 0 || b[x] !== A[O]) {
                    var N = `
` + b[x].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && re.set(e, N), N;
                  }
                while (x >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        D = !1, ie.current = p, Oe(), Error.prepareStackTrace = y;
      }
      var pe = e ? e.displayName || e.name : "", I = pe ? ae(pe) : "";
      return typeof e == "function" && re.set(e, I), I;
    }
    function Je(e, t, n) {
      return ke(e, !1);
    }
    function Xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fe(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, Xe(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case h:
          return ae("Suspense");
        case v:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case _:
            return fe(e.type, t, n);
          case w: {
            var c = e, y = c._payload, p = c._init;
            try {
              return fe(p(y), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Se = {}, Ce = k.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, n = fe(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(n);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(e, t, n, c, y) {
      {
        var p = Function.call.bind(se);
        for (var u in e)
          if (p(e, u)) {
            var b = void 0;
            try {
              if (typeof e[u] != "function") {
                var A = Error((c || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              b = e[u](t, u, c, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              b = x;
            }
            b && !(b instanceof Error) && (de(y), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", n, u, typeof b), de(null)), b instanceof Error && !(b.message in Se) && (Se[b.message] = !0, de(y), R("Failed %s type: %s", n, b.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function be(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
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
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Te(e);
    }
    var Pe = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ne;
    function ar(e) {
      if (se.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (se.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, t) {
      typeof e.ref == "string" && Pe.current;
    }
    function lr(e, t) {
      {
        var n = function() {
          Le || (Le = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ir(e, t) {
      {
        var n = function() {
          Ne || (Ne = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var sr = function(e, t, n, c, y, p, u) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function cr(e, t, n, c, y) {
      {
        var p, u = {}, b = null, A = null;
        n !== void 0 && (Me(n), b = "" + n), nr(t) && (Me(t.key), b = "" + t.key), ar(t) && (A = t.ref, or(t));
        for (p in t)
          se.call(t, p) && !tr.hasOwnProperty(p) && (u[p] = t[p]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (p in x)
            u[p] === void 0 && (u[p] = x[p]);
        }
        if (b || A) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && lr(u, O), A && ir(u, O);
        }
        return sr(e, b, A, y, c, Pe.current, u);
      }
    }
    var Ee = k.ReactCurrentOwner, Fe = k.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var t = e._owner, n = fe(e.type, e._source, t ? t.type : null);
        Fe.setExtraStackFrame(n);
      } else
        Fe.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Ze() {
      {
        if (Ee.current) {
          var e = P(Ee.current.type);
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
        var t = Ze();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function De(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(t);
        if ($e[n])
          return;
        $e[n] = !0;
        var c = "";
        e && e._owner && e._owner !== Ee.current && (c = " It was passed a child from " + P(e._owner.type) + "."), X(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, c), X(null);
      }
    }
    function Ie(e, t) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var n = 0; n < e.length; n++) {
            var c = e[n];
            we(c) && De(c, t);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = C(e);
          if (typeof y == "function" && y !== e.entries)
            for (var p = y.call(e), u; !(u = p.next()).done; )
              we(u.value) && De(u.value, t);
        }
      }
    }
    function dr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          n = t.propTypes;
        else
          return;
        if (n) {
          var c = P(t);
          Ge(n, e.props, "prop", c, e);
        } else if (t.PropTypes !== void 0 && !_e) {
          _e = !0;
          var y = P(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var c = t[n];
          if (c !== "children" && c !== "key") {
            X(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), X(null);
            break;
          }
        }
        e.ref !== null && (X(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var Ve = {};
    function ze(e, t, n, c, y, p) {
      {
        var u = B(e);
        if (!u) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = ur();
          A ? b += A : b += Ze();
          var x;
          e === null ? x = "null" : be(e) ? x = "array" : e !== void 0 && e.$$typeof === l ? (x = "<" + (P(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, b);
        }
        var O = cr(e, t, n, y, p);
        if (O == null)
          return O;
        if (u) {
          var N = t.children;
          if (N !== void 0)
            if (c)
              if (be(N)) {
                for (var pe = 0; pe < N.length; pe++)
                  Ie(N[pe], e);
                Object.freeze && Object.freeze(N);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(N, e);
        }
        if (se.call(t, "key")) {
          var I = P(e), z = Object.keys(t).filter(function(zr) {
            return zr !== "key";
          }), hr = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[I + hr]) {
            var Ur = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, hr, I, Ur, I), Ve[I + hr] = !0;
          }
        }
        return e === i ? pr(O) : dr(O), O;
      }
    }
    function mr(e, t, n) {
      return ze(e, t, n, !0);
    }
    function vr(e, t, n) {
      return ze(e, t, n, !1);
    }
    var yr = vr, r = mr;
    He.Fragment = i, He.jsx = yr, He.jsxs = r;
  }()), He;
}
process.env.NODE_ENV === "production" ? gr.exports = qr() : gr.exports = Kr();
var he = gr.exports;
function Nr(a) {
  var l, s, i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var f = a.length;
    for (l = 0; l < f; l++) a[l] && (s = Nr(a[l])) && (i && (i += " "), i += s);
  } else for (s in a) a[s] && (i && (i += " "), i += s);
  return i;
}
function qe() {
  for (var a, l, s = 0, i = "", f = arguments.length; s < f; s++) (a = arguments[s]) && (l = Nr(a)) && (i && (i += " "), i += l);
  return i;
}
const Fr = ge(
  ({
    // Layout
    display: a = "block",
    // Flexbox
    flexDirection: l,
    justifyContent: s,
    alignItems: i,
    flexWrap: f,
    gap: g,
    // Grid
    gridTemplateColumns: E,
    gridTemplateRows: m,
    gridGap: d,
    // Spacing
    padding: h,
    margin: v,
    paddingTop: _,
    paddingBottom: w,
    paddingLeft: S,
    paddingRight: T,
    // Dimensions
    width: F,
    height: C,
    minWidth: k,
    maxWidth: R,
    minHeight: M,
    maxHeight: H,
    // Colors
    backgroundColor: q,
    color: oe,
    borderColor: K,
    borderWidth: G,
    borderRadius: W,
    // Position
    position: B = "static",
    top: Q,
    right: Y,
    bottom: P,
    left: L,
    zIndex: Z,
    // Other
    opacity: ee,
    overflow: V,
    cursor: J,
    // Base props
    className: ce,
    style: le,
    children: te,
    testID: $,
    responsive: U,
    // Rest for any additional HTML attributes
    ...Ae
  }, Oe) => {
    const ie = Re(() => {
      if (!U) return {};
      const D = {};
      return U.mobile && Object.assign(D, U.mobile), U.tablet && (D["@media (min-width: 768px)"] = U.tablet), U.desktop && (D["@media (min-width: 1024px)"] = U.desktop), D;
    }, [U]), ue = Re(() => {
      const D = {
        display: a,
        flexDirection: l,
        justifyContent: s,
        alignItems: i,
        flexWrap: f,
        gap: g,
        gridTemplateColumns: E,
        gridTemplateRows: m,
        gridGap: d,
        padding: h,
        margin: v,
        paddingTop: _,
        paddingBottom: w,
        paddingLeft: S,
        paddingRight: T,
        width: F,
        height: C,
        minWidth: k,
        maxWidth: R,
        minHeight: M,
        maxHeight: H,
        backgroundColor: q,
        color: oe,
        borderColor: K,
        borderWidth: G,
        borderRadius: W,
        position: B,
        top: Q,
        right: Y,
        bottom: P,
        left: L,
        zIndex: Z,
        opacity: ee,
        overflow: V,
        cursor: J,
        ...ie,
        ...le
      };
      return Object.keys(D).forEach((re) => {
        D[re] === void 0 && delete D[re];
      }), D;
    }, [
      a,
      l,
      s,
      i,
      f,
      g,
      E,
      m,
      d,
      h,
      v,
      _,
      w,
      S,
      T,
      F,
      C,
      k,
      R,
      M,
      H,
      q,
      oe,
      K,
      G,
      W,
      B,
      Q,
      Y,
      P,
      L,
      Z,
      ee,
      V,
      J,
      ie,
      le
    ]), ae = qe(
      "box",
      a && `box--display-${a}`,
      ce
    );
    return /* @__PURE__ */ he.jsx(
      "div",
      {
        ref: Oe,
        className: ae,
        style: ue,
        "data-testid": $,
        ...Ae,
        children: te
      }
    );
  }
);
Fr.displayName = "Box";
const Er = ge(
  ({
    variant: a = "body1",
    weight: l,
    color: s,
    align: i = "left",
    textDecoration: f = "none",
    textTransform: g = "none",
    lineHeight: E,
    letterSpacing: m,
    isNoWrap: d = !1,
    numberOfLines: h,
    fontSize: v,
    className: _,
    style: w,
    children: S,
    testID: T,
    ...F
  }, C) => {
    const k = Re(() => {
      const M = {
        textAlign: i,
        textDecoration: f,
        textTransform: g,
        lineHeight: E,
        letterSpacing: m,
        fontSize: v,
        color: s,
        fontWeight: l,
        ...w
      };
      return h && (M.display = "-webkit-box", M.WebkitLineClamp = h, M.WebkitBoxOrient = "vertical", M.overflow = "hidden"), d && (M.whiteSpace = "nowrap", M.overflow = "hidden", M.textOverflow = "ellipsis"), Object.keys(M).forEach((H) => {
        M[H] === void 0 && delete M[H];
      }), M;
    }, [
      i,
      f,
      g,
      E,
      m,
      v,
      s,
      l,
      h,
      d,
      w
    ]), R = qe(
      "text",
      `text--variant-${a}`,
      l && `text--weight-${l}`,
      i && `text--align-${i}`,
      d && "text--no-wrap",
      h && "text--truncate",
      _
    );
    return /* @__PURE__ */ he.jsx(
      "p",
      {
        ref: C,
        className: R,
        style: k,
        "data-testid": T,
        ...F,
        children: S
      }
    );
  }
);
Er.displayName = "Text";
const _r = ge(
  ({
    // Interaction handlers
    onPress: a,
    onClick: l,
    onFocus: s,
    onBlur: i,
    onMouseDown: f,
    onMouseUp: g,
    onMouseLeave: E,
    // State
    disabled: m = !1,
    // State styling
    pressStyle: d,
    hoverStyle: h,
    focusStyle: v,
    // Rendering
    as: _ = "button",
    href: w,
    tabIndex: S = 0,
    // Accessibility
    role: T,
    ariaLabel: F,
    ariaProps: C = {},
    // Base props
    className: k,
    style: R,
    children: M,
    testID: H,
    // Rest for any additional HTML attributes
    ...q
  }, oe) => {
    const [K, G] = ye(!1), [W, B] = ye(!1), [Q, Y] = ye(!1), P = ve(
      ($) => {
        m || (G(!0), f == null || f($));
      },
      [m, f]
    ), L = ve(
      ($) => {
        m || (G(!1), g == null || g($), K && (a == null || a(), l == null || l($)));
      },
      [m, K, a, l, g]
    ), Z = ve(() => {
      m || B(!0);
    }, [m]), ee = ve(
      ($) => {
        m || (G(!1), B(!1), E == null || E($));
      },
      [m, E]
    ), V = ve(
      ($) => {
        m || (Y(!0), s == null || s($));
      },
      [m, s]
    ), J = ve(
      ($) => {
        Y(!1), i == null || i($);
      },
      [i]
    ), ce = {
      ...R,
      ...K && d,
      ...W && h,
      ...Q && v
    }, le = qe(
      "pressable",
      m && "pressable--disabled",
      K && "pressable--pressed",
      W && "pressable--hovered",
      Q && "pressable--focused",
      k
    ), te = {
      ref: oe,
      className: le,
      style: ce,
      "data-testid": H,
      "aria-disabled": m,
      "aria-label": F,
      tabIndex: m ? -1 : S,
      role: T,
      onMouseEnter: Z,
      onMouseLeave: ee,
      onMouseDown: P,
      onMouseUp: L,
      onFocus: V,
      onBlur: J,
      ...C,
      ...q
    };
    return _ === "a" ? /* @__PURE__ */ he.jsx("a", { ...te, href: m ? void 0 : w, children: M }) : _ === "div" ? /* @__PURE__ */ he.jsx("div", { ...te, children: M }) : /* @__PURE__ */ he.jsx(
      "button",
      {
        ...te,
        type: "button",
        disabled: m,
        onClick: void 0,
        children: M
      }
    );
  }
);
_r.displayName = "Pressable";
const Jr = {
  xs: "16px",
  sm: "20px",
  md: "24px",
  lg: "32px",
  xl: "48px",
  "2xl": "64px"
}, Zr = ge(
  ({
    name: a,
    size: l = "md",
    color: s,
    variant: i = "outlined",
    rotate: f = 0,
    flip: g,
    className: E,
    style: m,
    testID: d,
    ariaLabel: h = "",
    role: v = "img",
    ..._
  }, w) => {
    const S = Re(() => typeof l == "number" ? `${l}px` : Jr[l] || l, [l]), T = Re(() => {
      const C = {
        width: S,
        height: S,
        color: s,
        transform: "",
        ...m
      };
      return f && (C.transform = `rotate(${f}deg)`), g === "horizontal" ? C.transform = `${C.transform} scaleX(-1)`.trim() : g === "vertical" ? C.transform = `${C.transform} scaleY(-1)`.trim() : g === "both" && (C.transform = `${C.transform} scale(-1, -1)`.trim()), C;
    }, [S, s, f, g, m]), F = qe(
      "icon",
      `icon--variant-${i}`,
      E
    );
    return /* @__PURE__ */ he.jsxs(
      "svg",
      {
        ref: w,
        className: F,
        style: T,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "data-testid": d,
        "aria-label": h,
        role: h ? v : void 0,
        "aria-hidden": !h,
        ..._,
        children: [
          /* @__PURE__ */ he.jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", strokeWidth: "2" }),
          /* @__PURE__ */ he.jsx(
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
Zr.displayName = "Icon";
var br = { exports: {} }, Be = {};
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
function Xr() {
  if (Cr) return Be;
  Cr = 1;
  var a = me, l = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, d, h) {
    var v, _ = {}, w = null, S = null;
    h !== void 0 && (w = "" + h), d.key !== void 0 && (w = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) i.call(d, v) && !g.hasOwnProperty(v) && (_[v] = d[v]);
    if (m && m.defaultProps) for (v in d = m.defaultProps, d) _[v] === void 0 && (_[v] = d[v]);
    return { $$typeof: l, type: m, key: w, ref: S, props: _, _owner: f.current };
  }
  return Be.Fragment = s, Be.jsx = E, Be.jsxs = E, Be;
}
var Ye = {};
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
function Gr() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = me, l = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, F = "@@iterator";
    function C(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = T && r[T] || r[F];
      return typeof e == "function" ? e : null;
    }
    var k = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
          t[n - 1] = arguments[n];
        M("error", r, t);
      }
    }
    function M(r, e, t) {
      {
        var n = k.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (e += "%s", t = t.concat([c]));
        var y = t.map(function(p) {
          return String(p);
        });
        y.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var H = !1, q = !1, oe = !1, K = !1, G = !1, W;
    W = Symbol.for("react.module.reference");
    function B(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === g || G || r === f || r === h || r === v || K || r === S || H || q || oe || typeof r == "object" && r !== null && (r.$$typeof === w || r.$$typeof === _ || r.$$typeof === E || r.$$typeof === m || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === W || r.getModuleId !== void 0));
    }
    function Q(r, e, t) {
      var n = r.displayName;
      if (n)
        return n;
      var c = e.displayName || e.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function Y(r) {
      return r.displayName || "Context";
    }
    function P(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case g:
          return "Profiler";
        case f:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            var e = r;
            return Y(e) + ".Consumer";
          case E:
            var t = r;
            return Y(t._context) + ".Provider";
          case d:
            return Q(r, r.render, "ForwardRef");
          case _:
            var n = r.displayName || null;
            return n !== null ? n : P(r.type) || "Memo";
          case w: {
            var c = r, y = c._payload, p = c._init;
            try {
              return P(p(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, Z = 0, ee, V, J, ce, le, te, $;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Ae() {
      {
        if (Z === 0) {
          ee = console.log, V = console.info, J = console.warn, ce = console.error, le = console.group, te = console.groupCollapsed, $ = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        Z++;
      }
    }
    function Oe() {
      {
        if (Z--, Z === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, r, {
              value: ee
            }),
            info: L({}, r, {
              value: V
            }),
            warn: L({}, r, {
              value: J
            }),
            error: L({}, r, {
              value: ce
            }),
            group: L({}, r, {
              value: le
            }),
            groupCollapsed: L({}, r, {
              value: te
            }),
            groupEnd: L({}, r, {
              value: $
            })
          });
        }
        Z < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = k.ReactCurrentDispatcher, ue;
    function ae(r, e, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            ue = n && n[1] || "";
          }
        return `
` + ue + r;
      }
    }
    var D = !1, re;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ke();
    }
    function ke(r, e) {
      if (!r || D)
        return "";
      {
        var t = re.get(r);
        if (t !== void 0)
          return t;
      }
      var n;
      D = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, Ae();
      try {
        if (e) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (I) {
              n = I;
            }
            Reflect.construct(r, [], p);
          } else {
            try {
              p.call();
            } catch (I) {
              n = I;
            }
            r.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            n = I;
          }
          r();
        }
      } catch (I) {
        if (I && n && typeof I.stack == "string") {
          for (var u = I.stack.split(`
`), b = n.stack.split(`
`), A = u.length - 1, x = b.length - 1; A >= 1 && x >= 0 && u[A] !== b[x]; )
            x--;
          for (; A >= 1 && x >= 0; A--, x--)
            if (u[A] !== b[x]) {
              if (A !== 1 || x !== 1)
                do
                  if (A--, x--, x < 0 || u[A] !== b[x]) {
                    var O = `
` + u[A].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, O), O;
                  }
                while (A >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        D = !1, ie.current = y, Oe(), Error.prepareStackTrace = c;
      }
      var N = r ? r.displayName || r.name : "", pe = N ? ae(N) : "";
      return typeof r == "function" && re.set(r, pe), pe;
    }
    function Je(r, e, t) {
      return ke(r, !1);
    }
    function Xe(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function fe(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return ke(r, Xe(r));
      if (typeof r == "string")
        return ae(r);
      switch (r) {
        case h:
          return ae("Suspense");
        case v:
          return ae("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Je(r.render);
          case _:
            return fe(r.type, e, t);
          case w: {
            var n = r, c = n._payload, y = n._init;
            try {
              return fe(y(c), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var se = Object.prototype.hasOwnProperty, Se = {}, Ce = k.ReactDebugCurrentFrame;
    function de(r) {
      if (r) {
        var e = r._owner, t = fe(r.type, r._source, e ? e.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(r, e, t, n, c) {
      {
        var y = Function.call.bind(se);
        for (var p in r)
          if (y(r, p)) {
            var u = void 0;
            try {
              if (typeof r[p] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              u = r[p](e, p, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              u = A;
            }
            u && !(u instanceof Error) && (de(c), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, p, typeof u), de(null)), u instanceof Error && !(u.message in Se) && (Se[u.message] = !0, de(c), R("Failed %s type: %s", t, u.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function be(r) {
      return Qe(r);
    }
    function er(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, t = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return t;
      }
    }
    function rr(r) {
      try {
        return Te(r), !1;
      } catch {
        return !0;
      }
    }
    function Te(r) {
      return "" + r;
    }
    function Me(r) {
      if (rr(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(r)), Te(r);
    }
    var Pe = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ne;
    function ar(r) {
      if (se.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function nr(r) {
      if (se.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function or(r, e) {
      typeof r.ref == "string" && Pe.current;
    }
    function lr(r, e) {
      {
        var t = function() {
          Le || (Le = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ir(r, e) {
      {
        var t = function() {
          Ne || (Ne = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(r, e, t, n, c, y, p) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: r,
        key: e,
        ref: t,
        props: p,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(r, e, t, n, c) {
      {
        var y, p = {}, u = null, b = null;
        t !== void 0 && (Me(t), u = "" + t), nr(e) && (Me(e.key), u = "" + e.key), ar(e) && (b = e.ref, or(e, c));
        for (y in e)
          se.call(e, y) && !tr.hasOwnProperty(y) && (p[y] = e[y]);
        if (r && r.defaultProps) {
          var A = r.defaultProps;
          for (y in A)
            p[y] === void 0 && (p[y] = A[y]);
        }
        if (u || b) {
          var x = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          u && lr(p, x), b && ir(p, x);
        }
        return sr(r, u, b, c, n, Pe.current, p);
      }
    }
    var Ee = k.ReactCurrentOwner, Fe = k.ReactDebugCurrentFrame;
    function X(r) {
      if (r) {
        var e = r._owner, t = fe(r.type, r._source, e ? e.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function we(r) {
      return typeof r == "object" && r !== null && r.$$typeof === l;
    }
    function Ze() {
      {
        if (Ee.current) {
          var r = P(Ee.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function ur(r) {
      return "";
    }
    var $e = {};
    function fr(r) {
      {
        var e = Ze();
        if (!e) {
          var t = typeof r == "string" ? r : r.displayName || r.name;
          t && (e = `

Check the top-level render call using <` + t + ">.");
        }
        return e;
      }
    }
    function De(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var t = fr(e);
        if ($e[t])
          return;
        $e[t] = !0;
        var n = "";
        r && r._owner && r._owner !== Ee.current && (n = " It was passed a child from " + P(r._owner.type) + "."), X(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), X(null);
      }
    }
    function Ie(r, e) {
      {
        if (typeof r != "object")
          return;
        if (be(r))
          for (var t = 0; t < r.length; t++) {
            var n = r[t];
            we(n) && De(n, e);
          }
        else if (we(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var c = C(r);
          if (typeof c == "function" && c !== r.entries)
            for (var y = c.call(r), p; !(p = y.next()).done; )
              we(p.value) && De(p.value, e);
        }
      }
    }
    function dr(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var t;
        if (typeof e == "function")
          t = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        e.$$typeof === _))
          t = e.propTypes;
        else
          return;
        if (t) {
          var n = P(e);
          Ge(t, r.props, "prop", n, r);
        } else if (e.PropTypes !== void 0 && !_e) {
          _e = !0;
          var c = P(e);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var n = e[t];
          if (n !== "children" && n !== "key") {
            X(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), X(null);
            break;
          }
        }
        r.ref !== null && (X(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    function Ve(r, e, t, n, c, y) {
      {
        var p = B(r);
        if (!p) {
          var u = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ur();
          b ? u += b : u += Ze();
          var A;
          r === null ? A = "null" : be(r) ? A = "array" : r !== void 0 && r.$$typeof === l ? (A = "<" + (P(r.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : A = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, u);
        }
        var x = cr(r, e, t, c, y);
        if (x == null)
          return x;
        if (p) {
          var O = e.children;
          if (O !== void 0)
            if (n)
              if (be(O)) {
                for (var N = 0; N < O.length; N++)
                  Ie(O[N], r);
                Object.freeze && Object.freeze(O);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(O, r);
        }
        return r === i ? pr(x) : dr(x), x;
      }
    }
    function ze(r, e, t) {
      return Ve(r, e, t, !0);
    }
    function mr(r, e, t) {
      return Ve(r, e, t, !1);
    }
    var vr = mr, yr = ze;
    Ye.Fragment = i, Ye.jsx = vr, Ye.jsxs = yr;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? br.exports = Xr() : br.exports = Gr();
var j = br.exports;
function $r(a) {
  var l, s, i = "";
  if (typeof a == "string" || typeof a == "number") i += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var f = a.length;
    for (l = 0; l < f; l++) a[l] && (s = $r(a[l])) && (i && (i += " "), i += s);
  } else for (s in a) a[s] && (i && (i += " "), i += s);
  return i;
}
function xe() {
  for (var a, l, s = 0, i = "", f = arguments.length; s < f; s++) (a = arguments[s]) && (l = $r(a)) && (i && (i += " "), i += l);
  return i;
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
), et = ge(
  ({
    variant: a = "primary",
    size: l = "md",
    color: s = "primary",
    disabled: i = !1,
    loading: f = !1,
    fullWidth: g = !1,
    onPress: E,
    className: m,
    children: d,
    testID: h,
    icon: v,
    ..._
  }, w) => /* @__PURE__ */ j.jsxs(
    _r,
    {
      ref: w,
      className: Qr({ variant: a, size: l, color: s, fullWidth: g, disabled: i, loading: f, className: m }),
      disabled: i || f,
      onPress: E,
      testID: h,
      "aria-busy": f,
      ..._,
      children: [
        f && /* @__PURE__ */ j.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Loading..." }) }),
        v && !f && /* @__PURE__ */ j.jsx(Zr, { name: v, size: l, className: "button__icon", "aria-hidden": "true" }),
        d && /* @__PURE__ */ j.jsx(Er, { variant: "button", className: "button__content", children: d })
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
), Dr = ge(
  ({
    elevation: a = "md",
    padding: l = "md",
    radius: s = "md",
    isPressable: i = !1,
    onPress: f,
    className: g,
    children: E,
    testID: m,
    ...d
  }, h) => {
    const _ = { className: rt({ elevation: a, padding: l, radius: s, isPressable: i, className: g }), testID: m, ...d };
    return i ? /* @__PURE__ */ j.jsx(_r, { ref: h, onPress: f, ..._, children: E }) : /* @__PURE__ */ j.jsx(Fr, { ref: h, ..._, children: E });
  }
);
Dr.displayName = "Card";
const gt = Mr(Dr), tt = (a, l) => {
  const [s, i] = ye(() => l || ""), f = a !== void 0;
  return {
    value: f ? a : s,
    setValue: (g) => {
      f || i(g);
    }
  };
}, at = ge(
  ({
    value: a,
    defaultValue: l,
    placeholder: s,
    type: i = "text",
    variant: f = "outline",
    size: g = "md",
    state: E = "default",
    disabled: m = !1,
    fullWidth: d = !1,
    required: h = !1,
    label: v,
    helperText: _,
    errorText: w,
    className: S,
    onChange: T,
    onChangeText: F,
    onSubmit: C,
    testID: k,
    name: R,
    ...M
  }, H) => {
    const q = `input-${Math.random().toString(36).substr(2, 9)}`, { value: oe, setValue: K } = tt(a, l), [G, W] = ye(!1), B = E === "error" && !!w, Q = `${q}-helper`, Y = `${q}-error`, P = (V) => {
      const J = V.target.value;
      K(J), T == null || T(V), F == null || F(J);
    }, L = (V) => {
      V.key === "Enter" && (C == null || C(V));
    }, Z = xe(
      "input__container",
      `input__container--${g}`,
      d && "input__container--full-width"
    ), ee = xe(
      "input",
      `input--${f}`,
      `input--${g}`,
      `input--${E}`,
      G && "input--focused",
      m && "input--disabled",
      S
    );
    return /* @__PURE__ */ j.jsxs("div", { className: Z, children: [
      v && /* @__PURE__ */ j.jsxs("label", { className: "input__label", htmlFor: q, children: [
        v,
        h && /* @__PURE__ */ j.jsx("span", { className: "input__required", "aria-hidden": "true", children: " *" })
      ] }),
      /* @__PURE__ */ j.jsx(
        "input",
        {
          ref: H,
          id: q,
          type: i,
          className: ee,
          value: oe,
          placeholder: s,
          disabled: m,
          required: h,
          onChange: P,
          onFocus: () => W(!0),
          onBlur: () => W(!1),
          onKeyDown: L,
          "data-testid": k,
          name: R,
          "aria-invalid": E === "error",
          "aria-describedby": B ? Y : _ ? Q : void 0,
          "aria-required": h,
          ...M
        }
      ),
      (_ || B) && /* @__PURE__ */ j.jsx("div", { className: "input__helper", id: B ? Y : Q, children: B ? /* @__PURE__ */ j.jsx("span", { className: "input__error", role: "alert", children: w }) : /* @__PURE__ */ j.jsx("span", { className: "input__helper-text", children: _ }) })
    ] });
  }
);
at.displayName = "Input";
const nt = Pr({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), je = o.forwardRef(
  (a, l) => {
    const {
      alt: s,
      color: i,
      size: f,
      weight: g,
      mirrored: E,
      children: m,
      weights: d,
      ...h
    } = a, {
      color: v = "currentColor",
      size: _,
      weight: w = "regular",
      mirrored: S = !1,
      ...T
    } = o.useContext(nt);
    return /* @__PURE__ */ o.createElement(
      "svg",
      {
        ref: l,
        xmlns: "http://www.w3.org/2000/svg",
        width: f ?? _,
        height: f ?? _,
        fill: i ?? v,
        viewBox: "0 0 256 256",
        transform: E || S ? "scale(-1, 1)" : void 0,
        ...T,
        ...h
      },
      !!s && /* @__PURE__ */ o.createElement("title", null, s),
      m,
      d.get(g ?? w)
    );
  }
);
je.displayName = "IconBase";
const ot = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ o.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Ir = o.forwardRef((a, l) => /* @__PURE__ */ o.createElement(je, { ref: l, ...a, weights: ot }));
Ir.displayName = "CheckCircleIcon";
const lt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement(
      "path",
      {
        d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ o.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }))
  ]
]), wr = o.forwardRef((a, l) => /* @__PURE__ */ o.createElement(je, { ref: l, ...a, weights: lt }));
wr.displayName = "XIcon";
const it = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ o.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Vr = o.forwardRef((a, l) => /* @__PURE__ */ o.createElement(je, { ref: l, ...a, weights: it }));
Vr.displayName = "XCircleIcon";
const st = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ o.createElement("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), Wr = o.forwardRef((a, l) => /* @__PURE__ */ o.createElement(je, { ref: l, ...a, weights: st }));
Wr.displayName = "InfoIcon";
const ct = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ o.createElement(o.Fragment, null, /* @__PURE__ */ o.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z" }))
  ]
]), Br = o.forwardRef((a, l) => /* @__PURE__ */ o.createElement(je, { ref: l, ...a, weights: ct }));
Br.displayName = "WarningCircleIcon";
const xr = ({
  title: a,
  showCloseButton: l = !0,
  onClose: s,
  className: i,
  testID: f
}) => {
  const g = xe("modal__header", i);
  return /* @__PURE__ */ j.jsxs("div", { className: g, "data-testid": f, children: [
    a && /* @__PURE__ */ j.jsx("h2", { className: "modal__title", id: `${f || "modal"}-title`, children: a }),
    l && /* @__PURE__ */ j.jsx(
      "button",
      {
        className: "modal__close",
        onClick: s,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": f ? `${f}-close` : "modal-close",
        children: /* @__PURE__ */ j.jsx(wr, { size: 20, weight: "regular" })
      }
    )
  ] });
}, Rr = ({
  size: a = "md",
  prefersReduced: l = !1,
  children: s,
  className: i,
  testID: f,
  modalId: g,
  titleId: E
}) => {
  const m = xe(
    "modal",
    `modal--${a}`,
    l && "modal--no-animation",
    i
  );
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      className: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": E,
      id: g,
      "data-testid": f || "modal-content",
      children: s
    }
  );
}, jr = ({
  closeOnBackdropPress: a = !0,
  onClose: l,
  prefersReduced: s = !1,
  className: i,
  testID: f
}) => {
  const g = xe(
    "modal-overlay",
    s && "modal-overlay--no-animation",
    i
  );
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      className: g,
      "data-testid": f || "modal-overlay",
      role: "presentation",
      children: a ? /* @__PURE__ */ j.jsx(
        "button",
        {
          className: "modal-overlay__backdrop",
          onClick: l,
          "aria-label": "Close modal",
          type: "button",
          "data-testid": f ? `${f}-backdrop` : "modal-backdrop"
        }
      ) : /* @__PURE__ */ j.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" })
    }
  );
}, ut = Pr(void 0), Ar = ({
  visible: a,
  onClose: l,
  modalRef: s,
  children: i
}) => {
  const [f, g] = ye(a), E = Lr(null);
  Ue(() => {
    const d = (h) => {
      h.key === "Escape" && a && l && l();
    };
    return a && (document.addEventListener("keydown", d), E.current = document.activeElement), () => {
      document.removeEventListener("keydown", d);
    };
  }, [a, l]), Ue(() => {
    if (!a || !s.current)
      return;
    const d = Array.from(
      s.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), h = d[0], v = d[d.length - 1];
    h == null || h.focus();
    const _ = (w) => {
      w.key === "Tab" && (w.shiftKey ? document.activeElement === h && (w.preventDefault(), v == null || v.focus()) : document.activeElement === v && (w.preventDefault(), h == null || h.focus()));
    };
    return document.addEventListener("keydown", _), () => {
      var w;
      document.removeEventListener("keydown", _), (w = E.current) == null || w.focus();
    };
  }, [a]), Ue(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const m = {
    isOpen: f,
    onClose: ve(() => {
      g(!1), l();
    }, [l]),
    modalRef: s,
    previousActiveElement: E
  };
  return a ? /* @__PURE__ */ j.jsx(ut.Provider, { value: m, children: i }) : null;
}, Or = ({
  children: a,
  className: l,
  testID: s
}) => /* @__PURE__ */ j.jsx("div", { className: `modal__body ${l || ""}`, "data-testid": s, children: a });
function ft() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function dt() {
  const [a, l] = me.useState(() => ft());
  return me.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), i = () => l(s.matches);
    return s.addEventListener("change", i), () => s.removeEventListener("change", i);
  }, []), a;
}
const ne = ({
  visible: a = !1,
  title: l,
  size: s = "md",
  closeOnBackdropPress: i = !0,
  showCloseButton: f = !0,
  onClose: g = () => {
  },
  children: E,
  testID: m = "modal"
}) => {
  const d = Lr(null), h = dt();
  return a ? Hr(/* @__PURE__ */ j.jsx(Ar, { visible: a, onClose: g, modalRef: d, children: /* @__PURE__ */ j.jsx(
    jr,
    {
      closeOnBackdropPress: i,
      onClose: g,
      prefersReduced: h,
      testID: m,
      children: /* @__PURE__ */ j.jsxs(Rr, { size: s, prefersReduced: h, testID: m, children: [
        (l || f) && /* @__PURE__ */ j.jsx(
          xr,
          {
            title: l,
            showCloseButton: f,
            onClose: g,
            testID: m
          }
        ),
        /* @__PURE__ */ j.jsx(Or, { children: E })
      ] })
    }
  ) }), document.body) : null;
};
ne.Header = xr;
ne.Content = Rr;
ne.Overlay = jr;
ne.Provider = Ar;
ne.Body = Or;
ne.displayName = "Modal";
ne.Header = xr;
ne.Content = Rr;
ne.Overlay = jr;
ne.Provider = Ar;
ne.Body = Or;
function pt(a = "component") {
  return `${a}-${Math.random().toString(36).substr(2, 9)}`;
}
function mt() {
  const [a, l] = me.useState(() => typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return me.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), i = () => l(s.matches);
    return s.addEventListener("change", i), () => s.removeEventListener("change", i);
  }, []), a;
}
const Yr = me.forwardRef(({
  visible: a = !1,
  message: l,
  variant: s = "info",
  duration: i = 3e3,
  position: f = "top",
  onClose: g,
  testID: E
}, m) => {
  const [d, h] = ye(a), [v, _] = ye(!1), w = mt(), S = Re(() => E || pt("toast"), [E]), T = ve(() => {
    _(!0), setTimeout(() => {
      h(!1), g == null || g();
    }, 300);
  }, [g]);
  Ue(() => {
    a && (h(!0), _(!1));
  }, [a]), Ue(() => {
    if (!d || i <= 0 || v)
      return;
    const k = setTimeout(() => {
      T();
    }, i);
    return () => clearTimeout(k);
  }, [d, i, v, T]);
  const F = () => {
    T();
  };
  if (!d || !l) return null;
  const C = () => {
    const k = {
      size: 24,
      weight: "regular"
    };
    switch (s) {
      case "success":
        return /* @__PURE__ */ j.jsx(Ir, { ...k });
      case "error":
        return /* @__PURE__ */ j.jsx(Vr, { ...k });
      case "warning":
        return /* @__PURE__ */ j.jsx(Br, { ...k });
      default:
        return /* @__PURE__ */ j.jsx(Wr, { ...k });
    }
  };
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      ref: m,
      className: `toast toast--${s} toast--${f} ${v ? "toast--exiting" : ""} ${w ? "toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": S,
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "toast__icon", children: C() }),
        /* @__PURE__ */ j.jsx("div", { className: "toast__message", children: l }),
        /* @__PURE__ */ j.jsx(
          "button",
          {
            className: "toast__close",
            onClick: F,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ j.jsx(wr, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
});
Yr.displayName = "Toast";
const bt = Mr(Yr), vt = ge(
  ({ variant: a = "body1", weight: l, color: s, align: i, noWrap: f, numberOfLines: g, className: E, style: m, children: d, testID: h }, v) => /* @__PURE__ */ j.jsx(
    Er,
    {
      ref: v,
      variant: a,
      weight: l,
      color: s,
      align: i,
      isNoWrap: f,
      numberOfLines: g,
      className: E,
      style: m,
      testID: h,
      children: d
    }
  )
);
vt.displayName = "Typography";
export {
  Fr as Box,
  et as Button,
  gt as Card,
  Zr as Icon,
  at as Input,
  ne as Modal,
  _r as Pressable,
  Er as PrimitiveText,
  vt as Text,
  bt as Toast,
  vt as Typography
};
