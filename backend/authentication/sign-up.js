import { findUserByEmail, findUserByUsername } from '../user/user';
import handleError from '../routing/handle-error';
import { makeSignUpValidityAssertions } from './assert';
import { createPassword } from './cryptography';

export const assertSignUpIsValid = (username, email, password) => {
  return Promise.all([findUserByEmail(email), findUserByUsername(username)])
    .then(([userByEmail, userByUsername]) => makeSignUpValidityAssertions(
      username,
      email,
      password,
      userByEmail,
      userByUsername,
    ));
};

export const createNewUser = async (username, email, password) => {
  const now = moment();
  const { hash, salt } = await createPassword(password);
}

export const signUp = (req, res) => {
  const { username, email, password } = req.body;

  return assertSignUpIsValid(username, email, password)
    .then(() => {
      // complete sign up
      // send response
    })
    .catch((err) => {
      handleError(err);
    });
}
