function getPriority(path, defaultValue) {
  switch (path) {
    case "/":
      return 1;
    case "/face-recognition":
      return 0.9;
    case "/face-pc-sdk":
      return 0.89;
    case "/face-iot-full-sdk":
      return 0.88;
    case "/face-iot-lite-sdk":
      return 0.87;
    case "/solutions":
      return 0.86;
    case "/shop":
      return 0.85;
    default:
      return defaultValue;
  }
}

module.exports = {
  siteUrl: "https://www.egroupai.com",
  generateRobotsTxt: true,
  exclude: [
    "/pay-failed",
    "/pay-complete",
    "/org",
    "/org/engines",
    "/org/licenses",
    "/org/orders",
    "/login",
    "/checkout",
    "/404",
  ],
  alternateRefs: [
    {
      href: 'https://www.egroupai.com/zh-tw',
      hreflang: 'zh-tw',
    },
    {
      href: 'https://www.egroupai.com/en',
      hreflang: 'en',
    },
  ],
  transform: async (config, path) => {
    let loc = path
    if (loc.includes("/zh-tw")) {
      return null
    }
    if (loc.includes("/en")) {
      loc = loc.replace("/en", "");
    }
    return {
      loc,
      changefreq: config.changefreq,
      priority: getPriority(path, config.priority),
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
};
