/**
 * @file shared/scripts/components/app/header.jsx
 */
'use strict';

var 
    React = require('react'),
    Link = require('react-router').Link;

module.exports = React.createClass({
    displayName: 'Header',
    render: function() {
        return (
            <header className="header-wrapper">
                <div className="header">
                    <p className="page-title"><em>Global Header</em></p>
                    <p><Link to="/" activeClass="active">Home</Link></p>
                    <p><Link to="/hello" activeClass="active">Hello</Link></p>
                    <p><Link to="/goodbye" activeClass="active">Goodbye</Link></p>
                </div>

                <hr />
            </header>
        );
    }
});