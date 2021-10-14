//meddleware - são funções executadas na route, ou seja, vc quer responder o cliente no meio do do caminho, antes da resposta final da route.

exports.middlewareGlobal = (req, res, next) => {
  res.locals.umaVariavelLocal = 'Este é o valor da varival local';
  next();
};
  
exports.outroMiddleware = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN'){
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.crsfToken = req.crsfToken();
  next();
};