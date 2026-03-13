export * from '@hi-design/tokens'

import le, {
  createElement as Ce,
  useState as ce,
  memo as fe,
  useEffect as G,
  useMemo as I,
  forwardRef as z,
  useRef as ze,
} from 'react'
import { createPortal as Rt } from 'react-dom'

var ke = { exports: {} },
  K = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He
function wt() {
  if (He) return K
  He = 1
  var n = le,
    i = Symbol.for('react.element'),
    s = Symbol.for('react.fragment'),
    a = Object.prototype.hasOwnProperty,
    d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 }
  function _(v, h, E) {
    var p,
      w = {},
      u = null,
      C = null
    E !== void 0 && (u = `${E}`),
      h.key !== void 0 && (u = `${h.key}`),
      h.ref !== void 0 && (C = h.ref)
    for (p in h) a.call(h, p) && !Object.hasOwn(c, p) && (w[p] = h[p])
    if (v?.defaultProps) for (p in ((h = v.defaultProps), h)) w[p] === void 0 && (w[p] = h[p])
    return { $$typeof: i, type: v, key: u, ref: C, props: w, _owner: d.current }
  }
  return (K.Fragment = s), (K.jsx = _), (K.jsxs = _), K
}
var J = {}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue
function xt() {
  return (
    Ue ||
      ((Ue = 1),
      process.env.NODE_ENV !== 'production' &&
        (() => {
          var n = le,
            i = Symbol.for('react.element'),
            s = Symbol.for('react.portal'),
            a = Symbol.for('react.fragment'),
            d = Symbol.for('react.strict_mode'),
            c = Symbol.for('react.profiler'),
            _ = Symbol.for('react.provider'),
            v = Symbol.for('react.context'),
            h = Symbol.for('react.forward_ref'),
            E = Symbol.for('react.suspense'),
            p = Symbol.for('react.suspense_list'),
            w = Symbol.for('react.memo'),
            u = Symbol.for('react.lazy'),
            C = Symbol.for('react.offscreen'),
            k = Symbol.iterator,
            R = '@@iterator'
          function P(e) {
            if (e === null || typeof e !== 'object') return null
            var t = (k && e[k]) || e[R]
            return typeof t === 'function' ? t : null
          }
          var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          function b(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
              r[o - 1] = arguments[o]
            H('error', e, r)
          }
          function H(e, t, r) {
            var o = T.ReactDebugCurrentFrame,
              m = o.getStackAddendum()
            m !== '' && ((t += '%s'), (r = r.concat([m])))
            var g = r.map((f) => String(f))
            g.unshift(`Warning: ${t}`), Function.prototype.apply.call(console[e], console, g)
          }
          var de = !1,
            he = !1,
            pe = !1,
            ve = !1,
            me = !1,
            Z
          Z = Symbol.for('react.module.reference')
          function ye(e) {
            return !!(
              typeof e === 'string' ||
              typeof e === 'function' ||
              e === a ||
              e === c ||
              me ||
              e === d ||
              e === E ||
              e === p ||
              ve ||
              e === C ||
              de ||
              he ||
              pe ||
              (typeof e === 'object' &&
                e !== null &&
                (e.$$typeof === u ||
                  e.$$typeof === w ||
                  e.$$typeof === _ ||
                  e.$$typeof === v ||
                  e.$$typeof === h || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  e.$$typeof === Z ||
                  e.getModuleId !== void 0))
            )
          }
          function D(e, t, r) {
            var o = e.displayName
            if (o) return o
            var m = t.displayName || t.name || ''
            return m !== '' ? `${r}(${m})` : r
          }
          function Q(e) {
            return e.displayName || 'Context'
          }
          function $(e) {
            if (e == null) return null
            if (
              (typeof e.tag === 'number' &&
                b(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
                ),
              typeof e === 'function')
            )
              return e.displayName || e.name || null
            if (typeof e === 'string') return e
            switch (e) {
              case a:
                return 'Fragment'
              case s:
                return 'Portal'
              case c:
                return 'Profiler'
              case d:
                return 'StrictMode'
              case E:
                return 'Suspense'
              case p:
                return 'SuspenseList'
            }
            if (typeof e === 'object')
              switch (e.$$typeof) {
                case v: {
                  var t = e
                  return `${Q(t)}.Consumer`
                }
                case _: {
                  var r = e
                  return `${Q(r._context)}.Provider`
                }
                case h:
                  return D(e, e.render, 'ForwardRef')
                case w: {
                  var o = e.displayName || null
                  return o !== null ? o : $(e.type) || 'Memo'
                }
                case u: {
                  var m = e,
                    g = m._payload,
                    f = m._init
                  try {
                    return $(f(g))
                  } catch {
                    return null
                  }
                }
              }
            return null
          }
          var A = Object.assign,
            F = 0,
            ge,
            ee,
            M,
            U,
            q,
            te,
            re
          function ne() {}
          ne.__reactDisabledLog = !0
          function _e() {
            if (F === 0) {
              ;(ge = console.log),
                (ee = console.info),
                (M = console.warn),
                (U = console.error),
                (q = console.group),
                (te = console.groupCollapsed),
                (re = console.groupEnd)
              var e = {
                configurable: !0,
                enumerable: !0,
                value: ne,
                writable: !0,
              }
              Object.defineProperties(console, {
                info: e,
                log: e,
                warn: e,
                error: e,
                group: e,
                groupCollapsed: e,
                groupEnd: e,
              })
            }
            F++
          }
          function be() {
            if ((F--, F === 0)) {
              var e = {
                configurable: !0,
                enumerable: !0,
                writable: !0,
              }
              Object.defineProperties(console, {
                log: A({}, e, {
                  value: ge,
                }),
                info: A({}, e, {
                  value: ee,
                }),
                warn: A({}, e, {
                  value: M,
                }),
                error: A({}, e, {
                  value: U,
                }),
                group: A({}, e, {
                  value: q,
                }),
                groupCollapsed: A({}, e, {
                  value: te,
                }),
                groupEnd: A({}, e, {
                  value: re,
                }),
              })
            }
            F < 0 &&
              b('disabledDepth fell below zero. This is a bug in React. Please file an issue.')
          }
          var B = T.ReactCurrentDispatcher,
            N
          function L(e, _t, _r) {
            if (N === void 0)
              try {
                throw Error()
              } catch (m) {
                var o = m.stack.trim().match(/\n( *(at )?)/)
                N = o?.[1] || ''
              }
            return (
              `
` +
              N +
              e
            )
          }
          var Ee = !1,
            ae
          var Qe = typeof WeakMap === 'function' ? WeakMap : Map
          ae = new Qe()
          function je(e, t) {
            if (!e || Ee) return ''
            var r = ae.get(e)
            if (r !== void 0) return r
            var o
            Ee = !0
            var m = Error.prepareStackTrace
            Error.prepareStackTrace = void 0
            var g
            ;(g = B.current), (B.current = null), _e()
            try {
              if (t) {
                var f = () => {
                  throw Error()
                }
                if (
                  (Object.defineProperty(f.prototype, 'props', {
                    set: () => {
                      throw Error()
                    },
                  }),
                  typeof Reflect === 'object' && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(f, [])
                  } catch (W) {
                    o = W
                  }
                  Reflect.construct(e, [], f)
                } else {
                  try {
                    f.call()
                  } catch (W) {
                    o = W
                  }
                  e.call(f.prototype)
                }
              } else {
                try {
                  throw Error()
                } catch (W) {
                  o = W
                }
                e()
              }
            } catch (W) {
              if (W && o && typeof W.stack === 'string') {
                for (
                  var l = W.stack.split(`
`),
                    j = o.stack.split(`
`),
                    x = l.length - 1,
                    S = j.length - 1;
                  x >= 1 && S >= 0 && l[x] !== j[S];
                )
                  S--
                for (; x >= 1 && S >= 0; x--, S--)
                  if (l[x] !== j[S]) {
                    if (x !== 1 || S !== 1)
                      do
                        if ((x--, S--, S < 0 || l[x] !== j[S])) {
                          var O = `
${l[x].replace(' at new ', ' at ')}`
                          return (
                            e.displayName &&
                              O.includes('<anonymous>') &&
                              (O = O.replace('<anonymous>', e.displayName)),
                            typeof e === 'function' && ae.set(e, O),
                            O
                          )
                        }
                      while (x >= 1 && S >= 0)
                    break
                  }
              }
            } finally {
              ;(Ee = !1), (B.current = g), be(), (Error.prepareStackTrace = m)
            }
            var Y = e ? e.displayName || e.name : '',
              Ye = Y ? L(Y) : ''
            return typeof e === 'function' && ae.set(e, Ye), Ye
          }
          function et(e, _t, _r) {
            return je(e, !1)
          }
          function tt(e) {
            var t = e.prototype
            return !!t?.isReactComponent
          }
          function ie(e, t, r) {
            if (e == null) return ''
            if (typeof e === 'function') return je(e, tt(e))
            if (typeof e === 'string') return L(e)
            switch (e) {
              case E:
                return L('Suspense')
              case p:
                return L('SuspenseList')
            }
            if (typeof e === 'object')
              switch (e.$$typeof) {
                case h:
                  return et(e.render)
                case w:
                  return ie(e.type, t, r)
                case u: {
                  var o = e,
                    m = o._payload,
                    g = o._init
                  try {
                    return ie(g(m), t, r)
                  } catch {}
                }
              }
            return ''
          }
          var oe = Object.prototype.hasOwnProperty,
            Te = {},
            Oe = T.ReactDebugCurrentFrame
          function se(e) {
            if (e) {
              var t = e._owner,
                r = ie(e.type, e._source, t ? t.type : null)
              Oe.setExtraStackFrame(r)
            } else Oe.setExtraStackFrame(null)
          }
          function rt(e, t, r, o, m) {
            var g = Function.call.bind(oe)
            for (var f in e)
              if (g(e, f)) {
                var l = void 0
                try {
                  if (typeof e[f] !== 'function') {
                    var j = Error(
                      (o || 'React class') +
                        ': ' +
                        r +
                        ' type `' +
                        f +
                        '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                        typeof e[f] +
                        '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                    )
                    throw ((j.name = 'Invariant Violation'), j)
                  }
                  l = e[f](t, f, o, r, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
                } catch (x) {
                  l = x
                }
                l &&
                  !(l instanceof Error) &&
                  (se(m),
                  b(
                    '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                    o || 'React class',
                    r,
                    f,
                    typeof l,
                  ),
                  se(null)),
                  l instanceof Error &&
                    !(l.message in Te) &&
                    ((Te[l.message] = !0), se(m), b('Failed %s type: %s', r, l.message), se(null))
              }
          }
          var nt = Array.isArray
          function Re(e) {
            return nt(e)
          }
          function at(e) {
            var t = typeof Symbol === 'function' && Symbol.toStringTag,
              r = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
            return r
          }
          function it(e) {
            try {
              return Pe(e), !1
            } catch {
              return !0
            }
          }
          function Pe(e) {
            return `${e}`
          }
          function $e(e) {
            if (it(e))
              return (
                b(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  at(e),
                ),
                Pe(e)
              )
          }
          var Ae = T.ReactCurrentOwner,
            ot = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            Ne,
            We
          function st(e) {
            if (oe.call(e, 'ref')) {
              var t = Object.getOwnPropertyDescriptor(e, 'ref').get
              if (t?.isReactWarning) return !1
            }
            return e.ref !== void 0
          }
          function lt(e) {
            if (oe.call(e, 'key')) {
              var t = Object.getOwnPropertyDescriptor(e, 'key').get
              if (t?.isReactWarning) return !1
            }
            return e.key !== void 0
          }
          function ct(e, _t) {
            typeof e.ref === 'string' && Ae.current
          }
          function ut(e, t) {
            var r = () => {
              Ne ||
                ((Ne = !0),
                b(
                  '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  t,
                ))
            }
            ;(r.isReactWarning = !0),
              Object.defineProperty(e, 'key', {
                get: r,
                configurable: !0,
              })
          }
          function ft(e, t) {
            var r = () => {
              We ||
                ((We = !0),
                b(
                  '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                  t,
                ))
            }
            ;(r.isReactWarning = !0),
              Object.defineProperty(e, 'ref', {
                get: r,
                configurable: !0,
              })
          }
          var dt = (e, t, r, o, m, g, f) => {
            var l = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: i,
              // Built-in properties that belong on the element
              type: e,
              key: t,
              ref: r,
              props: f,
              // Record the component responsible for creating this element.
              _owner: g,
            }
            return (
              (l._store = {}),
              Object.defineProperty(l._store, 'validated', {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(l, '_self', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: o,
              }),
              Object.defineProperty(l, '_source', {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: m,
              }),
              Object.freeze && (Object.freeze(l.props), Object.freeze(l)),
              l
            )
          }
          function ht(e, t, r, o, m) {
            var g,
              f = {},
              l = null,
              j = null
            r !== void 0 && ($e(r), (l = `${r}`)),
              lt(t) && ($e(t.key), (l = `${t.key}`)),
              st(t) && ((j = t.ref), ct(t, m))
            for (g in t) oe.call(t, g) && !Object.hasOwn(ot, g) && (f[g] = t[g])
            if (e?.defaultProps) {
              var x = e.defaultProps
              for (g in x) f[g] === void 0 && (f[g] = x[g])
            }
            if (l || j) {
              var S = typeof e === 'function' ? e.displayName || e.name || 'Unknown' : e
              l && ut(f, S), j && ft(f, S)
            }
            return dt(e, l, j, m, o, Ae.current, f)
          }
          var we = T.ReactCurrentOwner,
            De = T.ReactDebugCurrentFrame
          function V(e) {
            if (e) {
              var t = e._owner,
                r = ie(e.type, e._source, t ? t.type : null)
              De.setExtraStackFrame(r)
            } else De.setExtraStackFrame(null)
          }
          var xe
          xe = !1
          function Se(e) {
            return typeof e === 'object' && e !== null && e.$$typeof === i
          }
          function Fe() {
            if (we.current) {
              var e = $(we.current.type)
              if (e)
                return (
                  `

Check the render method of \`` +
                  e +
                  '`.'
                )
            }
            return ''
          }
          function pt(_e) {
            return ''
          }
          var Ie = {}
          function vt(e) {
            var t = Fe()
            if (!t) {
              var r = typeof e === 'string' ? e : e.displayName || e.name
              r &&
                (t =
                  `

Check the top-level render call using <` +
                  r +
                  '>.')
            }
            return t
          }
          function Me(e, t) {
            if (!e._store || e._store.validated || e.key != null) return
            e._store.validated = !0
            var r = vt(t)
            if (Ie[r]) return
            Ie[r] = !0
            var o = ''
            e?._owner &&
              e._owner !== we.current &&
              (o = ` It was passed a child from ${$(e._owner.type)}.`),
              V(e),
              b(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                r,
                o,
              ),
              V(null)
          }
          function Le(e, t) {
            if (typeof e !== 'object') return
            if (Re(e))
              for (var r = 0; r < e.length; r++) {
                var o = e[r]
                Se(o) && Me(o, t)
              }
            else if (Se(e)) e._store && (e._store.validated = !0)
            else if (e) {
              var m = P(e)
              if (typeof m === 'function' && m !== e.entries)
                for (var g = m.call(e), f; !(f = g.next()).done; ) Se(f.value) && Me(f.value, t)
            }
          }
          function mt(e) {
            var t = e.type
            if (t == null || typeof t === 'string') return
            var r
            if (typeof t === 'function') r = t.propTypes
            else if (
              typeof t === 'object' &&
              (t.$$typeof === h || // Note: Memo only checks outer props here.
                // Inner props are checked in the reconciler.
                t.$$typeof === w)
            )
              r = t.propTypes
            else return
            if (r) {
              var o = $(t)
              rt(r, e.props, 'prop', o, e)
            } else if (t.PropTypes !== void 0 && !xe) {
              xe = !0
              var m = $(t)
              b(
                'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                m || 'Unknown',
              )
            }
            typeof t.getDefaultProps === 'function' &&
              !t.getDefaultProps.isReactClassApproved &&
              b(
                'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
              )
          }
          function yt(e) {
            for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
              var o = t[r]
              if (o !== 'children' && o !== 'key') {
                V(e),
                  b(
                    'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                    o,
                  ),
                  V(null)
                break
              }
            }
            e.ref !== null &&
              (V(e), b('Invalid attribute `ref` supplied to `React.Fragment`.'), V(null))
          }
          function Ve(e, t, r, o, m, g) {
            var f = ye(e)
            if (!f) {
              var l = ''
              ;(e === void 0 ||
                (typeof e === 'object' && e !== null && Object.keys(e).length === 0)) &&
                (l +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
              var j = pt()
              j ? (l += j) : (l += Fe())
              var x
              e === null
                ? (x = 'null')
                : Re(e)
                  ? (x = 'array')
                  : e !== void 0 && e.$$typeof === i
                    ? ((x = `<${$(e.type) || 'Unknown'} />`),
                      (l = ' Did you accidentally export a JSX literal instead of a component?'))
                    : (x = typeof e),
                b(
                  'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                  x,
                  l,
                )
            }
            var S = ht(e, t, r, m, g)
            if (S == null) return S
            if (f) {
              var O = t.children
              if (O !== void 0)
                if (o)
                  if (Re(O)) {
                    for (var Y = 0; Y < O.length; Y++) Le(O[Y], e)
                    Object.freeze?.(O)
                  } else
                    b(
                      'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                    )
                else Le(O, e)
            }
            return e === a ? yt(S) : mt(S), S
          }
          function gt(e, t, r) {
            return Ve(e, t, r, !0)
          }
          function _t(e, t, r) {
            return Ve(e, t, r, !1)
          }
          var bt = _t,
            Et = gt
          ;(J.Fragment = a), (J.jsx = bt), (J.jsxs = Et)
        })()),
    J
  )
}
process.env.NODE_ENV === 'production' ? (ke.exports = wt()) : (ke.exports = xt())
var y = ke.exports
function Be(n) {
  var i,
    s,
    a = ''
  if (typeof n === 'string' || typeof n === 'number') a += n
  else if (typeof n === 'object')
    if (Array.isArray(n)) {
      var d = n.length
      for (i = 0; i < d; i++) n[i] && (s = Be(n[i])) && (a && (a += ' '), (a += s))
    } else for (s in n) n[s] && (a && (a += ' '), (a += s))
  return a
}
function ue() {
  for (var n, i, s = 0, a = '', d = arguments.length; s < d; s++)
    (n = arguments[s]) && (i = Be(n)) && (a && (a += ' '), (a += i))
  return a
}
const St = z(
  (
    {
      variant: n = 'primary',
      size: i = 'md',
      color: s = 'primary',
      disabled: a = !1,
      loading: d = !1,
      fullWidth: c = !1,
      onPress: _,
      className: v,
      children: h,
      testID: E,
      ...p
    },
    w,
  ) => {
    const u = () => {
        !a && !d && _ && _()
      },
      C = ue(
        'hi-button',
        `hi-button--${n}`,
        `hi-button--${i}`,
        `hi-button--${s}`,
        c && 'hi-button--full-width',
        a && 'hi-button--disabled',
        d && 'hi-button--loading',
        v,
        // Allow custom className override (shadcn/ui style)
      )
    return /* @__PURE__ */ y.jsxs('button', {
      ref: w,
      className: C,
      disabled: a || d,
      onClick: u,
      'data-testid': E,
      'aria-busy': d,
      ...p,
      children: [
        d &&
          /* @__PURE__ */ y.jsx('span', {
            className: 'hi-button__spinner',
            role: 'status',
            'aria-label': 'Loading',
            children: /* @__PURE__ */ y.jsx('span', {
              className: 'sr-only',
              children: 'Loading...',
            }),
          }),
        /* @__PURE__ */ y.jsx('span', { className: 'hi-button__content', children: h }),
      ],
    })
  },
)
St.displayName = 'Button'
const Ke = z(
  (
    {
      elevation: n = 'md',
      padding: i = 'md',
      radius: s = 'md',
      pressable: a = !1,
      onPress: d,
      children: c,
      testID: _,
      ...v
    },
    h,
  ) => {
    const E = () => {
        a && d && d()
      },
      p = (u) => {
        a && d && (u.key === 'Enter' || u.key === ' ') && (u.preventDefault(), d())
      },
      w = ue(
        'hi-card',
        `hi-card--elevation-${n}`,
        `hi-card--padding-${i}`,
        `hi-card--radius-${s}`,
        a && 'hi-card--pressable',
      )
    return /* @__PURE__ */ y.jsx('div', {
      ref: h,
      className: w,
      onClick: E,
      onKeyDown: p,
      'data-testid': _,
      role: a ? 'button' : void 0,
      tabIndex: a ? 0 : void 0,
      ...v,
      children: c,
    })
  },
)
Ke.displayName = 'Card'
fe(Ke)
const Ct = z(
  (
    {
      value: n,
      defaultValue: i,
      placeholder: s,
      type: a = 'text',
      variant: d = 'outline',
      size: c = 'md',
      state: _ = 'default',
      disabled: v = !1,
      fullWidth: h = !1,
      readOnly: E = !1,
      required: p = !1,
      label: w,
      helperText: u,
      errorText: C,
      className: k,
      onChangeText: R,
      onFocus: P,
      onBlur: T,
      onSubmit: b,
      testID: H,
      name: de,
      autoComplete: he,
      minLength: pe,
      maxLength: ve,
      pattern: me,
      ...Z
    },
    ye,
  ) => {
    const D = I(() => H || `hi-input-${Math.random().toString(36).substr(2, 9)}`, [H]),
      [Q, $] = ce(() => i || ''),
      [A, F] = ce(!1),
      ee = n !== void 0 ? n : Q,
      M = I(() => _ === 'error' && !!C, [_, C])
    I(() => _ === 'success', [_])
    const U = I(() => `${D}-helper`, [D]),
      q = I(() => `${D}-error`, [D]),
      te = (N) => {
        const L = N.target.value
        n === void 0 && $(L), R == null || R(L)
      },
      re = (_N) => {
        F(!0), P == null || P()
      },
      ne = (_N) => {
        F(!1), T == null || T()
      },
      _e = (N) => {
        N.key === 'Enter' && b && b()
      },
      be = ue(
        'hi-input__container',
        `hi-input__container--${c}`,
        h && 'hi-input__container--full-width',
      ),
      B = ue(
        'hi-input',
        `hi-input--${d}`,
        `hi-input--${c}`,
        `hi-input--${_}`,
        A && 'hi-input--focused',
        v && 'hi-input--disabled',
        E && 'hi-input--read-only',
        k,
        // Allow custom className override (shadcn/ui style)
      )
    return /* @__PURE__ */ y.jsxs('div', {
      className: be,
      children: [
        w &&
          /* @__PURE__ */ y.jsxs('label', {
            className: 'hi-input__label',
            htmlFor: D,
            children: [
              w,
              p &&
                /* @__PURE__ */ y.jsx('span', {
                  className: 'hi-input__required',
                  'aria-label': 'required',
                  children: '*',
                }),
            ],
          }),
        /* @__PURE__ */ y.jsx('input', {
          ref: ye,
          id: D,
          type: a,
          className: B,
          value: ee,
          placeholder: s,
          disabled: v,
          readOnly: E,
          required: p,
          onChange: te,
          onFocus: re,
          onBlur: ne,
          onKeyDown: _e,
          'data-testid': H,
          name: de,
          autoComplete: he,
          minLength: pe,
          maxLength: ve,
          pattern: me,
          'aria-invalid': _ === 'error',
          'aria-describedby': M ? q : u ? U : void 0,
          'aria-required': p,
          ...Z,
        }),
        (u || M) &&
          /* @__PURE__ */ y.jsx('div', {
            className: 'hi-input__helper',
            id: M ? q : U,
            children: M
              ? /* @__PURE__ */ y.jsx('span', {
                  className: 'hi-input__error',
                  role: 'alert',
                  children: C,
                })
              : /* @__PURE__ */ y.jsx('span', { className: 'hi-input__helper-text', children: u }),
          }),
      ],
    })
  },
)
Ct.displayName = 'Input'
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = (...n) =>
  n
    .filter((i, s, a) => !!i && i.trim() !== '' && a.indexOf(i) === s)
    .join(' ')
    .trim()
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = (n) =>
  n.replace(/^([A-Z])|[\s-_]+(\w)/g, (_i, s, a) => (a ? a.toUpperCase() : s.toLowerCase()))
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (n) => {
  const i = jt(n)
  return i.charAt(0).toUpperCase() + i.slice(1)
}
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tt = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = (n) => {
  for (const i in n) if (i.startsWith('aria-') || i === 'role' || i === 'title') return !0
  return !1
}
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = z(
  (
    {
      color: n = 'currentColor',
      size: i = 24,
      strokeWidth: s = 2,
      absoluteStrokeWidth: a,
      className: d = '',
      children: c,
      iconNode: _,
      ...v
    },
    h,
  ) =>
    Ce(
      'svg',
      {
        ref: h,
        ...Tt,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: a ? (Number(s) * 24) / Number(i) : s,
        className: Je('lucide', d),
        ...(!c && !Ot(v) && { 'aria-hidden': 'true' }),
        ...v,
      },
      [..._.map(([E, p]) => Ce(E, p)), ...(Array.isArray(c) ? c : [c])],
    ),
)
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = (n, i) => {
  const s = z(({ className: a, ...d }, c) =>
    Ce(Pt, {
      ref: c,
      iconNode: i,
      className: Je(`lucide-${kt(qe(n))}`, `lucide-${n}`, a),
      ...d,
    }),
  )
  return (s.displayName = qe(n)), s
}
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $t = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  At = X('circle-check-big', $t)
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
    ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
  ],
  Wt = X('circle-x', Nt)
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dt = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ],
  Ft = X('info', Dt)
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  Mt = X('triangle-alert', It)
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lt = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  Ge = X('x', Lt)
function Vt() {
  return typeof window > 'u' ? !1 : window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
function Xe() {
  if (typeof window > 'u') return !1
  const [n, i] = le.useState(Vt())
  return (
    le.useEffect(() => {
      const s = window.matchMedia('(prefers-reduced-motion: reduce)'),
        a = () => i(s.matches)
      return s.addEventListener('change', a), () => s.removeEventListener('change', a)
    }, []),
    n
  )
}
const Yt = ({
  visible: n = !1,
  title: i,
  size: s = 'md',
  closeOnBackdropPress: a = !0,
  showCloseButton: d = !0,
  onClose: c,
  children: _,
  testID: v,
}) => {
  const h = ze(null),
    E = ze(null),
    p = Xe(),
    w = I(() => `${v || 'hi-modal'}-title`, [v]),
    u = I(() => v || 'hi-modal', [v])
  if (
    (G(() => {
      const k = (R) => {
        R.key === 'Escape' && n && c && c()
      }
      return (
        n && (document.addEventListener('keydown', k), (E.current = document.activeElement)),
        () => {
          document.removeEventListener('keydown', k)
        }
      )
    }, [n, c]),
    G(() => {
      if (n && h.current) {
        const k = Array.from(
            h.current.querySelectorAll(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
            ),
          ),
          R = k[0],
          P = k[k.length - 1]
        R == null || R.focus()
        const T = (b) => {
          b.key === 'Tab' &&
            (b.shiftKey
              ? document.activeElement === R && (b.preventDefault(), P == null || P.focus())
              : document.activeElement === P && (b.preventDefault(), R == null || R.focus()))
        }
        return (
          document.addEventListener('keydown', T),
          () => {
            var b
            document.removeEventListener('keydown', T), (b = E.current) == null || b.focus()
          }
        )
      }
    }, [n]),
    G(
      () => (
        n ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = ''),
        () => {
          document.body.style.overflow = ''
        }
      ),
      [n],
    ),
    !n)
  )
    return null
  const C = /* @__PURE__ */ y.jsx('div', {
    className: `hi-modal-overlay ${p ? 'hi-modal-overlay--no-animation' : ''}`,
    onClick: a ? c : void 0,
    'data-testid': v ? `${v}-overlay` : 'hi-modal-overlay',
    role: 'presentation',
    children: /* @__PURE__ */ y.jsxs('div', {
      ref: h,
      className: `hi-modal hi-modal--${s} ${p ? 'hi-modal--no-animation' : ''}`,
      onClick: (k) => k.stopPropagation(),
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': i ? w : void 0,
      id: u,
      'data-testid': u,
      children: [
        (i || d) &&
          /* @__PURE__ */ y.jsxs('div', {
            className: 'hi-modal__header',
            children: [
              i &&
                /* @__PURE__ */ y.jsx('h2', { id: w, className: 'hi-modal__title', children: i }),
              d &&
                /* @__PURE__ */ y.jsx('button', {
                  className: 'hi-modal__close',
                  onClick: c,
                  'aria-label': 'Close modal',
                  type: 'button',
                  children: /* @__PURE__ */ y.jsx(Ge, { width: 20, height: 20, strokeWidth: 2 }),
                }),
            ],
          }),
        /* @__PURE__ */ y.jsx('div', { className: 'hi-modal__body', children: _ }),
      ],
    }),
  })
  return Rt(C, document.body)
}
fe(Yt)
const zt = ({
  visible: n = !1,
  message: i,
  variant: s = 'info',
  duration: a = 3e3,
  position: d = 'top',
  onClose: c,
  testID: _,
}) => {
  const [v, h] = ce(n),
    [E, p] = ce(!1),
    w = Xe()
  G(() => {
    n && (h(!0), p(!1))
  }, [n]),
    G(() => {
      if (v && a > 0 && !E) {
        const R = setTimeout(() => {
          u()
        }, a)
        return () => clearTimeout(R)
      }
    }, [v, a, E])
  const u = () => {
      p(!0),
        setTimeout(() => {
          h(!1), c == null || c()
        }, 300)
    },
    C = () => {
      u()
    }
  if (!v || !i) return null
  const k = () => {
    const R = {
      width: 24,
      height: 24,
      strokeWidth: 2,
    }
    switch (s) {
      case 'success':
        return /* @__PURE__ */ y.jsx(At, { ...R })
      case 'error':
        return /* @__PURE__ */ y.jsx(Wt, { ...R })
      case 'warning':
        return /* @__PURE__ */ y.jsx(Mt, { ...R })
      default:
        return /* @__PURE__ */ y.jsx(Ft, { ...R })
    }
  }
  return /* @__PURE__ */ y.jsxs('div', {
    className: `hi-toast hi-toast--${s} hi-toast--${d} ${E ? 'hi-toast--exiting' : ''} ${w ? 'hi-toast--no-animation' : ''}`,
    role: 'alert',
    'aria-live': 'polite',
    'aria-atomic': 'true',
    'data-testid': _ || 'hi-toast',
    children: [
      /* @__PURE__ */ y.jsx('div', { className: 'hi-toast__icon', children: k() }),
      /* @__PURE__ */ y.jsx('div', { className: 'hi-toast__message', children: i }),
      /* @__PURE__ */ y.jsx('button', {
        className: 'hi-toast__close',
        onClick: C,
        'aria-label': 'Close toast',
        type: 'button',
        children: /* @__PURE__ */ y.jsx(Ge, { width: 16, height: 16, strokeWidth: 2 }),
      }),
    ],
  })
}
fe(zt)
const Ze = z(
  (
    {
      variant: n = 'body1',
      weight: i,
      color: s,
      align: a = 'left',
      noWrap: d = !1,
      numberOfLines: c,
      className: _,
      children: v,
      testID: h,
      ...E
    },
    p,
  ) => {
    const u = {
        h1: {
          fontSize: 60,
          fontWeight: 'bold',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        },
        h2: {
          fontSize: 48,
          fontWeight: 'bold',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
        },
        h3: {
          fontSize: 36,
          fontWeight: '600',
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        },
        h4: {
          fontSize: 30,
          fontWeight: '600',
          lineHeight: 1.4,
          letterSpacing: '0em',
        },
        h5: {
          fontSize: 24,
          fontWeight: '600',
          lineHeight: 1.4,
          letterSpacing: '0em',
        },
        h6: {
          fontSize: 20,
          fontWeight: '500',
          lineHeight: 1.5,
          letterSpacing: '0em',
        },
        body1: {
          fontSize: 16,
          fontWeight: '400',
          lineHeight: 1.5,
          letterSpacing: '0em',
        },
        body2: {
          fontSize: 14,
          fontWeight: '400',
          lineHeight: 1.5,
          letterSpacing: '0em',
        },
        button: {
          fontSize: 16,
          fontWeight: '600',
          lineHeight: 1.5,
          letterSpacing: '0em',
        },
        caption: {
          fontSize: 12,
          fontWeight: '400',
          lineHeight: 1.5,
          letterSpacing: '0em',
        },
        overline: {
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 1.5,
          letterSpacing: '0.1em',
        },
      }[n],
      C = i || u.fontWeight,
      k = I(
        () => ({
          fontSize: typeof u.fontSize === 'number' ? `${u.fontSize}px` : u.fontSize,
          fontWeight: C,
          lineHeight: Array.isArray(u.lineHeight) ? u.lineHeight[0] : u.lineHeight,
          letterSpacing:
            typeof u.letterSpacing === 'number' ? `${u.letterSpacing}em` : u.letterSpacing,
          color: s || '#111827',
          textAlign: a,
          whiteSpace: d ? 'nowrap' : void 0,
          overflow: c ? 'hidden' : void 0,
          textOverflow: c ? 'ellipsis' : void 0,
          display: c ? '-webkit-box' : void 0,
          WebkitLineClamp: c || void 0,
          WebkitBoxOrient: c ? 'vertical' : void 0,
        }),
        [u, C, s, a, d, c],
      ),
      R = n.startsWith('h') ? n : 'p'
    return /* @__PURE__ */ y.jsx(R, {
      ref: p,
      className: `hi-typography hi-typography--${n} ${_ || ''}`,
      style: k,
      'data-testid': h,
      ...E,
      children: v,
    })
  },
)
Ze.displayName = 'Typography'
fe(Ze)
export { St as Button, Ke as Card, Ct as Input, Yt as Modal, zt as Toast, Ze as Typography }
