import { Module } from '@nestjs/common';
import AlbumService from '../services/album.service';
import Album from '../repositories/album/album.entity';

@Module({
  imports: [

  ],
  components: [
    AlbumService,
  ],
  controllers: [],
})
class AlbumModule {}

export default AlbumModule;
