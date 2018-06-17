module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }, 
    gender: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    photo: DataTypes.STRING,
    submission_date: DataTypes.DATE , ///date format validation would be idea
    team: DataTypes.STRING,


  });

  // Author.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};

