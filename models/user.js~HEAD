'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    homeTown: DataTypes.STRING,
    currentCity: DataTypes.STRING,
    favoriteTeam: DataTypes.STRING,
    password: DataTypes.STRING,
    userName: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};