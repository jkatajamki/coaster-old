import express from 'express';
import { getAuthResponseBody } from '../services/user/helpers';

const userController = (app) => {
  const router = express.Router();
  const { userService } = app.services;

  router.get('/me', async (req, res) => {
    try {
      const currentUser = await userService.getMe(req);
      const responseBody = getAuthResponseBody(currentUser);
      res.send(responseBody);
    } catch (e) {
      res.status(e.status).send({ e });
    }
  });

  return router;
};

export default userController;
