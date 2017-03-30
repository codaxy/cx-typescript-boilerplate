var webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    BabiliPlugin = require("babili-webpack-plugin"),
    merge = require('webpack-merge'),
    common = require('./webpack.config');

var sass = new ExtractTextPlugin({
    filename: "app.css",
    allChunks: true
});

var specific = {
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: sass.extract(['css-loader', 'sass-loader'])
        }, {
            test: /\.css$/,
            loaders: sass.extract(['css-loader'])
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BabiliPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        sass
    ],

    output: {
        publicPath: '/'
    }
};

module.exports = merge(common, specific);
