module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Post = sequelize.define("Post", {
    post_title: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
        }
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
  Post.associate = function(models) {
      // Posts belong to an Fans
      // A Post can't be created without a Fan due to the foreign key constraint
      Post.belongsTo(models.Fan, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    return Post;
  }; 
=======
  var Post = sequelize.define("Post", {
  post_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
      }
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

Post.associate = function(models) {
    // Posts belong to an Fans
    // A Post can't be created without a Fan due to the foreign key constraint
    Post.belongsTo(models.Fan, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Post;
};
>>>>>>> 886afc09258a91a37d64a8c85d6dfe2ec5f1e7c0
