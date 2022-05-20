import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";
import { typeOrmAsyncConfig } from './typeorm.config';
/**
 * Import and provide app configuration related classes.
 *
 * @module
 */



console.log(process.env.DB_TYPE)
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),

  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class DBConfigModule {}
