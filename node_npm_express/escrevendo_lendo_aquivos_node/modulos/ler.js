const fs = require('fs').promises;

//fs.readFile é um médodo para ler um documento.
module.exports = (caminhos) => fs.readFile(caminhos, 'utf8');
;
    
    


