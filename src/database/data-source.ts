import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'benesse',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'subscriber',
  },
} as DataSourceOptions);
