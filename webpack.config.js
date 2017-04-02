var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: "./app/main.js"
    },
    output: {
        path: __dirname + '/dist',
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['react']
                }
            }
        }]
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
       /* new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),*/

        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ],
    watch: true
};