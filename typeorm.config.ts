// typeorm.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'benesse',
    entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    synchronize: true,
};

export default typeOrmConfig;
