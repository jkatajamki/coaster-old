const path = require('path');

const dataSourceConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'coasterapp',
  password: 'Coaster.',
  database: 'coaster',
  entities: [path.join(__dirname + '/../**/*.entity{.ts,.js}')],
  synchronize: true,
};

export default dataSourceConfig;
