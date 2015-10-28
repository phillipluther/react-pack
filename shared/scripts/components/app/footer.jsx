/**
 * @file shared/scripts/components/app/footer.jsx
 */
'use strict';

var 
    React = require('react');

module.exports = React.createClass({
    displayName: 'Footer',
    render: function() {
        return (
            <footer className="footer-wrapper">
                <hr />
                <div className="footer">
                    <p><em>Global footer.</em></p>
                    <p>
                        To toggle between client and server-side rendering, open up 
                        `shared/views/index.ejs` and comment out the script bundle.
                    </p>

                    <p>
                        Give the page a hard refresh and click the nav links again.
                        Same React components you were seeing a sec ago, but rendered 
                        on either side.
                    </p>
                </div>
            </footer>
        );
    }
});