const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  ENV,
} = process.env;

const development = {
  driver: 'pg',
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  env: 'development',
};

const production = {
  driver: 'pg',
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  env: ENV,
};

const getEnvDbConfig = (env) => {
  switch (env) {
    case 'production':
      return production;
    case 'test':
    case 'development':
    default:
      return development;
  }
};

module.exports = getEnvDbConfig;
