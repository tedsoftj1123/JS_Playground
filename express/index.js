import express from "express";
import morgan from "morgan";
import { mainRouter } from "./router/router.js";
import { CustomError, NotFoundException } from "./error/error.js";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.use('/', mainRouter());

app.use((req, res, next) => {
    throw new NotFoundException("url not found");
})

app.use((err, req, res, next) => {
    console.error(err);
    if(!(err instanceof CustomError)) {
        err.status = 500;
    }
    res.status(err.statusCode).json(
        {
            "message": err.message,
            "timeStamp": new Date()
        }
    )
})

app.listen(3000, () => {
    console.log('listening on 3000')
});