import faker from '@faker-js/faker';
import { BulkQuestion } from 'types';
import { QuestionType } from '../../constants';

const fakeChoices = [
  { text: 'lorem ipsum a', choice: 'a' },
  { text: 'lorem ipsum b', choice: 'b' },
  { text: 'lorem ipsum c', choice: 'c' },
  { text: 'lorem ipsum d', choice: 'd' },
];

const answers = ['a', 'b', 'c', 'd'];

const createQuestion = (): BulkQuestion => {
  return {
    question_type: QuestionType.SINGLE_CHOICE,
    question: faker.lorem.words(6),
    choices: JSON.stringify(fakeChoices),
    answer: answers[Math.floor(Math.random() * answers.length)],
    updated_at: new Date(),
    created_at: new Date(),
  };
};

export const createQuestions = async (number: number): Promise<BulkQuestion[]> => {
  const questions = Array(number)
    .fill(0)
    .map(() => {
      return createQuestion();
    });

  return questions;
};
