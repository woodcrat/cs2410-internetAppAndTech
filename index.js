console.log('index.js executing');

var express = require ('express');
var router = require ('./routes/hello.js');
var app = express();

var port = 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

app.use('/', router);
