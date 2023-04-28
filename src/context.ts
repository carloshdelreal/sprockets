import { UserType } from '../src/constants';
import jwt from 'jsonwebtoken';
import { JwtUser } from './types';
import Boom from '@hapi/boom';

const { JWT_SECRET } = process.env;

export const appSecret = Buffer.from(JWT_SECRET, 'base64');

export const getJwtUser = (request): JwtUser => {
  const token = request.headers.authorization;

  if (!token) {
    throw new Error('You are not logged in. Please log in and try again.');
  }

  return jwt.verify(token, appSecret);
};

export const getJwtOwnerOrAdmin = (request): JwtUser => {
  const sessionUser = getJwtUser(request);

  if (![UserType.OWNER, UserType.ADMIN].includes(sessionUser.type)) {
    throw Boom.unauthorized('You are not authorized');
  }

  return sessionUser;
};