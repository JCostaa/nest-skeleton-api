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
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: 'root',
      database: 'nest',
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
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: 'root',
  database: 'nest',
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
