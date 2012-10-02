
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ToDo List with Mongoose and Express', h1: 'ToDo List'});
};