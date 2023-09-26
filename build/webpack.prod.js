const { merge } = require('webpack-merge')

import baseConfig from './webpack.base.js'
module.exports = merge(baseConfig, {
  mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
})
