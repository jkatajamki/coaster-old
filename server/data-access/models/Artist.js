export default (sequelize, DataTypes) =>
  sequelize.define('artist', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    artistName: DataTypes.STRING,
    normalizedName: DataTypes.STRING,
    genre: DataTypes.STRING,
    country: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });
