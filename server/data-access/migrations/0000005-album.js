const albumTypeEnum = require('../../../common/constants/enum/album-type.enum');

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
      onDelete: 'CASCADE',
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
    type: {
      allowNull: true,
      type: Sequelize.ENUM(albumTypeEnum),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

const down = queryInterface =>
  queryInterface.dropTable('albums');

module.exports = { up, down };
