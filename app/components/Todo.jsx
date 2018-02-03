var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var setTimeMessage = () => {
            if(completed)
                return "Completed at " + completedAt;
            return "Created at " + createdAt;
        };

        return (
            <div onClick={() =>{
                this.props.onToggle(id);
            }}>
                <p>
                    <input type='checkbox' checked={completed}/>
                    {text}</p>
                <p>{setTimeMessage()}</p>
            </div>
        )
    }
});

module.exports = Todo;