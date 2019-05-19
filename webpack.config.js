const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',

  entry: {
    app: [
      '@babel/polyfill',
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, 'client/js/index.jsx'),
      path.resolve(__dirname, 'client/style/main.scss'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
      favicon: './client/img/coaster.png',
    }),

    new webpack.HotModuleReplacementPlugin(),

    new webpack.DefinePlugin({
      __dev: true,
    }),
  ],

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
        },
      },
      { test: /\.s[ac]ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
    ],
  },

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://127.0.0.1:5000',
      changeOrigin: true,
    },
  },
};

module.exports = config;
