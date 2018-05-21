import UserService from './user/user-service';

const initServices = (app) => {
  const { models } = app.db.sequelize;

  const services = {
    userService: new UserService(models),
  };

  Object.assign(app, { services });
};

export default initServices;
