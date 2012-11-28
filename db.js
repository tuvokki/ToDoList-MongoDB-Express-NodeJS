/*
 * Connect to MongoDB and create the ToDo model for the collection of documents.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mogodb://localhost/todos');

var Todo = new Schema({
	title: String,
	created_at: Date,
	completed: Boolean,
	completed_at: Date,
});

/*
 * Create the Todo Model.
 */

var Todos = mongoose.model('Todos', Todo);

/*
   Fill with sample data to DB.. (Please ignore, test code below)

var testTodo = new Todos({
	title: "Test ToDo",
	created_at: Date.now(),
	completed: false
});

testTodo.save(function(error) {
	if (error) return handleError(error);
});

*/