import models from '../models';
import { Factory } from '../models/Factory';
import { Sprocket } from '../models/Sprocket';
import { FactoryProduction } from '../models/FactoryProduction';

export type PowerflexInterface = {
  allSprockets(): Promise<Sprocket[]>;
  getFactory(id: number): Promise<Factory>
  getSprocket(id: string): Promise<Sprocket>
};

export class Powerflex implements PowerflexInterface {
  async allSprockets() {
    return models.Sprocket.findAll();
  }

  async getFactory(id: number): Promise<Factory> {
      return models.Factory.findByPk(id, {include: {
        model: models.FactoryProduction,
        attributes: ['production', 'goal', 'date']
      }});
  }

  async getSprocket(id: string): Promise<Sprocket> {
      return models.Sprocket.findByPk(id);
  }
}

export default new Powerflex();
