import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './ormconfig';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { QnaModule } from './qna/qna.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
    UsersModule,
    QnaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
