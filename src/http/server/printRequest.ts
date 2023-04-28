import * as Stream from 'stream';

const skip = [
  '/documentation',
  '/swagger',
  '/healthcheck',
];

export default function printRequest(request) {
  for (let path of skip) { // eslint-disable-line
    if (request.path.startsWith(path)) return;
  }

  const { response } = request;

  const payload = { ...request.payload };

  Object.keys(payload).forEach((key) => {
    if (payload[key] instanceof Stream.Readable) payload[key] = '<Read Stream>';
  });

  // eslint-disable-next-line no-console
  console.log(JSON.stringify({
    method: request.method,
    path: request.path,
    query: request.query,
    payload: payload['0'] && payload['1'] ? '<Data Buffer>' : payload,
    response: Buffer.isBuffer(response.source) ? '<Data Buffer>' : response.source,
    statusCode: response.statusCode,
    params: request.params,
    auth: request.auth.credentials,
  }, (key, value) => {
    if (key === 'password' || key === 'token') return '***REDACTED***';
    if (value instanceof Stream.Readable) return '<Read Stream>';
    if (Buffer.isBuffer(value)) return '<Buffer>';

    return value;
  }));
  // eslint-disable-next-line no-console
  console.log('');
}
