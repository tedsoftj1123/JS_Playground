import { NextFunction, Request, Response } from "express";
import { BusinessLogic } from "../middleware/globalErrorHandler";
import { UserService } from "../service/userService";

const  userService: UserService = new UserService();

const queryUserList: BusinessLogic = async (req: Request, res: Response, next: NextFunction)=> {
     const users =  await userService.findAll();
     res.status(200).json(users);
}

const saveUser: BusinessLogic = async (req: Request, res: Response, next: NextFunction) => {
     await userService.saveUser(req.body);
     res.status(201).json(
          {
               message: "User created successfully"
          }
     );
}

const findUserByAccountId: BusinessLogic = async (req: Request, res: Response, next: NextFunction) => {
     const user = await userService.findByAccountId(req.params.accountId);
}

export {queryUserList, saveUser, findUserByAccountId}