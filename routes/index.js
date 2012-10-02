/*
 * Require the DB module, set up model.
 */

require('../db');
var mongoose = require('mongoose');
var Todos = mongoose.model('Todos');

/*
 * Query MongoDB and pass it into our index page.
 */

exports.index = function(req, res){
  Todos.find( function(error, todos){
  	console.log(todos);
  	res.render('index', { title: 'ToDo List with Mongoose and Express', h1: 'ToDo List', todos: todos});
  });
};

/*
 * Render remove page.
 */
exports.remove = function(req, res){
  res.render('remove', {title: 'ToDo List with Mongoose and Express', h1: 'Remove an item!'})
};

/*
 * Create ToDo function. Note to self: Express BodyParser is not working,
 * switch to Connect module and use their bodyparser for this function to work.
 */

exports.create = function(req, req){
	new Todos({
		title: req.body.content,
		created_at: Date.now(),
		completed: false
	}).save( function(error, Todos){
		res.redirect('/');
	});
}

/*
 * Destroy function.
 */

 exports.destroy = function(req, res){
 	var todo_id = req.params.id;
 	this.destroy();
 };
