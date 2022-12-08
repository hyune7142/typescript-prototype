const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env) => {
  const appMode = (env && env.app_mode) ? env.app_mode : defaultAppMode;
  const config = common[appMode] || {};
  
  return merge(config, {
    devtool: 'source-map',
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  });
}
