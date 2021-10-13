const express = require('express');
const app = express();
//acessando bando de dados MOndoDB
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://cleuber_andrade:Su7Vj5bPGtONBiyz@cluster0.b0tc7.mongodb.net/BASEDEDADOS?retryWrites=true&w=majority';
mongoose.connect(connectionString);

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Esse servidor está executando na porta 3000');
});
