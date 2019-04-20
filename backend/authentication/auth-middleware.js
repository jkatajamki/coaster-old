export function isNotLoggedIn(req, res, next) {
  if (!req.user) {
    next();
    return;
  }

  res.status(403).send({
    error: 'User is already authenticated'
  });
  next();
};
