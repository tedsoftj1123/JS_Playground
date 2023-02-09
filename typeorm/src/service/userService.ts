import { userRepository } from "../domain/repository/user.repository";
import { User } from "../domain/entity/user.entity";


export class UserService {
     
     async findAll(): Promise<User[]> {
          return await userRepository.findAll();
     }

     async saveUser(user: User) {
          if(userRepository.existsByAccountId(user.accountId)) {
               throw new Error("Account already exists")
          }
          return await userRepository.save(user);
     }

     async findByAccountId(accountId: string): Promise<User> {
          const user = await userRepository.findByAccountId(accountId);
          if(user == null) {
               throw new Error("Account not found");
          }
          return user;
     }
}