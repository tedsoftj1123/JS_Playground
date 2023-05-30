import express from "express";
import morgan from "morgan";
import { mainRouter } from "./router/router.js";
import { CustomError, NotFoundException } from "./error/error.js";
import { sequelize } from "./config/sequelize.config.js";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('success');
} catch (err) {
    console.error(err);
    process.exit(1);
}

app.use('/', mainRouter());

app.use((req, res, next) => {
    throw new NotFoundException("url not found");
});

app.use((err, req, res, next) => {
    console.error(err);
    const httpCode = (err instanceof CustomError) ? err.statusCode : 500;
    const errMessage = (err instanceof CustomError) ? err.message : 'Internal Server Error';
    res.status(httpCode).json(
        {
            "message": errMessage,
            "timeStamp": new Date()
        }
    )
})

app.listen(3000, () => {
    console.log('listening on 3000')
});