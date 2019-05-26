import moment from 'moment';
import { insertNewUser } from '../user/user';
import handleError from '../routing/handle-error';
import { createPassword, authenticationSuccessfulResponse } from './cryptography';
import { assertSignUpIsValid } from './assert';

export const createNewUser = async (username, email, password) => {
  const now = moment();
  const { hash, salt } = await createPassword(password);
  return insertNewUser(username, email, hash, salt, now);
};

export const signUp = (req, res) => {
  const { username, email, password } = req.body;

  return assertSignUpIsValid(username, email, password)
    .then(() => createNewUser(username, email, password))
    .then((user) => authenticationSuccessfulResponse(user))
    .then(({ userObject, token }) => res.status(200).send({
      message: 'Signed up succesfully!',
      userObject,
      token,
    }))
    .catch(err => handleError(err, req, res));
};
