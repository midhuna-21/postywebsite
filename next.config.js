// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// const nextConfig = withBundleAnalyzer({
//   productionBrowserSourceMaps: false,
//   output: "export",
//   compress: true,
//   trailingSlash: true,

//   images: {
//     unoptimized: true,
//   },

//   modularizeImports: {
//     lodash: {
//       transform: "lodash/{{member}}",
//     },
//     "date-fns": {
//       transform: "date-fns/{{member}}",
//     },
//   },
// });

// module.exports = nextConfig;


module.exports = {
  compress: true,
  poweredByHeader: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 60,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/*'],
  },
}