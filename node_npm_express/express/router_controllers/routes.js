const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

//rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', homeCOntroller.trataPost);







module.exports = route;