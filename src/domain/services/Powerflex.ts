import { NewSprocket } from '../../types';
import models from '../models';
import { Factory } from '../models/Factory';
import { Sprocket } from '../models/Sprocket';

export type PowerflexInterface = {
  allSprockets(): Promise<Sprocket[]>;
  getFactory(id: number): Promise<Factory>;
  getSprocket(id: string): Promise<Sprocket>;
  createSprocket(newSprocket: NewSprocket): Promise<Sprocket>;
  updateSprocket(sprocketId: string, newSprocket: NewSprocket): Promise<Sprocket>;
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

  async createSprocket(newSprocket: NewSprocket): Promise<Sprocket> {
      return models.Sprocket.create({...newSprocket, created_at: new Date(), updated_at: new Date()});
  }

  async updateSprocket(sprocketId:string, newSprocket: NewSprocket): Promise<Sprocket> {
    const sprocket = await models.Sprocket.findByPk(sprocketId);
    if (sprocket) {
      Object.assign(sprocket, newSprocket);
      sprocket.save();
      return sprocket;
    }
      return null;
  }
}

export default new Powerflex();
