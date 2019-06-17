const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require("webpack-merge");
const baseconfig = require("./webpack.base.js");

const config = {
    target: "node",
    mode: 'development',
    entry: [
        path.resolve(__dirname, "entry/server/index.js")
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    externals: [nodeExternals()]
};
module.exports = merge(baseconfig, config);