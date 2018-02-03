var React = require('react');
var ToDo = require('ToDo');

var ToDoList = React.createClass({
    render: function () {
        var {tudos} = this.props;
        var renderToDos = () => {
            return todos.map((todo) => {
                return(
                    <ToDo key={todo.id} text={todo.text}></ToDo>
                );
            })
        };
        return (
            <div>
                {renderToDos()}
            </div>
        )
    }
});

module.exports = ToDoList;