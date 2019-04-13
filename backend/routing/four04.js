const four04 = (_, __, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

export default four04;
