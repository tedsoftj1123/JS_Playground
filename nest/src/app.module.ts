import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { TypeOrmConfig } from './global/persistence/database.provider';

@Module({
  imports: [UserModule, TypeOrmConfig],
})
export class AppModule {}
