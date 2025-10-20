const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = withBundleAnalyzer({
  productionBrowserSourceMaps: false,
  output: "export",
  compress: true,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
});

module.exports = nextConfig;

