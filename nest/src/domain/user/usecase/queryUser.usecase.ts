import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repository/user.repository';
import { QueryUserResponse } from '../presentation/dto/queryUser.response';

@Injectable()
export class QueryUserUseCase {
  constructor(
    @Inject(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async execute(accountId: number): Promise<QueryUserResponse | null> {
    const user = await this.userRepository.findByAccountId(accountId);
    if (!user) {
      console.log('user not found');
      return null;
    }

    return new QueryUserResponse(user.id, user.accountId, user.name, user.age);
  }
}
