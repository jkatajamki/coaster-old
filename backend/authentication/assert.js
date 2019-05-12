import { validateUsername, validateEmail, validatePassword } from '../../common/utils/validation/validation';
import UserAlreadyExistsError from '../utils/errors/UserAlreadyExistsError';
import UserValidationError from '../utils/errors/UserValidationError';
import { findUserByEmail, findUserByUsername } from '../user/user';
import { comparePassword } from './cryptography';
import AuthenticationFailedError from '../utils/errors/AuthenticationFailedError';

export const makeSignUpValidityAssertions = (
  username,
  email,
  password,
  userByEmail,
  userByUsername
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

export const assertSignUpIsValid = (username, email, password) => Promise.all([
  findUserByEmail(email),
  findUserByUsername(username),
]).then(([userByEmail, userByUsername]) => makeSignUpValidityAssertions(
  username,
  email,
  password,
  userByEmail,
  userByUsername
));

export const assertSignInIsValid = async (password, user) => {
  if (!user) {
    throw new AuthenticationFailedError();
  }
  try {
    const passwordIsCorrect = await comparePassword(password, user);
    const timeout = Math.floor(Math.random() * 50) + 50;
    if (!passwordIsCorrect) {
      setTimeout(() => {
        throw new AuthenticationFailedError();
      }, timeout);
    }
    return true;
  } catch (err) {
    throw new AuthenticationFailedError('Password authentication failed', 500);
  }
};
