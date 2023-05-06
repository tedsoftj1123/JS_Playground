import express from "express";
import morgan from "morgan";
import { userRouter } from "./router/user.router.js";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.set('jwt_secret', process.env.JWT_SECRET);

app.use('/', userRouter());

app.listen(3000, () => {
    console.log('listening on 3000')
});