'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'factory_productions',
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          autoIncrement: true,
          autoIncrementIdentity: true,
          primaryKey: true,
        },
        factory_id: {
          type: Sequelize.BIGINT,
          references: { model: 'factories', key: 'id' }
        },
        production: {
          type: Sequelize.INTEGER
        }
      },
      {
        underscored: true,
      }
    );
  },

  async down(queryInterface) {
    return queryInterface.dropTable('factory_productions');
  }
};
