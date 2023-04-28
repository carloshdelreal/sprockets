import * as Hapi from '@hapi/hapi';

export default function RegisterHealthcheck(server: Hapi.Server, handler: (request: Hapi.Request, h: Hapi.ResponseToolkit) => void) {
  server.route({
    method: 'GET',
    path: '/healthcheck',
    options: {
      handler,
      description: 'Health status',
      auth: false,
      tags: ['api'],
    },
  });
}
