
const https = require('https');
const fs = require('fs');

const options = {

  key:  fs.readFileSync('certs/site.key'),
  cert: fs.readFileSync('certs/site.cert')
};

https.createServer(options, function(req, res) {

  res.writeHead(200);
  res.end('hello world\n');

}).listen(8080);
