const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
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
            use: [MiniCssExtractPlugin, 'css-loader']
        },
        {
            test: /\.png/,
            type: 'asset/resource'
          }
    ],
    plugins: [
        new HTMLWebpackPlugin({
            inject: true, 
            template: './public/index.html',
            filename: './index.'
        }),
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimize: true
    }
}