'use strict';
module.exports = (sequelize, DataTypes) => {
  var teamBar = sequelize.define('teamBar', {
    teamName: DataTypes.STRING,
    barName: DataTypes.STRING
  }, {});
  teamBar.associate = function(models) {
    // associations can be defined here
  };
  return teamBar;
};