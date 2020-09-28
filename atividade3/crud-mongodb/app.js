var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//conecta ao mongo
require('./db/MongoConn')

//var users = require('./routes/users');
//pega as rotas
var DisciplinasRoutes = require('./routes/DisciplinaRoute')

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE")
    next()
})

//app.use('/api/v1/users', users);
app.use('/disciplinas', DisciplinasRoutes);

module.exports = app;