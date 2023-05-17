import { getUesrById, getUsers, signup } from '../controller/user.controller.js';
import { errorHandler } from '../middleware/error.handler.js';
import { UserService } from '../service/user.service.js'
import { Router } from 'express';

const router = Router();
export const userRouter = (app) => {
     const userService = new UserService();

     app.use('/users', router);
     
     router.route('/')
          .get(errorHandler(getUsers))
          .delete((req, res) => {
               console.log("id로 user 삭제: ", req.params.userId);
               res.send();
          });

     router.get('/:userId', errorHandler(getUesrById));

     router.post('/', errorHandler(signup));
}