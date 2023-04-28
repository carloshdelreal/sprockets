import Factory, { FactoryModelStatic } from './Factory';
import Sprocket, { SprocketModelStatic} from './Sprocket';
import FactoryProduction, { FactoryProductionModelStatic } from './FactoryProduction';

Factory.hasMany(FactoryProduction, {
  foreignKey: 'factoryId'
});

FactoryProduction.belongsTo(Factory);

export default {
  Sprocket,
  Factory,
  FactoryProduction,
};

export type ModelType = {
  Sprocket: SprocketModelStatic;
  Factory: FactoryModelStatic;
  FactoryProduction: FactoryProductionModelStatic;
};

export type ModelNames = keyof ModelType;
