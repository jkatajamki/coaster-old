import connectSessionSequelize from 'connect-session-sequelize';
import session from 'express-session';
import { extendDefaultFields } from './helpers';

const SequelizeStore = connectSessionSequelize(session.Store);

const initSessionStore = (app, sequelize) => {
  const sessionStore = new SequelizeStore({
    db: sequelize,
    table: 'sessions',
    extendDefaultFields,
  });

  app.use(session({
    secret: '46c11b994e6ec8699385',
    store: sessionStore,
    resave: false,
    proxy: false, // true if you do SSL outside of node
  }));
};

export default initSessionStore;
