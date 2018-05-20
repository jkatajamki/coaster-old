import express from 'express';
import { assertUserDoesNotExist } from '../services/user/assert';

const authController = () => {
  const router = express.Router();

  router.post('/signUp', async (req, res) => {
    const { username, email } = req.body;

    try {
      await assertUserDoesNotExist(username, email);
    } catch (error) {
      res.status(error.status).send({
        error,
      });
      return;
    }

    const responseBody = {
      username,
      email,
      password: 'removed for security',
    };
    res.send(responseBody);
  });

  return router;
};

export default authController;
