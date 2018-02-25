/* eslint-disable consistent-return */
/* eslint-disable global-require */

import { API_PORT } from '../../common/constants/app-config';

const startDevServer = () => {
  try {
    const app = require('../server').default;
    const server = app.listen(API_PORT);
    console.log('Dev server started at', API_PORT);

    return { app, server };
  } catch (err) {
    process.stdout.write('Error! \n');
    console.error(err);
  }
};

export default startDevServer;
