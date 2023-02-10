import { Router } from "express";
import { findUserByAccountId, queryUserList, saveUser } from "../controller/user.controller";
import { errorHandler } from "../middleware/globalErrorHandler";

const router = Router();
export const userRouter = (app: Router) => {

     app.use("/users", router);
     

     router.get("/", errorHandler(queryUserList))
     router.post("/", errorHandler(saveUser))

     router.get("/:accountId", errorHandler(findUserByAccountId));
     
}