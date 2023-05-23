import { deleteUserById, getUesrById, getUsers, login, signup } from '../controller/user.controller.js';
import { errorHandler } from '../middleware/error.handler.js';
import { UserService } from '../service/user.service.js'
import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
export const userRouter = (app) => {
     const userService = new UserService();

     app.use('/users', router);

     router.get('/my', (req, res, next) => {
          const token = jwt.sign({
               sub: '10',
               type: 'access'
          }, process.env.JWT_SECRET, {
               algorithm: 'HS256',
               expiresIn: '1h'
          });
          res.json({
               token: token 
          }).send();
     });
     
     router.get('/', errorHandler(getUsers));
     
     router.delete('/:userId', errorHandler(deleteUserById));

     router.get('/:userId', errorHandler(getUesrById));

     router.post('/', errorHandler(signup));

     router.post('/auth', errorHandler(login));
}