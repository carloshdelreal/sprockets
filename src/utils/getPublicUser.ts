import { User } from '../domain/models/User';
import { PublicUser } from '../types';

export const getPublicUser = ({
  id,
  firstName,
  lastName,
  authType,
  userType,
  email,
  pictureUrl,
}: User): PublicUser => {
  return {
    id,
    firstName,
    lastName,
    authType,
    userType,
    email,
    pictureUrl,
  };
};
