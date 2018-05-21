import express from 'express';
import AuthenticationRequiredError from '../util/errors/auth/auth-required-error';
import { getAuthResponseBody } from '../services/user/helpers';

const userController = (app) => {
  const router = express.Router();
  const { userService } = app.services;

  router.get('/me', async (req, res) => {
    const { currentUser } = req;

    if (!currentUser) {
      const error = new AuthenticationRequiredError();
      res.status(403).send({
        error,
      });
      return;
    }

    const responseBody = getAuthResponseBody(currentUser);
    res.send(responseBody);
  });

  return router;
};

export default userController;
