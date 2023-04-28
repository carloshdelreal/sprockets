import './env';
import * as path from 'path';
import HttpServer from './server';
import { Server } from '@hapi/hapi';

export const startServer = async (): Promise<Server> => {
  try {
    const server: Server = await HttpServer({
      options: {
        host: '0.0.0.0',
        port: process.env.PORT || 3001,
        routes: {
          cors: {
            origin: ['*'], // an array of origins or 'ignore'
          },
          validate: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            failAction: async (request: any, h: any, err: any) => {
              throw err;
            },
          },
        },
      },
      routes: path.join(__dirname, 'routes'),
      jwtIdSecret: process.env.JWT_SECRET,
    });

    await server.start();
    // eslint-disable-next-line no-console
    console.log('Server running on %s', server.info.uri);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
