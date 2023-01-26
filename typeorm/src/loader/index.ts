import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();


export const initApp = () => {
  
  const myDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
  myDataSource.initialize()
  .then(() => {
    console.log('Database Connected ✅');
  })
  .catch((error) => {
    console.log(error);
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