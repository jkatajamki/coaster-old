const up = (queryInterface, Sequelize) =>
  Promise.all([
    queryInterface.addColumn(
      'coasterusers',
      'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    ),
    queryInterface.addColumn(
      'coasterusers',
      'password', {
        type: Sequelize.STRING,
        allowNull: false,
      }
    ),
    queryInterface.addColumn(
      'coasterusers',
      'salt', {
        type: Sequelize.STRING,
        allowNull: false,
      }
    ),
    queryInterface.addColumn(
      'coasterusers',
      'algorithm', {
        type: Sequelize.STRING,
        allowNull: false,
      }
    ),
    queryInterface.addColumn(
      'coasterusers',
      'updatedAt', {
        allowNull: false,
        type: Sequelize.DATE,
      }
    ),
    queryInterface.changeColumn(
      'coasterusers',
      'username', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      }
    ),
  ]);

const down = (queryInterface, Sequelize) =>
  Promise.all([
    queryInterface.removeColumn('coasterusers', 'email'),
    queryInterface.removeColumn('coasterusers', 'password'),
    queryInterface.removeColumn('coasterusers', 'salt'),
    queryInterface.removeColumn('coasterusers', 'algorithm'),
    queryInterface.removeColumn('coasterusers', 'updatedAt'),
    queryInterface.changeColumn(
      'coasterusers',
      'username', {
        type: Sequelize.STRING,
        allowNull: false,
      }
    ),
  ]);

module.exports = { up, down };
