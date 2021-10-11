const fs = require('fs').promises;

//fs.readFile é um médodo para let em um documento
module.exports = (caminhos) => fs.readFile(caminhos, 'utf8');
;
    
    


