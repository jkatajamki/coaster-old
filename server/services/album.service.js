import { Component, Dependencies } from '@nestjs/common';
import Album from '../repositories/album/album.entity';

@Component()
class AlbumService {
  constructor(albumRepository) {
    this.albumRepository = albumRepository;
  }

  async findAll() {
    return this.albumRepository.find();
  }
}

export default AlbumService;
