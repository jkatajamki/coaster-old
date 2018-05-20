import UserService from './user-service';
import UserAlreadyExistsError from '../../util/errors/auth/user-already-exists';
import {validateEmail, validatePassword, validateUsername} from '../../../common/utils/validation/validation';
import UserValidationError from '../../util/errors/auth/user-validation-error';

const assertUserDoesNotExist = async (username, email) => {
  const userService = await UserService.build();
  const userByUsername = await userService.findUserByUsername(username);
  const userByEmail = await userService.findUserByEmail(email);

  if (userByUsername) {
    throw new UserAlreadyExistsError('Unfortunately, this username is already taken. Please try a different one.');
  }
  if (userByEmail) {
    throw new UserAlreadyExistsError('This email is already taken. Do you already have an account?');
  }
};

const assertSignUpIsValid = (username, email, password) => {
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

export {
  assertUserDoesNotExist,
  assertSignUpIsValid,
};
