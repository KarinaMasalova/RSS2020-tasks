const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, options) => {
  const debug = options.mode === 'development';
  const mode = debug ? 'development' : 'production';
  const config = {
    mode,
    devtool: debug ? 'source-map' : 'none',
    watch: false,
    entry: ['./src/app.js', './src/css/style.css'],
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Movie Search',
        filename: 'index.html',
        template: './src/assets/index.html',
      }),
      new CopyPlugin([
        { from: './src/assets/img', to: 'img' },
      ]),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          loader: 'file-loader',
        },
      ],
    },
  };

  return config;
};
