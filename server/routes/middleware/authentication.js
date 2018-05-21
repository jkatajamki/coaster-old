import { getTokenFromRequest, getUserIdFromToken } from '../../services/user/helpers';

const authenticationMiddleware = (app) => {
  const { key, algorithm } = app.jwtConfig.jwtConfig;

  app.use(async (req, res, next) => {
    const token = getTokenFromRequest(req);
    const { userService } = app.services;

    const userId = getUserIdFromToken(token, key, algorithm);

    if (userId) {
      const currentUser = await userService.findUserById(userId);

      Object.assign(req, { currentUser });
    }

    await next();
  });
};

export default authenticationMiddleware;
