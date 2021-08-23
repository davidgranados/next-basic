;(self.__BUILD_MANIFEST = (function (s, c, a) {
  return {
    __rewrites: {
      beforeFiles: [],
      afterFiles: [
        { source: '/avocado/:path*', destination: '/product/:path*' },
      ],
      fallback: [],
    },
    '/': [
      s,
      a,
      'static/chunks/105-64a6d5441be20ecb15c0.js',
      c,
      'static/chunks/pages/index-306b376adeb477355356.js',
    ],
    '/_error': ['static/chunks/pages/_error-bb6a99108698e07b95bc.js'],
    '/about': [s, c, 'static/chunks/pages/about-6deb197b2fd4d2a9dd41.js'],
    '/cart': [
      s,
      'static/chunks/868-409f92e20cccc6ed1667.js',
      c,
      'static/chunks/pages/cart-faf908b1564fd00c4ecc.js',
    ],
    '/product/[id]': [
      s,
      a,
      'static/chunks/404-d93a1328f3864fe8b290.js',
      c,
      'static/chunks/pages/product/[id]-2abc29529cb74524ac0e.js',
    ],
    '/yes-or-no': [
      s,
      c,
      'static/chunks/pages/yes-or-no-6ef588236370a18ff6c5.js',
    ],
    sortedPages: [
      '/',
      '/_app',
      '/_error',
      '/about',
      '/cart',
      '/product/[id]',
      '/yes-or-no',
    ],
  }
})(
  'static/chunks/733-976ffb1a962f454c968a.js',
  'static/chunks/662-ca9d783bcef2736c1a32.js',
  'static/chunks/542-9f84f4519f15a5a7c897.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()
