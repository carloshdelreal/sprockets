import Factory, { FactoryModelStatic } from './Factory';
import Sprocket, { SprocketModelStatic} from './Sprocket';

export default {
  Sprocket,
  Factory
};

export type ModelType = {
  Sprocket: SprocketModelStatic;
  Factory: FactoryModelStatic
};

export type ModelNames = keyof ModelType;
