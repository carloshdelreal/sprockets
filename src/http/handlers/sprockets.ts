import { Request, ResponseObject } from '@hapi/hapi';

export const getSprocketsHandler = async (request: Request): Promise<ResponseObject> => {
  return {
    hello: 'this is working',
  };
};
