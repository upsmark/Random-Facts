

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var facts = require('./randomfacts');

app.get('/randomfacts', function (req, res) {

  res.send(facts.facts[Math.floor(Math.random()*facts.facts.length)]);
});

app.get('/shoe', function (req, res) {

  res.send(facts.facts);
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
