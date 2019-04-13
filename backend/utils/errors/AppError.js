export default class AppError extends Error {
  constructor(message, status) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message ||
      'Something went wrong with Coaster. Please try again in a bit.';

    this.status = status || 500;
  }
}
