var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var read = fs.readFileSync('index.html');
var toString = read.toString(read, 'UTF-8');

app.get('/', function(request, response) {
  response.send(toString);
}));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
