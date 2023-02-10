import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { mainRoute } from "./router/main.router";

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
      error: err.name
   })
   });


app.listen(app.get("port"), () => {
   console.log("server started", app.get("port"));
});