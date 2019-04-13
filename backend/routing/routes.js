import { Router } from 'express';
import ping from './ping';
import four04 from './four04';
import handleError from './handle-error';

export const router = Router();

router.use('/ping', ping);

router.use((req, res, next) => four04(req, res, next));
router.use((err, req, res) => handleError(err, req, res));
