const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{
        index: './src/index.js',
        inbox: './src/inbox.js',
        archive: './src/archive.js',
        settings: './src/settings.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            chunks: ['inbox'],
        }),
    ]
}