import faker from '@faker-js/faker';

const {sprockets} = require('../../../data/seed_sprocket_types.json')

export const generateBulkSprockets = () => {
  return sprockets.map(s => ({
    id: faker.datatype.uuid(),
    updated_at: new Date(),
    created_at: new Date(),
    ...s,
  })) 
};