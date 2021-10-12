const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeCOntroller.trataPost);

//rotas contato
route.get('/', contatoController.paginaInicial);
route.post('/', contatoController.tratandoPost);





module.exports = route;