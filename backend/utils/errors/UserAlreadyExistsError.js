import AppError from './AppError';

class UserAlreadyExistsError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'A user already exists by the same username or email. Please try a different one.';
    const defaultStatus = 409;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default UserAlreadyExistsError;
