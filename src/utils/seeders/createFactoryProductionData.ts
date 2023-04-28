import { factories as factories_data } from '../../../data/seed_factory_data.json';
import models from '../../domain/models';

export const generateBulkFactoryProduction = async () => {
  const factory_production = [];
  const factories = await models.Factory.findAll();

  for (let i = 0; i < factories_data.length; i += 1) {
    const factory_prod = factories_data[i].factory.chart_data.sprocket_production_actual;
    
    const factory = factories[i];
    
    factory_prod.forEach((p) => {
      factory_production.push({production: p, factory_id: factory.id});
    });
  }

  return factory_production;
};