import express from 'express';
import apiRoutes from './api-routes';
import {enableCors, four04, handleError} from './route-helpers';

const initRoutes = (app) => {
  const env = app.get('env');
  const router = express.Router();

  app.use((req, res, next) => enableCors(req, res, next, env));

  app.use('/', router);
  app.use('/api/', apiRoutes());

  app.use((req, res, next) => four04(req, res, next));
  app.use((err, req, res) => handleError(err, req, res, env));
};

export default initRoutes;
