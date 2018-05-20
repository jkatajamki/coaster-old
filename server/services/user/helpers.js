import bcrypt from 'bcrypt';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import config from '../../config/jwt.config.json';

const createPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  return { hash, salt };
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

export {
  createPassword,
  createJWT,
  getUserIdFromToken,
  getUserObject,
};
