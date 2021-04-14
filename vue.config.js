const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  configureWebpack: (config) => {
    return {
      plugins: [
        new BundleAnalyzerPlugin(),
      ]
    }
  }
}