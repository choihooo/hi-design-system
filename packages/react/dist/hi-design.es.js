export * from "@hi-design/tokens";
import * as t from "react";
import $, { forwardRef as me, useState as I, memo as Je, createContext as Ge, useRef as Ke, useEffect as oe, useCallback as Xe, useMemo as Re } from "react";
import { createPortal as Ft } from "react-dom";
var Ae = { exports: {} }, ae = {};
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
function Ot() {
  if (He) return ae;
  He = 1;
  var a = $, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, d, p) {
    var m, _ = {}, b = null, A = null;
    p !== void 0 && (b = "" + p), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (A = d.ref);
    for (m in d) l.call(d, m) && !f.hasOwnProperty(m) && (_[m] = d[m]);
    if (y && y.defaultProps) for (m in d = y.defaultProps, d) _[m] === void 0 && (_[m] = d[m]);
    return { $$typeof: o, type: y, key: b, ref: A, props: _, _owner: c.current };
  }
  return ae.Fragment = s, ae.jsx = g, ae.jsxs = g, ae;
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
var qe;
function Pt() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = $, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), j = Symbol.iterator, T = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = j && e[j] || e[T];
      return typeof r == "function" ? r : null;
    }
    var M = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Z(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          n[i - 1] = arguments[i];
        z("error", e, n);
      }
    }
    function z(e, r, n) {
      {
        var i = M.ReactDebugCurrentFrame, E = i.getStackAddendum();
        E !== "" && (r += "%s", n = n.concat([E]));
        var w = n.map(function(h) {
          return String(h);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var H = !1, q = !1, J = !1, G = !1, K = !1, le;
    le = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === f || K || e === c || e === p || e === m || G || e === A || H || q || J || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === g || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function ve(e, r, n) {
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
      if (typeof e.tag == "number" && Z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return se(r) + ".Consumer";
          case g:
            var n = e;
            return se(n._context) + ".Provider";
          case d:
            return ve(e, e.render, "ForwardRef");
          case _:
            var i = e.displayName || null;
            return i !== null ? i : N(e.type) || "Memo";
          case b: {
            var E = e, w = E._payload, h = E._init;
            try {
              return N(h(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, V = 0, D, X, Q, ee, te, re, L;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function st() {
      {
        if (V === 0) {
          D = console.log, X = console.info, Q = console.warn, ee = console.error, te = console.group, re = console.groupCollapsed, L = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
        V++;
      }
    }
    function it() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: D
            }),
            info: S({}, e, {
              value: X
            }),
            warn: S({}, e, {
              value: Q
            }),
            error: S({}, e, {
              value: ee
            }),
            group: S({}, e, {
              value: te
            }),
            groupCollapsed: S({}, e, {
              value: re
            }),
            groupEnd: S({}, e, {
              value: L
            })
          });
        }
        V < 0 && Z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = M.ReactCurrentDispatcher, ge;
    function ie(e, r, n) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (E) {
            var i = E.stack.trim().match(/\n( *(at )?)/);
            ge = i && i[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var Ee = !1, ce;
    {
      var ct = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new ct();
    }
    function Fe(e, r) {
      if (!e || Ee)
        return "";
      {
        var n = ce.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      Ee = !0;
      var E = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = he.current, he.current = null, st();
      try {
        if (r) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (k) {
              i = k;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (k) {
              i = k;
            }
            e.call(h.prototype);
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
          for (var v = k.stack.split(`
`), C = i.stack.split(`
`), R = v.length - 1, x = C.length - 1; R >= 1 && x >= 0 && v[R] !== C[x]; )
            x--;
          for (; R >= 1 && x >= 0; R--, x--)
            if (v[R] !== C[x]) {
              if (R !== 1 || x !== 1)
                do
                  if (R--, x--, x < 0 || v[R] !== C[x]) {
                    var F = `
` + v[R].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, F), F;
                  }
                while (R >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Ee = !1, he.current = w, it(), Error.prepareStackTrace = E;
      }
      var Y = e ? e.displayName || e.name : "", ze = Y ? ie(Y) : "";
      return typeof e == "function" && ce.set(e, ze), ze;
    }
    function ut(e, r, n) {
      return Fe(e, !1);
    }
    function dt(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, dt(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case p:
          return ie("Suspense");
        case m:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ut(e.render);
          case _:
            return ue(e.type, r, n);
          case b: {
            var i = e, E = i._payload, w = i._init;
            try {
              return ue(w(E), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Oe = {}, Pe = M.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var r = e._owner, n = ue(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(n);
      } else
        Pe.setExtraStackFrame(null);
    }
    function ft(e, r, n, i, E) {
      {
        var w = Function.call.bind(de);
        for (var h in e)
          if (w(e, h)) {
            var v = void 0;
            try {
              if (typeof e[h] != "function") {
                var C = Error((i || "React class") + ": " + n + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              v = e[h](r, h, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (fe(E), Z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, h, typeof v), fe(null)), v instanceof Error && !(v.message in Oe) && (Oe[v.message] = !0, fe(E), Z("Failed %s type: %s", n, v.message), fe(null));
          }
      }
    }
    var mt = Array.isArray;
    function ye(e) {
      return mt(e);
    }
    function pt(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function vt(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Ne(e) {
      if (vt(e))
        return Z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Se(e);
    }
    var ke = M.ReactCurrentOwner, ht = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, Ve;
    function gt(e) {
      if (de.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Et(e) {
      if (de.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yt(e, r) {
      typeof e.ref == "string" && ke.current;
    }
    function _t(e, r) {
      {
        var n = function() {
          $e || ($e = !0, Z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function bt(e, r) {
      {
        var n = function() {
          Ve || (Ve = !0, Z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var wt = function(e, r, n, i, E, w, h) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: h,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: E
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Rt(e, r, n, i, E) {
      {
        var w, h = {}, v = null, C = null;
        n !== void 0 && (Ne(n), v = "" + n), Et(r) && (Ne(r.key), v = "" + r.key), gt(r) && (C = r.ref, yt(r, E));
        for (w in r)
          de.call(r, w) && !ht.hasOwnProperty(w) && (h[w] = r[w]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (w in R)
            h[w] === void 0 && (h[w] = R[w]);
        }
        if (v || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && _t(h, x), C && bt(h, x);
        }
        return wt(e, v, C, E, i, ke.current, h);
      }
    }
    var _e = M.ReactCurrentOwner, Ie = M.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, n = ue(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(n);
      } else
        Ie.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function De() {
      {
        if (_e.current) {
          var e = N(_e.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function At(e) {
      return "";
    }
    var We = {};
    function xt(e) {
      {
        var r = De();
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
        var n = xt(r);
        if (We[n])
          return;
        We[n] = !0;
        var i = "";
        e && e._owner && e._owner !== _e.current && (i = " It was passed a child from " + N(e._owner.type) + "."), W(e), Z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), W(null);
      }
    }
    function Ue(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            we(i) && Ye(i, r);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var E = P(e);
          if (typeof E == "function" && E !== e.entries)
            for (var w = E.call(e), h; !(h = w.next()).done; )
              we(h.value) && Ye(h.value, r);
        }
      }
    }
    function Mt(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          n = r.propTypes;
        else
          return;
        if (n) {
          var i = N(r);
          ft(n, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !be) {
          be = !0;
          var E = N(r);
          Z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", E || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var i = r[n];
          if (i !== "children" && i !== "key") {
            W(e), Z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), Z("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    function Be(e, r, n, i, E, w) {
      {
        var h = pe(e);
        if (!h) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = At();
          C ? v += C : v += De();
          var R;
          e === null ? R = "null" : ye(e) ? R = "array" : e !== void 0 && e.$$typeof === o ? (R = "<" + (N(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, Z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, v);
        }
        var x = Rt(e, r, n, E, w);
        if (x == null)
          return x;
        if (h) {
          var F = r.children;
          if (F !== void 0)
            if (i)
              if (ye(F)) {
                for (var Y = 0; Y < F.length; Y++)
                  Ue(F[Y], e);
                Object.freeze && Object.freeze(F);
              } else
                Z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(F, e);
        }
        return e === l ? Zt(x) : Mt(x), x;
      }
    }
    function jt(e, r, n) {
      return Be(e, r, n, !0);
    }
    function Ct(e, r, n) {
      return Be(e, r, n, !1);
    }
    var Lt = Ct, Tt = jt;
    ne.Fragment = l, ne.jsx = Lt, ne.jsxs = Tt;
  }()), ne;
}
process.env.NODE_ENV === "production" ? Ae.exports = Ot() : Ae.exports = Pt();
var u = Ae.exports;
function Qe(a) {
  var o, s, l = "";
  if (typeof a == "string" || typeof a == "number") l += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var c = a.length;
    for (o = 0; o < c; o++) a[o] && (s = Qe(a[o])) && (l && (l += " "), l += s);
  } else for (s in a) a[s] && (l && (l += " "), l += s);
  return l;
}
function U() {
  for (var a, o, s = 0, l = "", c = arguments.length; s < c; s++) (a = arguments[s]) && (o = Qe(a)) && (l && (l += " "), l += o);
  return l;
}
const St = me(({
  variant: a = "primary",
  size: o = "md",
  disabled: s = !1,
  loading: l = !1,
  fullWidth: c = !1,
  onPress: f,
  onClick: g,
  className: y,
  children: d,
  testID: p,
  ...m
}, _) => {
  const [b, A] = I(!1), [j, T] = I(!1), P = () => {
    s || l || (f == null || f(), g == null || g());
  }, M = U(
    "button",
    `button--${a}`,
    `button--${o}`,
    c && "button--full-width",
    s && "button--disabled",
    l && "button--loading",
    b && "button--pressed",
    j && "button--focused",
    y
  ), Z = () => A(!0), z = () => A(!1), H = () => A(!1), q = () => T(!0), J = () => T(!1), G = s || l ? { disabled: !0 } : {}, K = l ? { "data-loading": "true" } : {};
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      ref: _,
      className: M,
      onClick: P,
      onMouseDown: Z,
      onMouseUp: z,
      onMouseLeave: H,
      onFocus: q,
      onBlur: J,
      "data-testid": p,
      type: "button",
      ...G,
      ...K,
      ...m,
      children: [
        l && /* @__PURE__ */ u.jsx("span", { className: "button__spinner" }),
        d
      ]
    }
  );
});
St.displayName = "Button";
const et = me(({
  elevation: a = "md",
  padding: o = "md",
  radius: s = "md",
  pressable: l = !1,
  onPress: c,
  className: f,
  children: g,
  testID: y,
  ...d
}, p) => {
  const m = U(
    "card",
    `card--elevation-${a}`,
    `card--padding-${o}`,
    `card--radius-${s}`,
    l && "card--pressable",
    f
  );
  return l ? /* @__PURE__ */ u.jsx(
    "button",
    {
      ref: p,
      className: m,
      onClick: c,
      "data-testid": y,
      type: "button",
      ...d,
      children: g
    }
  ) : /* @__PURE__ */ u.jsx(
    "div",
    {
      ref: p,
      className: m,
      "data-testid": y,
      ...d,
      children: g
    }
  );
});
et.displayName = "Card";
const Kt = Je(et), Nt = me(({
  value: a,
  defaultValue: o,
  placeholder: s,
  type: l = "text",
  variant: c = "outline",
  size: f = "md",
  state: g = "default",
  disabled: y = !1,
  fullWidth: d = !1,
  readOnly: p = !1,
  required: m = !1,
  label: _,
  helperText: b,
  errorText: A,
  onChangeText: j,
  onFocus: T,
  onBlur: P,
  testID: M,
  name: Z,
  autoComplete: z,
  minLength: H,
  maxLength: q,
  pattern: J,
  rows: G,
  className: K,
  ...le
}, pe) => {
  const [ve, se] = I(o || ""), [N, S] = I(!1), V = a !== void 0 ? a : ve, D = g === "error" && !!A, X = (L) => {
    a === void 0 && se(L), j == null || j(L);
  }, Q = (L) => {
    S(!0), T == null || T(L);
  }, ee = (L) => {
    S(!1), P == null || P(L);
  }, te = U(
    "input",
    `input--${c}`,
    `input--${f}`,
    g && `input--${g}`,
    d && "input--full-width",
    y && "input--disabled",
    p && "input--read-only",
    N && "input--focused",
    D && "input--error",
    _ && "input--has-label",
    K
  ), re = {
    value: V,
    defaultValue: a === void 0 ? o : void 0,
    placeholder: s,
    disabled: y,
    readOnly: p,
    required: m,
    name: Z,
    autoComplete: z,
    minLength: H,
    maxLength: q,
    pattern: J,
    "data-testid": M,
    "aria-label": _ || s,
    "aria-required": m,
    "aria-invalid": g === "error",
    ...le
  };
  return l === "textarea" ? /* @__PURE__ */ u.jsxs("div", { className: te, children: [
    _ && /* @__PURE__ */ u.jsxs("label", { className: "input__label", htmlFor: M, children: [
      _,
      m && /* @__PURE__ */ u.jsx("span", { className: "input__required", children: "*" })
    ] }),
    /* @__PURE__ */ u.jsx(
      "textarea",
      {
        className: "input__control",
        rows: G,
        onChange: (L) => X(L.target.value),
        onFocus: Q,
        onBlur: ee,
        ...re
      }
    ),
    b && /* @__PURE__ */ u.jsx("div", { className: "input__helper", children: b }),
    D && A && /* @__PURE__ */ u.jsx("div", { className: "input__error", children: A })
  ] }) : /* @__PURE__ */ u.jsxs("div", { className: te, children: [
    _ && /* @__PURE__ */ u.jsxs("label", { className: "input__label", htmlFor: M, children: [
      _,
      m && /* @__PURE__ */ u.jsx("span", { className: "input__required", children: "*" })
    ] }),
    /* @__PURE__ */ u.jsx(
      "input",
      {
        ref: pe,
        type: l,
        className: "input__control",
        onChange: (L) => X(L.target.value),
        onFocus: Q,
        onBlur: ee,
        ...re
      }
    ),
    b && /* @__PURE__ */ u.jsx("div", { className: "input__helper", children: b }),
    D && A && /* @__PURE__ */ u.jsx("div", { className: "input__error", children: A })
  ] });
});
Nt.displayName = "Input";
const kt = Ge({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), B = t.forwardRef(
  (a, o) => {
    const {
      alt: s,
      color: l,
      size: c,
      weight: f,
      mirrored: g,
      children: y,
      weights: d,
      ...p
    } = a, {
      color: m = "currentColor",
      size: _,
      weight: b = "regular",
      mirrored: A = !1,
      ...j
    } = t.useContext(kt);
    return /* @__PURE__ */ t.createElement(
      "svg",
      {
        ref: o,
        xmlns: "http://www.w3.org/2000/svg",
        width: c ?? _,
        height: c ?? _,
        fill: l ?? m,
        viewBox: "0 0 256 256",
        transform: g || A ? "scale(-1, 1)" : void 0,
        ...j,
        ...p
      },
      !!s && /* @__PURE__ */ t.createElement("title", null, s),
      y,
      d.get(f ?? b)
    );
  }
);
B.displayName = "IconBase";
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
]), tt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(B, { ref: o, ...a, weights: $t }));
tt.displayName = "CheckCircleIcon";
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
]), xe = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(B, { ref: o, ...a, weights: Vt }));
xe.displayName = "XIcon";
const It = /* @__PURE__ */ new Map([
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
]), rt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(B, { ref: o, ...a, weights: It }));
rt.displayName = "XCircleIcon";
const Dt = /* @__PURE__ */ new Map([
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
]), at = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(B, { ref: o, ...a, weights: Dt }));
at.displayName = "InfoIcon";
const Wt = /* @__PURE__ */ new Map([
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
]), nt = t.forwardRef((a, o) => /* @__PURE__ */ t.createElement(B, { ref: o, ...a, weights: Wt }));
nt.displayName = "WarningCircleIcon";
const Me = ({
  title: a,
  showCloseButton: o = !0,
  onClose: s,
  className: l,
  testID: c
}) => {
  const f = U("modal__header", l);
  return /* @__PURE__ */ u.jsxs("div", { className: f, "data-testid": c, children: [
    a && /* @__PURE__ */ u.jsx("h2", { className: "modal__title", id: `${c || "modal"}-title`, children: a }),
    o && /* @__PURE__ */ u.jsx(
      "button",
      {
        className: "modal__close",
        onClick: s,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": c ? `${c}-close` : "modal-close",
        children: /* @__PURE__ */ u.jsx(xe, { size: 20, weight: "regular" })
      }
    )
  ] });
}, Ze = ({
  size: a = "md",
  prefersReduced: o = !1,
  children: s,
  className: l,
  testID: c,
  modalId: f,
  titleId: g
}) => {
  const y = U(
    "modal",
    `modal--${a}`,
    o && "modal--no-animation",
    l
  );
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: y,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": g,
      id: f,
      "data-testid": c || "modal-content",
      children: s
    }
  );
}, je = ({
  closeOnBackdropPress: a = !0,
  onClose: o,
  prefersReduced: s = !1,
  className: l,
  testID: c
}) => {
  const f = U(
    "modal-overlay",
    s && "modal-overlay--no-animation",
    l
  );
  return /* @__PURE__ */ u.jsx(
    "div",
    {
      className: f,
      "data-testid": c || "modal-overlay",
      role: "presentation",
      children: a ? /* @__PURE__ */ u.jsx(
        "button",
        {
          className: "modal-overlay__backdrop",
          onClick: o,
          "aria-label": "Close modal",
          type: "button",
          "data-testid": c ? `${c}-backdrop` : "modal-backdrop"
        }
      ) : /* @__PURE__ */ u.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" })
    }
  );
}, Yt = Ge(void 0), Ce = ({
  visible: a,
  onClose: o,
  modalRef: s,
  children: l
}) => {
  const [c, f] = I(a), g = Ke(null);
  oe(() => {
    const d = (p) => {
      p.key === "Escape" && a && o && o();
    };
    return a && (document.addEventListener("keydown", d), g.current = document.activeElement), () => {
      document.removeEventListener("keydown", d);
    };
  }, [a, o]), oe(() => {
    if (!a || !s.current)
      return;
    const d = Array.from(
      s.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), p = d[0], m = d[d.length - 1];
    p == null || p.focus();
    const _ = (b) => {
      b.key === "Tab" && (b.shiftKey ? document.activeElement === p && (b.preventDefault(), m == null || m.focus()) : document.activeElement === m && (b.preventDefault(), p == null || p.focus()));
    };
    return document.addEventListener("keydown", _), () => {
      var b;
      document.removeEventListener("keydown", _), (b = g.current) == null || b.focus();
    };
  }, [a]), oe(() => (a ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [a]);
  const y = {
    isOpen: c,
    onClose: Xe(() => {
      f(!1), o();
    }, [o]),
    modalRef: s,
    previousActiveElement: g
  };
  return a ? /* @__PURE__ */ u.jsx(Yt.Provider, { value: y, children: l }) : null;
}, Le = ({
  children: a,
  className: o,
  testID: s
}) => /* @__PURE__ */ u.jsx("div", { className: `modal__body ${o || ""}`, "data-testid": s, children: a });
function Ut() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Bt() {
  const [a, o] = $.useState(() => Ut());
  return $.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const O = ({
  visible: a = !1,
  title: o,
  size: s = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: c = !0,
  onClose: f = () => {
  },
  children: g,
  testID: y = "modal"
}) => {
  const d = Ke(null), p = Bt();
  return a ? Ft(/* @__PURE__ */ u.jsx(Ce, { visible: a, onClose: f, modalRef: d, children: /* @__PURE__ */ u.jsx(
    je,
    {
      closeOnBackdropPress: l,
      onClose: f,
      prefersReduced: p,
      testID: y,
      children: /* @__PURE__ */ u.jsxs(Ze, { size: s, prefersReduced: p, testID: y, children: [
        (o || c) && /* @__PURE__ */ u.jsx(
          Me,
          {
            title: o,
            showCloseButton: c,
            onClose: f,
            testID: y
          }
        ),
        /* @__PURE__ */ u.jsx(Le, { children: g })
      ] })
    }
  ) }), document.body) : null;
};
O.Header = Me;
O.Content = Ze;
O.Overlay = je;
O.Provider = Ce;
O.Body = Le;
O.displayName = "Modal";
O.Header = Me;
O.Content = Ze;
O.Overlay = je;
O.Provider = Ce;
O.Body = Le;
function ot(a = "component") {
  return `${a}-${Math.random().toString(36).substr(2, 9)}`;
}
function zt() {
  const [a, o] = $.useState(() => typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return $.useEffect(() => {
    if (typeof window > "u")
      return;
    const s = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => o(s.matches);
    return s.addEventListener("change", l), () => s.removeEventListener("change", l);
  }, []), a;
}
const lt = $.forwardRef(({
  visible: a = !1,
  message: o,
  variant: s = "info",
  duration: l = 3e3,
  position: c = "top",
  onClose: f,
  testID: g
}, y) => {
  const [d, p] = I(a), [m, _] = I(!1), b = zt(), A = Re(() => g || ot("toast"), [g]), j = Xe(() => {
    _(!0), setTimeout(() => {
      p(!1), f == null || f();
    }, 300);
  }, [f]);
  oe(() => {
    a && (p(!0), _(!1));
  }, [a]), oe(() => {
    if (!d || l <= 0 || m)
      return;
    const M = setTimeout(() => {
      j();
    }, l);
    return () => clearTimeout(M);
  }, [d, l, m, j]);
  const T = () => {
    j();
  };
  if (!d || !o) return null;
  const P = () => {
    const M = {
      size: 24,
      weight: "regular"
    };
    switch (s) {
      case "success":
        return /* @__PURE__ */ u.jsx(tt, { ...M });
      case "error":
        return /* @__PURE__ */ u.jsx(rt, { ...M });
      case "warning":
        return /* @__PURE__ */ u.jsx(nt, { ...M });
      default:
        return /* @__PURE__ */ u.jsx(at, { ...M });
    }
  };
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      ref: y,
      className: `toast toast--${s} toast--${c} ${m ? "toast--exiting" : ""} ${b ? "toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": A,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "toast__icon", children: P() }),
        /* @__PURE__ */ u.jsx("div", { className: "toast__message", children: o }),
        /* @__PURE__ */ u.jsx(
          "button",
          {
            className: "toast__close",
            onClick: T,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ u.jsx(xe, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
});
lt.displayName = "Toast";
const Xt = Je(lt), Ht = {
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
}, qt = me(({
  variant: a = "body1",
  weight: o,
  color: s,
  align: l = "left",
  noWrap: c = !1,
  numberOfLines: f,
  className: g,
  style: y,
  children: d,
  testID: p,
  ...m
}, _) => {
  const b = Ht[a], A = Re(() => p || ot("typography"), [p]), j = Re(() => [
    "typography",
    `typography--${a}`,
    o && `typography--weight-${o}`,
    s && `typography--color-${s}`,
    l && `typography--align-${l}`,
    c && "typography--no-wrap",
    f && "typography--truncate",
    g
  ].filter(Boolean).join(" "), [a, o, s, l, c, f, g]), T = {
    ref: _,
    className: j,
    id: A,
    style: {
      ...y,
      ...f && {
        WebkitLineClamp: f,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }
    },
    "data-testid": p,
    ...m
  };
  return $.createElement(
    b,
    T,
    d
  );
});
qt.displayName = "Typography";
export {
  St as Button,
  Kt as Card,
  Nt as Input,
  O as Modal,
  Xt as Toast,
  qt as Typography
};
