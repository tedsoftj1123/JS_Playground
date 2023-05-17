import express from "express";
import morgan from "morgan";
import { mainRouter } from "./router/router.js";
import { CustomError, NotFoundException } from "./error/error.js";
import { Sequelize } from "sequelize";
import { User } from "./entity/user.entity.js";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

const sequelize = new Sequelize('node', 'root', '11111111', {
    host: 'localhost',
    dialect: "mysql"
});

try {
    await sequelize.authenticate();
    await sequelize.sync({alter: true});
    User.initiate(sequelize);
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