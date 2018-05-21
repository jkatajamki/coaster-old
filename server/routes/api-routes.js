import express from 'express';
import authController from '../controllers/auth-controller';

const apiRoutes = (app) => {
  const router = express.Router();

  router.use('/auth', authController(app));

  return router;
};

export default apiRoutes;
