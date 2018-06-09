import express from 'express';
import authController from '../controllers/auth-controller';
import userController from '../controllers/user-controller';
import albumController from '../controllers/album-controller';

const apiRoutes = (app) => {
  const router = express.Router();

  router.use('/auth', authController(app));
  router.use('/user', userController(app));
  router.use('/albums', albumController(app));

  return router;
};

export default apiRoutes;
