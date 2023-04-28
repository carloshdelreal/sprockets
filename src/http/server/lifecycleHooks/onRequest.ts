import * as Hapi from '@hapi/hapi';

export default function onRequest(request, h: Hapi.ResponseToolkit) {
  request.times = {
    onRequest: Date.now(),
  };

  return h.continue;
}
