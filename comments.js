// Create web server
// 1. npm init
// 2. npm install express
// 3. node comments.js
// 4. visit http://localhost:8000/comments
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

var comments = [];

app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.send(comments);
});

app.listen(8000);
console.log('Server is running on port 8000');