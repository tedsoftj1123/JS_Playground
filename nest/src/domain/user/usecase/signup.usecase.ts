import { SignUpRequest } from '../presentation/dto/signup.request';
import { Inject } from '@nestjs/common';
import { UserRepository } from '../domain/repository/user.repository';

export class SignUpUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}
  execute(request: SignUpRequest): string {
    return `welcome! ${request.accountId}`;
  }
}
