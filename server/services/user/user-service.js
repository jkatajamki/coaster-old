import initDataAccess from '../../data-access/init-data-access';

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
    try {
      const result = await this.coasterUser.findOne({
        where: {
          username,
        },
      });

      return result ? result.dataValues : null;
    } catch (e) {
      // todo: Error handling
      console.error('Error in findUserByUsername:', e);
      throw e;
    }
  }

  async findUserByEmail(email) {
    try {
      const result = await this.coasterUser.findOne({
        where: {
          email,
        },
      });

      return result ? result.dataValues : null;
    } catch (e) {
      // todo: Error handling
      console.error('Error in findEmailByUsername:', e);
      throw e;
    }
  }
}
