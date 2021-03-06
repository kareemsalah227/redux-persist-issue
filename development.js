const path = require('path');

const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [path.resolve(process.cwd(), 'dist')],
    port: 3000,
    publicPath: '/',
    // hotOnly: true,
    historyApiFallback: true,
  },
});
