/**
 * @file shared/scripts/components/app/app.jsx
 */
'use strict';

var 
    React = require('react'),
    Header = require('./header'),
    Footer = require('./footer');

module.exports = React.createClass({
    displayName: 'App',
    render: function() {
        return (
            <div className="app-wrapper">
                <Header />
                <content className="content-wrapper">
                    {this.props.children}
                </content>
                <Footer />
            </div>
        );
    }
});