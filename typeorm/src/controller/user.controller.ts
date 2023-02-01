import { BusinessLogic } from "../middleware/globalErrorHandler";
import { UserService } from "../service/userService";
import { User } from "../domain/entity/user.entity";

const  userService: UserService = new UserService();

const queryUserList: BusinessLogic = async (req, res, next)=> {
     const users: User[] = await userService.findAll();
     res.status(200).json(users);
}

export {queryUserList}