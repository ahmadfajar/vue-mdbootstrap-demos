const webpack = require('webpack');

module.exports = {
    productionSourceMap: false,
    parallel: false,
    publicPath: '/', // process.env.NODE_ENV === 'production' ? '/mdbootstrap-demo/' : '/',
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin({
                resourceRegExp: /^\.\/locale$/,
                contextRegExp: /moment$/
            })
        ]
    }
};
