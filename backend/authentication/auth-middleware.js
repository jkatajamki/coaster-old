import dotenv from 'dotenv';
import AuthenticationRequiredError from '../utils/errors/AuthenticationRequiredError';
import { findUserById } from '../user/user';

dotenv.config();

export function isNotLoggedIn(req, res, next) {
  if (!req.user) {
    next();
    return;
  }

  res.status(403).send({
    error: 'User is already authenticated'
  });
  next();
};

export const getTokenFromReq = (req) => {
  const authHeader = req.headers.authorization;
  return authHeader
    ? authHeader.substring(authHeader.indexOf(' ') + 1)
    : null;
}

export const getUserIdFromToken = (token) => {
  const { TOKEN_ALGORITHM, TOKEN_SECRET } = process.env;

  try {
    const { id } = jwt.verify(token, TOKEN_SECRET, {
      algorithms: [TOKEN_ALGORITHM],
    });
    return id;
  } catch (err) {
    return null;
  }
};

export async function authenticationMiddleware(req, _, next) {
  const token = getTokenFromReq(req);
  const userId = getUserIdFromToken(token);
  if (!userId) {
    next();
    return;
  }
  const userById = await findUserById(userId);
  req.user = userById;
  next();
}

export function isLoggedIn(req, res, next) {
  if (!req.user) {
    const error = new AuthenticationRequiredError();
    res.status(error.status).send(error);
    return;
  }
  next();
};
