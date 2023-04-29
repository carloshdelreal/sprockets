

import { ServerRoute } from '@hapi/hapi';
import { getFactoryHandler } from '../handlers';

const participantRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/factory/{factoryId}',
    options: {
      auth: false,
      description: 'returns factory by factory id',
      handler: getFactoryHandler,
    },
  },
];

export default participantRoutes;
