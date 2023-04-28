import models from '../models';
import { Factory } from '../models/Factory';
import { Sprocket } from '../models/Sprocket';

export type PowerflexInterface = {
  allSprockets(): Promise<{sprockets: Sprocket[], factories: Factory[]}>;
};

export class Powerflex implements PowerflexInterface {
  async allSprockets() {
    const sprockets = await models.Sprocket.findAll();
    const factories = await models.Factory.findAll();

    return {
      sprockets, factories
    };
  }
}

export default new Powerflex();
