export default (sequelize, DataTypes) => {
  const CoasterUser = sequelize.define('CoasterUser', {
    username: DataTypes.STRING,
  });

  return CoasterUser;
};
