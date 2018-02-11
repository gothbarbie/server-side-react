const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const serverConfig = {
  target: 'node', // Note! Build for Node (not browser, as per default)
  
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()] // Only bundle modules in use
}

module.exports = merge(baseConfig, serverConfig)
