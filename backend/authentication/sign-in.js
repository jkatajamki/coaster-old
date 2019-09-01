import { findUserBySignInWord } from '../user/user';
import handleError from '../routing/handle-error';
import { assertSignInIsValid } from './assert';
import { authenticationSuccessfulResponse } from './cryptography';
import AuthenticationFailedError from '../utils/errors/AuthenticationFailedError';

export default async (req, res) => {
  const { username, email, password } = req.body;
  const signInWord = username || email;
  try {
    const user = await findUserBySignInWord(signInWord);
    const valid = await assertSignInIsValid(password, user);
    if (!valid) {
      throw new AuthenticationFailedError();
    }
    res.status(200).send(authenticationSuccessfulResponse(user));
  } catch (err) {
    handleError(err, req, res);
  }
};
