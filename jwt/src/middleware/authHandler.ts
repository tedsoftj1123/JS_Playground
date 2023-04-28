import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";


export const authHandler = () => async (req: Request, res: Response, next: NextFunction) =>{
     const auth: string = req.headers.authorization;
     console.log(auth);
     if(!auth) next(new Error("Not Logged in"));
     if(!auth.startsWith("Bearer ")) next(new Error("invalid token"));

     const token = auth.split(" ")[1];

     const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

     const userId = decoded.sub;
     next();
}