import models from '../../../src/domain/models';

export const onlyId = { attributes: ['id'], raw: true };

// Must drop or truncate tables in specific order to avoid constraint conflicts
const tables = ['UserQuestion', 'User', 'Question'];

export const dropAllTables = async (): Promise<void> => {
  for (let i = 0; i < tables.length; i += 1) {
    await models[tables[i]].drop();
  }
  return;
};

export const truncateAllTables = async (): Promise<void> => {
  for (let i = 0; i < tables.length; i += 1) {
    await models[tables[i]].destroy({ where: {}, force: true });
  }
  return;
};
