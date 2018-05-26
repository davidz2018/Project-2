var express = require('express');
var router = express.Router();
var path = require('path');

var user = require('../models/user');

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



module.exports = router;