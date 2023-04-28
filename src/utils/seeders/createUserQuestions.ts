import { BulkUserQuestion } from 'types';
import models from '../../domain/models';

const createUserQuestion = (questionId: number, userId: string): BulkUserQuestion => {
  return {
    question_id: questionId,
    user_id: userId,
    updated_at: new Date(),
    created_at: new Date(),
  };
};

const createRandomUserQuestions = (array: { id: number }[], userId: string): BulkUserQuestion[] => {
  const userQuestions: BulkUserQuestion[] = [];
  for (let i = 0; i < array.length; i++) {
    if (Math.floor(Math.random() * 2)) {
      userQuestions.push(createUserQuestion(array[i].id, userId));
    }

    if (userQuestions.length > 1) {
      if (Math.floor(Math.random() * 2)) {
        break;
      }
    }
  }
  return userQuestions;
};

export const createUserQuestions = async () => {
  const users = await models.User.findAll();
  const questions = await models.Question.findAll();

  return users.reduce<BulkUserQuestion[]>((acc, user) => {
    const userQs = createRandomUserQuestions(questions, user.id);
    return [...acc, ...userQs];
  }, []);
};
