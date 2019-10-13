import pg from 'pg';
import { logError } from '../utils/log-error';
import getEnvDbConfig from './db-config';

const { ENV } = process.env;
const envDbConfig = getEnvDbConfig(ENV);

const pgPoolOptions = {
  database: envDbConfig.database || 'coaster',
  host: envDbConfig.host || 'localhost',
  password: envDbConfig.password,
  port: envDbConfig.port || 5432,
  user: envDbConfig.user,
};
const pgPool = new pg.Pool(pgPoolOptions);

(async () => {
  try {
    await pgPool.connect();
  } catch (error) {
    logError('Error: connection to PgPool failed:', error);
    process.exit(1);
  }
})();

const toJson = (results) => {
  try {
    const parsedResults = JSON.parse(JSON.stringify(results));
    return parsedResults.rows;
  } catch (e) {
    logError('Error: parsing results failed:', e);
    throw e;
  }
};

const dbQuery = async (queryFn, values) => {
  try {
    const sql = {
      text: queryFn(),
      ...values && { values },
    };

    const results = await pgPool.query(sql);
    return toJson(results);
  } catch (e) {
    logError('Error: could not execute db query:', e);
    throw e;
  }
};

export default dbQuery;
