import moment from 'moment';
import { findUserByEmail, findUserByUsername, insertNewUser } from '../user/user';
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
  return insertNewUser(username, email, hash, salt, now);
}

export const signUp = (req, res) => {
  const { username, email, password } = req.body;

  return assertSignUpIsValid(username, email, password)
    .then(() => createNewUser(username, email, password))
    .then(() => res.status(200).send({
      message: 'Signed up succesfully!'
    }))
    .catch((err) => handleError(err, req, res));
}
