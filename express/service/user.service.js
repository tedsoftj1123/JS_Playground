import { User } from "../entity/user.entity.js";
import { ConflictException } from "../error/error.js";

export class UserService{
     async getUsers() {
          return await User.findAll();
     }

     async getUserById(id) {
          return await User.findAll({
               where: {
                    id
               }
          });
     }

     async signup(accountId, password, name) {
          if(User.findOne({where:{accountId}}) !== undefined) {
               throw new ConflictException("user already registered");
          }
          await User.create({
              accountId,
              password,
              name
          });
     }
}