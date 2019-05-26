import bcrypt from 'bcrypt';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export const createPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  return { hash, salt };
};

export const comparePassword = (password, user) => bcrypt.compare(password, user.password);

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

export const authenticationSuccessfulResponse = (user) => {
  const token = createJWT(user.userId);
  const userObject = {
    id: user.userId,
    username: user.username,
    email: user.email,
  };
  return {
    userObject,
    token,
  };
};
