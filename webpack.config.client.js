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
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                
                use: ['style-loader', {
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