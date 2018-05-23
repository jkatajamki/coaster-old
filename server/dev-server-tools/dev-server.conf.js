import API_PORT from '../../common/constants/app-config';

const devServerConfig = {
  hot: true,
  stats: { colors: true },
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: `http://http://127.0.0.1:${API_PORT}`,
      ws: true,
    },
  },
};

export default devServerConfig;
