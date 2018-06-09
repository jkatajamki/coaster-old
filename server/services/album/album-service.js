export default class AlbumService {
  album;
  userAlbum;
  commonAttributes;

  constructor(models) {
    if (typeof models === 'undefined') {
      throw new Error('Cannot initialise AlbumService');
    }

    this.album = models.albums;
    this.userAlbum = models.useralbums;
    this.commonAttributes = [
      'id',
      'artistId',
      'description',
      'releaseYear',
      'releaseMonth',
      'releaseDay',
      'type',
    ];
  }

  async getAll() {
    const result = await this.album.findAll({
      attributes: this.commonAttributes,
    });

    return result ? result.dataValues : [];
  }

  async findUserAlbums(userId) {
    const result = await this.userAlbum.findAll({
      where: {
        userId,
      },
    });

    return result ? result.dataValues : [];
  }
}
