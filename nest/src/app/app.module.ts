import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from '../domain/user/user.module';
import { TypeOrmConfig } from '../global/persistence/database.provider';

@Module({
  imports: [UserModule, TypeOrmConfig],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
