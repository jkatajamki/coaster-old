const up = (queryInterface, Sequelize) =>
  queryInterface.createTable('sessions', {
    sid: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'coasterusers',
        key: 'id',
      },
    },
    expires: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    data: {
      allowNull: false,
      type: Sequelize.STRING(50000),
    },
    createdAt: {
      type: Sequelize.DATE,
    },
  }, {
    updatedAt: false,
  });

const down = queryInterface =>
  queryInterface.dropTable('sessions');

module.exports = { up, down };
