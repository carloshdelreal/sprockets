import { ServerRoute } from '@hapi/hapi';
// import * as Joi from '@hapi/joi'
import { getSprocketsHandler, getSprocketHandler } from '../handlers';

const participantRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/sprockets',
    options: {
      description: 'Gets sprockets',
      auth: false,
      handler: getSprocketsHandler,
    },
  },
  {
    method: 'GET',
    path: '/sprocket/{sprocketId}',
    options: {
      description: 'Gets sprocket by its id',
      auth: false,
      handler: getSprocketHandler,
    },
  },
];

export default participantRoutes;
