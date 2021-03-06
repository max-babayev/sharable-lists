var WebpackStripLoader = require('strip-loader');
var devConfig = require('./webpack.config.js');

var stripLoader = {
 test: [/\.js$/],
 exclude: /(node_modules|spec)/,
 loader: WebpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;