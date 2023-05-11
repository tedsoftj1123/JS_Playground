import { Router } from "express";
import { userRouter } from "./user.router.js";


export const mainRouter = () => {
     const router = Router();
     userRouter(router);

     return router;
}