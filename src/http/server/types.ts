import * as Hapi from '@hapi/hapi';

export enum AuthScheme {
  JWT = 'jwt',
  Basic = 'basic',
  ApiKey = 'apikey',
}

export enum AuthStrategies {
  JWT_ID = 'pharm_auto_registered-jwt_id',
}

export type ServerOptions = {
  options?: Hapi.ServerOptions;
  healthcheck?: (request: Hapi.Request, h: Hapi.ResponseToolkit) => Hapi.ResponseObject;
  rollbar?: boolean;
  swagger?: boolean;
  routes: Hapi.ServerRoute[] | string;
  authStrategies?: AuthStrategy[];
  jwtIdSecret?: string;
  defaultAuthStrategy?: boolean | string;
};

export type AuthStrategy = {
  name: string;
  scheme: string;
  options: object;
};

export type PluginOptions = {
  rollbar?: string | boolean;
  swagger?: boolean;
};

export type AxiosErrorResponse = {
  statusText: string;
  status: number;
};

export type HapiAxiosBoomResponse = {
  response?: AxiosErrorResponse;
  isAxiosError?: boolean;
};

export type RequestTimes = {
  onRequest?: number;
};

export default {};
