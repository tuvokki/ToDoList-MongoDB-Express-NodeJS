var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	title: String,
	created_at: Date,
	completed: Boolean,
});

mongoose.model('Todo', Todo);

mongoose.connect('mogodb://localhost/todo');