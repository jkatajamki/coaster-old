const clearModuleCache = (cache) => {
  Object.keys(cache)
    .filter(id => !id.includes('node_modules'))
    .forEach((id) => {
      delete require.cache[id];
    });
};

export default clearModuleCache;
