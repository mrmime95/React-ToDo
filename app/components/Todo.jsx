var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed} = this.props;
        console.log(completed);
        return (
            <div onClick={() =>{
                this.props.onToggle(id);
            }}>
                <input type='checkbox' checked={completed}/>
                {id}. {text}
            </div>
        )
    }
});

module.exports = Todo;