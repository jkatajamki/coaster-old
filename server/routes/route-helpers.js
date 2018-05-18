/**
 * @param req
 * @param res
 * @param next
 * @param env
 */
const enableCors = (req, res, next, env) => {
  if (env.toLowerCase().includes('dev')) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  }
  next();
};

/**
 * @param req
 * @param res
 * @param next
 */
const four04 = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

/**
 * @param err
 * @param req
 * @param res
 * @param env
 */
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
