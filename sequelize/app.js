const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);
nunjucks.configure('views', {
    express: app,
    watch: true
});
sequelize.sync();

app.listen(app.get('port'), () => {
    console.log('server started');
})
