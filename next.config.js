import bundleAnalyze from "@next/bundle-analyzer";
const withBundleAnalyzer = bundleAnalyze({ enabled: process.env.ANALYZE === 'true' });

export default withBundleAnalyzer({
    // distDir: 'out',
    // productionBrowserSourceMaps: true,
    webpack: (config) => {
      // this will override the experiments
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
    },
})