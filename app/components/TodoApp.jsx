var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass ({
	getInitialState: function() {
		return {
			todos: [
				{
					id:1,
					text:'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean the house'	
				},
				{
					id: 3,
					text: 'Send email'	
				},
				{
					id: 4,
					text: 'Go to work'	
				}
			]

		};
	},
	handleAddTodo: function (text) {
		alert('new todo: '+ text);
	},
	render: function () {
		var {todos} = this.state;
		return (
			<div className="todoapp">
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
			);
	}
});

module.exports = TodoApp;