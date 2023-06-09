'use strict';

import { generateBulkSprockets } from '../src/utils/seeders';

export async function up(queryInterface, Sequelize) {
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

  try {
    await queryInterface.bulkInsert('sprockets', sprockets, {});
  } catch (err) {
    console.error(err);
    throw err;
  }

}
export async function down(queryInterface, Sequelize) {
  /**
   * Add commands to revert seed here.
   *
   * Example:
   * await queryInterface.bulkDelete('People', null, {});
   */
  await queryInterface.bulkDelete('sprockets', null, {});
}
