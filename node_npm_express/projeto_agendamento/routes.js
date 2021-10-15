const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');

const contatoController = require('./src/controllers/contatoController');

//'/' tbm pode ser escrito com /index dentro do get

// Rotas da home
route.get('/', homeController.index);

// Rotas de login
route.get('/login/', loginController.index);
route.post('/login/register/', loginController.register);
route.post('/login/login/', loginController.login);
route.get('/login/logout/', loginController.logout);

//rotas de contato
route.get('contato/index', contatoController.index);


module.exports = route;