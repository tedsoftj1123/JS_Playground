import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDatabase } from './connect.database';
import dotenv from 'dotenv';
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

  app.listen(app.get("port"), () => {
     console.log("server started", app.get("port"));
  });
}