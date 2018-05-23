var express = require('express');
var passport = require('passport');
var router = express.Router();

var env = {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CALLBACK_URL:
        process.env.AUTH_CALLBACK_URL || 'http://localhost:3000/callback'
};

router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUrl: env.AUTH0_CALLBACK_URL,
    responseType: 'code',
    audience: 'http://' + env.AUTH0_DOMAIN,
    scope: 'openid profile'}),
    function(req, res) {
        res.redirect("/");
    });

router.get('/logout', function(req, res) {
    res.logout();
    res.redirect('/');
});

router.get('/failure', function(req, res) {
    var error = req.flash('error');
    var error_description = req.flash("error_description");
    req.logout();
    res.render('failure', {
        error: error[0],
        error_description: error_description[0],
    });
});

module.exports = router;