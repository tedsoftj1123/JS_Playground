import { UserRepository } from "../domain/repository/UserRepository";
import { User } from "../domain/entity/user.entity";



export class UserService {
     
     async findAll(): Promise<User[]> {
          return await UserRepository.findAll();
     }
}