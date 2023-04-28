import { UserType } from './constants';

export type BulkSprocket = {
  id?: number;
  user_id: string;
  question_id: number;
  created_at: Date;
  updated_at: Date;
};

export type JwtUser = { id: string; type: UserType; iat: number };
