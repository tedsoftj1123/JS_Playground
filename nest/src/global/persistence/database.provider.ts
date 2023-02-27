import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.MYSQL_HOST || 'localhost',
  port: 3306,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: 'nest',
  entities: [''],
  synchronize: false,
};

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
})
export class TypeOrmConfig {}
