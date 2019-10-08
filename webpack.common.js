const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            Components: path.resolve(__dirname, 'src/components'),
            Styles: path.resolve(__dirname, 'src/styles'),
            Layouts: path.resolve(__dirname, 'src/layouts'),
            Images: path.resolve(__dirname, 'src/images'),
        },
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
        filename: 'main.bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],
}
