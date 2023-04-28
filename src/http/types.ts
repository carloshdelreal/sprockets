import * as Hapi from '@hapi/hapi';

export enum AuthScheme {
  JWT = 'jwt',
  Basic = 'basic',
  ApiKey = 'apikey',
}

export enum AuthStrategies {
  JWT_ID = 'pharm_auto_registered-jwt_id',
}

export interface ServerOptions {
  options?: Hapi.ServerOptions;
  healthcheck?: (request: Hapi.Request, h: Hapi.ResponseToolkit) => Hapi.ResponseObject;
  rollbar?: boolean;
  swagger?: boolean;
  routes?: Hapi.ServerRoute[] | string;
  authStrategies?: AuthStrategy[];
  jwtIdSecret?: boolean | string;
  defaultAuthStrategy?: boolean | string;
}

export interface AuthStrategy {
  name: string;
  scheme: string;
  options: object;
}

export interface PluginOptions {
  rollbar?: string | boolean;
  swagger?: boolean;
}

export interface AxiosErrorResponse {
  statusText: string;
  status: number;
}

export interface HapiAxiosBoomResponse {
  response?: AxiosErrorResponse;
  isAxiosError?: boolean;
}

export interface RequestTimes {
  onRequest?: number;
}

export default {};
