import { validateUsername, validateEmail, validatePassword } from '../../common/utils/validation/validation';
import UserAlreadyExistsError from '../utils/errors/UserAlreadyExistsError';
import UserValidationError from '../utils/errors/UserValidationError';

export const makeSignUpValidityAssertions = (
  username,
  email,
  password,
  userByEmail,
  userByUsername,
) => {
  if (userByUsername) {
    throw new UserAlreadyExistsError('Unfortunately, this username is already taken. Please try a different one.');
  }
  if (userByEmail) {
    throw new UserAlreadyExistsError('This email is already taken. Do you already have an account?');
  }
  if (!validateUsername(username)) {
    throw new UserValidationError('Username is not valid.');
  }
  if (!validateEmail(email)) {
    throw new UserValidationError('Email is not valid.');
  }
  if (!validatePassword(password)) {
    throw new UserValidationError('Password is not valid.');
  }
  return true;
};
