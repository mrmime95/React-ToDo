var React = require("react");
var ReactDOM = require("react-dom");
var TestUtils = require("react-addons-test-utils");
var expect = require("expect");
var $ = require("jquery");

var AddTodo = require("AddTodo");

describe('AddTodo', () => {
    it('should exist', () =>{
        expect(AddTodo).toExist();
    });
});