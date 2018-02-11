const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const clientConfig = {
  entry: './src/client/client.js', // Client-side entry-point

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public') // Put in folder "public"
  }
}

module.exports = merge(baseConfig, clientConfig)
