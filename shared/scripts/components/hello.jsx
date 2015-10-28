/**
 * @file shared/scripts/components/hello.jsx
 */
'use strict';

var React = require('react');
module.exports = React.createClass({
    displayName: 'Hello',
    render: function() {
        return <p>Hello, world. I am a working component.</p>
    }
});