const webpack = require('webpack');
const path = require('path');

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CONFIG = require('../config/index.js');
const baseConfig = require('./webpack.base.config');
const utils = require('./utils');