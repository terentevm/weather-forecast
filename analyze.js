process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const webpackConfigProd = require('react-scripts/config/webpack.config.js');

const webpackConfig = webpackConfigProd('production');

webpackConfig.plugins.push(new CompressionPlugin({
  filename: "[path].gz[query]",
  algorithm: "gzip",
  test: /\.js$|\.css$|\.html$/,
  threshold: 500,
  minRatio: 0.8
}));

webpackConfig.plugins.push(new BundleAnalyzerPlugin());

// actually running compilation and waiting for plugin to start explorer
webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.error(err);
  }
});