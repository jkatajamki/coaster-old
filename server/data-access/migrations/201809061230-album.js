const { albumTypeEnum } = require('../../../common/constants/enum/album-type.enum');

const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('albums', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    artistId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'artists',
        key: 'id',
      },
    },
    description: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    releaseYear: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    releaseMonth: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    releaseDay: {
      allowNull: true,
      type: Sequelize.INTEGER,
    },
    type: Sequelize.ENUM(albumTypeEnum),
  });

const down = queryInterface =>
  queryInterface.dropTable('albums');

module.exports = { up, down };
