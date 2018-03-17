import { NestFactory } from '@nestjs/core';
import AppModule from './modules/app.module';

function bootstrap() {
  return NestFactory.create(AppModule);
}

export default bootstrap;
