var http = require('http');
var dt = require('./sample datafile.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console/log('hello content');
  res.end();
}).listen(8080);