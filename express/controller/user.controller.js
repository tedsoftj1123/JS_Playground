import { UserService } from "../service/user.service.js";

const userService = new UserService();

export const getUsers = async (req, res, next) => {
     const users = await userService.getUsers();
}

export const signup = async (req, res, next) => {
     const token = await userService.signup(req.body.accountId, req.body.password, req.body.name);
     res.status(201).send({token});
}

export const getUesrById = async (req, res, next) => {
     const user = await userService.getUserById(req.params.userId);
     res.status(200).json(user);
}

export const deleteUserById = async (req, res, next) => {
     await userService.deleteUserById(req.params.userId);

     res.status(204).json({
          "message": "success"
     });
}

export const login = async (req, res, next) => {
     const token = await userService.login(req.body.accountId, req.body.password);

     res.status(201).json({
          token
     });
}