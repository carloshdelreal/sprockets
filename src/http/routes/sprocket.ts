import { ServerRoute } from '@hapi/hapi';
// import * as Joi from '@hapi/joi'
import { getSprocketsHandler } from '../handlers';

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
];

export default participantRoutes;
