import Sprocket, { SprocketModelStatic} from './Sprocket';

export default {
  Sprocket
};

export type ModelType = {
  Sprocket: SprocketModelStatic;
};

export type ModelNames = keyof ModelType;
