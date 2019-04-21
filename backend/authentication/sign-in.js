import moment from 'moment';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserBySignInWord } from '../user/user';
import handleError from '../routing/handle-error';
import { assertSignInIsValid } from './assert';

dotenv.config();

const { TOKEN_SECRET, TOKEN_TTL, TOKEN_ALGORITHM } = process.env;

export const createJWT = (id) => {
  const exp = +moment().add(TOKEN_TTL, 'seconds').format('X');
  return jwt.sign({
    id,
    exp,
  }, TOKEN_SECRET, {
    algorithm: TOKEN_ALGORITHM,
  });
};

export const authenticationSuccesfulResponse = (user) => {
  const token = createJWT(user.userId);
  const userObject = {
    id: user.userId,
    username: user.username,
    email: user.email,
  };
  return {
    user: userObject,
    token,
  };
}

export const signIn = async (req, res) => {
  const { username, email, password } = req.body;
  const signInWord = username || email;
  try {
    const user = await findUserBySignInWord(signInWord);
    const valid = await assertSignInIsValid(password, user);
    if (valid) {
      res.status(200).send(authenticationSuccesfulResponse(user));
    }
  } catch (err) {
    handleError(err, req, res);
  }
};
