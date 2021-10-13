const HomeModel = require('../models/')

exports.paginaInicial = (req, res) => {
    res.render('index');
  };
  
exports.trataPost = (req, res) => {
   res.send(req.body);
   return;
};