;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    3063: function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, {
          __N_SSG: function () {
            return k
          },
          default: function () {
            return v
          },
        })
      var i = t(5893),
        s = t(5988),
        r = t(7294),
        c = t(1664),
        a = t(6662),
        o = t(6274),
        l = t(9445),
        u = t(1722),
        d = t(5186),
        x = function (e) {
          var n = e.visible,
            t = e.onClick,
            s = e.onComplete
          return (0, i.jsxs)(l.Z, {
            size: 'huge',
            as: 'h1',
            onClick: t,
            children: [
              'Platzi',
              (0, i.jsx)(u.Z, {
                animation: 'jiggle',
                visible: n,
                duration: 900,
                onComplete: s,
                children: (0, i.jsx)(d.dd, { size: '58px' }),
              }),
              'Avo',
            ],
          })
        },
        f = function () {
          return (0, i.jsxs)(l.Z, {
            size: 'huge',
            as: 'h1',
            children: ['Platzi', (0, i.jsx)(d.nw, { size: '58px' }), 'Avo'],
          })
        },
        h = t(4309),
        j = function () {
          return (0, i.jsxs)('div', {
            className: 'jsx-3586822566 container',
            children: [
              (0, i.jsx)(h.Z, {
                columns: 2,
                children: (0, i.jsxs)(h.Z.Row, {
                  verticalAlign: 'middle',
                  children: [
                    (0, i.jsx)(h.Z.Column, {
                      width: '5',
                      children: (0, i.jsx)(d.nw, { size: '154px' }),
                    }),
                    (0, i.jsxs)(h.Z.Column, {
                      width: '11',
                      children: [
                        (0, i.jsx)(l.Z, {
                          as: 'h2',
                          children: 'Mataste el aguacate',
                        }),
                        (0, i.jsx)('p', {
                          className: 'jsx-3586822566',
                          children: 'Lo tocaste tanto que lo mataste.',
                        }),
                        (0, i.jsx)('p', {
                          className: 'jsx-3586822566',
                          children:
                            'Por otro lado, eres una persona muy curiosa y has descubierto esto. :)',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(s.default, {
                id: '3586822566',
                children: ['.container.jsx-3586822566{padding:2rem;}'],
              }),
            ],
          })
        },
        m = function () {
          var e = (0, r.useState)(!0),
            n = e[0],
            t = e[1],
            c = (0, r.useState)(!1),
            a = c[0],
            l = c[1],
            u = (0, r.useState)(!1),
            d = u[0],
            h = u[1],
            m = (0, r.useState)(0),
            p = m[0],
            w = m[1],
            b = function () {
              return h(!1)
            },
            g = function () {
              return t(function (e) {
                return !e
              })
            }
          return (
            (0, r.useEffect)(function () {
              window.setTimeout(g, 350)
            }, []),
            (0, r.useEffect)(
              function () {
                4 === p && (l(!0), h(!0))
              },
              [p]
            ),
            (0, i.jsxs)('div', {
              className: 'jsx-2277576641 container',
              children: [
                a
                  ? (0, i.jsx)(f, {})
                  : (0, i.jsx)(x, {
                      visible: n,
                      onClick: g,
                      onComplete: function () {
                        return w(function (e) {
                          return e + 1
                        })
                      },
                    }),
                (0, i.jsx)(o.Z, {
                  open: d,
                  content: { children: j },
                  onCancel: b,
                  onConfirm: b,
                  cancelButton: 'Ay, lo siento',
                  confirmButton: 'OK',
                  closeOnDimmerClick: !1,
                }),
                (0, i.jsx)(s.default, {
                  id: '2277576641',
                  children: [
                    '.container.jsx-2277576641{margin:2rem 0;}',
                    '.container.jsx-2277576641 .header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}',
                  ],
                }),
              ],
            })
          )
        },
        p = t(3626),
        w = t(5675),
        b = function (e) {
          return e.map(function (e) {
            var n = e.name,
              t = e.id,
              s = e.price,
              r = e.image
            return (0,
            i.jsx)(c.default, { href: '/product/'.concat(t), passHref: !0, children: (0, i.jsx)(p.Z, { as: 'a', header: n, image: { children: (0, i.jsx)(w.default, { src: r, width: 333, height: 333 }) }, meta: { children: (0, i.jsx)(p.Z.Meta, { style: { color: 'dimgray' }, children: s }) } }) }, t)
          })
        },
        g = function (e) {
          var n = e.products
          return (0, i.jsx)(p.Z.Group, {
            itemsPerRow: 2,
            stackable: !0,
            children: b(n),
          })
        },
        k = !0,
        v = function (e) {
          var n = e.productList
          return (0, i.jsxs)(a.Z, {
            children: [
              (0, i.jsx)(m, {}),
              (0, i.jsx)('section', {
                className: 'jsx-488565440',
                children: (0, i.jsx)(c.default, {
                  href: '/yes-or-no',
                  children: (0, i.jsx)('a', {
                    className: 'jsx-488565440',
                    children: '\xbfDeberia comer un avo hoy?',
                  }),
                }),
              }),
              (0, i.jsx)(g, { products: n }),
              (0, i.jsx)(s.default, {
                id: '488565440',
                children: [
                  'section.jsx-488565440{text-align:center;margin-bottom:2rem;}',
                ],
              }),
            ],
          })
        }
    },
    5301: function (e, n, t) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(3063)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 733, 542, 105, 662, 888, 179], function () {
      return (n = 5301), e((e.s = n))
      var n
    })
    var n = e.O()
    _N_E = n
  },
])
