import { SignUpRequest } from '../presentation/dto/signup.request';
import { UserRepository } from '../domain/repository/user.repository';
import { User } from '../domain/user.entity';
import { Inject } from '@nestjs/common';

export class SignUpUseCase {
  constructor(
    @Inject(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async execute(request: SignUpRequest) {
    const user = new User(
      request.accountId,
      request.name,
      request.password,
      request.age,
    );
    await this.userRepository.saveUser(user);

    return `welcome! ${user.accountId}`;
  }
}
