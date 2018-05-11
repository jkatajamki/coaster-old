import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import middleware from 'webpack-hot-middleware';
import config from '../webpack.development.config';
import devServerConfig from './dev-server-tools/dev-server.conf';
import { API_PORT } from '../common/constants/app-config';
import bootstrapApp from './server';

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, devServerConfig);
devServer.use(middleware(compiler));
devServer.listen(8080);

(async function start() {
  const app = await bootstrapApp();
  await app.listen(API_PORT);
}());
