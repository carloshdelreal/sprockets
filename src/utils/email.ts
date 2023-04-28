import { generalSupportEmail } from '../constants';
import { emailer } from '../context';
import { verifyEmail } from '../templates/emails';

const { FRONTEND_URL } = process.env;

const confirmEmailUrl = (token: string, userId: string): string =>
  `${FRONTEND_URL}/confirm/${token}/${userId}`;

const subjects = {
  verifyEmail: 'Verify your email - TestQuestions',
};

export const jwtOptions = { expiresIn: '5d' };

const generalSupport = `"Support Team - TestQuestions" <${generalSupportEmail}>`;

export const sendEmailVerification = async (
  firstName: string,
  to: string,
  token: string,
  userId: string
): Promise<unknown> =>
  emailer.sendMail({
    from: generalSupport,
    to,
    subject: subjects.verifyEmail,
    html: verifyEmail(firstName, confirmEmailUrl(token, userId)),
  });
