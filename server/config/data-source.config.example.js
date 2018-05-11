const dataSourceConfig = {
  development: {
    username: 'coasterapp',
    password: '<password>',
    database: 'coaster',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    force: true,
    timezone: 'Eastern_European_Time',
  },
  /*
  production: {
    username: 'coasterapp',
    password: 'Coaster.',
    database: 'coaster',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    logging: false,
    force: true,
    timezone: '+02:00',
  },
  test: {
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: true,
    force: true,
    timezone: '+02:00',
  },
  */
};

export default dataSourceConfig;
