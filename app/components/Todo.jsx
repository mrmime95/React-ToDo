var React = require('react');

var Todo = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;

        var todoClassName = completed? "todo todo-completed" : "todo"

        var setTimeMessage = () => {
            if(completed)
                return "Completed at " + completedAt;
            return "Created at " + createdAt;
        };

        return (
            <div className={todoClassName} onClick={() =>{
                this.props.onToggle(id);
            }}>
                <div>
                    <input type='checkbox' checked={completed}/>
                </div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{setTimeMessage()}</p>
                </div>
            </div>
        )
    }
});

module.exports = Todo;