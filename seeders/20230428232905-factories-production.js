'use strict';

import { generateBulkFactoryProduction } from '../src/utils/seeders';

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
  const factory_production = await generateBulkFactoryProduction();

  try {
    await queryInterface.bulkInsert('factory_productions', factory_production, {});
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
  await queryInterface.bulkDelete('factory_productions', null, {});
}
