import { Request, ResponseObject } from '@hapi/hapi';
import Powerflex from '../../domain/services/Powerflex';

export const getSprocketsHandler = async (request: Request): Promise<ResponseObject> => {
  try {
    const sprockets = await Powerflex.allSprockets();
    return { helo: 'ok', sprockets};
  } catch (e) {
    console.log(e);
  }
  return { helo: 'ok'};
};
