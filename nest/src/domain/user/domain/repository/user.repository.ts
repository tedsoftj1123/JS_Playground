import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.userRepository = userRepository;
  }

  public async saveUser(user: User) {
    await this.userRepository.save(user);
  }

  public async findByAccountId(userId: number): Promise<User | null> {
    return await this.userRepository.findOneBy({ id: userId });
  }
}
