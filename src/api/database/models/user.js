module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    displayName: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
  });
