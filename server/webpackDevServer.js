/**
 * @file server/webpackDevServer.js
 */
'use strict';

var
    webpack = require('webpack'),
    webpackConfig = require('../webpack.config'),
    WebpackDevServer = require('webpack-dev-server'),

    // create our webpack dev server instance
    devServer = new WebpackDevServer(webpack(webpackConfig), {
        // ensure we utilize hot-swapping of modules
        hot: true,
        // use the public path from our config to avoid dev/prod oddness
        publicPath: webpackConfig.output.publicPath,
        // spice
        stats: {
            colors: true
        }
    });

// kick off our server; abstract the port so we can pass it via ENV variables
// as needed. hard-coded for now
devServer.listen(1337, 'localhost', function() {
    console.log('[development mode]');
    console.log('>> Webpack dev server running at port 1337');
});
