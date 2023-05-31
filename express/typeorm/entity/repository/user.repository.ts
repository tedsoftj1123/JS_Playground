import { Repository } from "typeorm";
import { datasource, userOrmRepository } from "../../app";
import { User } from "../user.entity";

export class UserRepository {
     public async findById(id: number): Promise<User> {
          return await userOrmRepository.findOneBy({id});
     }

     public async findByAccountId(accountId: string): Promise<User> {
          return await userOrmRepository.findOneBy({accountId});
     }

     public async findByAge(age: number): Promise<User[]> {
          return await userOrmRepository.findBy({age});
     }

     public async findByAccountIdAndName(accountId?: string, name?: string): Promise<User[]> {
          return await userOrmRepository.find({
               where: {
                    name, accountId
               }
          });
     }
}