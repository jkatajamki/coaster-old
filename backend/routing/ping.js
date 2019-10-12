import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send({
    app: process.env.COASTER_BACKEND_VERSION,
    status: 'ok',
  });
});

export default router;
