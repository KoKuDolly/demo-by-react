const webpack = require('webpack');
const path = require('path');

const utils = require('./utils');
const CONFIG = require('../config/index');

const pnamePath = utils.pnamePath;

const fs = require('fs');
console.log(JSON.stringify(CONFIG));

const baseConfig = {
  entry: {
    app: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        // include: utils.resolve('src'),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              "sourceMap": true,
              "modules": false,
              // "modifyVars": theme,
              "javascriptEnabled": true
            }
          }
        ]
      }
    ]
  },
  plugins: [

  ]
};

module.exports = baseConfig;
