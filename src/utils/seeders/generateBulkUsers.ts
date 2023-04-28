import faker from '@faker-js/faker';
import { encryptCredential } from '..';
import { AuthType, UserType } from '../../constants';
import { BulkUser } from '../../types';
import { devs, owners } from './devUsers';

// faker.seed(125);

const genUser = ({
  email,
  user_type,
  ...rest
}: Omit<BulkUser, 'auth_type' | 'created_at' | 'updated_at'>): BulkUser => {
  return {
    auth_type: AuthType.EMAIL,
    user_type,
    email,
    is_verified: true,
    updated_at: new Date(),
    created_at: new Date(),
    ...rest,
  };
};

export const generateBulkUsers = async (): Promise<{
  users: BulkUser[];
}> => {
  const password = await encryptCredential('Foobar_123');
  const userOwners = owners.map<BulkUser>((email) => {
    const [first_name] = email.split('@');
    const last_name = faker.name.lastName();
    const id = faker.datatype.uuid();
    const user_type = UserType.OWNER;
    return genUser({ id, email, password, first_name, last_name, user_type });
  });

  const userDev = devs.map<BulkUser>((email) => {
    const [first_name] = email.split('@');
    const last_name = faker.name.lastName();
    const id = faker.datatype.uuid();
    const user_type = UserType.STANDARD;
    return genUser({ id, email, password, first_name, last_name, user_type });
  });

  const users = [...userOwners, ...userDev];

  if (process.env.TEST !== 'true') {
    /* eslint-disable no-console */
    console.log('***** INSERTING ***', users.length, '*** USERS *****');
  }

  // console.log(users);
  // console.log(users_organizations);
  return { users };
};
