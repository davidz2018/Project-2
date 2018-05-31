'use strict';
module.exports = (sequelize, DataTypes) => {
  var Sport = sequelize.define('Sport', {
    teamName: DataTypes.STRING,
    league: DataTypes.STRING
  }, {});
  Sport.associate = function(models) {
    //Sport.belongsToMany(models.Bar, {through: 'teamBar'});
  };
  return Sport;
};