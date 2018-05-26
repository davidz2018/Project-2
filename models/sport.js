'use strict';
module.exports = (sequelize, DataTypes) => {
  var sport = sequelize.define('sport', {
    team_name: DataTypes.STRING,
    league: DataTypes.STRING
  }, {});
  sport.associate = function(models) {
  
  };
  return sport;
};