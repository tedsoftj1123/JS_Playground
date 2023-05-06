import { Router } from "express";

const userRouter = () => {
     const app = Router();
     app.get('/auth', (req, res) => {
          console.log('hello');
     });
}

module.exports = userRouter;