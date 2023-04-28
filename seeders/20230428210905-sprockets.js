'use strict';

const { generateBulkSprockets } = require('../src/utils/seeders');

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const sprockets = await generateBulkSprockets();

    console.log({sprockets})

    try {
      await queryInterface.bulkInsert('sprockets', sprockets, {});
    } catch (err) {
      console.error(err);
      throw err;
    }

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('sprockets', null, {});
  }
};
