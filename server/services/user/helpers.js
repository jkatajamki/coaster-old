import bcrypt from 'bcrypt';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '../../config/jwt.config.json';

const createPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  return { hash, salt };
};

const getTokenFromRequest = (req) => {
  const authHeader = req.headers.authorization;
  return authHeader
    ? authHeader.substring(authHeader.indexOf(' ') + 1)
    : null;
};

const createJWT = (id) => {
  const { jwtConfig } = config;
  const exp = +moment().add(jwtConfig.ttl, 'seconds').format('X');
  return jwt.sign({
    id,
    exp,
  }, jwtConfig.key, {
    algorithm: jwtConfig.algorithm,
  });
};

const getUserIdFromToken = (token, key, algorithm) => {
  try {
    const { id } = jwt.verify(token, key, {
      algorithms: [algorithm],
    });
    return id;
  } catch (err) {
    return null;
  }
};

const getUserObject = signedUp => ({
  id: signedUp.id,
  username: signedUp.username,
  email: signedUp.email,
});

const getAuthResponseBody = (user) => {
  const token = createJWT(user.id);
  const userObject = getUserObject(user);

  return {
    token,
    userObject,
  };
};

const comparePassword = (password, user) => bcrypt.compare(password, user.password);

export {
  createPassword,
  createJWT,
  getUserIdFromToken,
  getUserObject,
  getTokenFromRequest,
  getAuthResponseBody,
  comparePassword,
};
