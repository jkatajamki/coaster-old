const albumFormatEnum = require('../../../common/constants/enum/album-type.enum');

const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('useralbums', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    albumId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'albums',
        key: 'id',
      },
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'coasterusers',
        key: 'id',
      },
    },
    format: {
      allowNull: true,
      type: Sequelize.ENUM(albumFormatEnum),
    },
    editionDescription: {
      allowNull: true,
      type: Sequelize.STRING,
    },
  });

const down = queryInterface =>
  queryInterface.dropTable('useralbums');

module.exports = { up, down };
