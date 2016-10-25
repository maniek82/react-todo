var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id:uuid(),
					text:'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the house'	
				},
				{
					id: uuid(),
					text: 'Send email'	
				},
				{
					id: uuid(),
					text: 'Go to work'	
				}
			]

		};
	},
	handleAddTodo: function (text) {
		this.setState ({
			todos: [
			...this.state.todos,
				{
					id:uuid(),
					text: text
				}
			]
		});
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
			<div className="todoapp">
			 	<TodoSearch onSearch={this.handleSearch} />
				<TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
			</div>
			);
	}
});

module.exports = TodoApp;