//path e fs já são medotos existente no node.js
const fs = require('fs').promises;
                    

module.exports = (caminhos, dados) => {
    //fs.whiteFile é um médodo para escrever em um novo documento
    //{ flag: 'w'}  = é para limpar o arquivo todo;
    //{ flag: 'a'} = é para criar im appendChildren
    fs.writeFile(caminhos, dados, { flag: 'w'});
};

