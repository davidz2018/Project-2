var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
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
    
    var errors = req.validationErrors();

    if(errors) {
        res.render('register', {
            errors:errors
        })
    } else{
        var newUser = new user
    }
});



module.exports = router;