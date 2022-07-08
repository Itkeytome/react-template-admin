const path = require('path')
// const webpack = require('webpack')
module.exports = {
  // 入口文件
  entry: path.join(__dirname, '../src/index.tsx'),
  // 打包文件出口
  output: {
    filename: 'static/js/[name].js', // 每个js输出的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  resolve: {
    extensions: ['.js', '.tsx', '.ts'],
  }
}