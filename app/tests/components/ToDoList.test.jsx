var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var ToDoList = require("ToDoList");
var ToDo = require("ToDo");

describe('ToDoList', () => {
    it('should exist', () =>{
        expect(ToDoList).toExist();
    });

    it('should render one Todo component for each todo item', () => {
        var todos = [{
            id: 1,
            text: "one"
        },
            {
                id: 2,
                text: "two"
            }
        ];
        var toDoList = TestUtils.renderIntoDocument(<ToDoList todos={todos}/>);
        var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList, ToDo);

        expect(todosComponents.length).toBe(todos.length);
    });
});