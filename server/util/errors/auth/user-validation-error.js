import AppError from '../app-error';

class UserValidationError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'User fields aren\'t valid. Please check your input.';
    const defaultStatus = 400;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default UserValidationError;
