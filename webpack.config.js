var webpack = require('webpack');
var path = require('path');
var srcPath = path.resolve(__dirname, 'src/media/js', 'scripts.js');
var dstPath = path.resolve(__dirname, 'web', 'js');
var jQueryPath = path.resolve(__dirname, 'node_modules/jquery/dist', 'jquery.js');

var config = {

  // We change to normal source mapping
  devtool: 'cheap-module-source-map',
  entry: srcPath,
  output: {
    path: dstPath,
    filename: 'scripts.js'
  },
  resolve : {
    alias: {
      jquery: jQueryPath
    }
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
};

module.exports = config;