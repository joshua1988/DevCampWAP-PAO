var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/'
  },
  devtool: "cheap-eval-source-map",
  devServer: {
    // compress: true,
    port: 9000
  },
};
