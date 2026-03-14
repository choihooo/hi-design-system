export * from "@hi-design/tokens";
import * as t from "react";
import O, { forwardRef as ge, memo as Ge, useMemo as B, useState as ve, createContext as Xe, useRef as Qe, useEffect as oe, useCallback as et } from "react";
import { createPortal as Pt } from "react-dom";
var Ce = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ot() {
  if (qe) return ae;
  qe = 1;
  var a = O, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, u = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(_, d, h) {
    var v, w = {}, b = null, A = null;
    h !== void 0 && (b = "" + h), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (A = d.ref);
    for (v in d) l.call(d, v) && !m.hasOwnProperty(v) && (w[v] = d[v]);
    if (_ && _.defaultProps) for (v in d = _.defaultProps, d) w[v] === void 0 && (w[v] = d[v]);
    return { $$typeof: o, type: _, key: b, ref: A, props: w, _owner: u.current };
  }
  return ae.Fragment = s, ae.jsx = y, ae.jsxs = y, ae;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function St() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var a = O, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), _ = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), Z = Symbol.iterator, j = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[j];
      return typeof r == "function" ? r : null;
    }
    var f = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        F("error", e, n);
      }
    }
    function F(e, r, n) {
      {
        var i = f.ReactDebugCurrentFrame, E = i.getStackAddendum();
        E !== "" && (r += "%s", n = n.concat([E]));
        var M = n.map(function(g) {
          return String(g);
        });
        M.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var J = !1, G = !1, X = !1, Y = !1, ye = !1, le;
    le = Symbol.for("react.module.reference");
    function Ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === m || ye || e === u || e === h || e === v || Y || e === A || J || G || X || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === w || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function D(e, r, n) {
      var i = e.displayName;
      if (i)
        return i;
      var E = r.displayName || r.name || "";
      return E !== "" ? n + "(" + E + ")" : n;
    }
    function se(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case m:
          return "Profiler";
        case u:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return se(r) + ".Consumer";
          case y:
            var n = e;
            return se(n._context) + ".Provider";
          case d:
            return D(e, e.render, "ForwardRef");
          case w:
            var i = e.displayName || null;
            return i !== null ? i : N(e.type) || "Memo";
          case b: {
            var E = e, M = E._payload, g = E._init;
            try {
              return N(g(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, I = 0, ie, be, ue, U, Q, ee, ce;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function _e() {
      {
        if (I === 0) {
          ie = console.log, be = console.info, ue = console.warn, U = console.error, Q = console.group, ee = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
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
        I++;
      }
    }
    function we() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: ie
            }),
            info: $({}, e, {
              value: be
            }),
            warn: $({}, e, {
              value: ue
            }),
            error: $({}, e, {
              value: U
            }),
            group: $({}, e, {
              value: Q
            }),
            groupCollapsed: $({}, e, {
              value: ee
            }),
            groupEnd: $({}, e, {
              value: ce
            })
          });
        }
        I < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = f.ReactCurrentDispatcher, re;
    function k(e, r, n) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (E) {
            var i = E.stack.trim().match(/\n( *(at )?)/);
            re = i && i[1] || "";
          }
        return `
` + re + e;
      }
    }
    var H = !1, fe;
    {
      var dt = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new dt();
    }
    function Pe(e, r) {
      if (!e || H)
        return "";
      {
        var n = fe.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      H = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = te.current, te.current = null, _e();
      try {
        if (r) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (V) {
              i = V;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (V) {
              i = V;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            i = V;
          }
          e();
        }
      } catch (V) {
        if (V && i && typeof V.stack == "string") {
          for (var p = V.stack.split(`
`), L = i.stack.split(`
`), x = p.length - 1, C = L.length - 1; x >= 1 && C >= 0 && p[x] !== L[C]; )
            C--;
          for (; x >= 1 && C >= 0; x--, C--)
            if (p[x] !== L[C]) {
              if (x !== 1 || C !== 1)
                do
                  if (x--, C--, C < 0 || p[x] !== L[C]) {
                    var P = `
` + p[x].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && fe.set(e, P), P;
                  }
                while (x >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        H = !1, te.current = M, we(), Error.prepareStackTrace = E;
      }
      var z = e ? e.displayName || e.name : "", ze = z ? k(z) : "";
      return typeof e == "function" && fe.set(e, ze), ze;
    }
    function ft(e, r, n) {
      return Pe(e, !1);
    }
    function mt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function me(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, mt(e));
      if (typeof e == "string")
        return k(e);
      switch (e) {
        case h:
          return k("Suspense");
        case v:
          return k("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ft(e.render);
          case w:
            return me(e.type, r, n);
          case b: {
            var i = e, E = i._payload, M = i._init;
            try {
              return me(M(E), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, Oe = {}, Se = f.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var r = e._owner, n = me(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(n);
      } else
        Se.setExtraStackFrame(null);
    }
    function pt(e, r, n, i, E) {
      {
        var M = Function.call.bind(pe);
        for (var g in e)
          if (M(e, g)) {
            var p = void 0;
            try {
              if (typeof e[g] != "function") {
                var L = Error((i || "React class") + ": " + n + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              p = e[g](r, g, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              p = x;
            }
            p && !(p instanceof Error) && (he(E), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, g, typeof p), he(null)), p instanceof Error && !(p.message in Oe) && (Oe[p.message] = !0, he(E), R("Failed %s type: %s", n, p.message), he(null));
          }
      }
    }
    var ht = Array.isArray;
    function Me(e) {
      return ht(e);
    }
    function vt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function gt(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function $e(e) {
      if (gt(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), Ne(e);
    }
    var Ve = f.ReactCurrentOwner, yt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, Ie;
    function Et(e) {
      if (pe.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function bt(e) {
      if (pe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function _t(e, r) {
      typeof e.ref == "string" && Ve.current;
    }
    function wt(e, r) {
      {
        var n = function() {
          De || (De = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Mt(e, r) {
      {
        var n = function() {
          Ie || (Ie = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Rt = function(e, r, n, i, E, M, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: g,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function At(e, r, n, i, E) {
      {
        var M, g = {}, p = null, L = null;
        n !== void 0 && ($e(n), p = "" + n), bt(r) && ($e(r.key), p = "" + r.key), Et(r) && (L = r.ref, _t(r, E));
        for (M in r)
          pe.call(r, M) && !yt.hasOwnProperty(M) && (g[M] = r[M]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (M in x)
            g[M] === void 0 && (g[M] = x[M]);
        }
        if (p || L) {
          var C = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && wt(g, C), L && Mt(g, C);
        }
        return Rt(e, p, L, E, i, Ve.current, g);
      }
    }
    var Re = f.ReactCurrentOwner, Ue = f.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, n = me(e.type, e._source, r ? r.type : null);
        Ue.setExtraStackFrame(n);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function xe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Be() {
      {
        if (Re.current) {
          var e = N(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xt(e) {
      return "";
    }
    var We = {};
    function Ct(e) {
      {
        var r = Be();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ye(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Ct(r);
        if (We[n])
          return;
        We[n] = !0;
        var i = "";
        e && e._owner && e._owner !== Re.current && (i = " It was passed a child from " + N(e._owner.type) + "."), K(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), K(null);
      }
    }
    function He(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Me(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            xe(i) && Ye(i, r);
          }
        else if (xe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = T(e);
          if (typeof E == "function" && E !== e.entries)
            for (var M = E.call(e), g; !(g = M.next()).done; )
              xe(g.value) && Ye(g.value, r);
        }
      }
    }
    function Zt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = N(r);
          pt(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var E = N(r);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            K(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), K(null);
            break;
          }
        }
        e.ref !== null && (K(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), K(null));
      }
    }
    function Ke(e, r, n, i, E, M) {
      {
        var g = Ee(e);
        if (!g) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = xt();
          L ? p += L : p += Be();
          var x;
          e === null ? x = "null" : Me(e) ? x = "array" : e !== void 0 && e.$$typeof === o ? (x = "<" + (N(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, p);
        }
        var C = At(e, r, n, E, M);
        if (C == null)
          return C;
        if (g) {
          var P = r.children;
          if (P !== void 0)
            if (i)
              if (Me(P)) {
                for (var z = 0; z < P.length; z++)
                  He(P[z], e);
                Object.freeze && Object.freeze(P);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(P, e);
        }
        return e === l ? jt(C) : Zt(C), C;
      }
    }
    function Ft(e, r, n) {
      return Ke(e, r, n, !0);
    }
    function Tt(e, r, n) {
      return Ke(e, r, n, !1);
    }
    var Lt = Tt, kt = Ft;
    ne.Fragment = l, ne.jsx = Lt, ne.jsxs = kt;
  }()), ne;
}
process.env.NODE_ENV === "production" ? Ce.exports = Ot() : Ce.exports = St();
var c = Ce.exports;
function tt(a) {
  var o, s, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var u = a.length;
    for (o = 0; o < u; o++) a[o] && (s = tt(a[o])) && (l && (l += " "), l += s);
  } else for (s in a) a[s] && (l && (l += " "), l += s);
  return l;
}
function W() {
  for (var a, o, s = 0, l = "", u = arguments.length; s < u; s++) (a = arguments[s]) && (o = tt(a)) && (l && (l += " "), l += o);
  return l;
}
function rt() {
  const [a, o] = O.useState(!1), s = O.useCallback(() => {
    o(!0);
  }, []), l = O.useCallback(() => {
    o(!1);
  }, []);
  return {
    isFocused: a,
    handleFocus: s,
    handleBlur: l
  };
}
function at(a = "component") {
  return `${a}-${Math.random().toString(36).substr(2, 9)}`;
}
function nt(a) {
  return {
    handleFocus: a.onFocus,
    handleBlur: a.onBlur,
    onClick: a.onClick,
    onPress: a.onPress,
    handleClick: a.onClick,
    handleMouseDown: a.onMouseDown,
    handleMouseUp: a.onMouseUp,
    handleMouseLeave: a.onMouseLeave,
    handleMouseEnter: a.onMouseEnter,
    handleKeyDown: a.onKeyDown,
    handleKeyUp: a.onKeyUp,
    handleChange: a.onChange,
    handleSubmit: a.onSubmit
  };
}
function Nt() {
  const [a, o] = O.useState(() => typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return O.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const $t = ge(
  ({
    variant: a = "primary",
    size: o = "md",
    color: s = "primary",
    isDisabled: l = !1,
    isLoading: u = !1,
    isFullWidth: m = !1,
    onPress: y,
    onClick: _,
    onFocus: d,
    onBlur: h,
    onMouseDown: v,
    onMouseUp: w,
    onMouseLeave: b,
    className: A,
    children: Z,
    testID: j,
    ...T
  }, f) => {
    const { isFocused: R } = rt(), F = nt({
      onPress: y,
      onClick: _,
      onFocus: d,
      onBlur: h,
      onMouseDown: v,
      onMouseUp: w,
      onMouseLeave: b
    }), J = (X) => {
      var Y;
      l || u || ((Y = F.onClick) == null || Y.call(F, X), F.onPress && F.onPress());
    }, G = W(
      "button",
      `button--${a}`,
      `button--${o}`,
      `button--${s}`,
      m && "button--full-width",
      l && "button--disabled",
      u && "button--loading",
      R && "button--focused",
      A
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ c.jsxs(
      "button",
      {
        ref: f,
        className: G,
        disabled: l || u,
        onClick: J,
        onFocus: F.handleFocus,
        onBlur: F.handleBlur,
        onMouseDown: F.handleMouseDown,
        onMouseUp: F.handleMouseUp,
        onMouseLeave: F.handleMouseLeave,
        "data-testid": j,
        "aria-busy": u,
        ...T,
        children: [
          u && /* @__PURE__ */ c.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ c.jsx("span", { className: "sr-only", children: "Loading..." }) }),
          /* @__PURE__ */ c.jsx("span", { className: "button__content", children: Z })
        ]
      }
    );
  }
);
$t.displayName = "Button";
const ot = ge(
  ({
    elevation: a = "md",
    padding: o = "md",
    radius: s = "md",
    isPressable: l = !1,
    pressableAs: u = "button",
    onPress: m,
    onClick: y,
    onFocus: _,
    onBlur: d,
    onMouseDown: h,
    onMouseUp: v,
    onMouseLeave: w,
    className: b,
    children: A,
    testID: Z,
    ...j
  }, T) => {
    const f = nt({
      onPress: m,
      onClick: y,
      onFocus: _,
      onBlur: d,
      onMouseDown: h,
      onMouseUp: v,
      onMouseLeave: w
    }), R = W(
      "card",
      `card--elevation-${a}`,
      `card--padding-${o}`,
      `card--radius-${s}`,
      l && "card--pressable",
      b
    );
    return l ? u === "button" ? /* @__PURE__ */ c.jsx(
      "button",
      {
        ref: T,
        className: R,
        onClick: f.onClick,
        onFocus: f.handleFocus,
        onBlur: f.handleBlur,
        onMouseDown: f.handleMouseDown,
        onMouseUp: f.handleMouseUp,
        onMouseLeave: f.handleMouseLeave,
        "data-testid": Z,
        type: "button",
        ...j,
        children: A
      }
    ) : u === "a" ? /* @__PURE__ */ c.jsx(
      "a",
      {
        ref: T,
        className: R,
        onClick: f.onClick,
        onFocus: f.handleFocus,
        onBlur: f.handleBlur,
        onMouseDown: f.handleMouseDown,
        onMouseUp: f.handleMouseUp,
        onMouseLeave: f.handleMouseLeave,
        "data-testid": Z,
        ...j,
        children: A
      }
    ) : /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: T,
        className: R,
        onClick: f.onClick,
        onFocus: f.handleFocus,
        onBlur: f.handleBlur,
        onMouseDown: f.handleMouseDown,
        onMouseUp: f.handleMouseUp,
        onMouseLeave: f.handleMouseLeave,
        "data-testid": Z,
        ...j,
        children: A
      }
    ) : /* @__PURE__ */ c.jsx(
      "div",
      {
        ref: T,
        className: R,
        "data-testid": Z,
        ...j,
        children: A
      }
    );
  }
);
ot.displayName = "Card";
const Qt = Ge(ot), Vt = ge(
  ({
    value: a,
    defaultValue: o,
    placeholder: s,
    type: l = "text",
    variant: u = "outline",
    size: m = "md",
    state: y = "default",
    isDisabled: _ = !1,
    isFullWidth: d = !1,
    readOnly: h = !1,
    required: v = !1,
    label: w,
    helperText: b,
    errorText: A,
    className: Z,
    onChange: j,
    onFocus: T,
    onBlur: f,
    onSubmit: R,
    testID: F,
    name: J,
    autoComplete: G,
    minLength: X,
    maxLength: Y,
    pattern: ye,
    ...le
  }, Ee) => {
    const D = B(
      () => F || `input-${Math.random().toString(36).substr(2, 9)}`,
      [F]
    ), [se, N] = ve(() => o || ""), { isFocused: $, handleFocus: I, handleBlur: ie } = rt(), ue = a !== void 0 ? a : se, U = B(() => y === "error" && !!A, [y, A]), Q = B(() => `${D}-helper`, [D]), ee = B(() => `${D}-error`, [D]), ce = (k) => {
      const H = k.target.value;
      a === void 0 && N(H), j == null || j(H);
    }, de = (k) => {
      I(), T == null || T(k);
    }, _e = (k) => {
      ie(), f == null || f(k);
    }, we = (k) => {
      k.key === "Enter" && R && R(k);
    }, te = W(
      "input__container",
      `input__container--${m}`,
      d && "input__container--full-width"
    ), re = W(
      "input",
      `input--${u}`,
      `input--${m}`,
      `input--${y}`,
      $ && "input--focused",
      _ && "input--disabled",
      h && "input--read-only",
      Z
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ c.jsxs("div", { className: te, children: [
      w && /* @__PURE__ */ c.jsxs("label", { className: "input__label", htmlFor: D, children: [
        w,
        v && /* @__PURE__ */ c.jsx("span", { className: "input__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ c.jsx(
        "input",
        {
          ref: Ee,
          id: D,
          type: l,
          className: re,
          value: ue,
          placeholder: s,
          disabled: _,
          readOnly: h,
          required: v,
          onChange: ce,
          onFocus: de,
          onBlur: _e,
          onKeyDown: we,
          "data-testid": F,
          name: J,
          autoComplete: G,
          minLength: X,
          maxLength: Y,
          pattern: ye,
          "aria-invalid": y === "error",
          "aria-describedby": U ? ee : b ? Q : void 0,
          "aria-required": v,
          ...le
        }
      ),
      (b || U) && /* @__PURE__ */ c.jsx("div", { className: "input__helper", id: U ? ee : Q, children: U ? /* @__PURE__ */ c.jsx("span", { className: "input__error", role: "alert", children: A }) : /* @__PURE__ */ c.jsx("span", { className: "input__helper-text", children: b }) })
    ] });
  }
);
Vt.displayName = "Input";
const Dt = Xe({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), q = t.forwardRef(
  (a, o) => {
    const {
      alt: s,
      color: l,
      size: u,
      weight: m,
      mirrored: y,
      children: _,
      weights: d,
      ...h
    } = a, {
      color: v = "currentColor",
      size: w,
      weight: b = "regular",
      mirrored: A = !1,
      ...Z
    } = t.useContext(Dt);
    return /* @__PURE__ */ t.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: u ?? w,
        height: u ?? w,
        fill: l ?? v,
        viewBox: "0 0 256 256",
        transform: y || A ? "scale(-1, 1)" : void 0,
        ...Z,
        ...h
      },
      !!s && /* @__PURE__ */ t.createElement("title", null, s),
      _,
      d.get(m ?? b)
    );
  }
);
q.displayName = "IconBase";
const It = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ t.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), lt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(q, { ref: o, ...a, weights: It }));
lt.displayName = "CheckCircleIcon";
const Ut = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement(
      "path",
      {
        d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
        opacity: "0.2"
      }
    ), /* @__PURE__ */ t.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }))
  ]
]), Ze = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(q, { ref: o, ...a, weights: Ut }));
Ze.displayName = "XIcon";
const Bt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ t.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), st = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(q, { ref: o, ...a, weights: Bt }));
st.displayName = "XCircleIcon";
const Wt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ t.createElement("path", { d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
  ]
]), it = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(q, { ref: o, ...a, weights: Wt }));
it.displayName = "InfoIcon";
const Yt = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ t.createElement(t.Fragment, null, /* @__PURE__ */ t.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z" }))
  ]
]), ut = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(q, { ref: o, ...a, weights: Yt }));
ut.displayName = "WarningCircleIcon";
const je = ({
  title: a,
  showCloseButton: o = !0,
  onClose: s,
  className: l,
  testID: u
}) => {
  const m = W("modal__header", l);
  return /* @__PURE__ */ c.jsxs("div", { className: m, "data-testid": u, children: [
    a && /* @__PURE__ */ c.jsx("h2", { className: "modal__title", id: `${u || "modal"}-title`, children: a }),
    o && /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "modal__close",
        onClick: s,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": u ? `${u}-close` : "modal-close",
        children: /* @__PURE__ */ c.jsx(Ze, { size: 20, weight: "regular" })
      }
    )
  ] });
}, Fe = ({
  size: a = "md",
  prefersReduced: o = !1,
  children: s,
  className: l,
  testID: u,
  modalId: m,
  titleId: y
}) => {
  const _ = W(
    "modal",
    `modal--${a}`,
    o && "modal--no-animation",
    l
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: _,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": y,
      id: m,
      "data-testid": u || "modal-content",
      children: s
    }
  );
}, Te = ({
  closeOnBackdropPress: a = !0,
  onClose: o,
  prefersReduced: s = !1,
  className: l,
  testID: u
}) => {
  const m = W(
    "modal-overlay",
    s && "modal-overlay--no-animation",
    l
  );
  return /* @__PURE__ */ c.jsx(
    "div",
    {
      className: m,
      "data-testid": u || "modal-overlay",
      role: "presentation",
      children: a ? /* @__PURE__ */ c.jsx(
        "button",
        {
          className: "modal-overlay__backdrop",
          onClick: o,
          "aria-label": "Close modal",
          type: "button",
          "data-testid": u ? `${u}-backdrop` : "modal-backdrop"
        }
      ) : /* @__PURE__ */ c.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" })
    }
  );
}, Ht = Xe(void 0), Le = ({
  visible: a,
  onClose: o,
  modalRef: s,
  children: l
}) => {
  const [u, m] = ve(a), y = Qe(null);
  oe(() => {
    const d = (h) => {
      h.key === "Escape" && a && o && o();
    };
    return a && (document.addEventListener("keydown", d), y.current = document.activeElement), () => {
      document.removeEventListener("keydown", d);
    };
  }, [a, o]), oe(() => {
    if (!a || !s.current)
      return;
    const d = Array.from(
      s.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), h = d[0], v = d[d.length - 1];
    h == null || h.focus();
    const w = (b) => {
      b.key === "Tab" && (b.shiftKey ? document.activeElement === h && (b.preventDefault(), v == null || v.focus()) : document.activeElement === v && (b.preventDefault(), h == null || h.focus()));
    };
    return document.addEventListener("keydown", w), () => {
      var b;
      document.removeEventListener("keydown", w), (b = y.current) == null || b.focus();
    };
  }, [a]), oe(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const _ = {
    isOpen: u,
    onClose: et(() => {
      m(!1), o();
    }, [o]),
    modalRef: s,
    previousActiveElement: y
  };
  return a ? /* @__PURE__ */ c.jsx(Ht.Provider, { value: _, children: l }) : null;
}, ke = ({
  children: a,
  className: o,
  testID: s
}) => /* @__PURE__ */ c.jsx("div", { className: `modal__body ${o || ""}`, "data-testid": s, children: a });
function Kt() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function zt() {
  const [a, o] = O.useState(() => Kt());
  return O.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const S = ({
  visible: a = !1,
  title: o,
  size: s = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: u = !0,
  onClose: m = () => {
  },
  children: y,
  testID: _ = "modal"
}) => {
  const d = Qe(null), h = zt();
  return a ? Pt(/* @__PURE__ */ c.jsx(Le, { visible: a, onClose: m, modalRef: d, children: /* @__PURE__ */ c.jsx(
    Te,
    {
      closeOnBackdropPress: l,
      onClose: m,
      prefersReduced: h,
      testID: _,
      children: /* @__PURE__ */ c.jsxs(Fe, { size: s, prefersReduced: h, testID: _, children: [
        (o || u) && /* @__PURE__ */ c.jsx(
          je,
          {
            title: o,
            showCloseButton: u,
            onClose: m,
            testID: _
          }
        ),
        /* @__PURE__ */ c.jsx(ke, { children: y })
      ] })
    }
  ) }), document.body) : null;
};
S.Header = je;
S.Content = Fe;
S.Overlay = Te;
S.Provider = Le;
S.Body = ke;
S.displayName = "Modal";
S.Header = je;
S.Content = Fe;
S.Overlay = Te;
S.Provider = Le;
S.Body = ke;
const ct = O.forwardRef(({
  visible: a = !1,
  message: o,
  variant: s = "info",
  duration: l = 3e3,
  position: u = "top",
  onClose: m,
  testID: y
}, _) => {
  const [d, h] = ve(a), [v, w] = ve(!1), b = Nt(), A = B(() => y || at("toast"), [y]), Z = et(() => {
    w(!0), setTimeout(() => {
      h(!1), m == null || m();
    }, 300);
  }, [m]);
  oe(() => {
    a && (h(!0), w(!1));
  }, [a]), oe(() => {
    if (!d || l <= 0 || v)
      return;
    const f = setTimeout(() => {
      Z();
    }, l);
    return () => clearTimeout(f);
  }, [d, l, v, Z]);
  const j = () => {
    Z();
  };
  if (!d || !o) return null;
  const T = () => {
    const f = {
      size: 24,
      weight: "regular"
    };
    switch (s) {
      case "success":
        return /* @__PURE__ */ c.jsx(lt, { ...f });
      case "error":
        return /* @__PURE__ */ c.jsx(st, { ...f });
      case "warning":
        return /* @__PURE__ */ c.jsx(ut, { ...f });
      default:
        return /* @__PURE__ */ c.jsx(it, { ...f });
    }
  };
  return /* @__PURE__ */ c.jsxs(
    "div",
    {
      ref: _,
      className: `toast toast--${s} toast--${u} ${v ? "toast--exiting" : ""} ${b ? "toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": A,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "toast__icon", children: T() }),
        /* @__PURE__ */ c.jsx("div", { className: "toast__message", children: o }),
        /* @__PURE__ */ c.jsx(
          "button",
          {
            className: "toast__close",
            onClick: j,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ c.jsx(Ze, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
});
ct.displayName = "Toast";
const er = Ge(ct), qt = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  button: "span",
  caption: "span",
  overline: "span"
}, Jt = ge(({
  variant: a = "body1",
  weight: o,
  color: s,
  align: l = "left",
  noWrap: u = !1,
  numberOfLines: m,
  className: y,
  style: _,
  children: d,
  testID: h,
  ...v
}, w) => {
  const b = qt[a], A = B(() => h || at("typography"), [h]), Z = B(() => [
    "typography",
    `typography--${a}`,
    o && `typography--weight-${o}`,
    s && `typography--color-${s}`,
    l && `typography--align-${l}`,
    u && "typography--no-wrap",
    m && "typography--truncate",
    y
  ].filter(Boolean).join(" "), [a, o, s, l, u, m, y]), j = {
    ref: w,
    className: Z,
    id: A,
    style: {
      ..._,
      ...m && {
        WebkitLineClamp: m,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }
    },
    "data-testid": h,
    ...v
  };
  return O.createElement(
    b,
    j,
    d
  );
});
Jt.displayName = "Typography";
export {
  $t as Button,
  Qt as Card,
  Vt as Input,
  S as Modal,
  Jt as Text,
  er as Toast,
  Jt as Typography
};
