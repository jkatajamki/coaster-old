const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'client/js/index.jsx'),
      path.resolve(__dirname, 'client/style/main.scss'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.scss'],
    modules: ['node_modules', path.resolve(__dirname, 'client/js')],
    alias: {
      common: path.resolve(__dirname, 'common'),
      images: path.resolve(__dirname, 'client/img'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'client/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      __dev: true,
    }),

    new FaviconsWebpackPlugin('./client/img/coaster.png'),
  ],

  devtool: 'cheap-module-eval-source-map',

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s[ac]ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
    ],
  },
};

module.exports = config;
