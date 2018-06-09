import albumFormatEnum from '../../../common/constants/enum/album-format.enum';

const defineUserAlbum = (sequelize, DataTypes) => {
  const UserAlbum = sequelize.define('useralbums', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    albumId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    format: DataTypes.ENUM(albumFormatEnum),
    editionDescription: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  UserAlbum.associate = (db) => {
    const { useralbums, albums, coasterusers } = db.sequelize.models;

    useralbums.belongsTo(albums, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });

    useralbums.belongsTo(coasterusers, {
      onDElete: 'CASCADE',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return UserAlbum;
};

export default defineUserAlbum;
