import { User } from "../entity/user.entity.js";

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
          await User.create({
              accountId,
              password,
              name
          });
     }
}