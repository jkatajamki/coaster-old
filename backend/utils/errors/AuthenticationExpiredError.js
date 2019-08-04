import AppError from './AppError';

class AuthenticationExpiredError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'Log in has expired, please Sign In again!';
    const defaultStatus = 401;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default AuthenticationExpiredError;
