import { Router } from "express";
import { postRouter } from "./post.router";
import { userRouter } from "./user.router";

export const mainRoute = () => {
     const app = Router();
      
     userRouter(app);
     postRouter(app);
     
     return app;
}