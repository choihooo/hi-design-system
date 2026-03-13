;((T, z) => {
  typeof exports === 'object' && typeof module < 'u'
    ? z(exports, require('@hi-design/tokens'), require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd
      ? define(['exports', '@hi-design/tokens', 'react', 'react-dom'], z)
      : ((T = typeof globalThis < 'u' ? globalThis : T || self),
        z((T.HiDesign = {}), T.HiDesignTokens, T.React, T.ReactDOM))
})(this, (T, z, c, $e) => {
  var le = { exports: {} },
    B = {} /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var je
  function qe() {
    if (je) return B
    je = 1
    var n = c,
      o = Symbol.for('react.element'),
      s = Symbol.for('react.fragment'),
      a = Object.prototype.hasOwnProperty,
      h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      u = { key: !0, ref: !0, __self: !0, __source: !0 }
    function b(m, p, R) {
      var v,
        S = {},
        f = null,
        C = null
      R !== void 0 && (f = `${R}`),
        p.key !== void 0 && (f = `${p.key}`),
        p.ref !== void 0 && (C = p.ref)
      for (v in p) a.call(p, v) && !Object.hasOwn(u, v) && (S[v] = p[v])
      if (m?.defaultProps) for (v in ((p = m.defaultProps), p)) S[v] === void 0 && (S[v] = p[v])
      return { $$typeof: o, type: m, key: f, ref: C, props: S, _owner: h.current }
    }
    return (B.Fragment = s), (B.jsx = b), (B.jsxs = b), B
  }
  var K = {} /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Ce
  function et() {
    return (
      Ce ||
        ((Ce = 1),
        process.env.NODE_ENV !== 'production' &&
          (() => {
            var n = c,
              o = Symbol.for('react.element'),
              s = Symbol.for('react.portal'),
              a = Symbol.for('react.fragment'),
              h = Symbol.for('react.strict_mode'),
              u = Symbol.for('react.profiler'),
              b = Symbol.for('react.provider'),
              m = Symbol.for('react.context'),
              p = Symbol.for('react.forward_ref'),
              R = Symbol.for('react.suspense'),
              v = Symbol.for('react.suspense_list'),
              S = Symbol.for('react.memo'),
              f = Symbol.for('react.lazy'),
              C = Symbol.for('react.offscreen'),
              k = Symbol.iterator,
              w = '@@iterator'
            function A(e) {
              if (e === null || typeof e !== 'object') return null
              var t = (k && e[k]) || e[w]
              return typeof t === 'function' ? t : null
            }
            var P = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            function E(e) {
              for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                r[i - 1] = arguments[i]
              G('error', e, r)
            }
            function G(e, t, r) {
              var i = P.ReactDebugCurrentFrame,
                y = i.getStackAddendum()
              y !== '' && ((t += '%s'), (r = r.concat([y])))
              var _ = r.map((d) => String(d))
              _.unshift(`Warning: ${t}`), Function.prototype.apply.call(console[e], console, _)
            }
            var de = !1,
              he = !1,
              pe = !1,
              ve = !1,
              me = !1,
              q
            q = Symbol.for('react.module.reference')
            function ye(e) {
              return !!(
                typeof e === 'string' ||
                typeof e === 'function' ||
                e === a ||
                e === u ||
                me ||
                e === h ||
                e === R ||
                e === v ||
                ve ||
                e === C ||
                de ||
                he ||
                pe ||
                (typeof e === 'object' &&
                  e !== null &&
                  (e.$$typeof === f ||
                    e.$$typeof === S ||
                    e.$$typeof === b ||
                    e.$$typeof === m ||
                    e.$$typeof === p ||
                    e.$$typeof === q ||
                    e.getModuleId !== void 0))
              )
            }
            function I(e, t, r) {
              var i = e.displayName
              if (i) return i
              var y = t.displayName || t.name || ''
              return y !== '' ? `${r}(${y})` : r
            }
            function ee(e) {
              return e.displayName || 'Context'
            }
            function W(e) {
              if (e == null) return null
              if (
                (typeof e.tag === 'number' &&
                  E(
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
                case u:
                  return 'Profiler'
                case h:
                  return 'StrictMode'
                case R:
                  return 'Suspense'
                case v:
                  return 'SuspenseList'
              }
              if (typeof e === 'object')
                switch (e.$$typeof) {
                  case m: {
                    var t = e
                    return `${ee(t)}.Consumer`
                  }
                  case b: {
                    var r = e
                    return `${ee(r._context)}.Provider`
                  }
                  case p:
                    return I(e, e.render, 'ForwardRef')
                  case S: {
                    var i = e.displayName || null
                    return i !== null ? i : W(e.type) || 'Memo'
                  }
                  case f: {
                    var y = e,
                      _ = y._payload,
                      d = y._init
                    try {
                      return W(d(_))
                    } catch {
                      return null
                    }
                  }
                }
              return null
            }
            var D = Object.assign,
              L = 0,
              ge,
              te,
              V,
              X,
              Z,
              re,
              ne
            function ae() {}
            ae.__reactDisabledLog = !0
            function _e() {
              if (L === 0) {
                ;(ge = console.log),
                  (te = console.info),
                  (V = console.warn),
                  (X = console.error),
                  (Z = console.group),
                  (re = console.groupCollapsed),
                  (ne = console.groupEnd)
                var e = { configurable: !0, enumerable: !0, value: ae, writable: !0 }
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
              L++
            }
            function be() {
              if ((L--, L === 0)) {
                var e = { configurable: !0, enumerable: !0, writable: !0 }
                Object.defineProperties(console, {
                  log: D({}, e, { value: ge }),
                  info: D({}, e, { value: te }),
                  warn: D({}, e, { value: V }),
                  error: D({}, e, { value: X }),
                  group: D({}, e, { value: Z }),
                  groupCollapsed: D({}, e, { value: re }),
                  groupEnd: D({}, e, { value: ne }),
                })
              }
              L < 0 &&
                E('disabledDepth fell below zero. This is a bug in React. Please file an issue.')
            }
            var Q = P.ReactCurrentDispatcher,
              M
            function Y(e, _t, _r) {
              if (M === void 0)
                try {
                  throw Error()
                } catch (y) {
                  var i = y.stack.trim().match(/\n( *(at )?)/)
                  M = i?.[1] || ''
                }
              return (
                `
` +
                M +
                e
              )
            }
            var Ee = !1,
              oe
            var ft = typeof WeakMap === 'function' ? WeakMap : Map
            oe = new ft()
            function Fe(e, t) {
              if (!e || Ee) return ''
              var r = oe.get(e)
              if (r !== void 0) return r
              var i
              Ee = !0
              var y = Error.prepareStackTrace
              Error.prepareStackTrace = void 0
              var _
              ;(_ = Q.current), (Q.current = null), _e()
              try {
                if (t) {
                  var d = () => {
                    throw Error()
                  }
                  if (
                    (Object.defineProperty(d.prototype, 'props', {
                      set: () => {
                        throw Error()
                      },
                    }),
                    typeof Reflect === 'object' && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(d, [])
                    } catch (F) {
                      i = F
                    }
                    Reflect.construct(e, [], d)
                  } else {
                    try {
                      d.call()
                    } catch (F) {
                      i = F
                    }
                    e.call(d.prototype)
                  }
                } else {
                  try {
                    throw Error()
                  } catch (F) {
                    i = F
                  }
                  e()
                }
              } catch (F) {
                if (F && i && typeof F.stack === 'string') {
                  for (
                    var l = F.stack.split(`
`),
                      O = i.stack.split(`
`),
                      x = l.length - 1,
                      j = O.length - 1;
                    x >= 1 && j >= 0 && l[x] !== O[j];
                  )
                    j--
                  for (; x >= 1 && j >= 0; x--, j--)
                    if (l[x] !== O[j]) {
                      if (x !== 1 || j !== 1)
                        do
                          if ((x--, j--, j < 0 || l[x] !== O[j])) {
                            var N = `
${l[x].replace(' at new ', ' at ')}`
                            return (
                              e.displayName &&
                                N.includes('<anonymous>') &&
                                (N = N.replace('<anonymous>', e.displayName)),
                              typeof e === 'function' && oe.set(e, N),
                              N
                            )
                          }
                        while (x >= 1 && j >= 0)
                      break
                    }
                }
              } finally {
                ;(Ee = !1), (Q.current = _), be(), (Error.prepareStackTrace = y)
              }
              var U = e ? e.displayName || e.name : '',
                Qe = U ? Y(U) : ''
              return typeof e === 'function' && oe.set(e, Qe), Qe
            }
            function dt(e, _t, _r) {
              return Fe(e, !1)
            }
            function ht(e) {
              var t = e.prototype
              return !!t?.isReactComponent
            }
            function ie(e, t, r) {
              if (e == null) return ''
              if (typeof e === 'function') return Fe(e, ht(e))
              if (typeof e === 'string') return Y(e)
              switch (e) {
                case R:
                  return Y('Suspense')
                case v:
                  return Y('SuspenseList')
              }
              if (typeof e === 'object')
                switch (e.$$typeof) {
                  case p:
                    return dt(e.render)
                  case S:
                    return ie(e.type, t, r)
                  case f: {
                    var i = e,
                      y = i._payload,
                      _ = i._init
                    try {
                      return ie(_(y), t, r)
                    } catch {}
                  }
                }
              return ''
            }
            var se = Object.prototype.hasOwnProperty,
              Ie = {},
              Le = P.ReactDebugCurrentFrame
            function ce(e) {
              if (e) {
                var t = e._owner,
                  r = ie(e.type, e._source, t ? t.type : null)
                Le.setExtraStackFrame(r)
              } else Le.setExtraStackFrame(null)
            }
            function pt(e, t, r, i, y) {
              var _ = Function.call.bind(se)
              for (var d in e)
                if (_(e, d)) {
                  var l = void 0
                  try {
                    if (typeof e[d] !== 'function') {
                      var O = Error(
                        (i || 'React class') +
                          ': ' +
                          r +
                          ' type `' +
                          d +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof e[d] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.',
                      )
                      throw ((O.name = 'Invariant Violation'), O)
                    }
                    l = e[d](t, d, i, r, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED')
                  } catch (x) {
                    l = x
                  }
                  l &&
                    !(l instanceof Error) &&
                    (ce(y),
                    E(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      i || 'React class',
                      r,
                      d,
                      typeof l,
                    ),
                    ce(null)),
                    l instanceof Error &&
                      !(l.message in Ie) &&
                      ((Ie[l.message] = !0), ce(y), E('Failed %s type: %s', r, l.message), ce(null))
                }
            }
            var vt = Array.isArray
            function Re(e) {
              return vt(e)
            }
            function mt(e) {
              var t = typeof Symbol === 'function' && Symbol.toStringTag,
                r = (t && e[Symbol.toStringTag]) || e.constructor.name || 'Object'
              return r
            }
            function yt(e) {
              try {
                return Ve(e), !1
              } catch {
                return !0
              }
            }
            function Ve(e) {
              return `${e}`
            }
            function Ye(e) {
              if (yt(e))
                return (
                  E(
                    'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                    mt(e),
                  ),
                  Ve(e)
                )
            }
            var ze = P.ReactCurrentOwner,
              gt = { key: !0, ref: !0, __self: !0, __source: !0 },
              He,
              Ue
            function _t(e) {
              if (se.call(e, 'ref')) {
                var t = Object.getOwnPropertyDescriptor(e, 'ref').get
                if (t?.isReactWarning) return !1
              }
              return e.ref !== void 0
            }
            function bt(e) {
              if (se.call(e, 'key')) {
                var t = Object.getOwnPropertyDescriptor(e, 'key').get
                if (t?.isReactWarning) return !1
              }
              return e.key !== void 0
            }
            function Et(e, _t) {
              typeof e.ref === 'string' && ze.current
            }
            function Rt(e, t) {
              var r = () => {
                He ||
                  ((He = !0),
                  E(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    t,
                  ))
              }
              ;(r.isReactWarning = !0),
                Object.defineProperty(e, 'key', { get: r, configurable: !0 })
            }
            function wt(e, t) {
              var r = () => {
                Ue ||
                  ((Ue = !0),
                  E(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    t,
                  ))
              }
              ;(r.isReactWarning = !0),
                Object.defineProperty(e, 'ref', { get: r, configurable: !0 })
            }
            var St = (e, t, r, i, y, _, d) => {
              var l = { $$typeof: o, type: e, key: t, ref: r, props: d, _owner: _ }
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
                  value: i,
                }),
                Object.defineProperty(l, '_source', {
                  configurable: !1,
                  enumerable: !1,
                  writable: !1,
                  value: y,
                }),
                Object.freeze && (Object.freeze(l.props), Object.freeze(l)),
                l
              )
            }
            function xt(e, t, r, i, y) {
              var _,
                d = {},
                l = null,
                O = null
              r !== void 0 && (Ye(r), (l = `${r}`)),
                bt(t) && (Ye(t.key), (l = `${t.key}`)),
                _t(t) && ((O = t.ref), Et(t, y))
              for (_ in t) se.call(t, _) && !Object.hasOwn(gt, _) && (d[_] = t[_])
              if (e?.defaultProps) {
                var x = e.defaultProps
                for (_ in x) d[_] === void 0 && (d[_] = x[_])
              }
              if (l || O) {
                var j = typeof e === 'function' ? e.displayName || e.name || 'Unknown' : e
                l && Rt(d, j), O && wt(d, j)
              }
              return St(e, l, O, y, i, ze.current, d)
            }
            var we = P.ReactCurrentOwner,
              Be = P.ReactDebugCurrentFrame
            function H(e) {
              if (e) {
                var t = e._owner,
                  r = ie(e.type, e._source, t ? t.type : null)
                Be.setExtraStackFrame(r)
              } else Be.setExtraStackFrame(null)
            }
            var Se
            Se = !1
            function xe(e) {
              return typeof e === 'object' && e !== null && e.$$typeof === o
            }
            function Ke() {
              if (we.current) {
                var e = W(we.current.type)
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
            function jt(_e) {
              return ''
            }
            var Je = {}
            function Ct(e) {
              var t = Ke()
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
            function Ge(e, t) {
              if (!e._store || e._store.validated || e.key != null) return
              e._store.validated = !0
              var r = Ct(t)
              if (Je[r]) return
              Je[r] = !0
              var i = ''
              e?._owner &&
                e._owner !== we.current &&
                (i = ` It was passed a child from ${W(e._owner.type)}.`),
                H(e),
                E(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  r,
                  i,
                ),
                H(null)
            }
            function Xe(e, t) {
              if (typeof e !== 'object') return
              if (Re(e))
                for (var r = 0; r < e.length; r++) {
                  var i = e[r]
                  xe(i) && Ge(i, t)
                }
              else if (xe(e)) e._store && (e._store.validated = !0)
              else if (e) {
                var y = A(e)
                if (typeof y === 'function' && y !== e.entries)
                  for (var _ = y.call(e), d; !(d = _.next()).done; ) xe(d.value) && Ge(d.value, t)
              }
            }
            function kt(e) {
              var t = e.type
              if (t == null || typeof t === 'string') return
              var r
              if (typeof t === 'function') r = t.propTypes
              else if (typeof t === 'object' && (t.$$typeof === p || t.$$typeof === S))
                r = t.propTypes
              else return
              if (r) {
                var i = W(t)
                pt(r, e.props, 'prop', i, e)
              } else if (t.PropTypes !== void 0 && !Se) {
                Se = !0
                var y = W(t)
                E(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  y || 'Unknown',
                )
              }
              typeof t.getDefaultProps === 'function' &&
                !t.getDefaultProps.isReactClassApproved &&
                E(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.',
                )
            }
            function Tt(e) {
              for (var t = Object.keys(e.props), r = 0; r < t.length; r++) {
                var i = t[r]
                if (i !== 'children' && i !== 'key') {
                  H(e),
                    E(
                      'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                      i,
                    ),
                    H(null)
                  break
                }
              }
              e.ref !== null &&
                (H(e), E('Invalid attribute `ref` supplied to `React.Fragment`.'), H(null))
            }
            function Ze(e, t, r, i, y, _) {
              var d = ye(e)
              if (!d) {
                var l = ''
                ;(e === void 0 ||
                  (typeof e === 'object' && e !== null && Object.keys(e).length === 0)) &&
                  (l +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.")
                var O = jt()
                O ? (l += O) : (l += Ke())
                var x
                e === null
                  ? (x = 'null')
                  : Re(e)
                    ? (x = 'array')
                    : e !== void 0 && e.$$typeof === o
                      ? ((x = `<${W(e.type) || 'Unknown'} />`),
                        (l = ' Did you accidentally export a JSX literal instead of a component?'))
                      : (x = typeof e),
                  E(
                    'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                    x,
                    l,
                  )
              }
              var j = xt(e, t, r, y, _)
              if (j == null) return j
              if (d) {
                var N = t.children
                if (N !== void 0)
                  if (i)
                    if (Re(N)) {
                      for (var U = 0; U < N.length; U++) Xe(N[U], e)
                      Object.freeze?.(N)
                    } else
                      E(
                        'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                      )
                  else Xe(N, e)
              }
              return e === a ? Tt(j) : kt(j), j
            }
            function Ot(e, t, r) {
              return Ze(e, t, r, !0)
            }
            function Pt(e, t, r) {
              return Ze(e, t, r, !1)
            }
            var Nt = Pt,
              At = Ot
            ;(K.Fragment = a), (K.jsx = Nt), (K.jsxs = At)
          })()),
      K
    )
  }
  process.env.NODE_ENV === 'production' ? (le.exports = qe()) : (le.exports = et())
  var g = le.exports
  function ke(n) {
    var o,
      s,
      a = ''
    if (typeof n === 'string' || typeof n === 'number') a += n
    else if (typeof n === 'object')
      if (Array.isArray(n)) {
        var h = n.length
        for (o = 0; o < h; o++) n[o] && (s = ke(n[o])) && (a && (a += ' '), (a += s))
      } else for (s in n) n[s] && (a && (a += ' '), (a += s))
    return a
  }
  function $() {
    for (var n, o, s = 0, a = '', h = arguments.length; s < h; s++)
      (n = arguments[s]) && (o = ke(n)) && (a && (a += ' '), (a += o))
    return a
  }
  const Te = c.forwardRef(
    (
      {
        variant: n = 'primary',
        size: o = 'md',
        color: s = 'primary',
        disabled: a = !1,
        loading: h = !1,
        fullWidth: u = !1,
        onPress: b,
        className: m,
        children: p,
        testID: R,
        ...v
      },
      S,
    ) => {
      const f = () => {
          !a && !h && b && b()
        },
        C = $(
          'hi-button',
          `hi-button--${n}`,
          `hi-button--${o}`,
          `hi-button--${s}`,
          u && 'hi-button--full-width',
          a && 'hi-button--disabled',
          h && 'hi-button--loading',
          m,
        )
      return g.jsxs('button', {
        ref: S,
        className: C,
        disabled: a || h,
        onClick: f,
        'data-testid': R,
        'aria-busy': h,
        ...v,
        children: [
          h &&
            g.jsx('span', {
              className: 'hi-button__spinner',
              role: 'status',
              'aria-label': 'Loading',
              children: g.jsx('span', { className: 'sr-only', children: 'Loading...' }),
            }),
          g.jsx('span', { className: 'hi-button__content', children: p }),
        ],
      })
    },
  )
  Te.displayName = 'Button'
  const ue = c.forwardRef(
    (
      {
        elevation: n = 'md',
        padding: o = 'md',
        radius: s = 'md',
        pressable: a = !1,
        onPress: h,
        children: u,
        testID: b,
        ...m
      },
      p,
    ) => {
      const R = () => {
          a && h && h()
        },
        v = (f) => {
          a && h && (f.key === 'Enter' || f.key === ' ') && (f.preventDefault(), h())
        },
        S = $(
          'hi-card',
          `hi-card--elevation-${n}`,
          `hi-card--padding-${o}`,
          `hi-card--radius-${s}`,
          a && 'hi-card--pressable',
        )
      return g.jsx('div', {
        ref: p,
        className: S,
        onClick: R,
        onKeyDown: v,
        'data-testid': b,
        role: a ? 'button' : void 0,
        tabIndex: a ? 0 : void 0,
        ...m,
        children: u,
      })
    },
  )
  ;(ue.displayName = 'Card'), c.memo(ue)
  const Oe = c.forwardRef(
    (
      {
        value: n,
        defaultValue: o,
        placeholder: s,
        type: a = 'text',
        variant: h = 'outline',
        size: u = 'md',
        state: b = 'default',
        disabled: m = !1,
        fullWidth: p = !1,
        readOnly: R = !1,
        required: v = !1,
        label: S,
        helperText: f,
        errorText: C,
        className: k,
        onChangeText: w,
        onFocus: A,
        onBlur: P,
        onSubmit: E,
        testID: G,
        name: de,
        autoComplete: he,
        minLength: pe,
        maxLength: ve,
        pattern: me,
        ...q
      },
      ye,
    ) => {
      const I = c.useMemo(() => G || `hi-input-${Math.random().toString(36).substr(2, 9)}`, [G]),
        [ee, W] = c.useState(() => o || ''),
        [D, L] = c.useState(!1),
        te = n !== void 0 ? n : ee,
        V = c.useMemo(() => b === 'error' && !!C, [b, C])
      c.useMemo(() => b === 'success', [b])
      const X = c.useMemo(() => `${I}-helper`, [I]),
        Z = c.useMemo(() => `${I}-error`, [I]),
        re = (M) => {
          const Y = M.target.value
          n === void 0 && W(Y), w == null || w(Y)
        },
        ne = (_M) => {
          L(!0), A == null || A()
        },
        ae = (_M) => {
          L(!1), P == null || P()
        },
        _e = (M) => {
          M.key === 'Enter' && E && E()
        },
        be = $(
          'hi-input__container',
          `hi-input__container--${u}`,
          p && 'hi-input__container--full-width',
        ),
        Q = $(
          'hi-input',
          `hi-input--${h}`,
          `hi-input--${u}`,
          `hi-input--${b}`,
          D && 'hi-input--focused',
          m && 'hi-input--disabled',
          R && 'hi-input--read-only',
          k,
        )
      return g.jsxs('div', {
        className: be,
        children: [
          S &&
            g.jsxs('label', {
              className: 'hi-input__label',
              htmlFor: I,
              children: [
                S,
                v &&
                  g.jsx('span', {
                    className: 'hi-input__required',
                    'aria-label': 'required',
                    children: '*',
                  }),
              ],
            }),
          g.jsx('input', {
            ref: ye,
            id: I,
            type: a,
            className: Q,
            value: te,
            placeholder: s,
            disabled: m,
            readOnly: R,
            required: v,
            onChange: re,
            onFocus: ne,
            onBlur: ae,
            onKeyDown: _e,
            'data-testid': G,
            name: de,
            autoComplete: he,
            minLength: pe,
            maxLength: ve,
            pattern: me,
            'aria-invalid': b === 'error',
            'aria-describedby': V ? Z : f ? X : void 0,
            'aria-required': v,
            ...q,
          }),
          (f || V) &&
            g.jsx('div', {
              className: 'hi-input__helper',
              id: V ? Z : X,
              children: V
                ? g.jsx('span', { className: 'hi-input__error', role: 'alert', children: C })
                : g.jsx('span', { className: 'hi-input__helper-text', children: f }),
            }),
        ],
      })
    },
  )
  Oe.displayName = 'Input' /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Pe = (...n) =>
    n
      .filter((o, s, a) => !!o && o.trim() !== '' && a.indexOf(o) === s)
      .join(' ')
      .trim() /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const tt = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase() /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const rt = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (_o, s, a) => (a ? a.toUpperCase() : s.toLowerCase())) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ne = (n) => {
    const o = rt(n)
    return o.charAt(0).toUpperCase() + o.slice(1)
  } /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  var nt = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const at = (n) => {
    for (const o in n) if (o.startsWith('aria-') || o === 'role' || o === 'title') return !0
    return !1
  } /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ot = c.forwardRef(
    (
      {
        color: n = 'currentColor',
        size: o = 24,
        strokeWidth: s = 2,
        absoluteStrokeWidth: a,
        className: h = '',
        children: u,
        iconNode: b,
        ...m
      },
      p,
    ) =>
      c.createElement(
        'svg',
        {
          ref: p,
          ...nt,
          width: o,
          height: o,
          stroke: n,
          strokeWidth: a ? (Number(s) * 24) / Number(o) : s,
          className: Pe('lucide', h),
          ...(!u && !at(m) && { 'aria-hidden': 'true' }),
          ...m,
        },
        [...b.map(([R, v]) => c.createElement(R, v)), ...(Array.isArray(u) ? u : [u])],
      ),
  ) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const J = (n, o) => {
    const s = c.forwardRef(({ className: a, ...h }, u) =>
      c.createElement(ot, {
        ref: u,
        iconNode: o,
        className: Pe(`lucide-${tt(Ne(n))}`, `lucide-${n}`, a),
        ...h,
      }),
    )
    return (s.displayName = Ne(n)), s
  } /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const it = J('circle-check-big', [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ]) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const st = J('circle-x', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'm15 9-6 6', key: '1uzhvr' }],
    ['path', { d: 'm9 9 6 6', key: 'z0biqf' }],
  ]) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const ct = J('info', [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['path', { d: 'M12 16v-4', key: '1dtifu' }],
    ['path', { d: 'M12 8h.01', key: 'e9boi3' }],
  ]) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const lt = J('triangle-alert', [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ]) /**
   * @license lucide-react v0.577.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   */
  const Ae = J('x', [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ])
  function ut() {
    return typeof window > 'u' ? !1 : window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }
  function We() {
    if (typeof window > 'u') return !1
    const [n, o] = c.useState(ut())
    return (
      c.useEffect(() => {
        const s = window.matchMedia('(prefers-reduced-motion: reduce)'),
          a = () => o(s.matches)
        return s.addEventListener('change', a), () => s.removeEventListener('change', a)
      }, []),
      n
    )
  }
  const De = ({
    visible: n = !1,
    title: o,
    size: s = 'md',
    closeOnBackdropPress: a = !0,
    showCloseButton: h = !0,
    onClose: u,
    children: b,
    testID: m,
  }) => {
    const p = c.useRef(null),
      R = c.useRef(null),
      v = We(),
      S = c.useMemo(() => `${m || 'hi-modal'}-title`, [m]),
      f = c.useMemo(() => m || 'hi-modal', [m])
    if (
      (c.useEffect(() => {
        const k = (w) => {
          w.key === 'Escape' && n && u && u()
        }
        return (
          n && (document.addEventListener('keydown', k), (R.current = document.activeElement)),
          () => {
            document.removeEventListener('keydown', k)
          }
        )
      }, [n, u]),
      c.useEffect(() => {
        if (n && p.current) {
          const k = Array.from(
              p.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
              ),
            ),
            w = k[0],
            A = k[k.length - 1]
          w == null || w.focus()
          const P = (E) => {
            E.key === 'Tab' &&
              (E.shiftKey
                ? document.activeElement === w && (E.preventDefault(), A == null || A.focus())
                : document.activeElement === A && (E.preventDefault(), w == null || w.focus()))
          }
          return (
            document.addEventListener('keydown', P),
            () => {
              var E
              document.removeEventListener('keydown', P), (E = R.current) == null || E.focus()
            }
          )
        }
      }, [n]),
      c.useEffect(
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
    const C = g.jsx('div', {
      className: `hi-modal-overlay ${v ? 'hi-modal-overlay--no-animation' : ''}`,
      onClick: a ? u : void 0,
      'data-testid': m ? `${m}-overlay` : 'hi-modal-overlay',
      role: 'presentation',
      children: g.jsxs('div', {
        ref: p,
        className: `hi-modal hi-modal--${s} ${v ? 'hi-modal--no-animation' : ''}`,
        onClick: (k) => k.stopPropagation(),
        role: 'dialog',
        'aria-modal': 'true',
        'aria-labelledby': o ? S : void 0,
        id: f,
        'data-testid': f,
        children: [
          (o || h) &&
            g.jsxs('div', {
              className: 'hi-modal__header',
              children: [
                o && g.jsx('h2', { id: S, className: 'hi-modal__title', children: o }),
                h &&
                  g.jsx('button', {
                    className: 'hi-modal__close',
                    onClick: u,
                    'aria-label': 'Close modal',
                    type: 'button',
                    children: g.jsx(Ae, { width: 20, height: 20, strokeWidth: 2 }),
                  }),
              ],
            }),
          g.jsx('div', { className: 'hi-modal__body', children: b }),
        ],
      }),
    })
    return $e.createPortal(C, document.body)
  }
  c.memo(De)
  const Me = ({
    visible: n = !1,
    message: o,
    variant: s = 'info',
    duration: a = 3e3,
    position: h = 'top',
    onClose: u,
    testID: b,
  }) => {
    const [m, p] = c.useState(n),
      [R, v] = c.useState(!1),
      S = We()
    c.useEffect(() => {
      n && (p(!0), v(!1))
    }, [n]),
      c.useEffect(() => {
        if (m && a > 0 && !R) {
          const w = setTimeout(() => {
            f()
          }, a)
          return () => clearTimeout(w)
        }
      }, [m, a, R])
    const f = () => {
        v(!0),
          setTimeout(() => {
            p(!1), u == null || u()
          }, 300)
      },
      C = () => {
        f()
      }
    if (!m || !o) return null
    const k = () => {
      const w = { width: 24, height: 24, strokeWidth: 2 }
      switch (s) {
        case 'success':
          return g.jsx(it, { ...w })
        case 'error':
          return g.jsx(st, { ...w })
        case 'warning':
          return g.jsx(lt, { ...w })
        default:
          return g.jsx(ct, { ...w })
      }
    }
    return g.jsxs('div', {
      className: `hi-toast hi-toast--${s} hi-toast--${h} ${R ? 'hi-toast--exiting' : ''} ${S ? 'hi-toast--no-animation' : ''}`,
      role: 'alert',
      'aria-live': 'polite',
      'aria-atomic': 'true',
      'data-testid': b || 'hi-toast',
      children: [
        g.jsx('div', { className: 'hi-toast__icon', children: k() }),
        g.jsx('div', { className: 'hi-toast__message', children: o }),
        g.jsx('button', {
          className: 'hi-toast__close',
          onClick: C,
          'aria-label': 'Close toast',
          type: 'button',
          children: g.jsx(Ae, { width: 16, height: 16, strokeWidth: 2 }),
        }),
      ],
    })
  }
  c.memo(Me)
  const fe = c.forwardRef(
    (
      {
        variant: n = 'body1',
        weight: o,
        color: s,
        align: a = 'left',
        noWrap: h = !1,
        numberOfLines: u,
        className: b,
        children: m,
        testID: p,
        ...R
      },
      v,
    ) => {
      const f = {
          h1: { fontSize: 60, fontWeight: 'bold', lineHeight: 1.2, letterSpacing: '-0.02em' },
          h2: { fontSize: 48, fontWeight: 'bold', lineHeight: 1.2, letterSpacing: '-0.02em' },
          h3: { fontSize: 36, fontWeight: '600', lineHeight: 1.2, letterSpacing: '-0.01em' },
          h4: { fontSize: 30, fontWeight: '600', lineHeight: 1.4, letterSpacing: '0em' },
          h5: { fontSize: 24, fontWeight: '600', lineHeight: 1.4, letterSpacing: '0em' },
          h6: { fontSize: 20, fontWeight: '500', lineHeight: 1.5, letterSpacing: '0em' },
          body1: { fontSize: 16, fontWeight: '400', lineHeight: 1.5, letterSpacing: '0em' },
          body2: { fontSize: 14, fontWeight: '400', lineHeight: 1.5, letterSpacing: '0em' },
          button: { fontSize: 16, fontWeight: '600', lineHeight: 1.5, letterSpacing: '0em' },
          caption: { fontSize: 12, fontWeight: '400', lineHeight: 1.5, letterSpacing: '0em' },
          overline: { fontSize: 12, fontWeight: '500', lineHeight: 1.5, letterSpacing: '0.1em' },
        }[n],
        C = o || f.fontWeight,
        k = c.useMemo(
          () => ({
            fontSize: typeof f.fontSize === 'number' ? `${f.fontSize}px` : f.fontSize,
            fontWeight: C,
            lineHeight: Array.isArray(f.lineHeight) ? f.lineHeight[0] : f.lineHeight,
            letterSpacing:
              typeof f.letterSpacing === 'number' ? `${f.letterSpacing}em` : f.letterSpacing,
            color: s || '#111827',
            textAlign: a,
            whiteSpace: h ? 'nowrap' : void 0,
            overflow: u ? 'hidden' : void 0,
            textOverflow: u ? 'ellipsis' : void 0,
            display: u ? '-webkit-box' : void 0,
            WebkitLineClamp: u || void 0,
            WebkitBoxOrient: u ? 'vertical' : void 0,
          }),
          [f, C, s, a, h, u],
        ),
        w = n.startsWith('h') ? n : 'p'
      return g.jsx(w, {
        ref: v,
        className: `hi-typography hi-typography--${n} ${b || ''}`,
        style: k,
        'data-testid': p,
        ...R,
        children: m,
      })
    },
  )
  ;(fe.displayName = 'Typography'),
    c.memo(fe),
    (T.Button = Te),
    (T.Card = ue),
    (T.Input = Oe),
    (T.Modal = De),
    (T.Toast = Me),
    (T.Typography = fe),
    Object.keys(z).forEach((n) => {
      n !== 'default' &&
        !Object.hasOwn(T, n) &&
        Object.defineProperty(T, n, { enumerable: !0, get: () => z[n] })
    }),
    Object.defineProperty(T, Symbol.toStringTag, { value: 'Module' })
})
