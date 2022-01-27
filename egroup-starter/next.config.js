const isProd = process.env.NODE_ENV === 'production'
const proxyUrl = process.env.PROXY_URL
const s3TestDomain = process.env.S3_TEST_DOMAIN ? process.env.S3_TEST_DOMAIN.split(",") : []
const cdnDomain = process.env.CDN_DOMAIN ? process.env.CDN_DOMAIN.split(",") : []
const cdnUrl = process.env.CDN_URL

const common = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ["en", "zh-tw"],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },
  images: {
    domains: [...s3TestDomain, ...cdnDomain]
  },
  webpack: (config) => {
    // import markdown files
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  }
}

const dev = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${proxyUrl}/api/:path*` // Proxy to Backend
      }
    ]
  },
  ...common
}

const prod = {
  assetPrefix: cdnUrl,
  ...common
};

module.exports = isProd ? prod : dev