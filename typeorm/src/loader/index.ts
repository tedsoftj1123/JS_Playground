import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDatabase } from './connect.database';
import dotenv from 'dotenv';
import { mainRoute } from '../router/main.router';
dotenv.config();


export const initApp = async () => {
  
  
  await connectDatabase()
          .then((info) => {
               console.log("Database connected successfully");
          })
          .catch((error) => {
               console.log(error.message);
               process.exit(1);
          });

  const app = express();

  app.set('port', process.env.PORT || 3000);
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: false,
   }),
  );
  app.use(morgan('dev'));
  app.use(
     cors({
       origin: [`${process.env.MAIN}`],
       methods: ['GET', 'POST', 'PUT', 'DELETE'],
       credentials: true,
     }),
  );

  app.use('/', mainRoute());

  app.use((req, res, next) => {
     next(new Error('Not Found'));
  });

  app.use((err: Error, req: Request, res: Response) => {
  
     res.status(500)
     .json(
      {
         error: err.message
      })
    });


  app.listen(app.get("port"), () => {
     console.log("server started", app.get("port"));
  });
}