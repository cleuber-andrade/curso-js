//path e fs já são medotos existente no node.js
const fs = require('fs').promises;
                    

module.exports = (caminhos, dados) => {
    //fs.whiteFile é um médodo para escrever em um novo documento
    fs.writeFile(caminhos, dados, { flag: 'w'});
};

