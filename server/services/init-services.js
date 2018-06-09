import UserService from './user/user-service';
import AlbumService from './album/album-service';

const initServices = (app) => {
  const { models } = app.db.sequelize;

  const services = {
    userService: new UserService(models),
    albumService: new AlbumService(models),
  };

  Object.assign(app, { services });
};

export default initServices;
