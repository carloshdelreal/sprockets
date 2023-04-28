import * as Hapi from '@hapi/hapi';
import * as fs from 'fs';
import * as path from 'path';

export const registerRoutes = (server: Hapi.Server, routes: Hapi.ServerRoute[] | string) => {
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
        registerRoutes(server, fullPath);
      }

      if (process.env.TS_NODE_DEV || process.env.TS_NODE) {
        return (
          !['index.ts'].includes(lowered) &&
          !lowered.startsWith('.') &&
          ['.ts'].includes(lowered.slice(-3))
        );
      } else {
        return (
          !['index.js'].includes(lowered) &&
          !lowered.startsWith('.') &&
          ['.js'].includes(lowered.slice(-3))
        );
      }
    });

    actionable.forEach((filename: string) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const content = require(path.join(routes, filename));

      server.route(tag(content));
    });
  }
};
