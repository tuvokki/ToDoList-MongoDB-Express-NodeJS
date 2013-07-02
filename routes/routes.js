
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'TVK: Vakantie ToDoLijst', h1: 'We gaan op vakatie!'});
};

exports.remove = function(req, res){
  res.render('remove', {title: 'TVK: Vakantie ToDoLijst', h1: 'Verwijder een item!'})
};