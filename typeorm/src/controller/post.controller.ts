import { NextFunction, Request, Response } from "express";
import { BusinessLogic } from "../middleware/globalErrorHandler";
import { PostService } from "../service/postService";

const postService = new PostService();
const queryPostListByUserId: BusinessLogic = async (req: Request, res: Response, next: NextFunction) => {
     const posts = await postService.findByUserId(+req.params.userId); 
     res.status(200).json(posts)
}


export {queryPostListByUserId}