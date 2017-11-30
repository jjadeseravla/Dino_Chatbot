var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// var logger = function(req, res, next){
//   console.log('logging');
//   next();
// }
//
// app.use(logger);

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static path
app.use(express.static(path.join(__dirname, 'public')));

var person = {
  name: 'Jeff',
  age: 30
}

app.get('/', function(req, res){
  res.json(person);
});

app.listen(7000, function(){
  console.log('Server started on port 7000');
})
