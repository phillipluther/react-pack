/**
 * @file shared/scripts/routes.jsx
 */
'use strict';

var
    React = require('react'),
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,

    // route-level components
    App = require('./components/app/app'),
    Home = require('./components/home'),
    Hello = require('./components/hello'),
    Goodbye = require('./components/goodbye');

module.exports = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
    </Route>
);