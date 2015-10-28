/**
 * @file webpack.config.js
 */
'use strict';

var webpack = require('webpack');
module.exports = {

    // auto source-map our bundled scripts (webpack built-in)
    devtool: 'inline-source-map',

    // define our entry points, which (for now) include our webpack dev server
    // scripts for live reload/hot swap
    entry: [
        'webpack-dev-server/client?http://localhost:1337',
        'webpack/hot/only-dev-server',
        // this entry.jsx is our client entry-point, essentially working just
        // like browserify ... following the "require" trail
        './client/entry.jsx',
    ],

    // config for setting webpack output in the dev server; we create an
    // imaginary "public" directory which we'll serve assets from and proxy 'em
    // to a simple /js (or /css or /images or whatever) path; it's the 
    // equivalent of an express app.use('someFakePath', 'someRealPath');
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:1337/js/',
    },

    // include the hot-swapper plugin
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    // what webpack will try to resolve; we set our extensions to "watch" both
    // .js and .jsx files ... this could (and will!) include .less, etc.
    resolve: {
        extensions: [
            '', 
            '.js',
            '.jsx'
        ]
    },

    module: {
        // our loaders, some RegEx expressions that when a found file matches
        // (from the resolve extensions above), webpack will process it with
        // the named loaders. in this case, we check for .js and .jsx files and
        // run them through our react-hot loader and babel loader for 
        // processing
        loaders: [
            { 
                // process both .js and .jsx files
                test: /\.jsx?$/, 
                loaders: [
                    'react-hot', 
                    'babel'
                ], 
                exclude: /node_modules/ 
            }
        ]
    }
};
