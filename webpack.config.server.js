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
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css?$/,
                
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoader: 1,
                        modules: true,
                        localIdentName: '[name]_[loacal]_[hash:base64:5]'
                    }
                }

                ],
                exclude: /node-modules/,

            }
        ]
    }
};
module.exports = merge(baseconfig, config);