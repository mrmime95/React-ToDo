var React = require('react');
var ToDoList = require('ToDoList');
var ToDoApp = React.createClass({
    getInitialState: function(){
        return{
            todos:[
                {
                    id: 1,
                    text: "EGYESsss sss"
                },
                {
                    id:2,
                    text: "Kettes sss"
                }
            ]
        };
    },
    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <ToDoList todos={todos}/>
            </div>
        )
    }
});

module.exports = ToDoApp;