export default (sequelize, DataTypes) =>
  sequelize.define('sessions', {
    sid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: DataTypes.STRING,
    expires: DataTypes.DATE,
    data: DataTypes.STRING(50000),
    createdAt: DataTypes.DATE,
  }, {
    timestamps: false,
  });
