const isProd = process.env.NODE_ENV === 'production'
const proxyPort = process.env.PROXY_PORT
const cdnDomain = process.env.CDN_DOMAIN
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
    domains: [cdnDomain]
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
        destination: `http://localhost:${proxyPort}/api/:path*` // Proxy to Backend
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