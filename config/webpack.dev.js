const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const defaultAppMode = 'app';

module.exports = (env) => {
  const appMode = (env && env.app_mode) ? env.app_mode : defaultAppMode;
  const config = common[appMode] || {};
  
  return merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    optimization: {
      runtimeChunk: 'single',
    },
  });
}
