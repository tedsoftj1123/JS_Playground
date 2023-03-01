import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../../domain/user/domain/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '11111111',
      database: 'nest',
      entities: [User],
      logging: true,
      synchronize: true,
    }),
  ],
})
export class TypeOrmConfig {}
