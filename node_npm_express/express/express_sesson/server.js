//impedindo que as informações com usuario, senha e etc apareça para o ususario
require('dotenv').config();

const express = require('express');
const app = express();
//acessando bando de dados MondoDB
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {        
        app.emit('pronto');
    })
    .catch(e => console.log(e)); 

//chamando a express-session    
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');




const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddlewareGlobal } = require('./src/middlewares/middlewares');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'ajsdfhalsjdhfasdjhlasdjhflas',
    store: new MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));

app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(outroMiddlewareGlobal);
app.use(routes);


app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Esse servidor está executando na porta 3000');
    });
});
