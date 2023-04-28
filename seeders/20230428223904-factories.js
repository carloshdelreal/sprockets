'use strict';

import { generateBulkFactories } from '../src/utils/seeders';

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
  const factories = await generateBulkFactories();

  try {
    await queryInterface.bulkInsert('factories', factories, {});
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
  await queryInterface.bulkDelete('factories', null, {});
}
