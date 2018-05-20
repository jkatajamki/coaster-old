import UserService from './user-service';
import UserAlreadyExistsError from '../../util/errors/auth/user-already-exists';

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

export { assertUserDoesNotExist };
