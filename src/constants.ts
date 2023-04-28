import { PublicUser } from 'types';

export enum UserType {
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
  EXTENDED = 'EXTENDED',
  STANDARD = 'STANDARD',
  LIMITED = 'LIMITED',
}

export const UserPublicFields: Array<keyof PublicUser> = [
  'id',
  'firstName',
  'lastName',
  'authType',
  'userType',
  'email',
  'pictureUrl',
];

export const generalSupportEmail = 'admin@powerflext.com';
