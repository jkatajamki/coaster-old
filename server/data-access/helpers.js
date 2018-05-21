import fs from 'fs-extra';

const extendDefaultFields = (defaults, session) => ({
  data: defaults.data,
  expires: defaults.expires,
  userId: session.userId,
});

const readModelsPath = async (modelsPath) => {
  try {
    const dir = await fs.readdir(modelsPath);
    return dir.filter(filename => filename.slice(-3) === '.js');
  } catch (e) {
    console.error('Error reading model paths:', e);
    throw e;
  }
};

export {
  extendDefaultFields,
  readModelsPath,
};
