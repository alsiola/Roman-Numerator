var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
    debug:true,
    devtool: 'eval-source-map',
    devServer: {
        inline: true
    },
    entry: './src/client/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/'),
        publicPath: '/'
    },
    module: {
        preloaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test:/\.s?css$/,
                loaders: ["style-loader", "css-loader?modules", "sass-loader", "postcss-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss: () => [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9'
        ]
      }),
    ]
}