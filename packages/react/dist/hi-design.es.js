export * from "@hi-design/tokens";
import * as t from "react";
import de, { forwardRef as fe, memo as je, useMemo as X, useState as ee, createContext as Xe, useRef as Qe, useEffect as Q, useCallback as et } from "react";
import { createPortal as Ot } from "react-dom";
var Ze = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Ft() {
  if (Ke) return K;
  Ke = 1;
  var a = de, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(E, f, h) {
    var v, A = {}, u = null, x = null;
    h !== void 0 && (u = "" + h), f.key !== void 0 && (u = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (v in f) l.call(f, v) && !d.hasOwnProperty(v) && (A[v] = f[v]);
    if (E && E.defaultProps) for (v in f = E.defaultProps, f) A[v] === void 0 && (A[v] = f[v]);
    return { $$typeof: o, type: E, key: u, ref: x, props: A, _owner: c.current };
  }
  return K.Fragment = i, K.jsx = y, K.jsxs = y, K;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function Lt() {
  return Ge || (Ge = 1, process.env.NODE_ENV !== "production" && function() {
    var a = de, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), M = Symbol.iterator, j = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[j];
      return typeof r == "function" ? r : null;
    }
    var O = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        U("error", e, n);
      }
    }
    function U(e, r, n) {
      {
        var s = O.ReactDebugCurrentFrame, b = s.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var _ = n.map(function(g) {
          return String(g);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var me = !1, pe = !1, he = !1, ve = !1, ge = !1, te;
    te = Symbol.for("react.module.reference");
    function Ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === d || ge || e === c || e === h || e === v || ve || e === x || me || pe || he || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === A || e.$$typeof === y || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function N(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var b = r.displayName || r.name || "";
      return b !== "" ? n + "(" + b + ")" : n;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case i:
          return "Portal";
        case d:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return re(r) + ".Consumer";
          case y:
            var n = e;
            return re(n._context) + ".Provider";
          case f:
            return N(e, e.render, "ForwardRef");
          case A:
            var s = e.displayName || null;
            return s !== null ? s : F(e.type) || "Memo";
          case u: {
            var b = e, _ = b._payload, g = b._init;
            try {
              return F(g(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, $ = 0, ye, ae, V, B, q, ne, oe;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function be() {
      {
        if ($ === 0) {
          ye = console.log, ae = console.info, V = console.warn, B = console.error, q = console.group, ne = console.groupCollapsed, oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        $++;
      }
    }
    function _e() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: ye
            }),
            info: L({}, e, {
              value: ae
            }),
            warn: L({}, e, {
              value: V
            }),
            error: L({}, e, {
              value: B
            }),
            group: L({}, e, {
              value: q
            }),
            groupCollapsed: L({}, e, {
              value: ne
            }),
            groupEnd: L({}, e, {
              value: oe
            })
          });
        }
        $ < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = O.ReactCurrentDispatcher, P;
    function W(e, r, n) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (b) {
            var s = b.stack.trim().match(/\n( *(at )?)/);
            P = s && s[1] || "";
          }
        return `
` + P + e;
      }
    }
    var Ae = !1, ie;
    {
      var ct = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new ct();
    }
    function Pe(e, r) {
      if (!e || Ae)
        return "";
      {
        var n = ie.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      Ae = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = J.current, J.current = null, be();
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
            } catch (k) {
              s = k;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (k) {
              s = k;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            s = k;
          }
          e();
        }
      } catch (k) {
        if (k && s && typeof k.stack == "string") {
          for (var p = k.stack.split(`
`), Z = s.stack.split(`
`), w = p.length - 1, R = Z.length - 1; w >= 1 && R >= 0 && p[w] !== Z[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (p[w] !== Z[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || p[w] !== Z[R]) {
                    var C = `
` + p[w].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && ie.set(e, C), C;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        Ae = !1, J.current = _, _e(), Error.prepareStackTrace = b;
      }
      var z = e ? e.displayName || e.name : "", Je = z ? W(z) : "";
      return typeof e == "function" && ie.set(e, Je), Je;
    }
    function ut(e, r, n) {
      return Pe(e, !1);
    }
    function dt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function se(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, dt(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case h:
          return W("Suspense");
        case v:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ut(e.render);
          case A:
            return se(e.type, r, n);
          case u: {
            var s = e, b = s._payload, _ = s._init;
            try {
              return se(_(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, ke = {}, Ne = O.ReactDebugCurrentFrame;
    function ue(e) {
      if (e) {
        var r = e._owner, n = se(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(n);
      } else
        Ne.setExtraStackFrame(null);
    }
    function ft(e, r, n, s, b) {
      {
        var _ = Function.call.bind(ce);
        for (var g in e)
          if (_(e, g)) {
            var p = void 0;
            try {
              if (typeof e[g] != "function") {
                var Z = Error((s || "React class") + ": " + n + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Z.name = "Invariant Violation", Z;
              }
              p = e[g](r, g, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              p = w;
            }
            p && !(p instanceof Error) && (ue(b), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, g, typeof p), ue(null)), p instanceof Error && !(p.message in ke) && (ke[p.message] = !0, ue(b), S("Failed %s type: %s", n, p.message), ue(null));
          }
      }
    }
    var mt = Array.isArray;
    function we(e) {
      return mt(e);
    }
    function pt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function ht(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function Ve(e) {
      if (ht(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), $e(e);
    }
    var We = O.ReactCurrentOwner, vt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, De;
    function gt(e) {
      if (ce.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, r) {
      typeof e.ref == "string" && We.current;
    }
    function bt(e, r) {
      {
        var n = function() {
          Ie || (Ie = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function _t(e, r) {
      {
        var n = function() {
          De || (De = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var At = function(e, r, n, s, b, _, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: g,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: s
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function wt(e, r, n, s, b) {
      {
        var _, g = {}, p = null, Z = null;
        n !== void 0 && (Ve(n), p = "" + n), Et(r) && (Ve(r.key), p = "" + r.key), gt(r) && (Z = r.ref, yt(r, b));
        for (_ in r)
          ce.call(r, _) && !vt.hasOwnProperty(_) && (g[_] = r[_]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (_ in w)
            g[_] === void 0 && (g[_] = w[_]);
        }
        if (p || Z) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && bt(g, R), Z && _t(g, R);
        }
        return At(e, p, Z, b, s, We.current, g);
      }
    }
    var Re = O.ReactCurrentOwner, ze = O.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, n = se(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(n);
      } else
        ze.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function He() {
      {
        if (Re.current) {
          var e = F(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rt(e) {
      return "";
    }
    var Ye = {};
    function xt(e) {
      {
        var r = He();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ue(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = xt(r);
        if (Ye[n])
          return;
        Ye[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Re.current && (s = " It was passed a child from " + F(e._owner.type) + "."), D(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), D(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Se(s) && Ue(s, r);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = Y(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), g; !(g = _.next()).done; )
              Se(g.value) && Ue(g.value, r);
        }
      }
    }
    function St(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === A))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = F(r);
          ft(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !xe) {
          xe = !0;
          var b = F(r);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            D(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function qe(e, r, n, s, b, _) {
      {
        var g = Ee(e);
        if (!g) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Z = Rt();
          Z ? p += Z : p += He();
          var w;
          e === null ? w = "null" : we(e) ? w = "array" : e !== void 0 && e.$$typeof === o ? (w = "<" + (F(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, p);
        }
        var R = wt(e, r, n, b, _);
        if (R == null)
          return R;
        if (g) {
          var C = r.children;
          if (C !== void 0)
            if (s)
              if (we(C)) {
                for (var z = 0; z < C.length; z++)
                  Be(C[z], e);
                Object.freeze && Object.freeze(C);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(C, e);
        }
        return e === l ? Zt(R) : St(R), R;
      }
    }
    function jt(e, r, n) {
      return qe(e, r, n, !0);
    }
    function Mt(e, r, n) {
      return qe(e, r, n, !1);
    }
    var Ct = Mt, Tt = jt;
    G.Fragment = l, G.jsx = Ct, G.jsxs = Tt;
  }()), G;
}
process.env.NODE_ENV === "production" ? Ze.exports = Ft() : Ze.exports = Lt();
var m = Ze.exports;
function tt(a) {
  var o, i, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (o = 0; o < c; o++) a[o] && (i = tt(a[o])) && (l && (l += " "), l += i);
  } else for (i in a) a[i] && (l && (l += " "), l += i);
  return l;
}
function I() {
  for (var a, o, i = 0, l = "", c = arguments.length; i < c; i++) (a = arguments[i]) && (o = tt(a)) && (l && (l += " "), l += o);
  return l;
}
const Pt = fe(
  ({
    variant: a = "primary",
    size: o = "md",
    color: i = "primary",
    isDisabled: l = !1,
    isLoading: c = !1,
    isFullWidth: d = !1,
    onPress: y,
    onClick: E,
    className: f,
    children: h,
    testID: v,
    ...A
  }, u) => {
    const x = () => {
      l || c || (y == null || y(), E == null || E());
    }, M = I(
      "button",
      `button--${a}`,
      `button--${o}`,
      `button--${i}`,
      d && "button--full-width",
      l && "button--disabled",
      c && "button--loading",
      f
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ m.jsxs(
      "button",
      {
        ref: u,
        className: M,
        disabled: l || c,
        onClick: x,
        "data-testid": v,
        "aria-busy": c,
        ...A,
        children: [
          c && /* @__PURE__ */ m.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ m.jsx("span", { className: "sr-only", children: "Loading..." }) }),
          /* @__PURE__ */ m.jsx("span", { className: "button__content", children: h })
        ]
      }
    );
  }
);
Pt.displayName = "Button";
const rt = fe(
  ({
    elevation: a = "md",
    padding: o = "md",
    radius: i = "md",
    isPressable: l = !1,
    onPress: c,
    className: d,
    children: y,
    testID: E,
    ...f
  }, h) => {
    const v = I(
      "card",
      `card--elevation-${a}`,
      `card--padding-${o}`,
      `card--radius-${i}`,
      l && "card--pressable",
      d
    );
    return l ? /* @__PURE__ */ m.jsx(
      "button",
      {
        ref: h,
        className: v,
        onClick: c,
        "data-testid": E,
        type: "button",
        ...f,
        children: y
      }
    ) : /* @__PURE__ */ m.jsx(
      "div",
      {
        ref: h,
        className: v,
        "data-testid": E,
        ...f,
        children: y
      }
    );
  }
);
rt.displayName = "Card";
je(rt);
const kt = fe(
  ({
    value: a,
    defaultValue: o,
    placeholder: i,
    type: l = "text",
    variant: c = "outline",
    size: d = "md",
    state: y = "default",
    isDisabled: E = !1,
    isFullWidth: f = !1,
    readOnly: h = !1,
    required: v = !1,
    label: A,
    helperText: u,
    errorText: x,
    className: M,
    onChange: j,
    onFocus: Y,
    onBlur: O,
    onSubmit: S,
    testID: U,
    name: me,
    autoComplete: pe,
    minLength: he,
    maxLength: ve,
    pattern: ge,
    ...te
  }, Ee) => {
    const N = X(
      () => U || `hi-input-${Math.random().toString(36).substr(2, 9)}`,
      [U]
    ), [re, F] = ee(() => o || ""), [L, $] = ee(!1), ae = a !== void 0 ? a : re, V = X(() => y === "error" && !!x, [y, x]), B = X(() => `${N}-helper`, [N]), q = X(() => `${N}-error`, [N]), ne = (P) => {
      const W = P.target.value;
      a === void 0 && F(W), j == null || j(W);
    }, oe = (P) => {
      $(!0), Y == null || Y();
    }, le = (P) => {
      $(!1), O == null || O();
    }, be = (P) => {
      P.key === "Enter" && S && S();
    }, _e = I(
      "input__container",
      `input__container--${d}`,
      f && "input__container--full-width"
    ), J = I(
      "input",
      `input--${c}`,
      `input--${d}`,
      `input--${y}`,
      L && "input--focused",
      E && "input--disabled",
      h && "input--read-only",
      M
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ m.jsxs("div", { className: _e, children: [
      A && /* @__PURE__ */ m.jsxs("label", { className: "hi-input__label", htmlFor: N, children: [
        A,
        v && /* @__PURE__ */ m.jsx("span", { className: "hi-input__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ m.jsx(
        "input",
        {
          ref: Ee,
          id: N,
          type: l,
          className: J,
          value: ae,
          placeholder: i,
          disabled: E,
          readOnly: h,
          required: v,
          onChange: ne,
          onFocus: oe,
          onBlur: le,
          onKeyDown: be,
          "data-testid": U,
          name: me,
          autoComplete: pe,
          minLength: he,
          maxLength: ve,
          pattern: ge,
          "aria-invalid": y === "error",
          "aria-describedby": V ? q : u ? B : void 0,
          "aria-required": v,
          ...te
        }
      ),
      (u || V) && /* @__PURE__ */ m.jsx("div", { className: "hi-input__helper", id: V ? q : B, children: V ? /* @__PURE__ */ m.jsx("span", { className: "hi-input__error", role: "alert", children: x }) : /* @__PURE__ */ m.jsx("span", { className: "hi-input__helper-text", children: u }) })
    ] });
  }
);
kt.displayName = "Input";
const Nt = Xe({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), H = t.forwardRef(
  (a, o) => {
    const {
      alt: i,
      color: l,
      size: c,
      weight: d,
      mirrored: y,
      children: E,
      weights: f,
      ...h
    } = a, {
      color: v = "currentColor",
      size: A,
      weight: u = "regular",
      mirrored: x = !1,
      ...M
    } = t.useContext(Nt);
    return /* @__PURE__ */ t.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: c ?? A,
        height: c ?? A,
        fill: l ?? v,
        viewBox: "0 0 256 256",
        transform: y || x ? "scale(-1, 1)" : void 0,
        ...M,
        ...h
      },
      !!i && /* @__PURE__ */ t.createElement("title", null, i),
      E,
      f.get(d ?? u)
    );
  }
);
H.displayName = "IconBase";
const $t = /* @__PURE__ */ new Map([
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
]), at = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(H, { ref: o, ...a, weights: $t }));
at.displayName = "CheckCircleIcon";
const Vt = /* @__PURE__ */ new Map([
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
]), Me = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(H, { ref: o, ...a, weights: Vt }));
Me.displayName = "XIcon";
const Wt = /* @__PURE__ */ new Map([
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
]), nt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(H, { ref: o, ...a, weights: Wt }));
nt.displayName = "XCircleIcon";
const It = /* @__PURE__ */ new Map([
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
]), ot = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(H, { ref: o, ...a, weights: It }));
ot.displayName = "InfoIcon";
const Dt = /* @__PURE__ */ new Map([
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
]), lt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(H, { ref: o, ...a, weights: Dt }));
lt.displayName = "WarningCircleIcon";
const Ce = ({
  title: a,
  showCloseButton: o = !0,
  onClose: i,
  className: l,
  testID: c
}) => {
  const d = I("modal__header", l);
  return /* @__PURE__ */ m.jsxs("div", { className: d, "data-testid": c, children: [
    a && /* @__PURE__ */ m.jsx("h2", { className: "modal__title", id: `${c || "modal"}-title`, children: a }),
    o && /* @__PURE__ */ m.jsx(
      "button",
      {
        className: "modal__close",
        onClick: i,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": c ? `${c}-close` : "modal-close",
        children: /* @__PURE__ */ m.jsx(Me, { size: 20, weight: "regular" })
      }
    )
  ] });
}, Te = ({
  size: a = "md",
  prefersReduced: o = !1,
  children: i,
  className: l,
  testID: c,
  modalId: d,
  titleId: y
}) => {
  const E = I(
    "modal",
    `modal--${a}`,
    o && "modal--no-animation",
    l
  );
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: E,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": y,
      id: d,
      "data-testid": c || "modal-content",
      children: i
    }
  );
}, Oe = ({
  closeOnBackdropPress: a = !0,
  onClose: o,
  prefersReduced: i = !1,
  className: l,
  testID: c
}) => {
  const d = I(
    "modal-overlay",
    i && "modal-overlay--no-animation",
    l
  );
  return /* @__PURE__ */ m.jsx(
    "div",
    {
      className: d,
      "data-testid": c || "modal-overlay",
      role: "presentation",
      children: a ? /* @__PURE__ */ m.jsx(
        "button",
        {
          className: "modal-overlay__backdrop",
          onClick: o,
          "aria-label": "Close modal",
          type: "button",
          "data-testid": c ? `${c}-backdrop` : "modal-backdrop"
        }
      ) : /* @__PURE__ */ m.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" })
    }
  );
}, zt = Xe(void 0), Fe = ({
  visible: a,
  onClose: o,
  modalRef: i,
  children: l
}) => {
  const [c, d] = ee(a), y = Qe(null);
  Q(() => {
    const f = (h) => {
      h.key === "Escape" && a && o && o();
    };
    return a && (document.addEventListener("keydown", f), y.current = document.activeElement), () => {
      document.removeEventListener("keydown", f);
    };
  }, [a, o]), Q(() => {
    if (!a || !i.current)
      return;
    const f = Array.from(
      i.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), h = f[0], v = f[f.length - 1];
    h == null || h.focus();
    const A = (u) => {
      u.key === "Tab" && (u.shiftKey ? document.activeElement === h && (u.preventDefault(), v == null || v.focus()) : document.activeElement === v && (u.preventDefault(), h == null || h.focus()));
    };
    return document.addEventListener("keydown", A), () => {
      var u;
      document.removeEventListener("keydown", A), (u = y.current) == null || u.focus();
    };
  }, [a]), Q(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const E = {
    isOpen: c,
    onClose: et(() => {
      d(!1), o();
    }, [o]),
    modalRef: i,
    previousActiveElement: y
  };
  return a ? /* @__PURE__ */ m.jsx(zt.Provider, { value: E, children: l }) : null;
}, Le = ({
  children: a,
  className: o,
  testID: i
}) => /* @__PURE__ */ m.jsx("div", { className: `modal__body ${o || ""}`, "data-testid": i, children: a });
function Ht() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function it() {
  const [a, o] = de.useState(() => Ht());
  return de.useEffect(() => {
    if (typeof window > "u")
      return;
    const i = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(i.matches);
    return i.addEventListener("change", l), () => i.removeEventListener("change", l);
  }, []), a;
}
const T = ({
  visible: a = !1,
  title: o,
  size: i = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: c = !0,
  onClose: d = () => {
  },
  children: y,
  testID: E = "modal"
}) => {
  const f = Qe(null), h = it();
  return a ? Ot(/* @__PURE__ */ m.jsx(Fe, { visible: a, onClose: d, modalRef: f, children: /* @__PURE__ */ m.jsx(
    Oe,
    {
      closeOnBackdropPress: l,
      onClose: d,
      prefersReduced: h,
      testID: E,
      children: /* @__PURE__ */ m.jsxs(Te, { size: i, prefersReduced: h, testID: E, children: [
        (o || c) && /* @__PURE__ */ m.jsx(
          Ce,
          {
            title: o,
            showCloseButton: c,
            onClose: d,
            testID: E
          }
        ),
        /* @__PURE__ */ m.jsx(Le, { children: y })
      ] })
    }
  ) }), document.body) : null;
};
T.Header = Ce;
T.Content = Te;
T.Overlay = Oe;
T.Provider = Fe;
T.Body = Le;
T.displayName = "Modal";
T.Header = Ce;
T.Content = Te;
T.Overlay = Oe;
T.Provider = Fe;
T.Body = Le;
const Yt = ({
  visible: a = !1,
  message: o,
  variant: i = "info",
  duration: l = 3e3,
  position: c = "top",
  onClose: d,
  testID: y
}) => {
  const [E, f] = ee(a), [h, v] = ee(!1), A = it(), u = et(() => {
    v(!0), setTimeout(() => {
      f(!1), d == null || d();
    }, 300);
  }, [d]);
  Q(() => {
    a && (f(!0), v(!1));
  }, [a]), Q(() => {
    if (!E || l <= 0 || h)
      return;
    const j = setTimeout(() => {
      u();
    }, l);
    return () => clearTimeout(j);
  }, [E, l, h, u]);
  const x = () => {
    u();
  };
  if (!E || !o) return null;
  const M = () => {
    const j = {
      size: 24,
      weight: "regular"
    };
    switch (i) {
      case "success":
        return /* @__PURE__ */ m.jsx(at, { ...j });
      case "error":
        return /* @__PURE__ */ m.jsx(nt, { ...j });
      case "warning":
        return /* @__PURE__ */ m.jsx(lt, { ...j });
      default:
        return /* @__PURE__ */ m.jsx(ot, { ...j });
    }
  };
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `hi-toast hi-toast--${i} hi-toast--${c} ${h ? "hi-toast--exiting" : ""} ${A ? "hi-toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": y || "hi-toast",
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "hi-toast__icon", children: M() }),
        /* @__PURE__ */ m.jsx("div", { className: "hi-toast__message", children: o }),
        /* @__PURE__ */ m.jsx(
          "button",
          {
            className: "hi-toast__close",
            onClick: x,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ m.jsx(Me, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
};
je(Yt);
const Ut = {
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
}, st = fe(
  ({
    textVariant: a = "body1",
    weight: o,
    color: i,
    align: l = "left",
    isNoWrap: c = !1,
    numberOfLines: d,
    className: y,
    children: E,
    testID: f,
    ...h
  }, v) => {
    const u = {
      h1: {
        fontSize: 60,
        fontWeight: "bold",
        lineHeight: 1.2,
        letterSpacing: "-0.02em"
      },
      h2: {
        fontSize: 48,
        fontWeight: "bold",
        lineHeight: 1.2,
        letterSpacing: "-0.02em"
      },
      h3: {
        fontSize: 36,
        fontWeight: "600",
        lineHeight: 1.2,
        letterSpacing: "-0.01em"
      },
      h4: {
        fontSize: 30,
        fontWeight: "600",
        lineHeight: 1.4,
        letterSpacing: "0em"
      },
      h5: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 1.4,
        letterSpacing: "0em"
      },
      h6: {
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 1.5,
        letterSpacing: "0em"
      },
      body1: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 1.5,
        letterSpacing: "0em"
      },
      body2: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 1.5,
        letterSpacing: "0em"
      },
      button: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 1.5,
        letterSpacing: "0em"
      },
      caption: {
        fontSize: 12,
        fontWeight: "400",
        lineHeight: 1.5,
        letterSpacing: "0em"
      },
      overline: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 1.5,
        letterSpacing: "0.1em"
      }
    }[a], x = o || u.fontWeight, M = X(
      () => ({
        fontSize: typeof u.fontSize == "number" ? `${u.fontSize}px` : u.fontSize,
        fontWeight: x,
        lineHeight: Array.isArray(u.lineHeight) ? u.lineHeight[0] : u.lineHeight,
        letterSpacing: typeof u.letterSpacing == "number" ? `${u.letterSpacing}em` : u.letterSpacing,
        color: i || "#111827",
        textAlign: l,
        whiteSpace: c ? "nowrap" : void 0,
        overflow: d ? "hidden" : void 0,
        textOverflow: d ? "ellipsis" : void 0,
        display: d ? "-webkit-box" : void 0,
        WebkitLineClamp: d || void 0,
        WebkitBoxOrient: d ? "vertical" : void 0
      }),
      [u, x, i, l, c, d]
    ), j = Ut[a];
    return /* @__PURE__ */ m.jsx(
      j,
      {
        ref: v,
        className: `typography typography--${a} ${y || ""}`,
        style: M,
        "data-testid": f,
        ...h,
        children: E
      }
    );
  }
);
st.displayName = "Text";
je(st);
export {
  Pt as Button,
  rt as Card,
  kt as Input,
  T as Modal,
  st as Text,
  Yt as Toast
};
