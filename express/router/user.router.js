import { deleteUserById, getUesrById, getUsers, login, myPage, signup } from '../controller/user.controller.js';
import { errorHandler } from '../middleware/error.handler.js';
import { authorize } from '../middleware/jwt.handler.js';
import { Router } from 'express';

const router = Router();
export const userRouter = (app) => {
     app.use('/users', router);

     router.get('/my', authorize, errorHandler(myPage));
     
     router.get('/', errorHandler(getUsers));
     
     router.delete('/:userId', errorHandler(deleteUserById));

     router.get('/:userId', errorHandler(getUesrById));

     router.post('/', errorHandler(signup));

     router.post('/auth', errorHandler(login));
}