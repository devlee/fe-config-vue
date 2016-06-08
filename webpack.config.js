const webpack = require('webpack');

const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/components/app/app.js'
    ]
  },
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  devtool: 'source-map'
};
