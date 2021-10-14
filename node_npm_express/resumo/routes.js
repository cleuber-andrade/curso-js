const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//AS ROTAS DEFINEM QUAL O CONTROLLERS VAI CONTROLAR AQUELA ROTA.(QUEM VAI DESCIDIR O QUE VAI ACONTECER NA ROTA).
//NO CASO DOS EXEMPLOS ABAIXOS OS CONTROLLES SÃO O homeController e contatoController.

// Rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;