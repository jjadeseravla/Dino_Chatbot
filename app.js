var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.listen(7000, function(){
  console.log('Server started on port 7000');
})
