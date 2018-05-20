import initDataAccess from '../../data-access/init-data-access';
import { assertSignUpIsValid } from './assert';
import { createPassword } from './helpers';
import moment from 'moment';
import AppError from '../../util/errors/app-error';

export default class UserService {
  db;
  coasterUser;

  constructor(db) {
    if (typeof db === 'undefined') {
      throw new Error('Cannot be called directly');
    }

    this.db = db;
    this.coasterUser = db.sequelize.models.coasterusers;
  }

  static async build() {
    const db = await initDataAccess();
    return new UserService(db);
  }

  async findUserByUsername(username) {
    const result = await this.coasterUser.findOne({
      where: {
        username: {
          $iLike: username.toLowerCase(),
        },
      },
    });

    return result ? result.dataValues : null;
  }

  async findUserByEmail(email) {
    const result = await this.coasterUser.findOne({
      where: {
        email,
      },
    });

    return result ? result.dataValues : null;
  }

  async signUp(username, email, password) {
    if (!await assertSignUpIsValid(username, email, password)) {
      return null;
    }

    const now = moment();
    const { hash, salt } = await createPassword(password);
    const saved = await this.coasterUser.create({
      username,
      createdAt: now,
      email,
      password: hash,
      salt,
      updatedAt: now,
    });

    if (!(saved && saved.dataValues)) {
      throw new AppError('Could not sign up new user', 500);
    }

    return saved.dataValues;
  }
}
