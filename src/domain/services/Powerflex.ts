import models from '../models';
import { Factory } from '../models/Factory';
import { Sprocket } from '../models/Sprocket';
import { FactoryProduction } from '../models/FactoryProduction';

export type PowerflexInterface = {
  allSprockets(): Promise<{sprockets: Sprocket[], factories: Factory[], production: FactoryProduction[]}>;
};

export class Powerflex implements PowerflexInterface {
  async allSprockets() {
    const sprockets = await models.Sprocket.findAll();
    const factories = await models.Factory.findAll();
    const production = await models.FactoryProduction.findAll();

    return {
      sprockets, factories, production
    };
  }
}

export default new Powerflex();
