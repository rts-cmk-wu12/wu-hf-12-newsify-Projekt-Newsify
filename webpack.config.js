const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader",],
          },
          {
            test: /\.html$/i,
            use: ["html-loader"]
          },
          
        ],
        plugins: [
            new HtmlWebpackPlugin({
             template:'./src/index.html'
            })
           ]
      }
}