var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('mysql');


//connect to fans database in mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,

  user: "root",
  password: 'BlackTankshark8',
  database: 'fans'
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

//routes 
var routes = require('./routes/index');
var user = require('./routes/user');

//init app
var app = express();

app.set('public', path.join(__dirname, 'public'));

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