var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');
var db = {};

var routes = require('./routes/index');
var users = require('./routes/users');

// TRASH TALKE ROUTES
var routesTrash = require("./controllers/fanPosts_controller");
app.use(routesTrash);


var db = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'post_db'
 });

 db.connect((err) => {
   if(err){
     throw err;
   }
   console.log('MySql Connected...');
 })

//  Trash Talk Handlebars Code
 var exphbs = require("express-handlebars");
 app.engine("handlebars", exphbs({
   defaultLayout: "trash-main"
}));
   app.set("view engine", "handlebars");


// Init App
var app = express();


// trash talk use code
app.use(express.static("public"));
app.use(express.static("public/assets/images/teams"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE fans';
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('Database created...');
  });
});


// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'homepage'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
  while(namespace.length) {
    formParam += '[' + namespace.shift() + ']';
  }
  return {
    param : formParam,
    msg : msg,
    value : value,
  };
  }
}));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use('/', routes);
app.use('/user', user);

app.set('PORT', (process.env.PORT || 3000));
app.listen(app.get('PORT'), function() {
  console.log("App listening on port " +app.get('PORT'));
});