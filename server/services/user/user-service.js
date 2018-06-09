import moment from 'moment';
import { assertSignUpIsValid } from './assert';
import { createPassword } from './helpers';
import AppError from '../../util/errors/app-error';
import AuthenticationRequiredError from '../../util/errors/auth/auth-required-error';

export default class UserService {
  coasterUser;
  commonAttributes = ['id', 'username', 'email', 'createdAt', 'updatedAt'];

  constructor(models) {
    if (typeof models === 'undefined') {
      throw new Error('Cannot initialise UserService');
    }

    this.coasterUser = models.coasterusers;
  }

  async findUserById(id) {
    const result = await this.coasterUser.findOne({
      attributes: this.commonAttributes,
      where: {
        id,
      },
    });

    return result ? result.dataValues : null;
  }

  async findUserByUsername(username, comparePwd = false) {
    const attributes = [...this.commonAttributes, ...comparePwd ? ['password'] : []];
    const result = await this.coasterUser.findOne({
      attributes,
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
      attributes: this.commonAttributes,
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

  getMe(req) {
    const { currentUser } = req;

    if (!currentUser) {
      throw new AuthenticationRequiredError();
    }

    return this.findUserById(currentUser.id);
  }
}
