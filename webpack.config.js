const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
              }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            inject: true, 
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        })
    ],
    optimization: {
        minimize: true
    },
    devServer: {
        port: 9000,
        open: {
            app: {
              name: 'Chrome',
            },
          },
        compress: true,
    },
}