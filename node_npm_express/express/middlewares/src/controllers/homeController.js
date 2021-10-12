exports.paginaInicial = (req, res) => {
    //console.log('passei pelo cliente');
    res.render('index');
    //console.log(`'Pagina inicial' Olha o que tem na req.session.nome ${req.session.nome}`);
    return;
  };
  
  exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
  };