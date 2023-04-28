import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as BasicAuth from '@hapi/basic';
import * as Blipp from 'blipp';
import * as Jwt from 'hapi-auth-jwt2';
import * as HapiSwagger from 'hapi-swagger';

export default async (server: Hapi.Server) => {
  await server.register([Inert, Vision, Jwt, BasicAuth]);

  const swagger = [
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'TestQuestion API',
        },
        schemes: ['https', 'http'],
        securityDefinitions: {
          jwt: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
          },
        },
        security: [{ jwt: [] }],
      },
    },
  ];

  await server.register([
    ...swagger,
    {
      plugin: Blipp,
      options: {
        showAuth: true,
      },
    },
  ]);
};
