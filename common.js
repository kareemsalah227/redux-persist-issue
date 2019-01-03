/* eslint-disable */
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let paths;
try {
  paths = require(path.resolve(process.cwd(), 'paths'));
} catch (e) {
  console.log(
    'No path config found. Add a paths file with the following contents to your app config dir at',
    path.resolve(process.cwd(), 'config', 'paths.json'),
  );
  console.log(
    JSON.stringify(
      {
        entry: {
          main: 'src/index.js',
        },
        html: {
          template: 'src/index.html',
        },
      },
      null,
      2,
    ),
  );
  process.exit(1);
}

module.exports = {
  entry: {
    main: path.resolve(process.cwd(), paths.entry.main),
  },
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },

  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin([path.resolve(process.cwd(), 'dist')], {
      root: process.cwd(),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), paths.html.template),
    }),
  ],
};
