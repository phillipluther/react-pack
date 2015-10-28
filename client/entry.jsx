/**
 * @file client/entry.jsx
 */
'use strict';

var
    React = require('react'),
    ReactDOM = require('react-dom'),
    Router = require('react-router').Router,
    browserHistory = require('history/lib/createBrowserHistory'),
    routes = require('../shared/scripts/routes'),
    history = browserHistory();

ReactDOM.render(
    <Router children={routes} history={history}/>, 
    document.getElementById('markup')
);
