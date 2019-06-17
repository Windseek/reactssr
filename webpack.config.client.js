const path = require('path');
const merge = require("webpack-merge");
const baseconfig = require("./webpack.base.js");

const config = {
    mode: 'development',
    entry: [
        path.resolve(__dirname, "entry/client/index.js")
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }
};
module.exports = merge(baseconfig, config);