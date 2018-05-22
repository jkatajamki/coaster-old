import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import initRoutes from './routes/';
import initModels from './data-access/models';
import initSessionStore from './data-access/init-session-store';
import initAuthMiddleware from './routes/middleware/authentication';
import jwtConfig from './config/jwt.config.json';
import initServices from './services/init-services';

const boostrapApp = async () => {
  const app = express();

  const loggerMode = 'development,testing'.includes(process.env.NODE_ENV) ? 'dev' : 'production';
  app.use(logger(loggerMode));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  Object.assign(app, { jwtConfig });

  await initModels(app);
  const { db } = app;
  initSessionStore(app, db.sequelize);
  initServices(app);
  await initAuthMiddleware(app);
  initRoutes(app);

  return app;
};

export default boostrapApp;
