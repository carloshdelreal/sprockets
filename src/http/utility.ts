import { Server } from '@hapi/hapi';

export function DecorateServer(server: Server): void {
  server.ext('onPreResponse', (request, h, err) => {
    const response = request?.response;
    if (err) {
      return h.continue;
    }

    if (!response?.isBoom) {
      return h.continue;
    }

    if (response?.errorCode) {
      request.response.output.payload.errorCode = response.errorCode;
    }

    return request.response;
  });
}
