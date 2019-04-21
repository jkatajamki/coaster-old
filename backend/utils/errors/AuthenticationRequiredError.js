import AppError from './AppError';

class AuthenticationRequiredError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'Authentication required.';
    const defaultStatus = 401;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default AuthenticationRequiredError;
