import express from 'express';
import authController from '../controllers/auth-controller';

const apiRoutes = () => {
  const router = express.Router();

  router.use('/auth', authController());

  return router;
};

export default apiRoutes;
