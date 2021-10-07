const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [
                    'babel-loader',
                    'vue-svg-loader',
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    }
};
