import { deleteUserById, getUesrById, getUsers, signup } from '../controller/user.controller.js';
import { errorHandler } from '../middleware/error.handler.js';
import { UserService } from '../service/user.service.js'
import { Router } from 'express';

const router = Router();
export const userRouter = (app) => {
     const userService = new UserService();

     app.use('/users', router);
     
     router.get('/', errorHandler(getUsers))
     
     router.delete('/:userId', errorHandler(deleteUserById));

     router.get('/:userId', errorHandler(getUesrById));

     router.post('/', errorHandler(signup));
}