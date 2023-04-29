import { Request, ResponseObject } from '@hapi/hapi';
import Powerflex from '../../domain/services/Powerflex';

export const getFactoryHandler = async (request: Request): Promise<ResponseObject> => {
  const factoryId: number = request.params.factoryId;
  try {
    const factory = await Powerflex.getFactory(factoryId);
    return factory;
  } catch (e) {
    console.log(e);
  }
};
