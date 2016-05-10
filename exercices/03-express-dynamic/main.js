var express = require('express');
var path    = require('path');

var app     = express();

app.get('/messages', function(req, res){

    res.json({
        err: null,
        state: "Liste des messages!"
    })
});

app.post('/messages', function(req, res){

    res.json({
        err: null,
        state: "Message posté!"
    })
});

app.listen(8080);
