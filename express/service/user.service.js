import { User } from "../entity/user.entity.js";

export class UserService{
     async getUsers() {
          return await User.findAll();
     }

     getUsersById(id) {
          console.log(id);
          throw new Error("의도한 에러");
     }
}