import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";


export const authHandler = () => (req: Request, res: Response, next: NextFunction) =>{
     let token: string = req.headers.authorization;
     if(!token) next(new Error("Not Logged in"));
     if(!token.startsWith("Bearer ")) next(new Error("invalid token"));

     token = token.split(" ")[1];

     jwt.verify(token, process.env.TOKEN_SECRET);
     next()
}