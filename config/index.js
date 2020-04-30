'use strict'

const path = require('path');

module.export = {
  dev: {
    assetsSubDirectory: 'static' // 项目资源目录
  },
  build: {
    assetsSubDirectory: 'static', // 项目资源目录
    buildPath: path.resolve(__dirname, '../dist')
  },
  PName: 'react-demo'
};
