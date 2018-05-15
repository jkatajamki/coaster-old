const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('CoasterUser', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  });

const down = queryInterface =>
  queryInterface.dropTable('CoasterUser');

module.exports = { up, down };
