var React = require('react');

var CheckboxComponent = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3"><label><input id={this.props.id} type="checkbox" />{this.props.label}</label></div>
            );
    }
});

module.exports = CheckboxComponent;