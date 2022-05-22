import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from 'config/database/typeorm.config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import {ControllersModule} from "./interface/http/controllers/_controller.module";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    EventEmitterModule.forRoot(),
    ControllersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
