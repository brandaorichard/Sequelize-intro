// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = UserModel;