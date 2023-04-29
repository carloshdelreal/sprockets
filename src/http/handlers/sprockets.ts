import { Request, ResponseObject } from '@hapi/hapi';
import Powerflex from '../../domain/services/Powerflex';

export const getSprocketsHandler = async (request: Request): Promise<ResponseObject> => {
  try {
    const sprockets = await Powerflex.allSprockets();
    return { sprockets};
  } catch (e) {
    console.log(e);
  }
};

export const getSprocketHandler = async (request: Request): Promise<ResponseObject> => {
  const sprocketId: string = request.params.sprocketId;
  try {
    return Powerflex.getSprocket(sprocketId);
  } catch (e) {
    console.log(e);
  }
};

export const createSprocketHandler = async (request: Request): Promise<ResponseObject> => {
  try {
    return Powerflex.createSprocket(request.payload);
  } catch (e) {
    console.log(e);
  }
};

export const updateSprocketHandler = async (request: Request): Promise<ResponseObject> => {
  const sprocketId: string = request.params.sprocketId;
  try {
    return Powerflex.updateSprocket(sprocketId, request.payload);
  } catch (e) {
    console.log(e);
  }
};
