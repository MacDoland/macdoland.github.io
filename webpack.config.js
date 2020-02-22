const path = require('path');
const nodeExternals = require('webpack-node-externals');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'

  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  target: 'node',
  externals: [nodeExternals()],
  watch: true,
  devtool: 'source-map',
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
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /.(gif|png|jpe?g|webp|svg)$/i,
        use: [
           {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: function(url) {
                return '/dist/'
            },
            }
           },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: false,
              webp: {
                quality: 80
              },
              publicPath: function(url) {
                return '/dist/'
            },
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    })
  ]
};