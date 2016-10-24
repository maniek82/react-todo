var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');
describe('Todo', ()=> {
	it('should exist', () => {
		expect(TodoList).toExist();
	});

	it('should render one Todo component for each todo item', () =>{
		var todos = [{
			id:1,
			text: 'something'
		}, {
			id:2,
			text:'something 2'
		}];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosCompnents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

		expect(todosCompnents.length).toBe(todos.length);
	});
});