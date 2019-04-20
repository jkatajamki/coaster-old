import pg from 'pg';
import { getConnectionString } from './db-connection';
import logError from '../utils/log-error';

const pgPool = new pg.Pool({
  connectionString: getConnectionString(),
});

// todo: add proper debugging for backend
(async () => {
  try {
    await pgPool.connect();
  } catch (error) {
    logError('Error: connection to PgPool failed:', error);
    process.exit(1);
  }
})();

const dbQuery = async (queryFn, values) => {
  console.log('getConnectionString()', getConnectionString())
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
