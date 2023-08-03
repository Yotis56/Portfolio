const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
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
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
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
        new MiniCssExtractPlugin()
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