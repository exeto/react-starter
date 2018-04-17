'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'production',
  bail: true,
  entry: paths.appIndexJs,

  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].[chunkhash:8].js',
    publicPath: paths.publicUrl,
  },

  resolve: {
    alias: {
      '@': paths.appSrc,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  performance: {
    hints: false,
  },
};
