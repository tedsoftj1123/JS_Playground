import { UserService } from '../service/user.service.js'
import { Router } from 'express';

const router = Router();
export const userRouter = (app) => {
     const userService = new UserService();

     app.use('/users', router);
     
     router.route('/')
          .get((req, res) => {
               console.log("유저 리스트 조회");
               res.send();
          })
          .delete((req, res) => {
               console.log("id로 user 삭제: ", req.params.userId);
               res.send();
          });

     router.get('/:userId', (req, res, next) => {
          try {
               userService.getUsersById(req.params.userId);    
          } catch(e) {
               console.error(e);
               res.status(500)
               .send(
                    {
                         "message": e.message
                    }
               )
          }
          res.send();
     });

     router.post('/', (req, res) => {
          console.log("회원가입");
          res.send();
     });
}