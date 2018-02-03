var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require("TodoSearch");
var TodoApp = React.createClass({
    getInitialState: function(){
        return{
            showCompleted: false,
            searchText: '',
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

    handleAddTodo: function (text){
        alert("new todo: " + text);
    },

    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },

    render: function () {
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;