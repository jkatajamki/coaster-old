import { Router } from 'express';
import ping from './ping';
import four04 from './four04';
import handleError from './handle-error';
import authRoutes from '../authentication/auth-routes';

export const router = Router();

router.use('/ping', ping);
router.use('/auth', authRoutes);

router.use((req, res, next) => four04(req, res, next));
router.use((err, req, res) => handleError(err, req, res));
