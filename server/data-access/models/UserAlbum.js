import albumFormatEnum from '../../../common/constants/enum/album-format.enum';

export default (sequelize, DataTypes) =>
  sequelize.define('useralbums', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    format: DataTypes.ENUM(albumFormatEnum),
    editionDescription: DataTypes.STRING,
  });
