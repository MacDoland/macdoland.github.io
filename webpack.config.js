const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { main: './client/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  target: 'node',
  externals: [nodeExternals()],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.(gif|png|jpe?g|webp|svg)$/i,
        use: [
           'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              webp: {
                quality: 80
              }
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
};