const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('artists', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    artistName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    normalizedName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    genre: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    country: {
      allowNull: true,
      type: Sequelize.STRING,
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
  queryInterface.dropTable('artists');

module.exports = { up, down };
