//path e fs já são medotos existente no node.js
const path = require('path'); 
                                                    //text.txt
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./modulos/escrever');

const pessoas = [
    {nome: 'joao'},
    {nome: 'Binho'},
    {nome: 'Nathy'},
    {nome: 'Leila'},
    {nome: 'Isac'}
];

//convertendo array em json
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);