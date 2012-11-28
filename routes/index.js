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
  	res.render('index', { title: 'ToDo List with Mongoose and Express', h1: 'ToDo List', todos: todos});
  });
};

/*
 * Render Mobile-version of the site, switch to mobile template.
 */
 
 exports.mobile = function(req, res){
  Todos.find( function(error, todos){
    console.log(todos);
    res.render('mobile', { title: 'ToDo List with Mongoose and Express: Mobile Version', h1: 'ToDo List', todos: todos});
  });
};

/*
 * Render remove page, execute remove function and redirect back to index page.
 */
exports.remove = function(req, res){
  console.log("Removing: " + req.params.id);
  Todos.findById(req.params.id, function(error, todo){
  	todo.remove( function(error, todo){
  		res.redirect('/');
  	});
  });
};

/*
 * Render complete page, execute complete function and redirect back to index page.
 */

exports.completed = function(req, res){
  console.log("Completing: " + req.params.id);
  Todos.findById(req.params.id, function(error, todo){
    todo.completed = true;
    todo.completed_at = Date.now();
    todo.save( function(error){
      res.redirect('/');
    });
    });
  };

exports.uncomplete = function(req, res){
  console.log("Uncompleting: " + req.params.id);
  Todos.findById(req.params.id, function(error, todo){
    todo.completed = false;
    todo.save( function(error){
      res.redirect('/');
    });
  });
};
/*
 * Create ToDo function and redirect back to index page.
 */

exports.create = function(req, res){
	console.log(req.body.content);
	var temptodo = new Todos({
		title: req.body.content,
		created_at: Date.now(),
		completed: false
	});
	temptodo.save( function(error, Todos){
			res.redirect('/');
	});
}




