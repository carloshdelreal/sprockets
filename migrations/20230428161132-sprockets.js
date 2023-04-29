'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'sprockets',
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        teeth: {
          type: Sequelize.INTEGER,
        },
        pitch_diameter: {
          type: Sequelize.INTEGER,
        },
        outside_diameter: {
          type: Sequelize.INTEGER,
        },
        pitch: {
          type: Sequelize.INTEGER,
        }
      },
      {
        underscored: true,
      }
    );
  },

  async down(queryInterface) {
    return queryInterface.dropTable('sprockets');
  }
};
