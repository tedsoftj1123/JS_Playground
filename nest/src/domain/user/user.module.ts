import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';
import { SignUpUseCase } from './usecase/signup.usecase';
import { UserRepository } from './domain/repository/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [SignUpUseCase, UserRepository],
})
export class UserModule {}
