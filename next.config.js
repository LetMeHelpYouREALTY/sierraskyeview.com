module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect non-www to www (all protocols)
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'sierraskyeview.com',
          },
        ],
        destination: 'https://www.sierraskyeview.com/$1',
        permanent: true,
      },
      // Redirect model-residence-* pages to model-* pages (301 permanent for SEO)
      {
        source: '/model-residence-1602',
        destination: '/model-1602',
        permanent: true,
      },
      {
        source: '/model-residence-1708',
        destination: '/model-1708',
        permanent: true,
      },
      {
        source: '/model-residence-1965',
        destination: '/model-1965',
        permanent: true,
      },
      // Soft 404 / legacy path recovery (GSC Coverage 2026-11-18)
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/homes',
        destination: '/floor-plans',
        permanent: true,
      },
      {
        source: '/skye-canyon',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/skye-canyon-homes',
        destination: '/community',
        permanent: true,
      },
      {
        source: '/sierra',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sierra-skyeview',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sierraskyeview',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
