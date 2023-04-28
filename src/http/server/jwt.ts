import * as Hapi from '@hapi/hapi';

export const RegisterJwtId = (server: Hapi.Server, secret: Buffer) => {
  const options = {
    key: secret,
    verifyOptions: { algorithms: ['HS256'] },
    validate: (decoded) => {
      return decoded.id && decoded.type ? { isValid: true } : { isValid: false };
    },
  };

  server.auth.strategy('jwt', 'jwt', options);
  server.auth.default('jwt');
};
