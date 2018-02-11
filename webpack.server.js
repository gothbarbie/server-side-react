const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const serverConfig = {
  target: 'node', // Note! Build for Node (not browser, as per default)
  
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
}

module.exports = merge(baseConfig, serverConfig)
