import { User } from "../entity/user.entity.js";
import { ConflictException, NotFoundException, UnauthorizedException } from "../error/error.js";
import { provideToken } from "../util/jwt.util.js";

export class UserService{
     async getUsers() {
          return await User.findAll();
     }

     async getUserById(id) {
          const user = await User.findByPk(id);

          if(!user) {
               throw new NotFoundException('user not found');
          }

          return user;
     }

     async signup(accountId, password, name) {
          const user = await User.findOne({
               where: {accountId}
          });
          if(user) {
               throw new ConflictException('user alrady exists');
          }

          await User.create({
              accountId,
              password,
              name
          });

          return provideToken(accountId, 'access');
     }

     async deleteUserById(id) {
          await User.destroy({where: {id}});
     }

     async login(accountId, password) {
          const user = await User.findOne({where: {accountId}});
          if(user.password !== password) {
               throw new UnauthorizedException('invalid passsword');
          }

          return provideToken(accountId, 'access');
     }

     async myPage(currentUserId) {
          return await User.findOne({where: {accountId: currentUserId}});
     }
}