import { ResponseObject, Server, Request, ResponseToolkit } from '@hapi/hapi';

export default function RegisterHealthcheck(
  server: Server,
  handler: (request: Request, h: ResponseToolkit) => Promise<ResponseObject>
) {
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
