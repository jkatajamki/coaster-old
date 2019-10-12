/* eslint no-console: "off" */

const logError = (message, error) => {
  if (process.env.ENV.includes('dev')) {
    console.error(message);
    console.error(error);
  }
};

export default logError;
