var React = require('react');
var CheckboxComponent = require('./subComponents/checkbox.js');


var CheckboxGroup = React.createClass({
    render: function () {
        return (
            <div>
            {this.props.options.map(function (option){
                return (
                    <CheckboxComponent id={option.id} label={option.label} key={option.id}></CheckboxComponent>
                );
               })}
            </div>
            );
    }
});

module.exports = CheckboxGroup;