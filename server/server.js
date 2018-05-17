import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import initRoutes from './routes/';
import initDataAccess from './data-access/init-data-access';

const boostrapApp = async () => {
  const app = express();

  const loggerMode = 'development,testing'.includes(process.env.NODE_ENV) ? 'dev' : 'production';
  app.use(logger(loggerMode));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  await initDataAccess(app);
  initRoutes(app);

  return app;
};

export default boostrapApp;
