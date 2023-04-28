import { AuthType, QuestionType, UserType } from './constants';

export type BulkUser = {
  id: string;
  first_name?: string;
  last_name?: string;
  auth_type: AuthType;
  user_type: UserType;
  email: string;
  password?: string;
  picture_url?: string;
  access_token?: string;
  refresh_token?: string;
  social_id?: string;
  is_verified?: boolean;
  verification_code?: string;
  verification_sent_at?: Date;
  last_login_at?: Date;
  login_sent_at?: Date;
  created_at: Date;
  updated_at: Date;
};

export type BulkQuestion = {
  id?: number;
  question_type: QuestionType;
  question: string;
  choices: string;
  answer: string;
  for_sale?: boolean;
  created_at: Date;
  updated_at: Date;
};

export type BulkUserQuestion = {
  id?: number;
  user_id: string;
  question_id: number;
  created_at: Date;
  updated_at: Date;
};

export type NewQuestion = {
  id?: number;
  questionType: QuestionType;
  question: string;
  choices: string; // stringified list of answers (choices)
  answer: string;
  forSale?: boolean;
};

export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  pictureUrl?: string;
};

export type UpdatedUser = {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  pictureUrl?: string;
};

export type PublicUser = {
  id: string;
  firstName: string;
  lastName: string;
  authType: AuthType;
  userType: UserType;
  email: string;
  pictureUrl: string;
};

export type JwtUser = { id: string; type: UserType; iat: number };
