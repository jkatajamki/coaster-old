import { Module, Dependencies } from '@nestjs/common';
import AppController from '../controllers/app.controller';
import dataSourceConfig from '../config/data-source.config';
import AlbumModule from './album.module';

@Module({
  imports: [
    //AlbumModule,
  ],
  controllers: [AppController],
  components: [],
})
class AppModule {
  constructor(connection) {
    this.connection = connection;
  }
}

export default AppModule;
