import * as Hapi from '@hapi/hapi';
import LogPreResponse from './onPreResponse';
import LogRequest from './onRequest';

export default async (server: Hapi.Server) => {
  server.ext({ type: 'onPreResponse', method: LogPreResponse});
  server.ext({ type: 'onRequest', method: LogRequest});
};
