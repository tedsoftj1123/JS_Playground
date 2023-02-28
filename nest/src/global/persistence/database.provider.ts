import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../../domain/user/domain/user.entity';

const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '11111111',
  database: 'nest',
  entities: [User],
  synchronize: false,
};

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
})
export class TypeOrmConfig {}
