import bcrypt from 'bcryptjs';

const SALT_ROUND = 10;
export const jwtOptions = { expiresIn: '5d' };

export const encryptCredential = async (password: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const SALT = bcrypt.genSaltSync(SALT_ROUND);

    bcrypt.hash(password, SALT, (err, hash) => {
      if (err) {
        return reject(err);
      }
      resolve(hash);
    });
  });

export const validateCredential = async (value: string, hashedValue: string): Promise<boolean> =>
  new Promise<boolean>((resolve, reject) => {
    bcrypt.compare(value, hashedValue, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });

export const randomPassword = (): string =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const isCodeExpired = (verificationSentAt: Date, minutesValid: string | number): boolean => {
  const now = new Date().getTime();
  const old = new Date(verificationSentAt).getTime();
  const diff = (now - old) / (1000 * 60);
  return diff > +minutesValid;
};
