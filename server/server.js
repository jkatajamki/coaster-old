import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const boostrapApp = () => {
  const app = express();

  const loggerMode = 'development,testing'.includes(process.env.NODE_ENV) ? 'dev' : 'production';
  app.use(logger(loggerMode));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);

    // do not leak stack traces to user unless env is development
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {},
    });
  });

  return app;
};

export default boostrapApp;
