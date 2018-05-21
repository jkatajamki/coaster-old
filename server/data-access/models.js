import path from 'path';
import Sequelize from 'sequelize';
import { readModelsPath } from './helpers';

const config = require('../config/data-source.config')[process.env.NODE_ENV || 'development'];

const modelsLoader = async (app) => {
  const sequelize = new Sequelize(config.database, config.username, config.password, config);

  const modelsPath = path.join(__dirname, 'models');
  const modelFilenames = await readModelsPath(modelsPath);
  const models = modelFilenames.map(filename => sequelize.import(path.join(modelsPath, filename)));

  const db = {
    ...models,
    sequelize,
    Sequelize,
  };

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(db);
    }
  });

  Object.assign(app, {
    db,
    models,
  });
};

export default modelsLoader;
