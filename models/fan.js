<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
=======
  module.exports = function(sequelize, DataTypes) {
>>>>>>> 886afc09258a91a37d64a8c85d6dfe2ec5f1e7c0
    var Fan = sequelize.define("Fan", {
      fan_name: DataTypes.STRING,
      team_aff: DataTypes.TEXT,
      fan_username: DataTypes.STRING
    });

    Fan.associate = function(models) {
      // Associating Fan with Posts
      // When an Fan is deleted, also delete any associated Posts
      Fan.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };

    return Fan;
  };