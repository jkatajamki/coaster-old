/* eslint no-console: "off" */

/*
 * TODO: ERROR LEVELS:
 * Add environment-specific error level settings to project
 * Write logs according to configuration
 */

export const logError = (message, error) => {
  console.error(message);
  console.error(error);
};

export const logDebug = (...items) => {
  if (process.env.ENV.includes('dev')) {
    console.debug(...items);
  }
};
