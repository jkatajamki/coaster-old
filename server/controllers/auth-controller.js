import express from 'express';
import { assertUserDoesNotExist } from '../services/user/assert';
import { createJWT, getUserObject } from '../services/user/helpers';

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
    const token = createJWT(signedUp.id);
    const userObject = getUserObject(signedUp);

    const responseBody = {
      token,
      userObject,
    };
    res.send(responseBody);
  });

  return router;
};

export default authController;
