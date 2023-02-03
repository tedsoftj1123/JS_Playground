import { userRepository } from "../domain/repository/user.repository";
import { User } from "../domain/entity/user.entity";



export class UserService {
     
     async findAll(): Promise<User[]> {
          return await userRepository.findAll();
     }

     async saveUser(user: User) {
          await userRepository.save(user);
     }
}