export const getErrorMessage = (error): string => {
  let message = '';
  if (error.name) {
    message += error.message;
    message += '\n';
  }
  if (error.errors) {
    message += error.errors.reduce((acc, e) => acc + e.message, '');
  }
  return message;
};