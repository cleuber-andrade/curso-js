
const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
//caminho relativo para a pasta views
//app.set('views', './src/views');
//caminho absoluto para a pasta views
app.set('views', path.resolve(__dirname, 'src', 'views'));
//selecionando a engine a ser utilizada no projeto
//para instalar no - npm i ejs
app.set('view engine', 'ejs');
//chamando as routes.js
app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Esse servidor está executando na porta 3000');
});
