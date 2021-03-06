const moment = require('moment') ;
const express = require('express');
const app = express();
const db = require('./db');

app.use((req, res, next) => {
    res.locals.moment = moment;
    next();
});
const NewsController = require('./news/NewsController');
app.use('/news', NewsController);

// const AuthController = require('./auth/AuthController');
// app.use('/api/auth', AuthController);


module.exports = app;