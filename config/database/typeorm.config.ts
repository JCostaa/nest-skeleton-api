import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: process.env.DB_CONNECTION as 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      database: process.env.DB_DATABASE,
      password: "",
      entities: [__dirname + '/../../src/**/*.entity.{js,ts}'],
      migrations: [__dirname + '/../../src/infra/database/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: __dirname + '/../../src/infra/database/migrations',
      },
      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
      synchronize: false,
      logging: true,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: process.env.DB_CONNECTION as 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: "",
  entities: [__dirname + '/../../src/**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../../src/infra/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: __dirname + '/../../src/infra/database/migrations',
  },
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: false,
  logging: true,
};
