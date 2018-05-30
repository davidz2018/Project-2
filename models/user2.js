var mysql = require('mysql');
var sequelize = require('sequelize');
var bcrypt = require('bcryptjs');


var UserSchema = sequelize.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    team: {
        type: String
    }
});

var User = module.export = sequelize.model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
    });
    });
}

model.exports.getUserByUsername = function(id, callback) {
    User.findById(query, callback);  
}

model.exports.getUserById = function(username, callback) {
    var query = {username: username};
    User.findOne(query, callback);  
}

model.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}