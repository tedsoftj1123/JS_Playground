import { Module } from '@nestjs/common';
import { UserController } from './presentation/user.controller';
import { SignUpUseCase } from './usecase/signup.usecase';

@Module({
  controllers: [UserController],
  providers: [SignUpUseCase],
})
export class UserModule {}
