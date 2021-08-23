;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [360],
  {
    9796: function (e, n, r) {
      'use strict'
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return C
          },
          default: function () {
            return P
          },
        })
      var t = r(5893),
        c = r(7294),
        s = r(6662),
        i = r(6156),
        o = r(8188),
        a = r(7401),
        u = r(7757),
        l = r.n(u),
        d = r(2137),
        j = r(416),
        h = r(1722),
        p = r(5382),
        f = r(6245),
        x = function (e) {
          var n = ''
          return e < 1 && (n = "Can't be blank"), n
        },
        m = function (e) {
          var n = e.product,
            r = (0, c.useState)(!1),
            s = r[0],
            i = r[1],
            o = (0, c.useState)(''),
            a = o[0],
            u = o[1],
            m = (0, c.useState)(1),
            b = m[0],
            Z = m[1],
            v = (0, c.useState)(!1),
            w = v[0],
            O = v[1],
            y = (0, f.mS)().addToCart,
            g = (function () {
              var e = (0, d.Z)(
                l().mark(function e() {
                  var r
                  return l().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ;(r = x(b)),
                            u(r),
                            r ||
                              (i(!0),
                              new Promise(function (e, n) {
                                window.setTimeout(e, 600)
                              })
                                .then(function () {
                                  y(n, b),
                                    i(!1),
                                    Z(b),
                                    O(!0),
                                    setTimeout(function () {
                                      O(!1)
                                    }, 1e3)
                                })
                                .catch(function (e) {
                                  u('Error: '.concat(e) || 0), i(!1)
                                }))
                        case 3:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function () {
                return e.apply(this, arguments)
              }
            })()
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(j.Z, {
                type: 'number',
                placeholder: 'Quantity',
                value: b,
                min: 1,
                step: 1,
                error: !!a,
                onChange: function (e) {
                  var n = e.target
                  return Z(parseInt(n.value, 10))
                },
                action: {
                  color: 'green',
                  content: 'Add to Cart',
                  icon: 'plus cart',
                  onClick: g,
                  loading: s,
                  disabled: s,
                },
              }),
              a &&
                (0, t.jsx)('div', {
                  style: { color: 'red', position: 'absolute' },
                  children: a,
                }),
              (0, t.jsx)(h.Z, {
                duration: { hide: 500, show: 500 },
                visible: w,
                children: (0, t.jsxs)('div', {
                  style: { color: 'green', position: 'absolute' },
                  children: [
                    (0, t.jsx)(p.Z, { name: 'check' }),
                    'Added to cart',
                  ],
                }),
              }),
            ],
          })
        },
        b = r(1253),
        Z = r(5988),
        v = r(9445),
        w = r(345),
        O = r(1300),
        y = function (e) {
          var n = e.description,
            r = (0, b.Z)(e, ['description'])
          return (0, t.jsxs)('section', {
            className: 'jsx-4249965129 container',
            children: [
              (0, t.jsx)(v.Z, { as: 'h3', children: 'About this avocado' }),
              (0, t.jsx)('p', { className: 'jsx-4249965129', children: n }),
              (0, t.jsx)(w.Z, {}),
              (0, t.jsxs)(O.Z, {
                celled: !0,
                children: [
                  (0, t.jsx)(O.Z.Header, {
                    children: (0, t.jsx)(O.Z.Row, {
                      children: (0, t.jsx)(O.Z.HeaderCell, {
                        colSpan: '2',
                        children: 'Attributes',
                      }),
                    }),
                  }),
                  (0, t.jsx)(O.Z.Body, {
                    children: Object.keys(r).map(function (e) {
                      return (0,
                      t.jsxs)(O.Z.Row, { children: [(0, t.jsx)(O.Z.Cell, { className: 'attr-name', children: e }), (0, t.jsx)(O.Z.Cell, { children: r[e] })] }, e)
                    }),
                  }),
                ],
              }),
              (0, t.jsx)(Z.default, {
                id: '4249965129',
                children: [
                  '.container.jsx-4249965129 .attr-name{text-transform:capitalize;}',
                ],
              }),
            ],
          })
        }
      function g(e, n) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e)
          n &&
            (t = t.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            r.push.apply(r, t)
        }
        return r
      }
      function _(e) {
        for (var n = 1; n < arguments.length; n++) {
          var r = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? g(Object(r), !0).forEach(function (n) {
                ;(0, i.Z)(e, n, r[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : g(Object(r)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(r, n)
                )
              })
        }
        return e
      }
      var k = function (e) {
          var n = e.product
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(o.Z.Group, {
                as: 'section',
                children: (0, t.jsxs)(o.Z, {
                  style: { alignItems: 'center' },
                  children: [
                    (0, t.jsx)(o.Z.Image, {
                      size: 'medium',
                      children: (0, t.jsx)('img', {
                        src: n.image,
                        alt: n.name,
                      }),
                    }),
                    (0, t.jsxs)(o.Z.Content, {
                      children: [
                        (0, t.jsx)(o.Z.Header, { as: 'h1', children: n.name }),
                        (0, t.jsxs)(o.Z.Description, {
                          children: [
                            (0, t.jsx)('p', { children: n.price }),
                            (0, t.jsx)(a.Z, {
                              children: 'SKU: '.concat(n.sku),
                            }),
                          ],
                        }),
                        (0, t.jsx)(o.Z.Extra, {
                          children: (0, t.jsx)(m, { product: n }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, t.jsx)(y, _({}, n.attributes)),
            ],
          })
        },
        C = !0,
        P = function (e) {
          var n = e.product
          return (0, t.jsx)(s.Z, {
            children: null == n ? null : (0, t.jsx)(k, { product: n }),
          })
        }
    },
    6247: function (e, n, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/product/[id]',
        function () {
          return r(9796)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 733, 542, 404, 662, 888, 179], function () {
      return (n = 6247), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
