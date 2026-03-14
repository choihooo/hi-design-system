export * from "@hi-design/tokens";
import * as n from "react";
import me, { forwardRef as ge, useMemo as Ae, useState as ye, useCallback as ve, memo as Mr, createContext as Nr, useRef as Pr, useEffect as Be } from "react";
import { createPortal as Hr } from "react-dom";
var gr = { exports: {} }, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Or;
function qr() {
  if (Or) return Ve;
  Or = 1;
  var o = me, i = Symbol.for("react.element"), c = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, d, h) {
    var v, w = {}, x = null, S = null;
    h !== void 0 && (x = "" + h), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) l.call(d, v) && !g.hasOwnProperty(v) && (w[v] = d[v]);
    if (m && m.defaultProps) for (v in d = m.defaultProps, d) w[v] === void 0 && (w[v] = d[v]);
    return { $$typeof: i, type: m, key: x, ref: S, props: w, _owner: f.current };
  }
  return Ve.Fragment = c, Ve.jsx = E, Ve.jsxs = E, Ve;
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
    var o = me, i = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, P = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = T && e[T] || e[P];
      return typeof t == "function" ? t : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          a[s - 1] = arguments[s];
        M("error", e, a);
      }
    }
    function M(e, t, a) {
      {
        var s = k.ReactDebugCurrentFrame, y = s.getStackAddendum();
        y !== "" && (t += "%s", a = a.concat([y]));
        var p = a.map(function(u) {
          return String(u);
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var H = !1, se = !1, ce = !1, q = !1, Q = !1, K;
    K = Symbol.for("react.module.reference");
    function ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === g || Q || e === f || e === h || e === v || q || e === S || H || se || ce || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === w || e.$$typeof === E || e.$$typeof === m || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function ne(e, t, a) {
      var s = e.displayName;
      if (s)
        return s;
      var y = t.displayName || t.name || "";
      return y !== "" ? a + "(" + y + ")" : a;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function N(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case c:
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
            return V(t) + ".Consumer";
          case E:
            var a = e;
            return V(a._context) + ".Provider";
          case d:
            return ne(e, e.render, "ForwardRef");
          case w:
            var s = e.displayName || null;
            return s !== null ? s : N(e.type) || "Memo";
          case x: {
            var y = e, p = y._payload, u = y._init;
            try {
              return N(u(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, I = 0, J, oe, ee, U, X, B, F;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function be() {
      {
        if (I === 0) {
          J = console.log, oe = console.info, ee = console.warn, U = console.error, X = console.group, B = console.groupCollapsed, F = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Y,
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
    function Ee() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: J
            }),
            info: L({}, e, {
              value: oe
            }),
            warn: L({}, e, {
              value: ee
            }),
            error: L({}, e, {
              value: U
            }),
            group: L({}, e, {
              value: X
            }),
            groupCollapsed: L({}, e, {
              value: B
            }),
            groupEnd: L({}, e, {
              value: F
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = k.ReactCurrentDispatcher, ie;
    function Z(e, t, a) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (y) {
            var s = y.stack.trim().match(/\n( *(at )?)/);
            ie = s && s[1] || "";
          }
        return `
` + ie + e;
      }
    }
    var $ = !1, te;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Ke();
    }
    function Oe(e, t) {
      if (!e || $)
        return "";
      {
        var a = te.get(e);
        if (a !== void 0)
          return a;
      }
      var s;
      $ = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = re.current, re.current = null, be();
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
              s = z;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (z) {
              s = z;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            s = z;
          }
          e();
        }
      } catch (z) {
        if (z && s && typeof z.stack == "string") {
          for (var b = z.stack.split(`
`), A = s.stack.split(`
`), R = b.length - 1, O = A.length - 1; R >= 1 && O >= 0 && b[R] !== A[O]; )
            O--;
          for (; R >= 1 && O >= 0; R--, O--)
            if (b[R] !== A[O]) {
              if (R !== 1 || O !== 1)
                do
                  if (R--, O--, O < 0 || b[R] !== A[O]) {
                    var D = `
` + b[R].replace(" at new ", " at ");
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, D), D;
                  }
                while (R >= 1 && O >= 0);
              break;
            }
        }
      } finally {
        $ = !1, re.current = p, Ee(), Error.prepareStackTrace = y;
      }
      var pe = e ? e.displayName || e.name : "", W = pe ? Z(pe) : "";
      return typeof e == "function" && te.set(e, W), W;
    }
    function Je(e, t, a) {
      return Oe(e, !1);
    }
    function Xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function fe(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, Xe(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case h:
          return Z("Suspense");
        case v:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Je(e.render);
          case w:
            return fe(e.type, t, a);
          case x: {
            var s = e, y = s._payload, p = s._init;
            try {
              return fe(p(y), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Se = {}, Ce = k.ReactDebugCurrentFrame;
    function de(e) {
      if (e) {
        var t = e._owner, a = fe(e.type, e._source, t ? t.type : null);
        Ce.setExtraStackFrame(a);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(e, t, a, s, y) {
      {
        var p = Function.call.bind(ue);
        for (var u in e)
          if (p(e, u)) {
            var b = void 0;
            try {
              if (typeof e[u] != "function") {
                var A = Error((s || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              b = e[u](t, u, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              b = R;
            }
            b && !(b instanceof Error) && (de(y), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, u, typeof b), de(null)), b instanceof Error && !(b.message in Se) && (Se[b.message] = !0, de(y), _("Failed %s type: %s", a, b.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function _e(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), Te(e);
    }
    var Ne = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Le;
    function ar(e) {
      if (ue.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function nr(e) {
      if (ue.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, t) {
      typeof e.ref == "string" && Ne.current;
    }
    function ir(e, t) {
      {
        var a = function() {
          Pe || (Pe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function lr(e, t) {
      {
        var a = function() {
          Le || (Le = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var sr = function(e, t, a, s, y, p, u) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
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
        value: s
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function cr(e, t, a, s, y) {
      {
        var p, u = {}, b = null, A = null;
        a !== void 0 && (Me(a), b = "" + a), nr(t) && (Me(t.key), b = "" + t.key), ar(t) && (A = t.ref, or(t));
        for (p in t)
          ue.call(t, p) && !tr.hasOwnProperty(p) && (u[p] = t[p]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (p in R)
            u[p] === void 0 && (u[p] = R[p]);
        }
        if (b || A) {
          var O = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && ir(u, O), A && lr(u, O);
        }
        return sr(e, b, A, y, s, Ne.current, u);
      }
    }
    var we = k.ReactCurrentOwner, Ze = k.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var t = e._owner, a = fe(e.type, e._source, t ? t.type : null);
        Ze.setExtraStackFrame(a);
      } else
        Ze.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Fe() {
      {
        if (we.current) {
          var e = N(we.current.type);
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
        var t = Fe();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function De(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = fr(t);
        if ($e[a])
          return;
        $e[a] = !0;
        var s = "";
        e && e._owner && e._owner !== we.current && (s = " It was passed a child from " + N(e._owner.type) + "."), G(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), G(null);
      }
    }
    function Ie(e, t) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            Re(s) && De(s, t);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var y = C(e);
          if (typeof y == "function" && y !== e.entries)
            for (var p = y.call(e), u; !(u = p.next()).done; )
              Re(u.value) && De(u.value, t);
        }
      }
    }
    function dr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === w))
          a = t.propTypes;
        else
          return;
        if (a) {
          var s = N(t);
          Ge(a, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !xe) {
          xe = !0;
          var y = N(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var s = t[a];
          if (s !== "children" && s !== "key") {
            G(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var We = {};
    function ze(e, t, a, s, y, p) {
      {
        var u = ae(e);
        if (!u) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = ur();
          A ? b += A : b += Fe();
          var R;
          e === null ? R = "null" : _e(e) ? R = "array" : e !== void 0 && e.$$typeof === i ? (R = "<" + (N(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, b);
        }
        var O = cr(e, t, a, y, p);
        if (O == null)
          return O;
        if (u) {
          var D = t.children;
          if (D !== void 0)
            if (s)
              if (_e(D)) {
                for (var pe = 0; pe < D.length; pe++)
                  Ie(D[pe], e);
                Object.freeze && Object.freeze(D);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(D, e);
        }
        if (ue.call(t, "key")) {
          var W = N(e), z = Object.keys(t).filter(function(zr) {
            return zr !== "key";
          }), hr = z.length > 0 ? "{key: someKey, " + z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!We[W + hr]) {
            var Br = z.length > 0 ? "{" + z.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, hr, W, Br, W), We[W + hr] = !0;
          }
        }
        return e === l ? pr(O) : dr(O), O;
      }
    }
    function mr(e, t, a) {
      return ze(e, t, a, !0);
    }
    function vr(e, t, a) {
      return ze(e, t, a, !1);
    }
    var yr = vr, r = mr;
    He.Fragment = l, He.jsx = yr, He.jsxs = r;
  }()), He;
}
process.env.NODE_ENV === "production" ? gr.exports = qr() : gr.exports = Kr();
var he = gr.exports;
function Lr(o) {
  var i, c, l = "";
  if (typeof o == "string" || typeof o == "number") l += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var f = o.length;
    for (i = 0; i < f; i++) o[i] && (c = Lr(o[i])) && (l && (l += " "), l += c);
  } else for (c in o) o[c] && (l && (l += " "), l += c);
  return l;
}
function qe() {
  for (var o, i, c = 0, l = "", f = arguments.length; c < f; c++) (o = arguments[c]) && (i = Lr(o)) && (l && (l += " "), l += i);
  return l;
}
const Zr = ge(
  ({
    // Layout
    display: o = "block",
    // Flexbox
    flexDirection: i,
    justifyContent: c,
    alignItems: l,
    flexWrap: f,
    gap: g,
    // Grid
    gridTemplateColumns: E,
    gridTemplateRows: m,
    gridGap: d,
    // Spacing
    padding: h,
    margin: v,
    paddingTop: w,
    paddingBottom: x,
    paddingLeft: S,
    paddingRight: T,
    // Dimensions
    width: P,
    height: C,
    minWidth: k,
    maxWidth: _,
    minHeight: M,
    maxHeight: H,
    // Colors
    backgroundColor: se,
    color: ce,
    borderColor: q,
    borderWidth: Q,
    borderRadius: K,
    // Position
    position: ae = "static",
    top: ne,
    right: V,
    bottom: N,
    left: L,
    zIndex: I,
    // Other
    opacity: J,
    overflow: oe,
    cursor: ee,
    // Base props
    className: U,
    style: X,
    children: B,
    testID: F,
    responsive: Y,
    // Rest for any additional HTML attributes
    ...be
  }, Ee) => {
    const re = Ae(() => {
      if (!Y) return {};
      const $ = {};
      return Y.mobile && Object.assign($, Y.mobile), Y.tablet && ($["@media (min-width: 768px)"] = Y.tablet), Y.desktop && ($["@media (min-width: 1024px)"] = Y.desktop), $;
    }, [Y]), ie = Ae(() => {
      const $ = {
        display: o,
        flexDirection: i,
        justifyContent: c,
        alignItems: l,
        flexWrap: f,
        gap: g,
        gridTemplateColumns: E,
        gridTemplateRows: m,
        gridGap: d,
        padding: h,
        margin: v,
        paddingTop: w,
        paddingBottom: x,
        paddingLeft: S,
        paddingRight: T,
        width: P,
        height: C,
        minWidth: k,
        maxWidth: _,
        minHeight: M,
        maxHeight: H,
        backgroundColor: se,
        color: ce,
        borderColor: q,
        borderWidth: Q,
        borderRadius: K,
        position: ae,
        top: ne,
        right: V,
        bottom: N,
        left: L,
        zIndex: I,
        opacity: J,
        overflow: oe,
        cursor: ee,
        ...re,
        ...X
      };
      return Object.keys($).forEach((te) => {
        $[te] === void 0 && delete $[te];
      }), $;
    }, [
      o,
      i,
      c,
      l,
      f,
      g,
      E,
      m,
      d,
      h,
      v,
      w,
      x,
      S,
      T,
      P,
      C,
      k,
      _,
      M,
      H,
      se,
      ce,
      q,
      Q,
      K,
      ae,
      ne,
      V,
      N,
      L,
      I,
      J,
      oe,
      ee,
      re,
      X
    ]), Z = qe(
      "box",
      o && `box--display-${o}`,
      U
    );
    return /* @__PURE__ */ he.jsx(
      "div",
      {
        ref: Ee,
        className: Z,
        style: ie,
        "data-testid": F,
        ...be,
        children: B
      }
    );
  }
);
Zr.displayName = "Box";
const Er = ge(
  ({
    variant: o = "body1",
    weight: i,
    color: c,
    align: l = "left",
    textDecoration: f = "none",
    textTransform: g = "none",
    lineHeight: E,
    letterSpacing: m,
    isNoWrap: d = !1,
    numberOfLines: h,
    fontSize: v,
    className: w,
    style: x,
    children: S,
    testID: T,
    ...P
  }, C) => {
    const k = Ae(() => {
      const M = {
        textAlign: l,
        textDecoration: f,
        textTransform: g,
        lineHeight: E,
        letterSpacing: m,
        fontSize: v,
        color: c,
        fontWeight: i,
        ...x
      };
      return h && (M.display = "-webkit-box", M.WebkitLineClamp = h, M.WebkitBoxOrient = "vertical", M.overflow = "hidden"), d && (M.whiteSpace = "nowrap", M.overflow = "hidden", M.textOverflow = "ellipsis"), Object.keys(M).forEach((H) => {
        M[H] === void 0 && delete M[H];
      }), M;
    }, [
      l,
      f,
      g,
      E,
      m,
      v,
      c,
      i,
      h,
      d,
      x
    ]), _ = qe(
      "text",
      `text--variant-${o}`,
      i && `text--weight-${i}`,
      l && `text--align-${l}`,
      d && "text--no-wrap",
      h && "text--truncate",
      w
    );
    return /* @__PURE__ */ he.jsx(
      "p",
      {
        ref: C,
        className: _,
        style: k,
        "data-testid": T,
        ...P,
        children: S
      }
    );
  }
);
Er.displayName = "Text";
const _r = ge(
  ({
    // Interaction handlers
    onPress: o,
    onClick: i,
    onFocus: c,
    onBlur: l,
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
    as: w = "button",
    href: x,
    tabIndex: S = 0,
    // Accessibility
    role: T,
    ariaLabel: P,
    ariaProps: C = {},
    // Base props
    className: k,
    style: _,
    children: M,
    testID: H,
    // Rest for any additional HTML attributes
    ...se
  }, ce) => {
    const [q, Q] = ye(!1), [K, ae] = ye(!1), [ne, V] = ye(!1), N = ve(
      (F) => {
        m || (Q(!0), f == null || f(F));
      },
      [m, f]
    ), L = ve(
      (F) => {
        m || (Q(!1), g == null || g(F), q && (o == null || o(), i == null || i(F)));
      },
      [m, q, o, i, g]
    ), I = ve(() => {
      m || ae(!0);
    }, [m]), J = ve(
      (F) => {
        m || (Q(!1), ae(!1), E == null || E(F));
      },
      [m, E]
    ), oe = ve(
      (F) => {
        m || (V(!0), c == null || c(F));
      },
      [m, c]
    ), ee = ve(
      (F) => {
        V(!1), l == null || l(F);
      },
      [l]
    ), U = {
      ..._,
      ...q && d,
      ...K && h,
      ...ne && v
    }, X = qe(
      "pressable",
      m && "pressable--disabled",
      q && "pressable--pressed",
      K && "pressable--hovered",
      ne && "pressable--focused",
      k
    ), B = {
      ref: ce,
      className: X,
      style: U,
      "data-testid": H,
      "aria-disabled": m,
      "aria-label": P,
      tabIndex: m ? -1 : S,
      role: T,
      onMouseEnter: I,
      onMouseLeave: J,
      onMouseDown: N,
      onMouseUp: L,
      onFocus: oe,
      onBlur: ee,
      ...C,
      ...se
    };
    return w === "a" ? /* @__PURE__ */ he.jsx("a", { ...B, href: m ? void 0 : x, children: M }) : w === "div" ? /* @__PURE__ */ he.jsx("div", { ...B, children: M }) : /* @__PURE__ */ he.jsx(
      "button",
      {
        ...B,
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
}, Fr = ge(
  ({
    name: o,
    size: i = "md",
    color: c,
    variant: l = "outlined",
    rotate: f = 0,
    flip: g,
    className: E,
    style: m,
    testID: d,
    ariaLabel: h = "",
    role: v = "img",
    ...w
  }, x) => {
    const S = Ae(() => typeof i == "number" ? `${i}px` : Jr[i] || i, [i]), T = Ae(() => {
      const C = {
        width: S,
        height: S,
        color: c,
        transform: "",
        ...m
      };
      return f && (C.transform = `rotate(${f}deg)`), g === "horizontal" ? C.transform = `${C.transform} scaleX(-1)`.trim() : g === "vertical" ? C.transform = `${C.transform} scaleY(-1)`.trim() : g === "both" && (C.transform = `${C.transform} scale(-1, -1)`.trim()), C;
    }, [S, c, f, g, m]), P = qe(
      "icon",
      `icon--variant-${l}`,
      E
    );
    return /* @__PURE__ */ he.jsxs(
      "svg",
      {
        ref: x,
        className: P,
        style: T,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "data-testid": d,
        "aria-label": h,
        role: h ? v : void 0,
        "aria-hidden": !h,
        ...w,
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
              children: o.slice(0, 2)
            }
          )
        ]
      }
    );
  }
);
Fr.displayName = "Icon";
var br = { exports: {} }, Ye = {};
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
  if (Cr) return Ye;
  Cr = 1;
  var o = me, i = Symbol.for("react.element"), c = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(m, d, h) {
    var v, w = {}, x = null, S = null;
    h !== void 0 && (x = "" + h), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (S = d.ref);
    for (v in d) l.call(d, v) && !g.hasOwnProperty(v) && (w[v] = d[v]);
    if (m && m.defaultProps) for (v in d = m.defaultProps, d) w[v] === void 0 && (w[v] = d[v]);
    return { $$typeof: i, type: m, key: x, ref: S, props: w, _owner: f.current };
  }
  return Ye.Fragment = c, Ye.jsx = E, Ye.jsxs = E, Ye;
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
var Tr;
function Gr() {
  return Tr || (Tr = 1, process.env.NODE_ENV !== "production" && function() {
    var o = me, i = Symbol.for("react.element"), c = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), m = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), T = Symbol.iterator, P = "@@iterator";
    function C(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = T && r[T] || r[P];
      return typeof e == "function" ? e : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(r) {
      {
        for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++)
          t[a - 1] = arguments[a];
        M("error", r, t);
      }
    }
    function M(r, e, t) {
      {
        var a = k.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (e += "%s", t = t.concat([s]));
        var y = t.map(function(p) {
          return String(p);
        });
        y.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var H = !1, se = !1, ce = !1, q = !1, Q = !1, K;
    K = Symbol.for("react.module.reference");
    function ae(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === g || Q || r === f || r === h || r === v || q || r === S || H || se || ce || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === w || r.$$typeof === E || r.$$typeof === m || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === K || r.getModuleId !== void 0));
    }
    function ne(r, e, t) {
      var a = r.displayName;
      if (a)
        return a;
      var s = e.displayName || e.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function V(r) {
      return r.displayName || "Context";
    }
    function N(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case c:
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
            return V(e) + ".Consumer";
          case E:
            var t = r;
            return V(t._context) + ".Provider";
          case d:
            return ne(r, r.render, "ForwardRef");
          case w:
            var a = r.displayName || null;
            return a !== null ? a : N(r.type) || "Memo";
          case x: {
            var s = r, y = s._payload, p = s._init;
            try {
              return N(p(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, I = 0, J, oe, ee, U, X, B, F;
    function Y() {
    }
    Y.__reactDisabledLog = !0;
    function be() {
      {
        if (I === 0) {
          J = console.log, oe = console.info, ee = console.warn, U = console.error, X = console.group, B = console.groupCollapsed, F = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Y,
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
        I++;
      }
    }
    function Ee() {
      {
        if (I--, I === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, r, {
              value: J
            }),
            info: L({}, r, {
              value: oe
            }),
            warn: L({}, r, {
              value: ee
            }),
            error: L({}, r, {
              value: U
            }),
            group: L({}, r, {
              value: X
            }),
            groupCollapsed: L({}, r, {
              value: B
            }),
            groupEnd: L({}, r, {
              value: F
            })
          });
        }
        I < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = k.ReactCurrentDispatcher, ie;
    function Z(r, e, t) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            ie = a && a[1] || "";
          }
        return `
` + ie + r;
      }
    }
    var $ = !1, te;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Ke();
    }
    function Oe(r, e) {
      if (!r || $)
        return "";
      {
        var t = te.get(r);
        if (t !== void 0)
          return t;
      }
      var a;
      $ = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = re.current, re.current = null, be();
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
            } catch (W) {
              a = W;
            }
            Reflect.construct(r, [], p);
          } else {
            try {
              p.call();
            } catch (W) {
              a = W;
            }
            r.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            a = W;
          }
          r();
        }
      } catch (W) {
        if (W && a && typeof W.stack == "string") {
          for (var u = W.stack.split(`
`), b = a.stack.split(`
`), A = u.length - 1, R = b.length - 1; A >= 1 && R >= 0 && u[A] !== b[R]; )
            R--;
          for (; A >= 1 && R >= 0; A--, R--)
            if (u[A] !== b[R]) {
              if (A !== 1 || R !== 1)
                do
                  if (A--, R--, R < 0 || u[A] !== b[R]) {
                    var O = `
` + u[A].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && te.set(r, O), O;
                  }
                while (A >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        $ = !1, re.current = y, Ee(), Error.prepareStackTrace = s;
      }
      var D = r ? r.displayName || r.name : "", pe = D ? Z(D) : "";
      return typeof r == "function" && te.set(r, pe), pe;
    }
    function Je(r, e, t) {
      return Oe(r, !1);
    }
    function Xe(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function fe(r, e, t) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Oe(r, Xe(r));
      if (typeof r == "string")
        return Z(r);
      switch (r) {
        case h:
          return Z("Suspense");
        case v:
          return Z("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return Je(r.render);
          case w:
            return fe(r.type, e, t);
          case x: {
            var a = r, s = a._payload, y = a._init;
            try {
              return fe(y(s), e, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ue = Object.prototype.hasOwnProperty, Se = {}, Ce = k.ReactDebugCurrentFrame;
    function de(r) {
      if (r) {
        var e = r._owner, t = fe(r.type, r._source, e ? e.type : null);
        Ce.setExtraStackFrame(t);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Ge(r, e, t, a, s) {
      {
        var y = Function.call.bind(ue);
        for (var p in r)
          if (y(r, p)) {
            var u = void 0;
            try {
              if (typeof r[p] != "function") {
                var b = Error((a || "React class") + ": " + t + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              u = r[p](e, p, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (A) {
              u = A;
            }
            u && !(u instanceof Error) && (de(s), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, p, typeof u), de(null)), u instanceof Error && !(u.message in Se) && (Se[u.message] = !0, de(s), _("Failed %s type: %s", t, u.message), de(null));
          }
      }
    }
    var Qe = Array.isArray;
    function _e(r) {
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(r)), Te(r);
    }
    var Ne = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Le;
    function ar(r) {
      if (ue.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function nr(r) {
      if (ue.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function or(r, e) {
      typeof r.ref == "string" && Ne.current;
    }
    function ir(r, e) {
      {
        var t = function() {
          Pe || (Pe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(r, e) {
      {
        var t = function() {
          Le || (Le = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        t.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var sr = function(r, e, t, a, s, y, p) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
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
        value: a
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(r, e, t, a, s) {
      {
        var y, p = {}, u = null, b = null;
        t !== void 0 && (Me(t), u = "" + t), nr(e) && (Me(e.key), u = "" + e.key), ar(e) && (b = e.ref, or(e, s));
        for (y in e)
          ue.call(e, y) && !tr.hasOwnProperty(y) && (p[y] = e[y]);
        if (r && r.defaultProps) {
          var A = r.defaultProps;
          for (y in A)
            p[y] === void 0 && (p[y] = A[y]);
        }
        if (u || b) {
          var R = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          u && ir(p, R), b && lr(p, R);
        }
        return sr(r, u, b, s, a, Ne.current, p);
      }
    }
    var we = k.ReactCurrentOwner, Ze = k.ReactDebugCurrentFrame;
    function G(r) {
      if (r) {
        var e = r._owner, t = fe(r.type, r._source, e ? e.type : null);
        Ze.setExtraStackFrame(t);
      } else
        Ze.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function Re(r) {
      return typeof r == "object" && r !== null && r.$$typeof === i;
    }
    function Fe() {
      {
        if (we.current) {
          var r = N(we.current.type);
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
        var e = Fe();
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
        var a = "";
        r && r._owner && r._owner !== we.current && (a = " It was passed a child from " + N(r._owner.type) + "."), G(r), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), G(null);
      }
    }
    function Ie(r, e) {
      {
        if (typeof r != "object")
          return;
        if (_e(r))
          for (var t = 0; t < r.length; t++) {
            var a = r[t];
            Re(a) && De(a, e);
          }
        else if (Re(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var s = C(r);
          if (typeof s == "function" && s !== r.entries)
            for (var y = s.call(r), p; !(p = y.next()).done; )
              Re(p.value) && De(p.value, e);
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
        e.$$typeof === w))
          t = e.propTypes;
        else
          return;
        if (t) {
          var a = N(e);
          Ge(t, r.props, "prop", a, r);
        } else if (e.PropTypes !== void 0 && !xe) {
          xe = !0;
          var s = N(e);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(r) {
      {
        for (var e = Object.keys(r.props), t = 0; t < e.length; t++) {
          var a = e[t];
          if (a !== "children" && a !== "key") {
            G(r), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), G(null);
            break;
          }
        }
        r.ref !== null && (G(r), _("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function We(r, e, t, a, s, y) {
      {
        var p = ae(r);
        if (!p) {
          var u = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ur();
          b ? u += b : u += Fe();
          var A;
          r === null ? A = "null" : _e(r) ? A = "array" : r !== void 0 && r.$$typeof === i ? (A = "<" + (N(r.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : A = typeof r, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", A, u);
        }
        var R = cr(r, e, t, s, y);
        if (R == null)
          return R;
        if (p) {
          var O = e.children;
          if (O !== void 0)
            if (a)
              if (_e(O)) {
                for (var D = 0; D < O.length; D++)
                  Ie(O[D], r);
                Object.freeze && Object.freeze(O);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ie(O, r);
        }
        return r === l ? pr(R) : dr(R), R;
      }
    }
    function ze(r, e, t) {
      return We(r, e, t, !0);
    }
    function mr(r, e, t) {
      return We(r, e, t, !1);
    }
    var vr = mr, yr = ze;
    Ue.Fragment = l, Ue.jsx = vr, Ue.jsxs = yr;
  }()), Ue;
}
process.env.NODE_ENV === "production" ? br.exports = Xr() : br.exports = Gr();
var j = br.exports;
function $r(o) {
  var i, c, l = "";
  if (typeof o == "string" || typeof o == "number") l += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var f = o.length;
    for (i = 0; i < f; i++) o[i] && (c = $r(o[i])) && (l && (l += " "), l += c);
  } else for (c in o) o[c] && (l && (l += " "), l += c);
  return l;
}
function je() {
  for (var o, i, c = 0, l = "", f = arguments.length; c < f; c++) (o = arguments[c]) && (i = $r(o)) && (l && (l += " "), l += i);
  return l;
}
const Qr = ge(
  ({
    variant: o = "primary",
    size: i = "md",
    color: c = "primary",
    disabled: l = !1,
    loading: f = !1,
    fullWidth: g = !1,
    onPress: E,
    onClick: m,
    onFocus: d,
    onBlur: h,
    onMouseDown: v,
    onMouseUp: w,
    onMouseLeave: x,
    className: S,
    children: T,
    testID: P,
    icon: C,
    ...k
  }, _) => {
    const M = je(
      "button",
      `button--${o}`,
      `button--${i}`,
      `button--${c}`,
      g && "button--full-width",
      l && "button--disabled",
      f && "button--loading",
      S
    );
    return /* @__PURE__ */ j.jsxs(
      _r,
      {
        ref: _,
        className: M,
        disabled: l || f,
        onPress: E,
        onClick: m,
        onFocus: d,
        onBlur: h,
        onMouseDown: v,
        onMouseUp: w,
        onMouseLeave: x,
        testID: P,
        "aria-busy": f,
        ...k,
        children: [
          f && /* @__PURE__ */ j.jsx("span", { className: "button__spinner", "aria-hidden": "true", children: /* @__PURE__ */ j.jsx("span", { className: "sr-only", children: "Loading..." }) }),
          C && !f && /* @__PURE__ */ j.jsx(Fr, { name: C, size: i, className: "button__icon", "aria-hidden": "true" }),
          T && /* @__PURE__ */ j.jsx(Er, { variant: "button", className: "button__content", children: T })
        ]
      }
    );
  }
);
Qr.displayName = "Button";
const Dr = ge(
  ({
    elevation: o = "md",
    padding: i = "md",
    radius: c = "md",
    isPressable: l = !1,
    pressableAs: f = "button",
    onPress: g,
    onClick: E,
    onFocus: m,
    onBlur: d,
    onMouseDown: h,
    onMouseUp: v,
    onMouseLeave: w,
    className: x,
    children: S,
    testID: T,
    ...P
  }, C) => {
    const _ = {
      className: je(
        "card",
        `card--elevation-${o}`,
        `card--padding-${i}`,
        `card--radius-${c}`,
        l && "card--pressable",
        x
      ),
      testID: T,
      ...P
    };
    return l ? /* @__PURE__ */ j.jsx(
      _r,
      {
        ref: C,
        as: f,
        onPress: g,
        onClick: E,
        onFocus: m,
        onBlur: d,
        onMouseDown: h,
        onMouseUp: v,
        onMouseLeave: w,
        ..._,
        children: S
      }
    ) : /* @__PURE__ */ j.jsx(Zr, { ref: C, ..._, children: S });
  }
);
Dr.displayName = "Card";
const vt = Mr(Dr), et = ge(
  ({
    value: o,
    defaultValue: i,
    placeholder: c,
    type: l = "text",
    variant: f = "outline",
    size: g = "md",
    state: E = "default",
    disabled: m = !1,
    fullWidth: d = !1,
    readOnly: h = !1,
    required: v = !1,
    label: w,
    helperText: x,
    errorText: S,
    className: T,
    onChange: P,
    onChangeText: C,
    onFocus: k,
    onBlur: _,
    onSubmit: M,
    testID: H,
    name: se,
    autoComplete: ce,
    minLength: q,
    maxLength: Q,
    pattern: K,
    ...ae
  }, ne) => {
    const V = `input-${Math.random().toString(36).substr(2, 9)}`, [N, L] = ye(() => i || ""), [I, J] = ye(!1), ee = o !== void 0 ? o : N, U = E === "error" && !!S, X = `${V}-helper`, B = `${V}-error`, F = (Z) => {
      const $ = Z.target.value;
      o === void 0 && L($), P == null || P(Z), C && C($);
    }, Y = (Z) => {
      J(!0), k == null || k(Z);
    }, be = (Z) => {
      J(!1), _ == null || _(Z);
    }, Ee = (Z) => {
      Z.key === "Enter" && M && M(Z);
    }, re = je(
      "input__container",
      `input__container--${g}`,
      d && "input__container--full-width"
    ), ie = je(
      "input",
      `input--${f}`,
      `input--${g}`,
      `input--${E}`,
      I && "input--focused",
      m && "input--disabled",
      h && "input--read-only",
      T
    );
    return /* @__PURE__ */ j.jsxs("div", { className: re, children: [
      w && /* @__PURE__ */ j.jsxs("label", { className: "input__label", htmlFor: V, children: [
        w,
        v && /* @__PURE__ */ j.jsx("span", { className: "input__required", "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ j.jsx(
        "input",
        {
          ref: ne,
          id: V,
          type: l,
          className: ie,
          value: ee,
          placeholder: c,
          disabled: m,
          readOnly: h,
          required: v,
          onChange: F,
          onFocus: Y,
          onBlur: be,
          onKeyDown: Ee,
          "data-testid": H,
          name: se,
          autoComplete: ce,
          minLength: q,
          maxLength: Q,
          pattern: K,
          "aria-invalid": E === "error",
          "aria-describedby": U ? B : x ? X : void 0,
          "aria-required": v,
          ...ae
        }
      ),
      (x || U) && /* @__PURE__ */ j.jsx("div", { className: "input__helper", id: U ? B : X, children: U ? /* @__PURE__ */ j.jsx("span", { className: "input__error", role: "alert", children: S }) : /* @__PURE__ */ j.jsx("span", { className: "input__helper-text", children: x }) })
    ] });
  }
);
et.displayName = "Input";
const rt = Nr({
  color: "currentColor",
  size: "1em",
  weight: "regular",
  mirrored: !1
}), ke = n.forwardRef(
  (o, i) => {
    const {
      alt: c,
      color: l,
      size: f,
      weight: g,
      mirrored: E,
      children: m,
      weights: d,
      ...h
    } = o, {
      color: v = "currentColor",
      size: w,
      weight: x = "regular",
      mirrored: S = !1,
      ...T
    } = n.useContext(rt);
    return /* @__PURE__ */ n.createElement(
      "svg",
      {
        ref: i,
        xmlns: "http://www.w3.org/2000/svg",
        width: f ?? w,
        height: f ?? w,
        fill: l ?? v,
        viewBox: "0 0 256 256",
        transform: E || S ? "scale(-1, 1)" : void 0,
        ...T,
        ...h
      },
      !!c && /* @__PURE__ */ n.createElement("title", null, c),
      m,
      d.get(g ?? x)
    );
  }
);
ke.displayName = "IconBase";
const tt = /* @__PURE__ */ new Map([
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
]), Ir = n.forwardRef((o, i) => /* @__PURE__ */ n.createElement(ke, { ref: i, ...o, weights: tt }));
Ir.displayName = "CheckCircleIcon";
const at = /* @__PURE__ */ new Map([
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
]), wr = n.forwardRef((o, i) => /* @__PURE__ */ n.createElement(ke, { ref: i, ...o, weights: at }));
wr.displayName = "XIcon";
const nt = /* @__PURE__ */ new Map([
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
]), Wr = n.forwardRef((o, i) => /* @__PURE__ */ n.createElement(ke, { ref: i, ...o, weights: nt }));
Wr.displayName = "XCircleIcon";
const ot = /* @__PURE__ */ new Map([
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
]), Vr = n.forwardRef((o, i) => /* @__PURE__ */ n.createElement(ke, { ref: i, ...o, weights: ot }));
Vr.displayName = "InfoIcon";
const it = /* @__PURE__ */ new Map([
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
]), Yr = n.forwardRef((o, i) => /* @__PURE__ */ n.createElement(ke, { ref: i, ...o, weights: it }));
Yr.displayName = "WarningCircleIcon";
const xr = ({
  title: o,
  showCloseButton: i = !0,
  onClose: c,
  className: l,
  testID: f
}) => {
  const g = je("modal__header", l);
  return /* @__PURE__ */ j.jsxs("div", { className: g, "data-testid": f, children: [
    o && /* @__PURE__ */ j.jsx("h2", { className: "modal__title", id: `${f || "modal"}-title`, children: o }),
    i && /* @__PURE__ */ j.jsx(
      "button",
      {
        className: "modal__close",
        onClick: c,
        "aria-label": "Close modal",
        type: "button",
        "data-testid": f ? `${f}-close` : "modal-close",
        children: /* @__PURE__ */ j.jsx(wr, { size: 20, weight: "regular" })
      }
    )
  ] });
}, Rr = ({
  size: o = "md",
  prefersReduced: i = !1,
  children: c,
  className: l,
  testID: f,
  modalId: g,
  titleId: E
}) => {
  const m = je(
    "modal",
    `modal--${o}`,
    i && "modal--no-animation",
    l
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
      children: c
    }
  );
}, jr = ({
  closeOnBackdropPress: o = !0,
  onClose: i,
  prefersReduced: c = !1,
  className: l,
  testID: f
}) => {
  const g = je(
    "modal-overlay",
    c && "modal-overlay--no-animation",
    l
  );
  return /* @__PURE__ */ j.jsx(
    "div",
    {
      className: g,
      "data-testid": f || "modal-overlay",
      role: "presentation",
      children: o ? /* @__PURE__ */ j.jsx(
        "button",
        {
          className: "modal-overlay__backdrop",
          onClick: i,
          "aria-label": "Close modal",
          type: "button",
          "data-testid": f ? `${f}-backdrop` : "modal-backdrop"
        }
      ) : /* @__PURE__ */ j.jsx("div", { className: "modal-overlay__backdrop", "aria-hidden": "true" })
    }
  );
}, lt = Nr(void 0), Ar = ({
  visible: o,
  onClose: i,
  modalRef: c,
  children: l
}) => {
  const [f, g] = ye(o), E = Pr(null);
  Be(() => {
    const d = (h) => {
      h.key === "Escape" && o && i && i();
    };
    return o && (document.addEventListener("keydown", d), E.current = document.activeElement), () => {
      document.removeEventListener("keydown", d);
    };
  }, [o, i]), Be(() => {
    if (!o || !c.current)
      return;
    const d = Array.from(
      c.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ), h = d[0], v = d[d.length - 1];
    h == null || h.focus();
    const w = (x) => {
      x.key === "Tab" && (x.shiftKey ? document.activeElement === h && (x.preventDefault(), v == null || v.focus()) : document.activeElement === v && (x.preventDefault(), h == null || h.focus()));
    };
    return document.addEventListener("keydown", w), () => {
      var x;
      document.removeEventListener("keydown", w), (x = E.current) == null || x.focus();
    };
  }, [o]), Be(() => (o ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [o]);
  const m = {
    isOpen: f,
    onClose: ve(() => {
      g(!1), i();
    }, [i]),
    modalRef: c,
    previousActiveElement: E
  };
  return o ? /* @__PURE__ */ j.jsx(lt.Provider, { value: m, children: l }) : null;
}, kr = ({
  children: o,
  className: i,
  testID: c
}) => /* @__PURE__ */ j.jsx("div", { className: `modal__body ${i || ""}`, "data-testid": c, children: o });
function st() {
  return typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function ct() {
  const [o, i] = me.useState(() => st());
  return me.useEffect(() => {
    if (typeof window > "u")
      return;
    const c = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => i(c.matches);
    return c.addEventListener("change", l), () => c.removeEventListener("change", l);
  }, []), o;
}
const le = ({
  visible: o = !1,
  title: i,
  size: c = "md",
  closeOnBackdropPress: l = !0,
  showCloseButton: f = !0,
  onClose: g = () => {
  },
  children: E,
  testID: m = "modal"
}) => {
  const d = Pr(null), h = ct();
  return o ? Hr(/* @__PURE__ */ j.jsx(Ar, { visible: o, onClose: g, modalRef: d, children: /* @__PURE__ */ j.jsx(
    jr,
    {
      closeOnBackdropPress: l,
      onClose: g,
      prefersReduced: h,
      testID: m,
      children: /* @__PURE__ */ j.jsxs(Rr, { size: c, prefersReduced: h, testID: m, children: [
        (i || f) && /* @__PURE__ */ j.jsx(
          xr,
          {
            title: i,
            showCloseButton: f,
            onClose: g,
            testID: m
          }
        ),
        /* @__PURE__ */ j.jsx(kr, { children: E })
      ] })
    }
  ) }), document.body) : null;
};
le.Header = xr;
le.Content = Rr;
le.Overlay = jr;
le.Provider = Ar;
le.Body = kr;
le.displayName = "Modal";
le.Header = xr;
le.Content = Rr;
le.Overlay = jr;
le.Provider = Ar;
le.Body = kr;
function ut(o = "component") {
  return `${o}-${Math.random().toString(36).substr(2, 9)}`;
}
function ft() {
  const [o, i] = me.useState(() => typeof window > "u" ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return me.useEffect(() => {
    if (typeof window > "u")
      return;
    const c = window.matchMedia("(prefers-reduced-motion: reduce)"), l = () => i(c.matches);
    return c.addEventListener("change", l), () => c.removeEventListener("change", l);
  }, []), o;
}
const Ur = me.forwardRef(({
  visible: o = !1,
  message: i,
  variant: c = "info",
  duration: l = 3e3,
  position: f = "top",
  onClose: g,
  testID: E
}, m) => {
  const [d, h] = ye(o), [v, w] = ye(!1), x = ft(), S = Ae(() => E || ut("toast"), [E]), T = ve(() => {
    w(!0), setTimeout(() => {
      h(!1), g == null || g();
    }, 300);
  }, [g]);
  Be(() => {
    o && (h(!0), w(!1));
  }, [o]), Be(() => {
    if (!d || l <= 0 || v)
      return;
    const k = setTimeout(() => {
      T();
    }, l);
    return () => clearTimeout(k);
  }, [d, l, v, T]);
  const P = () => {
    T();
  };
  if (!d || !i) return null;
  const C = () => {
    const k = {
      size: 24,
      weight: "regular"
    };
    switch (c) {
      case "success":
        return /* @__PURE__ */ j.jsx(Ir, { ...k });
      case "error":
        return /* @__PURE__ */ j.jsx(Wr, { ...k });
      case "warning":
        return /* @__PURE__ */ j.jsx(Yr, { ...k });
      default:
        return /* @__PURE__ */ j.jsx(Vr, { ...k });
    }
  };
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      ref: m,
      className: `toast toast--${c} toast--${f} ${v ? "toast--exiting" : ""} ${x ? "toast--no-animation" : ""}`,
      role: "alert",
      "aria-live": "polite",
      "aria-atomic": "true",
      "data-testid": S,
      children: [
        /* @__PURE__ */ j.jsx("div", { className: "toast__icon", children: C() }),
        /* @__PURE__ */ j.jsx("div", { className: "toast__message", children: i }),
        /* @__PURE__ */ j.jsx(
          "button",
          {
            className: "toast__close",
            onClick: P,
            "aria-label": "Close toast",
            type: "button",
            children: /* @__PURE__ */ j.jsx(wr, { size: 16, weight: "regular" })
          }
        )
      ]
    }
  );
});
Ur.displayName = "Toast";
const yt = Mr(Ur), dt = ge(
  ({ variant: o = "body1", weight: i, color: c, align: l, noWrap: f, numberOfLines: g, className: E, style: m, children: d, testID: h }, v) => /* @__PURE__ */ j.jsx(
    Er,
    {
      ref: v,
      variant: o,
      weight: i,
      color: c,
      align: l,
      isNoWrap: f,
      numberOfLines: g,
      className: E,
      style: m,
      testID: h,
      children: d
    }
  )
);
dt.displayName = "Typography";
export {
  Zr as Box,
  Qr as Button,
  vt as Card,
  Fr as Icon,
  et as Input,
  le as Modal,
  _r as Pressable,
  Er as PrimitiveText,
  dt as Text,
  yt as Toast,
  dt as Typography
};
