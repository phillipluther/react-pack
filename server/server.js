/**
 * @file server/index.js
 */
'use strict';

// pull in and register babel as a hook for our requires
require('babel/register');

var
    // React dependencies (server-side)
    React = require('react'),
    ReactDOM = require('react-dom/server'),
    RoutingContext = require('react-router').RoutingContext,
    match = require('react-router').match,
    routes = require('../shared/scripts/routes.jsx'),

    // http/server deps
    express = require('express'),
    app = express(),
    server,

    // general config, hooks via ENV variables with sensible defaults
    config = {
        mode: process.env.mode || 'development',
        port: process.env.port || 8080
    };

// EJS/view handling
app.set('views', './shared/views');
app.set('view engine', 'ejs');


app.get('/*', function(req, res) {

    // this implementation of route handling is taken directly from the react
    // router docs at github
    match({
        routes: routes,
        location: req.url
    }, function(error, redirectLocation, renderProps) {
        var markup;

        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.redirect(
                302, redirectLocation.pathname + redirectLocation.search
            );
        } else if (renderProps) {
            markup = ReactDOM.renderToString(
                React.createElement(RoutingContext, renderProps)
            );
            res.status(200).render('index'/*.ejs*/, {
                markup: markup
            });
        } else {
            // fancify this for better 404s
            res.status(404).send('Not found');
        }
    });
});

// if we're running in development mode, fire up a Webpack Dev Server
if (config.mode === 'development') {
    require('./webpackDevServer');
}

server = app.listen(config.port, function() {
    console.log(
        '>> App server running at http://localhost:%s', config.port
    );
});