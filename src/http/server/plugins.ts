import * as Hapi from '@hapi/hapi';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as BasicAuth from '@hapi/basic';
import * as Blipp from 'blipp';
import * as Jwt from 'hapi-auth-jwt2';
import * as Rollbar from '@goodwaygroup/lib-hapi-rollbar';
import * as Swagger from 'hapi-swagger';

import { PluginOptions, AuthScheme } from '../types';

export default async (server: Hapi.Server, options: PluginOptions) => {
  await server.register([Inert, Vision, Jwt, BasicAuth]);

  if (options.rollbar && !['test', 'development'].includes(process.env.NODE_ENV || 'test')) {
    await server.register({
      plugin: Rollbar,
      options: {
        accessToken: options.rollbar,
        captureEmail: true,
        captureUncaught: true,
        captureUnhandledRejections: true,
        codeVersion: process.env.npm_package_version || 'undefined',
      },
    });
  } else {
    server.decorate('request', 'sendRollbarMessage', () => ({}));
  }

  const swagger = !options.swagger
    ? []
    : [
        {
          plugin: Swagger,
          options: {
            info: {
              title: process.env.npm_package_name,
              version: process.env.npm_package_version,
            },
            securityDefinitions: {
              [AuthScheme.JWT]: {
                description: 'already authenticated',
                type: 'apiKey',
                name: 'Authorization',
                in: 'header',
              },
              [AuthScheme.Basic]: {
                type: 'basic',
                description: 'submit username and password for token',
              },
            },
            security: [{ [AuthScheme.JWT]: [] }, { [AuthScheme.Basic]: [] }],
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
