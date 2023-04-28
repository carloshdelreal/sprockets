import models from '../models';
import { Sprocket } from '../models/Sprocket';

export type PowerflexInterface = {
  allSprockets(): Promise<Sprocket[]>;
};

export class Powerflex implements PowerflexInterface {
  async allSprockets() {
    return models.Sprocket.findAll();
  }
}

export default new Powerflex();
