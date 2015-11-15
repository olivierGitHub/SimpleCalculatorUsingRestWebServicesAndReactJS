var React = require('react');

var InputText = React.createClass({
    render: function () {
        return (
            <div className="form-group">
                <label>{this.props.label}</label>
                <input ref={this.props.id} type="text" className="form-control" value={this.props.value} id={this.props.id} />
            </div>
            );
    }
});

module.exports = InputText;