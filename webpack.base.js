const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@root': path.resolve(__dirname)
        }
    }
}