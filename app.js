var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('chatbot', ['users'])


var app = express();

// var logger = function(req, res, next){
//   console.log('logging');
//   next();
// }
//
// app.use(logger);

//View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static path
app.use(express.static(path.join(__dirname, 'public')));

var users = [
  {
    id: 1,
    email: 'joteo@gmail.com',
  }
]

app.get('/', function(req, res){
  db.users.find(function(err, docs){
    console.log(docs);
    res.render('index', {
      users: docs
    });
  });
});

app.post('/users/add', function(req, res){
  var newUser = {
    id: users.length,
    email: req.body.email
  }

  users.push(newUser);

  console.log(newUser);
  res.render('index', {
    users: users
  });
  res.end();
});

app.listen(7000, function(){
  console.log('Server started on port 7000');
})
