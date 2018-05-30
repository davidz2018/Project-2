var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

router.get('/', function(req, res) {
    res.render('register');
});



router.post('/register', function(req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email =req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var team = req.body.team;

    console.log(req.body)
    console.log(req.body.team)
    
    req.checkBody('firstName', 'First name is required').notEmpty();
    req.checkBody('lastName', 'Last name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('team', 'Must select a team').notEmpty();
    var errors = req.validationErrors();

    if(errors) {
       res.render('register', {
           error:errors
       });
        
    } else{
       var newUser = new User({
           firtsName: firstName,
           lastName: lastName,
           email: email,
           username: username,
           password: password,
           team: team

       });

       user.createUser(newUser, function(err, user) {
            if(err) throw err;
            console.log(user);
       });
       req.flash('success_msg', 'You are registered and can now log in');

       res.redirect('/views/userpage')
    }
});

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.getUserByUsername(username, function(err, user) {
          if(err) throw err;
          if(!user){
              return done(null, false, {message: 'Unknown User'});
          }
          User.comparePassword(password, user.password, function(err, isMatch){
              if(err) throw err;
              if(isMatch) {
                  return done(null, user);
              } else {
                return done(null, false, {message: 'Invalid password'});
              }
          });
      });  
    }));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    })
})

app.post('/userpage', 
passport.authenticate('local', {successRedirect:'/', failureRedirect:'/user/register', failureFlash: true }),
function(req, res) {
  res.redirect('/')  
});

router.get('/logout', function(req, res) {
    rec.logout();

    req.flash('success_msg', 'You are logged out');

    res.redirect('/user/register');
});

module.exports = router;