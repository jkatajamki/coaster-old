import express from 'express';
import { assertSignInIsValid, assertUserDoesNotExist } from '../services/user/assert';
import { getAuthResponseBody } from '../services/user/helpers';

const authController = (app) => {
  const router = express.Router();
  const { userService } = app.services;

  router.post('/signUp', async (req, res) => {
    const { username, email, password } = req.body;

    try {
      await assertUserDoesNotExist(userService, username, email);
    } catch (error) {
      res.status(error.status).send({
        error,
      });
      return;
    }

    const signedUp = await userService.signUp(username, email, password);
    const responseBody = getAuthResponseBody(signedUp);
    res.send(responseBody);
  });

  router.post('/signIn', async (req, res) => {
    const { username, password } = req.body;

    const user = await userService.findUserByUsername(username, true);

    try {
      await assertSignInIsValid(password, user);
    } catch (error) {
      res.status(401).send({
        error,
      });
      return;
    }

    const responseBody = getAuthResponseBody(user);
    res.send(responseBody);
  });

  return router;
};

export default authController;
