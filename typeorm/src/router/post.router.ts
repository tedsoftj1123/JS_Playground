import { Router } from "express";
import { queryPostListByUserId } from "../controller/post.controller";
import { errorHandler } from "../middleware/globalErrorHandler";

export const postRouter = (router: Router) => {

     router.use('/posts', router);

     router
     .route("/:userId")
     .get(errorHandler(queryPostListByUserId))

}