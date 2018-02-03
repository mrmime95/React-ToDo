var React = require('react');
var uuid = require("node-uuid");
var moment = require("moment");

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require("TodoSearch");
var TodoAPI = require("TodoAPI");


var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            showCompleted: false,
            searchText: '',
            todos: TodoAPI.getTodos()
        };
    },

    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
    },

    handleAddTodo: function (text){
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    createdAt: moment().format("YYYY-MM-DD ddd HH:mm:ss"),
                    completedAt: '',
                    completed: false
                }
            ]
        })
    },

    handleToggel: function (id) {
        var tempTodos = this.state.todos.map((todo)=>{
            if(todo.id === id)
                todo.completed = !todo.completed;
            if(todo.completed)
                todo.completedAt = moment().format("YYYY-MM-DD ddd HH:mm:ss")
            else
                todo.completedAt = '';
            return todo;
        });
        this.setState({
            todos: tempTodos
        })
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filterTodo = TodoAPI.filterTodos(todos, showCompleted, searchText);
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filterTodo} onToggle={this.handleToggel}/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = TodoApp;