const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const db = require('./helpers/database.js');
const newsRoute = require('./routes/newsRoute.js')
app.use(morgan('dev'))

db.connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/news',newsRoute)

module.exports = app;
