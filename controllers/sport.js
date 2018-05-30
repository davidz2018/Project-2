var express = require('express');
var router = express.Router();

var Sport = require('../models')['Sport'];
Sport.sync();

var Bar = require('../models')['Bar'];
Bar.sync();

// Index page
router.get('/', function(req, res) {
    // Create an object that 
})