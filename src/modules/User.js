module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    language: {
      type: DataTypes.STRING,
      defaultValue: 'en',
    },
  });

  return User;
};
