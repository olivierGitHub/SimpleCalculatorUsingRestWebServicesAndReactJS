var React = require('react');

var Main = React.createClass({
    getInitialState: function () {
        return {
            count: 5
        }
    },
    render: function () {
        return(
            <div>{this.state.count}</div>
        );
    }
});

module.exports = Main;