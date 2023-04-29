import faker from '@faker-js/faker';

import { sprockets } from '../../../data/seed_sprocket_types.json';

export const generateBulkSprockets = () => {
  return sprockets.map((s) => ({
    id: faker.datatype.uuid(),
    ...s,
  })); 
};