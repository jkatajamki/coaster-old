import Sequelize from 'sequelize';
import fs from 'fs-extra';
import path from 'path';

const env = process.env.NODE_ENV || 'development';
const config = require('../config/data-source.config')[env];

const readModelsPath = async (modelsPath) => {
  try {
    const dir = await fs.readdir(modelsPath);
    return dir.filter(filename => filename.slice(-3) === '.js');
  } catch (e) {
    console.error('Error reading model paths:', e);
    throw e;
  }
};

const initDataAccess = async () => {
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

  return db;
};

export default initDataAccess;
