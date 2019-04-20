import dotenv from 'dotenv';

dotenv.config();

const env = process.env.ENV;

const handleError = (err, _, res) => {
  const status = err.status ? err.status : 500;

  // do not leak stack traces to user unless env is development
  res.status(status).send({
    message: err.message,
    error: (env === 'development') ? err : {},
  });
};

export default handleError;
