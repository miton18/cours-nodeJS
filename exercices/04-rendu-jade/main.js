var express = require('express');

var app     = express();

app.set('view engine', 'jade');

app.get('/:someone', function(req, res){
    
    res.render('index', {people: req.params.someone});
});

/* Autre Syntaxe possible

app.route('/users')
  .get(function(req, res) {
    res.send('Liste des users');
  })
  .post(function(req, res) {
    res.send('Nouvel user');
  })
  .put(function(req, res) {
    res.send("Modification d'un user");
  });
  
*/

app.listen(8080);