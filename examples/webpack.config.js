const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const assetsDir = path.join(__dirname, './assets');

module.exports = {
  context: path.join(__dirname, '.'),

  entry: {
    app: [
      './js/index.js',
    ],
  },

  output: {
    path: assetsDir + '/',
    publicPath: '/assets',
    filename: '[name].js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/, /bower_components/], loaders: ['react-hot', 'babel?stage=0'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(woff2|woff|svg|ttf|eot)([\?]?.*)$/, loader: 'file-loader?name=[name].[ext]' },
    ],

    noParse: [
      /\.min\.js/,
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    //new webpack.optimize.CommonsChunkPlugin("commons.js")
  ],
};
