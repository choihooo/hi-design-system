export * from "@hi-design/tokens";
import * as t from "react";
import se, { forwardRef as fe, memo as de, useMemo as W, useState as ce, createContext as Rt, useRef as Ye, useEffect as G, useCallback as xt } from "react";
import { createPortal as St } from "react-dom";
var Ze = { exports: {} }, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Zt() {
  if (He) return J;
  He = 1;
  var n = se, o = Symbol.for("react.element"), c = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(h, d, _) {
    var p, R = {}, u = null, Z = null;
    _ !== void 0 && (u = "" + _), d.key !== void 0 && (u = "" + d.key), d.ref !== void 0 && (Z = d.ref);
    for (p in d) l.call(d, p) && !m.hasOwnProperty(p) && (R[p] = d[p]);
    if (h && h.defaultProps) for (p in d = h.defaultProps, d) R[p] === void 0 && (R[p] = d[p]);
    return { $$typeof: o, type: h, key: u, ref: Z, props: R, _owner: g.current };
  }
  return J.Fragment = c, J.jsx = b, J.jsxs = b, J;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function jt() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var n = se, o = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), h = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), j = Symbol.iterator, w = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[w];
      return typeof r == "function" ? r : null;
    }
    var C = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          a[i - 1] = arguments[i];
        H("error", e, a);
      }
    }
    function H(e, r, a) {
      {
        var i = C.ReactDebugCurrentFrame, E = i.getStackAddendum();
        E !== "" && (r += "%s", a = a.concat([E]));
        var y = a.map(function(f) {
          return String(f);
        });
        y.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var me = !1, he = !1, pe = !1, ve = !1, ge = !1, X;
    X = Symbol.for("react.module.reference");
    function Ee(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === m || ge || e === g || e === _ || e === p || ve || e === Z || me || he || pe || typeof e == "object" && e !== null && (e.$$typeof === u || e.$$typeof === R || e.$$typeof === b || e.$$typeof === h || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === X || e.getModuleId !== void 0));
    }
    function $(e, r, a) {
      var i = e.displayName;
      if (i)
        return i;
      var E = r.displayName || r.name || "";
      return E !== "" ? a + "(" + E + ")" : a;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case c:
          return "Portal";
        case m:
          return "Profiler";
        case g:
          return "StrictMode";
        case _:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return Q(r) + ".Consumer";
          case b:
            var a = e;
            return Q(a._context) + ".Provider";
          case d:
            return $(e, e.render, "ForwardRef");
          case R:
            var i = e.displayName || null;
            return i !== null ? i : F(e.type) || "Memo";
          case u: {
            var E = e, y = E._payload, f = E._init;
            try {
              return F(f(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, N = 0, ye, ee, V, U, B, te, re;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function be() {
      {
        if (N === 0) {
          ye = console.log, ee = console.info, V = console.warn, U = console.error, B = console.group, te = console.groupCollapsed, re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ae,
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
    function _e() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ye
            }),
            info: O({}, e, {
              value: ee
            }),
            warn: O({}, e, {
              value: V
            }),
            error: O({}, e, {
              value: U
            }),
            group: O({}, e, {
              value: B
            }),
            groupCollapsed: O({}, e, {
              value: te
            }),
            groupEnd: O({}, e, {
              value: re
            })
          });
        }
        N < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = C.ReactCurrentDispatcher, P;
    function I(e, r, a) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (E) {
            var i = E.stack.trim().match(/\n( *(at )?)/);
            P = i && i[1] || "";
          }
        return `
` + P + e;
      }
    }
    var Ae = !1, ne;
    {
      var tt = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new tt();
    }
    function Me(e, r) {
      if (!e || Ae)
        return "";
      {
        var a = ne.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ae = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = q.current, q.current = null, be();
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
            } catch (k) {
              i = k;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (k) {
              i = k;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            i = k;
          }
          e();
        }
      } catch (k) {
        if (k && i && typeof k.stack == "string") {
          for (var s = k.stack.split(`
`), M = i.stack.split(`
`), x = s.length - 1, S = M.length - 1; x >= 1 && S >= 0 && s[x] !== M[S]; )
            S--;
          for (; x >= 1 && S >= 0; x--, S--)
            if (s[x] !== M[S]) {
              if (x !== 1 || S !== 1)
                do
                  if (x--, S--, S < 0 || s[x] !== M[S]) {
                    var T = `
` + s[x].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && ne.set(e, T), T;
                  }
                while (x >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Ae = !1, q.current = y, _e(), Error.prepareStackTrace = E;
      }
      var z = e ? e.displayName || e.name : "", ze = z ? I(z) : "";
      return typeof e == "function" && ne.set(e, ze), ze;
    }
    function rt(e, r, a) {
      return Me(e, !1);
    }
    function at(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, at(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case _:
          return I("Suspense");
        case p:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return rt(e.render);
          case R:
            return ie(e.type, r, a);
          case u: {
            var i = e, E = i._payload, y = i._init;
            try {
              return ie(y(E), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Ce = {}, Te = C.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, a = ie(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(a);
      } else
        Te.setExtraStackFrame(null);
    }
    function nt(e, r, a, i, E) {
      {
        var y = Function.call.bind(oe);
        for (var f in e)
          if (y(e, f)) {
            var s = void 0;
            try {
              if (typeof e[f] != "function") {
                var M = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              s = e[f](r, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              s = x;
            }
            s && !(s instanceof Error) && (le(E), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof s), le(null)), s instanceof Error && !(s.message in Ce) && (Ce[s.message] = !0, le(E), A("Failed %s type: %s", a, s.message), le(null));
          }
      }
    }
    var it = Array.isArray;
    function we(e) {
      return it(e);
    }
    function ot(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function lt(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function Fe(e) {
      if (lt(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ot(e)), Le(e);
    }
    var Oe = C.ReactCurrentOwner, st = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, ke;
    function ct(e) {
      if (oe.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ut(e) {
      if (oe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ft(e, r) {
      typeof e.ref == "string" && Oe.current;
    }
    function dt(e, r) {
      {
        var a = function() {
          Pe || (Pe = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function mt(e, r) {
      {
        var a = function() {
          ke || (ke = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ht = function(e, r, a, i, E, y, f) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: f,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function pt(e, r, a, i, E) {
      {
        var y, f = {}, s = null, M = null;
        a !== void 0 && (Fe(a), s = "" + a), ut(r) && (Fe(r.key), s = "" + r.key), ct(r) && (M = r.ref, ft(r, E));
        for (y in r)
          oe.call(r, y) && !st.hasOwnProperty(y) && (f[y] = r[y]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (y in x)
            f[y] === void 0 && (f[y] = x[y]);
        }
        if (s || M) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dt(f, S), M && mt(f, S);
        }
        return ht(e, s, M, E, i, Oe.current, f);
      }
    }
    var Re = C.ReactCurrentOwner, $e = C.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, a = ie(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(a);
      } else
        $e.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Ne() {
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
    function vt(e) {
      return "";
    }
    var Ve = {};
    function gt(e) {
      {
        var r = Ne();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ie(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = gt(r);
        if (Ve[a])
          return;
        Ve[a] = !0;
        var i = "";
        e && e._owner && e._owner !== Re.current && (i = " It was passed a child from " + F(e._owner.type) + "."), D(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, i), D(null);
      }
    }
    function We(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var a = 0; a < e.length; a++) {
            var i = e[a];
            Se(i) && Ie(i, r);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = L(e);
          if (typeof E == "function" && E !== e.entries)
            for (var y = E.call(e), f; !(f = y.next()).done; )
              Se(f.value) && Ie(f.value, r);
        }
      }
    }
    function Et(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          a = r.propTypes;
        else
          return;
        if (a) {
          var i = F(r);
          nt(a, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !xe) {
          xe = !0;
          var E = F(r);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yt(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var i = r[a];
          if (i !== "children" && i !== "key") {
            D(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function De(e, r, a, i, E, y) {
      {
        var f = Ee(e);
        if (!f) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = vt();
          M ? s += M : s += Ne();
          var x;
          e === null ? x = "null" : we(e) ? x = "array" : e !== void 0 && e.$$typeof === o ? (x = "<" + (F(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, s);
        }
        var S = pt(e, r, a, E, y);
        if (S == null)
          return S;
        if (f) {
          var T = r.children;
          if (T !== void 0)
            if (i)
              if (we(T)) {
                for (var z = 0; z < T.length; z++)
                  We(T[z], e);
                Object.freeze && Object.freeze(T);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(T, e);
        }
        return e === l ? yt(S) : Et(S), S;
      }
    }
    function bt(e, r, a) {
      return De(e, r, a, !0);
    }
    function _t(e, r, a) {
      return De(e, r, a, !1);
    }
    var At = _t, wt = bt;
    K.Fragment = l, K.jsx = At, K.jsxs = wt;
  }()), K;
}
process.env.NODE_ENV === "production" ? Ze.exports = Zt() : Ze.exports = jt();
var v = Ze.exports;
function Be(n) {
  var o, c, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var g = n.length;
    for (o = 0; o < g; o++) n[o] && (c = Be(n[o])) && (l && (l += " "), l += c);
  } else for (c in n) n[c] && (l && (l += " "), l += c);
  return l;
}
function ue() {
  for (var n, o, c = 0, l = "", g = arguments.length; c < g; c++) (n = arguments[c]) && (o = Be(n)) && (l && (l += " "), l += o);
  return l;
}
const Mt = fe(
  ({
    variant: n = "primary",
    size: o = "md",
    color: c = "primary",
    disabled: l = !1,
    loading: g = !1,
    fullWidth: m = !1,
    onPress: b,
    onClick: h,
    className: d,
    children: _,
    testID: p,
    ...R
  }, u) => {
    const Z = () => {
      l || g || (b == null || b(), h == null || h());
    }, j = ue(
      "hi-button",
      `hi-button--${n}`,
      `hi-button--${o}`,
      `hi-button--${c}`,
      m && "hi-button--full-width",
      l && "hi-button--disabled",
      g && "hi-button--loading",
      d
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ v.jsxs(
      "button",
      {
        ref: u,
        className: j,
        disabled: l || g,
        onClick: Z,
        "data-testid": p,
        "aria-busy": g,
        ...R,
        children: [
          g && /* @__PURE__ */ v.jsx("span", { className: "hi-button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Loading..." }) }),
          /* @__PURE__ */ v.jsx("span", { className: "hi-button__content", children: _ })
        ]
      }
    );
  }
);
Mt.displayName = "Button";
const qe = fe(
  ({
    elevation: n = "md",
    padding: o = "md",
    radius: c = "md",
    pressable: l = !1,
    onPress: g,
    className: m,
    children: b,
    testID: h,
    ...d
  }, _) => {
    const p = ue(
      "hi-card",
      `hi-card--elevation-${n}`,
      `hi-card--padding-${o}`,
      `hi-card--radius-${c}`,
      l && "hi-card--pressable",
      m
    );
    return l ? /* @__PURE__ */ v.jsx(
      "button",
      {
        ref: _,
        className: p,
        onClick: g,
        "data-testid": h,
        type: "button",
        ...d,
        children: b
      }
    ) : /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: _,
        className: p,
        "data-testid": h,
        ...d,
        children: b
      }
    );
  }
);
qe.displayName = "Card";
de(qe);
const Ct = fe(
  ({
    value: n,
    defaultValue: o,
    placeholder: c,
    type: l = "text",
    variant: g = "outline",
    size: m = "md",
    state: b = "default",
    disabled: h = !1,
    fullWidth: d = !1,
    readOnly: _ = !1,
    required: p = !1,
    label: R,
    helperText: u,
    errorText: Z,
    className: j,
    onChangeText: w,
    onFocus: L,
    onBlur: C,
    onSubmit: A,
    testID: H,
    name: me,
    autoComplete: he,
    minLength: pe,
    maxLength: ve,
    pattern: ge,
    ...X
  }, Ee) => {
    const $ = W(
      () => H || `hi-input-${Math.random().toString(36).substr(2, 9)}`,
      [H]
    ), [Q, F] = ce(() => o || ""), [O, N] = ce(!1), ee = n !== void 0 ? n : Q, V = W(() => b === "error" && !!Z, [b, Z]), U = W(() => `${$}-helper`, [$]), B = W(() => `${$}-error`, [$]), te = (P) => {
      const I = P.target.value;
      n === void 0 && F(I), w == null || w(I);
    }, re = (P) => {
      N(!0), L == null || L();
    }, ae = (P) => {
      N(!1), C == null || C();
    }, be = (P) => {
      P.key === "Enter" && A && A();
    }, _e = ue(
      "hi-input__container",
      `hi-input__container--${m}`,
      d && "hi-input__container--full-width"
    ), q = ue(
      "hi-input",
      `hi-input--${g}`,
      `hi-input--${m}`,
      `hi-input--${b}`,
      O && "hi-input--focused",
      h && "hi-input--disabled",
      _ && "hi-input--read-only",
      j
      // Allow custom className override (shadcn/ui style)
    );
    return /* @__PURE__ */ v.jsxs("div", { className: _e, children: [
      R && /* @__PURE__ */ v.jsxs("label", { className: "hi-input__label", htmlFor: $, children: [
        R,
        p && /* @__PURE__ */ v.jsx("span", { className: "hi-input__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: Ee,
          id: $,
          type: l,
          className: q,
          value: ee,
          placeholder: c,
          disabled: h,
          readOnly: _,
          required: p,
          onChange: te,
          onFocus: re,
          onBlur: ae,
          onKeyDown: be,
          "data-testid": H,
          name: me,
          autoComplete: he,
          minLength: pe,
          maxLength: ve,
          pattern: ge,
          "aria-invalid": b === "error",
          "aria-describedby": V ? B : u ? U : void 0,
          "aria-required": p,
          ...X
        }
      ),
      (u || V) && /* @__PURE__ */ v.jsx("div", { className: "hi-input__helper", id: V ? B : U, children: V ? /* @__PURE__ */ v.jsx("span", { className: "hi-input__error", role: "alert", children: Z }) : /* @__PURE__ */ v.jsx("span", { className: "hi-input__helper-text", children: u }) })
    ] });
  }
);
Ct.displayName = "Input";
const Tt = Rt({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), Y = t.forwardRef(
  (n, o) => {
    const {
      alt: c,
      color: l,
      size: g,
      weight: m,
      mirrored: b,
      children: h,
      weights: d,
      ..._
    } = n, {
      color: p = "currentColor",
      size: R,
      weight: u = "regular",
      mirrored: Z = !1,
      ...j
    } = t.useContext(Tt);
    return /* @__PURE__ */ t.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: g ?? R,
        height: g ?? R,
        fill: l ?? p,
        viewBox: "0 0 256 256",
        transform: b || Z ? "scale(-1, 1)" : void 0,
        ...j,
        ..._
      },
      !!c && /* @__PURE__ */ t.createElement("title", null, c),
      h,
      d.get(m ?? u)
    );
  }
);
Y.displayName = "IconBase";
const Lt = /* @__PURE__ */ new Map([
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
]), Je = t.forwardRef((n, o) => /* @__PURE__ */ t.createElement(Y, { ref: o, ...n, weights: Lt }));
Je.displayName = "CheckCircleIcon";
const Ft = /* @__PURE__ */ new Map([
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
]), je = t.forwardRef((n, o) => /* @__PURE__ */ t.createElement(Y, { ref: o, ...n, weights: Ft }));
je.displayName = "XIcon";
const Ot = /* @__PURE__ */ new Map([
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
]), Ke = t.forwardRef((n, o) => /* @__PURE__ */ t.createElement(Y, { ref: o, ...n, weights: Ot }));
Ke.displayName = "XCircleIcon";
const Pt = /* @__PURE__ */ new Map([
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
]), Ge = t.forwardRef((n, o) => /* @__PURE__ */ t.createElement(Y, { ref: o, ...n, weights: Pt }));
Ge.displayName = "InfoIcon";
const kt = /* @__PURE__ */ new Map([
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
]), Xe = t.forwardRef((n, o) => /* @__PURE__ */ t.createElement(Y, { ref: o, ...n, weights: kt }));
Xe.displayName = "WarningCircleIcon";
function $t() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Qe() {
  const [n, o] = se.useState(() => $t());
  return se.useEffect(() => {
    if (typeof window > "u")
      return;
    const c = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(c.matches);
    return c.addEventListener("change", l), () => c.removeEventListener("change", l);
  }, []), n;
}
const Nt = ({
  visible: n = !1,
  title: o,
  size: c = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: g = !0,
  onClose: m,
  children: b,
  testID: h
}) => {
  const d = Ye(null), _ = Ye(null), p = Qe(), R = W(() => `${h || "hi-modal"}-title`, [h]), u = W(() => h || "hi-modal", [h]);
  if (G(() => {
    const j = (w) => {
      w.key === "Escape" && n && m && m();
    };
    return n && (document.addEventListener("keydown", j), _.current = document.activeElement), () => {
      document.removeEventListener("keydown", j);
    };
  }, [n, m]), G(() => {
    if (!n || !d.current)
      return;
    const j = Array.from(
      d.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), w = j[0], L = j[j.length - 1];
    w == null || w.focus();
    const C = (A) => {
      A.key === "Tab" && (A.shiftKey ? document.activeElement === w && (A.preventDefault(), L == null || L.focus()) : document.activeElement === L && (A.preventDefault(), w == null || w.focus()));
    };
    return document.addEventListener("keydown", C), () => {
      var A;
      document.removeEventListener("keydown", C), (A = _.current) == null || A.focus();
    };
  }, [n]), G(() => (n ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [n]), !n) return null;
  const Z = /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `hi-modal-overlay ${p ? "hi-modal-overlay--no-animation" : ""}`,
      "data-testid": h ? `${h}-overlay` : "hi-modal-overlay",
      role: "presentation",
      children: [
        l ? /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "hi-modal-overlay__backdrop",
            onClick: m,
            "aria-label": "Close modal",
            type: "button"
          }
        ) : /* @__PURE__ */ v.jsx("div", { className: "hi-modal-overlay__backdrop", "aria-hidden": "true" }),
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            ref: d,
            className: `hi-modal hi-modal--${c} ${p ? "hi-modal--no-animation" : ""}`,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": o ? R : void 0,
            id: u,
            "data-testid": u,
            children: [
              (o || g) && /* @__PURE__ */ v.jsxs("div", { className: "hi-modal__header", children: [
                o && /* @__PURE__ */ v.jsx("h2", { id: R, className: "hi-modal__title", children: o }),
                g && /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    className: "hi-modal__close",
                    onClick: m,
                    "aria-label": "Close modal",
                    type: "button",
                    children: /* @__PURE__ */ v.jsx(je, { size: 20, weight: "regular" })
                  }
                )
              ] }),
              /* @__PURE__ */ v.jsx("div", { className: "hi-modal__body", children: b })
            ]
          }
        )
      ]
    }
  );
  return St(Z, document.body);
};
de(Nt);
const Vt = ({
  visible: n = !1,
  message: o,
  variant: c = "info",
  duration: l = 3e3,
  position: g = "top",
  onClose: m,
  testID: b
}) => {
  const [h, d] = ce(n), [_, p] = ce(!1), R = Qe(), u = xt(() => {
    p(!0), setTimeout(() => {
      d(!1), m == null || m();
    }, 300);
  }, [m]);
  G(() => {
    n && (d(!0), p(!1));
  }, [n]), G(() => {
    if (!h || l <= 0 || _)
      return;
    const w = setTimeout(() => {
      u();
    }, l);
    return () => clearTimeout(w);
  }, [h, l, _, u]);
  const Z = () => {
    u();
  };
  if (!h || !o) return null;
  const j = () => {
    const w = {
      size: 24,
      weight: "regular"
    };
    switch (c) {
      case "success":
        return /* @__PURE__ */ v.jsx(Je, { ...w });
      case "error":
        return /* @__PURE__ */ v.jsx(Ke, { ...w });
      case "warning":
        return /* @__PURE__ */ v.jsx(Xe, { ...w });
      default:
        return /* @__PURE__ */ v.jsx(Ge, { ...w });
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: `hi-toast hi-toast--${c} hi-toast--${g} ${_ ? "hi-toast--exiting" : ""} ${R ? "hi-toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": b || "hi-toast",
      children: [
        /* @__PURE__ */ v.jsx("div", { className: "hi-toast__icon", children: j() }),
        /* @__PURE__ */ v.jsx("div", { className: "hi-toast__message", children: o }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "hi-toast__close",
            onClick: Z,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ v.jsx(je, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
};
de(Vt);
const It = {
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
}, et = fe(
  ({
    variant: n = "body1",
    weight: o,
    color: c,
    align: l = "left",
    noWrap: g = !1,
    numberOfLines: m,
    className: b,
    children: h,
    testID: d,
    ..._
  }, p) => {
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
    }[n], Z = o || u.fontWeight, j = W(
      () => ({
        fontSize: typeof u.fontSize == "number" ? `${u.fontSize}px` : u.fontSize,
        fontWeight: Z,
        lineHeight: Array.isArray(u.lineHeight) ? u.lineHeight[0] : u.lineHeight,
        letterSpacing: typeof u.letterSpacing == "number" ? `${u.letterSpacing}em` : u.letterSpacing,
        color: c || "#111827",
        textAlign: l,
        whiteSpace: g ? "nowrap" : void 0,
        overflow: m ? "hidden" : void 0,
        textOverflow: m ? "ellipsis" : void 0,
        display: m ? "-webkit-box" : void 0,
        WebkitLineClamp: m || void 0,
        WebkitBoxOrient: m ? "vertical" : void 0
      }),
      [u, Z, c, l, g, m]
    ), w = It[n];
    return /* @__PURE__ */ v.jsx(
      w,
      {
        ref: p,
        className: `hi-typography hi-typography--${n} ${b || ""}`,
        style: j,
        "data-testid": d,
        ..._,
        children: h
      }
    );
  }
);
et.displayName = "Typography";
de(et);
export {
  Mt as Button,
  qe as Card,
  Ct as Input,
  Nt as Modal,
  Vt as Toast,
  et as Typography
};
