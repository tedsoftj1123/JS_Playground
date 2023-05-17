import { UserService } from "../service/user.service.js";

const userService = new UserService();

export const getUsers = async (req, res, next) => {
     const users = await userService.getUsers();

     res.status(200).json(users);
}