import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import chokidar from 'chokidar';
import middleware from 'webpack-hot-middleware';
import config from '../webpack.development.config';
import devServerConfig from './dev-server-tools/dev-server.conf';
import startDevServer from './dev-server-tools/dev-server.start';
import clearModuleCache from './dev-server-tools/dev-server.helpers';

const compiler = webpack(config);

const devServer = new WebpackDevServer(compiler, devServerConfig);
devServer.use(middleware(compiler));
devServer.listen(8080);

let { app, server } = startDevServer();

const watcher = chokidar.watch([
  path.resolve(__dirname, '../common'),
  __dirname,
]);

const updateDevServer = () => {
  try {
    ({ app, server } = startDevServer());
  } catch (e) {
    console.error('Could not update dev server:', e);
  }
};

watcher.on('ready', () => {
  watcher.on('all', () => {
    clearModuleCache(require.cache);

    if (server && server.close) {
      server.close(() => {
        updateDevServer();
      });
    } else {
      updateDevServer();
    }
  });
});
