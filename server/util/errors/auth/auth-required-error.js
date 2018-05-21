import AppError from '../app-error';

class AuthenticationRequiredError extends AppError {
  constructor(message, status) {
    const defaultMsg = 'This method requires authentication.';
    const defaultStatus = 403;
    super(message || defaultMsg, status || defaultStatus);
  }
}

export default AuthenticationRequiredError;
