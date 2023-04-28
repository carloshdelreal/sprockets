import * as Hapi from '@hapi/hapi';

import RegisterPlugins from './plugins';
import { RegisterJwtId } from './jwt';
import { ServerOptions } from './types';
import RegisterHealthcheck from './healthcheck';
import { registerRoutes } from './routeRegister';
import { appSecret } from '../../context';
import LifeCycleHooks from './lifecycleHooks';

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
  swagger: false,
  defaultAuthStrategy: false,
  routes: [],
  authStrategies: [],
};

export default async function PreparedServer({
  options = defaults.options,
  healthcheck = defaults.healthcheck,
  routes = defaults.routes,
  jwtIdSecret = defaults.jwtIdSecret,
  authStrategies = defaults.authStrategies || [],
  defaultAuthStrategy = defaults.defaultAuthStrategy,
}: ServerOptions = defaults): Promise<Hapi.Server> {
  const server: Hapi.Server = new Hapi.Server({ ...defaults.options, ...options });

  try {
    await RegisterPlugins(server);

    if (healthcheck) RegisterHealthcheck(server, healthcheck);

    await LifeCycleHooks(server);

    if (authStrategies.length)
      authStrategies.forEach((strategy) =>
        server.auth.strategy(strategy.name, strategy.scheme, strategy.options)
      );

    if (jwtIdSecret) {
      RegisterJwtId(server, appSecret);
    }

    if (defaultAuthStrategy) server.auth.default(defaultAuthStrategy as string);

    registerRoutes(server, routes);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    process.exit(1);
  }

  return server;
}
