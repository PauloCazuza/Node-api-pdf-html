const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');
const pdf = require('./routes/pdf');

app.use('/', pdf);
app.use('/person', personRoute);

module.exports = app;

