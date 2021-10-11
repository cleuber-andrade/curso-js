const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..','text.txt');

const pessoas = [
    {nome: 'joao'},
    {nome: 'Binho'},
    {nome: 'Nathy'},
    {nome: 'Leila'},
    {nome: 'Isac'}
];

const json = JSON.stringify(pessoas);

fs.writeFile(caminhoArquivo, json, { flag: 'w'});