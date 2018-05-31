
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Bar = sequelize.define('Bar', {
    barName: DataTypes.STRING
  }, {});
  Bar.associate = function(models) {
    Bar.belongsToMany(models.Sport, {through: 'teamBar'});
  };
  return Bar;
};