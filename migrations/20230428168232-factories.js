'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'factories',
      {
        id: {
          type: Sequelize.BIGINT,
          allowNull: false,
          autoIncrement: true,
          autoIncrementIdentity: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
        },
      },
      {
        underscored: true,
      }
    );
  },

  async down(queryInterface) {
    return queryInterface.dropTable('factories');
  }
};
