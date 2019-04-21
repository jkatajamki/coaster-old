import AppError from './AppError';

class AuthenticationFailedError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'Wrong username or password.';
    const defaultStatus = 401;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default AuthenticationFailedError;
