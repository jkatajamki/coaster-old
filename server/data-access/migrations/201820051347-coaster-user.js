const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('coasterusers', {
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
  queryInterface.dropTable('coasterusers');

module.exports = { up, down };
