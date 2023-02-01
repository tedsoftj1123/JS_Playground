import { Router } from "express";
import { queryUserList } from "../controller/user.controller";
import { errorHandler } from "../middleware/globalErrorHandler";

const router = Router();
export const userRouter = (router: Router) => {
     
     router.get("/users", errorHandler(queryUserList));
     
}