import express from 'express';
import { assertUserDoesNotExist } from '../services/user/assert';
import UserService from '../services/user/user-service';
import { createJWT, getUserObject } from '../services/user/helpers';
import authenticationMiddleware from '../routes/middleware/authentication';

const authController = () => {
  const router = express.Router();

  router.post('/signUp', authenticationMiddleware, async (req, res) => {
    const { username, email, password } = req.body;

    try {
      await assertUserDoesNotExist(username, email);
    } catch (error) {
      res.status(error.status).send({
        error,
      });
      return;
    }

    // todo: refactor userService to authController function scope
    const userService = await UserService.build();

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
