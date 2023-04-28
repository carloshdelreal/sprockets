import { factories as factories_data } from '../../../data/seed_factory_data.json';
import models from '../../domain/models';

export const generateBulkFactoryProduction = async () => {
  const factory_production = [];
  const factories = await models.Factory.findAll();

  for (let i = 0; i < factories_data.length; i += 1) {
    const factory_prod = factories_data[i].factory.chart_data.sprocket_production_actual;
    const factory_goal = factories_data[i].factory.chart_data.sprocket_production_goal;
    const factory_time = factories_data[i].factory.chart_data.time;
    
    const factory = factories[i];

    for (let j = 0; j < factory_prod.length; j += 1) {
      const p = factory_prod[j];
      const goal = factory_goal[j];
      const date = new Date(factory_time[j]);
      factory_production.push({production: p, factory_id: factory.id, goal, date});
    }
  }

  return factory_production;
};