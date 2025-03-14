import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // CORS 설정
  app.enableCors({
    origin: '*',
    methods: 'GET, POST, DELETE, PUT, PATCH, HEAD',
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await app.listen(process.env.PORT);
}
bootstrap();
