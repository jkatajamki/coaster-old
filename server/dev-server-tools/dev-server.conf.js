import API_PORT from '../../common/constants/app-config';

const devServerConfig = {
  hot: true,
  stats: { colors: true },
  historyApiFallback: true,
  proxy: {
    '/api': {
      target: `http://localhost:${ API_PORT }`,
      ws: true,
    },
  },
};

export default devServerConfig;
