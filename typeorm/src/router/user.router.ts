import { Router } from "express";
import { queryUserList, saveUser } from "../controller/user.controller";
import { errorHandler } from "../middleware/globalErrorHandler";

const router = Router();
export const userRouter = (router: Router) => {

     router.use("/users", router);
     

     router
     .route("/")
     .get(errorHandler(queryUserList))
     .post(errorHandler(saveUser))
     
}