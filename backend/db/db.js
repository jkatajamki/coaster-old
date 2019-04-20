import pg from 'pg';
import logError from '../utils/log-error';
import dbConfig from './db-config';

const pgPool = new pg.Pool({
  database: dbConfig.database,
  host: dbConfig.host || 'localhost',
  //idleTimeoutMillis: cfg.db.idleTimeoutMillis,
  //max: cfg.db.poolSize,
  //min: 1,
  password: dbConfig.password,
  port: dbConfig.port || 5432,
  //ssl: cfg.db.ssl,
  user: dbConfig.user
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
