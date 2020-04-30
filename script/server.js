const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../build/webpack.dev.config.js');

const app = express();
const port = process.argv.slice(2)[0] || CONFIG.dev.host;
const uri = 'http://localhost:' + port;

const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
});

app.use(devMiddleware);

app.listen(port, function () {
  console.log('server listening on' + uri + ', ctrl+c to stop');
});