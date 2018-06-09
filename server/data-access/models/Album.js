import albumTypeEnum from '../../../common/constants/enum/album-type.enum';

export default (sequelize, DataTypes) =>
  sequelize.define('artist-albums', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    artistId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    releaseMonth: DataTypes.INTEGER,
    releaseDay: DataTypes.INTEGER,
    type: DataTypes.ENUM(albumTypeEnum),
  });
