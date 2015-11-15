var React = require('react');
var InputText = require('./subComponents/inputText.js');

var InputTextGroup = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.options.map(function (option){
                    return (
                        <InputText label={option.label} value={option.value} id={option.id} ref={option.id} key={option.id}></InputText>
                        );
                })}
            </div>
            );
    }
});

module.exports = InputTextGroup;