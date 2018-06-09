import albumTypeEnum from '../../../common/constants/enum/album-type.enum';

const defineAlbum = (sequelize, DataTypes) => {
  const Album = sequelize.define('albums', {
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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  Album.associate = (db) => {
    const { albums, artists } = db.sequelize.models;

    albums.belongsTo(artists, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Album;
};

export default defineAlbum;
