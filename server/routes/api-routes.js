import express from 'express';
import authController from '../controllers/auth-controller';
import userController from '../controllers/user-controller';

const apiRoutes = (app) => {
  const router = express.Router();

  router.use('/auth', authController(app));
  router.use('/user', userController(app));

  return router;
};

export default apiRoutes;
