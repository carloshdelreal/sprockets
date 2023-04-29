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
    const sprocket = await Powerflex.getSprocket(sprocketId);
    return sprocket;
  } catch (e) {
    console.log(e);
  }
};
