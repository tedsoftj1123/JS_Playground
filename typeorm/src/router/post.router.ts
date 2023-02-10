import { Router } from "express";
import { createNotice, queryPostListByUserId } from "../controller/post.controller";
import { errorHandler } from "../middleware/globalErrorHandler";

const router = Router();
export const postRouter = (router: Router) => {

     router.use('/posts', router);

     router.get('/:userId', errorHandler(queryPostListByUserId));

     router.post('/:userId', errorHandler(createNotice));

}