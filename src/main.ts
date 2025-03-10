import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../localhost-key.pem'),
    cert: fs.readFileSync('../localhost.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  // CORS 설정
  출처: https: app.enableCors({
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
