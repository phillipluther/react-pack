/**
 * @file shared/scripts/components/home.jsx
 */
'use strict';

var React = require('react');
module.exports = React.createClass({
    displayName: 'Home',
    render: function() {
        return (
            <div className="home-wrapper">
                <h1>Home</h1>
                <p>This is our home page. No biggie, right? Well ...</p>
                <p>
                    This is a demo of both universal/isomorphic rendering and our
                    hot module swapping. Click around on the nav link above and
                    it should behave as expected.
                </p>
                <p>
                    Also, make changes to anything in the `shared/components`
                    directory and note they take effect without a refresh of any
                    kind. ONLY the module itself is swapped out, maintaining
                    state and your place in the app.
                </p>
            </div>
        );
    }
});