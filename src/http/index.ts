import './env';
import * as path from 'path';
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';
import HapiSwagger from 'hapi-swagger';
import HttpServer from './server';
import { Server } from '@hapi/hapi';
import { DecorateServer } from './utility';

export const createServer = async (): Promise<Server> => {
  const server: Server = await HttpServer({
    options: {
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      routes: {
        validate: {
          failAction: async (request: unknown, h: unknown, err: unknown) => {
            throw err;
          },
        },
      },
    },
    routes: path.join(__dirname, 'routes'),
  });

  DecorateServer(server);

  const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: 'SPRockets Server API',
    },
    schemes: ['https'],
    securityDefinitions: {
      jwt: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    security: [{ jwt: [] }],
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  return server;
};

// This function will actually start the server
export const startServer = async (): Promise<Server> => {
  try {
    // await scheduler.connectors.createConnection()
    const server = await createServer();
    await server.start();
    // eslint-disable-next-line no-console
    console.log('Server running on %s', server.info.uri);
    return server;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
