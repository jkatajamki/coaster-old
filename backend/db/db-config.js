require('dotenv').config();

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  ENV,
} = process.env;

const dev = {
  driver: 'pg',
  database: DB_NAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  env: ENV,
}

const dbConfig = {
  dev,
}

module.exports = dbConfig;
