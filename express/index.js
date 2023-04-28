const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.method + " " + req.url);
    next();
});

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.get('/path/value/:data', (req, res) => {
    res.send(req.params.data);
});

app.delete('/error', (req, res) => {
    throw new Error('에러 났어요');
});


app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).send('Internal server Error');
});

app.listen(3000, () => {
    console.log('listening on 3000')
});