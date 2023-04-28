import * as Hapi from '@hapi/hapi';
import printRequest from '../printRequest';

export default function onPreResponse(request, h: Hapi.ResponseToolkit) {
  // Convert Axios Client Errors
  if (request.response.isBoom) {
    // eslint-disable-next-line no-console
    console.error(request.response);
  }

  if (request.response.isAxiosError) {
    const { response } = request.response;

    printRequest({
      ...request,
      response: {
        source: {
          axiosError: true,
          statusText: response.statusText,
          statusCode: response.status,
        },
      },
    });

    return h.response({ message: response.statusText }).code(response.status);
  }

  printRequest(request);

  return h.continue;
}
