import * as Hapi from '@hapi/hapi';
import * as fs from 'fs';
import * as path from 'path';

import RegisterHealthcheck from './healthcheck';
import RegisterPlugins from './plugins';
import { ServerOptions } from '../types';

const defaults: ServerOptions = {
  options: {
    port: 3000,
    host: '0.0.0.0',
    routes: {
      validate: {
        failAction: async (request, h, err) => {
          throw err;
        },
      },
    },
  },
  healthcheck: (request, h) => h.response({ status: 'ok' }),
  rollbar: false,
  jwtIdSecret: false,
  swagger: false,
  defaultAuthStrategy: false,
  routes: [],
  authStrategies: [],
};

export { AuthScheme, AuthStrategy, PluginOptions, ServerOptions, AuthStrategies } from '../types';

function RegisterRoutes(server: Hapi.Server, routes: Hapi.ServerRoute[] | string) {
  function tag(e) {
    const entity = e.default || e;

    return (Array.isArray(entity) ? entity : [entity]).map((r) => {
      const route = { ...r };
      if (!route.options) route.options = {};
      if (!route.options.tags) route.options.tags = [];

      route.options.tags = [...route.options.tags, 'api'];

      return route;
    });
  }

  if (Array.isArray(routes)) {
    server.route(tag(routes));
  } else if (typeof routes === 'string') {
    const files = fs.readdirSync(routes);

    const actionable = files.filter((filename: string) => {
      const lowered = filename.toLowerCase();

      const fullPath = path.join(routes, filename);
      if (fs.lstatSync(fullPath).isDirectory()) {
        RegisterRoutes(server, fullPath);
      }

      if (process.env.TS_NODE_DEV || process.env.TS_NODE) {
        return !['index.ts'].includes(lowered) && !lowered.startsWith('.') && ['.ts'].includes(lowered.slice(-3));
      } else {
        return !['index.js'].includes(lowered) && !lowered.startsWith('.') && ['.js'].includes(lowered.slice(-3));
      }
    });

    actionable.forEach((filename: string) => {
      const content = require(path.join(routes, filename)); // eslint-disable-line

      server.route(tag(content));
    });
  }
}

export default async function PreparedServer({
  options = defaults.options,
  healthcheck = defaults.healthcheck,
  rollbar = defaults.rollbar,
  swagger = defaults.swagger,
  routes = defaults.routes || '',
  authStrategies = defaults.authStrategies,
  defaultAuthStrategy = defaults.defaultAuthStrategy,
}: ServerOptions = defaults): Promise<Hapi.Server> {
  const server: Hapi.Server = new Hapi.Server({
    ...defaults.options,
    ...options,
  });

  try {
    await RegisterPlugins(server, { rollbar, swagger });

    if (healthcheck) RegisterHealthcheck(server, healthcheck);

    authStrategies?.forEach((strategy) => server.auth.strategy(strategy.name, strategy.scheme, strategy.options));

    if (defaultAuthStrategy) server.auth.default(defaultAuthStrategy as string);

    console.log({ routes });
    RegisterRoutes(server, routes);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  return server;
}
