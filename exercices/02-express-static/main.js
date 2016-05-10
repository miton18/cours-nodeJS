var express = require('express');
var path    = require('path');

var app     = express();

var staticFolder    = path.join(__dirname, '/public');
var staticRessource = express.static(staticFolder);

app.get('/*', staticRessource);

app.listen(8080);