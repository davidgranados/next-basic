;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6156: function (t, e, r) {
      'use strict'
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        )
      }
      r.d(e, {
        Z: function () {
          return n
        },
      })
    },
    1476: function (t, e, r) {
      'use strict'
      r.r(e)
      var n = r(6156),
        u = r(5893),
        i = (r(2189), r(7629), r(6245))
      function o(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                ;(0, n.Z)(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                )
              })
        }
        return t
      }
      e.default = function (t) {
        var e = t.Component,
          r = t.pageProps
        return (0, u.jsx)(i.ZP, { children: (0, u.jsx)(e, c({}, r)) })
      }
    },
    6245: function (t, e, r) {
      'use strict'
      r.d(e, {
        jD: function () {
          return y
        },
        mS: function () {
          return b
        },
      })
      var n = r(6156),
        u = r(5893),
        i = r(7294)
      function o(t, e) {
        var r = Object.keys(t)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t)
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                ;(0, n.Z)(t, e, r[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                )
              })
        }
        return t
      }
      var a = {},
        f = i.createContext(a),
        s = i.createContext(function () {})
      function p(t, e) {
        var r = e.item,
          u = e.type,
          i = e.quantity,
          o = void 0 === i ? 1 : i,
          a = t[r.id]
        switch (u) {
          case 'add':
            if (void 0 != a) {
              var f = a.quantity + o
              return c(
                c({}, t),
                {},
                (0, n.Z)({}, r.id, c(c({}, a), {}, { quantity: f }))
              )
            }
            return c(
              c({}, t),
              {},
              (0, n.Z)({}, r.id, c(c({}, r), {}, { quantity: o }))
            )
          case 'remove':
            if (void 0 == a) return t
            var s = a.quantity - 1
            if (s > 0)
              return c(
                c({}, t),
                {},
                (0, n.Z)({}, r.id, c(c({}, a), {}, { quantity: s }))
              )
            var p = c({}, t)
            return delete p[r.id], p
          default:
            throw new Error('Unhandled action type: '.concat(u))
        }
      }
      var d = function (t, e) {
          return (t += e.price * e.quantity)
        },
        O = function (t, e) {
          return t + e.quantity
        },
        y = function () {
          var t = (0, i.useContext)(f),
            e = Object.values(t),
            r = e.reduce(O, 0),
            n = e.reduce(d, 0)
          return { items: e, itemsById: t, count: r, subTotal: n }
        },
        b = function () {
          var t = (0, i.useContext)(s)
          return {
            addToCart: function (e, r) {
              return t({ type: 'add', item: e, quantity: r })
            },
            removeFromCart: function (e) {
              return t({ type: 'remove', item: e })
            },
          }
        }
      e.ZP = function (t) {
        var e = t.children,
          r = (0, i.useReducer)(p, a),
          n = r[0],
          o = r[1]
        return (0, u.jsx)(f.Provider, {
          value: n,
          children: (0, u.jsx)(s.Provider, { value: o, children: e }),
        })
      }
    },
    6363: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return r(1476)
        },
      ])
    },
    2189: function () {},
    7629: function () {},
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e))
    }
    t.O(0, [774, 179], function () {
      return e(6363), e(4651)
    })
    var r = t.O()
    _N_E = r
  },
])
