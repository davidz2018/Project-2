'use strict';
module.exports = (sequelize, DataTypes) => {
  var bar = sequelize.define('bar', {
    bar_name: DataTypes.STRING
  }, {});
  bar.associate = function(models) {
  
  };
  return bar;
};