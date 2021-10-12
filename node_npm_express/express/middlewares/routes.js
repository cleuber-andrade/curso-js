const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// Rotas da home
route.get('/',  homeController.paginaInicial); 

route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;




//function meuMiddleware(req, res, next){
//    req.session = { nome: 'Cleuber', sobrenome: 'Andrade' };
//    console.log();
//    console.log('Passei no seu middleware.');
//    console.log();
//    next();
//}

//route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
//    console.log();
//    console.log('ainda estou aqui');
    //console.log(`'Ultimo  Middleware' Olha o que tem na req.session.nome ${req.session.sobrenome}`)
//});