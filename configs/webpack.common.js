const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'packages', 'main-app', 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html'),
    }),
  ]
};
