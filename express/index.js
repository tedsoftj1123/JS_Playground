import express from "express";
import morgan from "morgan";
import { mainRouter } from "./router/router.js";

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.use("/", mainRouter());

app.use((req, res, next) => {
    res.json(
        {
            "message": "page not found"
        }
    ).status(404).send();
})

app.listen(3000, () => {
    console.log('listening on 3000')
});