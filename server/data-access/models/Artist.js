const defineArtist = (sequelize, DataTypes) => {
  const Artist = sequelize.define('artists', {
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

  Artist.associate = (db) => {
    const { artists, albums } = db.sequelize.models;

    artists.hasMany(albums, {
      as: 'albums',
    });
  };

  return Artist;
}

export default defineArtist;
