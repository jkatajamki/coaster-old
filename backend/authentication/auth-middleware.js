import jwt from 'jsonwebtoken';
import AuthenticationRequiredError from '../utils/errors/AuthenticationRequiredError';
import { findUserById } from '../user/user';
import AuthenticationExpiredError from '../utils/errors/AuthenticationExpiredError';

export const isNotLoggedIn = (req, res, next) => {
  if (!req.user) {
    next();
    return;
  }

  res.status(403).send({ error: 'User is already authenticated' });
  next();
};

export const getTokenFromReq = (req) => {
  const authHeader = req.headers.authorization;
  return authHeader
    ? authHeader.substring(authHeader.indexOf(' ') + 1)
    : null;
};

export const handleTokenError = (err) => {
  if (err.name === 'TokenExpiredError') {
    throw new AuthenticationExpiredError();
  }
  return null;
};

export const getUserIdFromToken = (token) => {
  const { TOKEN_ALGORITHM, TOKEN_SECRET } = process.env;

  try {
    const { id } = jwt.verify(token, TOKEN_SECRET, {
      algorithms: [TOKEN_ALGORITHM],
    });
    return id;
  } catch (err) {
    return handleTokenError(err);
  }
};

export const authenticationMiddleware = async (req, res, next) => {
  const token = getTokenFromReq(req);
  try {
    const userId = getUserIdFromToken(token);
    if (!userId) {
      next();
      return;
    }
    const userById = await findUserById(userId);
    req.user = userById;
    next();
  } catch (err) {
    res.status(err.status).send(err);
    next();
  }
};

export const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    const error = new AuthenticationRequiredError();
    res.status(error.status).send(error);
    return;
  }
  next();
};
