import { Router } from "express";
import { userRouter } from "./user.router";

export const mainRoute = () => {
     const app = Router();
      
     userRouter(app);
     
     return app;
}