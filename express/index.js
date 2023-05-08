const express = require("express");
const morgan = require("morgan");
 
const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(morgan('dev'))

app.set('jwt_secret', process.env.JWT_SECRET);

const userRouter = require('./router/user.router');
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('listening on 3000')
});