var $ = require('jquery');

module.exports = {
	setTodos: function (todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];
		try {
			todos = JSON.parse(stringTodos);
		} catch(e) {

		}
	 return $.isArray(todos) ? todos : [];
	  
	},
	filterTodos: function(todos, showCompleted, searchText) {
		var filteredTodos = todos;
		//filter by showCompleted
		filteredTodos = filteredTodos.filter((todo)=> {
			return !todo.completed || showCompleted;
		});
		//filetery by searchtext
			filteredTodos = filteredTodos.filter((todo) => {
				var text = todo.text.toLowerCase();
				return searchText.length === 0 || text.indexOf(searchText) >-1;
			})
		//sort todos with non-completed first
		filteredTodos.sort( (a, b)=> { // -1 a przed b, 1 b przed a. 0 bez zmian
			if(!a.completed && b.completed) {
				return -1;
			} else if( a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
}