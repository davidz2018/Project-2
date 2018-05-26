var mysql = require('mysql');
var sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

sequelize.connect(db: );

var db = sequelize.connection;

var UserSchema = sequelize.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

var User = module.export = sequelize.Model('User', UserSchema);

module.exports.createUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt){
    bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
    })
    })
}