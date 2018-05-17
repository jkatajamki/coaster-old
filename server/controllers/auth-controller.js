import express from 'express';

const authController = (app) => {
  const router = express.Router();

  router.post('/signUp', (req, res) => {
    const { username, email } = req.body;

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
