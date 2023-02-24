import { NextFunction, Request, Response } from "express";
import { BusinessLogic } from "../middleware/globalErrorHandler";
import { AuthService } from "../service/auth.service";
require('dotenv').config();

const authService = new AuthService()
export const recieveToken: BusinessLogic = async (req: Request, res: Response, next: NextFunction) => {
     const accountId = req.body.accountId;
     
     const token = authService.recieveToken(accountId);

     return res.json(
          {
               "token" : token
          }
     )
}

export const whoami: BusinessLogic = async (req: Request, res: Response, next: NextFunction) => {
     const accountId = req.headers.authorization;
     console.log(accountId)

     return res.json(accountId)
}