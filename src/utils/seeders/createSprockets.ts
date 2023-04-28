import faker from '@faker-js/faker';

const sprocketsData = [
    {
      teeth: 5,
      pitch_diameter: 5,
      outside_diameter: 6,
      pitch: 1,
    },
    {
      teeth: 5,
      pitch_diameter: 5,
      outside_diameter: 6,
      pitch: 1
    },
    {
      teeth: 5,
      pitch_diameter: 5,
      outside_diameter: 6,
      pitch: 1
    }
  ]

export const generateBulkSprockets = () => {
  return sprocketsData.map(s => ({
    id: faker.datatype.uuid(),
    updated_at: new Date(),
    created_at: new Date(),
    ...s,
  })) 
};