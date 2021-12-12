const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })],
  module: {
    rules: [
      {
        test: /\.json/,
        type: 'asset/source'
      }
    ]
  },
  devServer: {
    contentBase: './dist',
  }
}