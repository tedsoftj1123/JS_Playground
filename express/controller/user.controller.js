import { UserService } from "../service/user.service.js";

const userService = new UserService();

export const getUsers = async (req, res, next) => {
     const users = await userService.getUsers();

     res.status(200).json(users);
}

export const signup = async (req, res, next) => {
     await userService.signup(req.body.accountId, req.body.password, req.body.name);
     res.status(201).send();
}

export const getUesrById = async (req, res, next) => {
     const user = await userService.getUserById(req.params.userId);
     res.status(200).json(user);
}