import faker from '@faker-js/faker';

import { factories } from '../../../data/seed_factory_data.json';

export const generateBulkFactories = () => {
  return factories.map((s) => ({
    name: faker.name.firstName()
  })); 
};