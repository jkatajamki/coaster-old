import express from 'express';

const albumRoute = require('./album-route');

const initRoutes = (app) => {
  const router = express.Router();

  albumRoute.default(app, router);

  app.use('/', router);

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
};

export default initRoutes;
