const enableCors = (req, res, next, env) => {
  if (env.toLowerCase().includes('dev')) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
};

const four04 = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

const handleError = (err, req, res, env) => {
  res.status(err.status || 500);

  // do not leak stack traces to user unless env is development
  res.render('error', {
    message: err.message,
    error: (env === 'development') ? err : {},
  });
};

export {
  enableCors,
  four04,
  handleError,
};
