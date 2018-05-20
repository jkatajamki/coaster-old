import UserService from './user-service';
import UserAlreadyExistsError from '../../util/errors/auth/user-already-exists';

const assertUserDoesNotExist = async (username, email) => {
  const userService = await UserService.build();
  const userByUsername = await userService.findUserByUsername(username);
  const userByEmail = await userService.findUserByEmail(email);

  if (userByUsername || userByEmail) {
    throw new UserAlreadyExistsError();
  }

  return true;
};

export { assertUserDoesNotExist };
