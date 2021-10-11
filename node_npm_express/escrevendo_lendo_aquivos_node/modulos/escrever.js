const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..','text.json');

const pessoas = [
    {nome: 'joao'},
    {nome: 'Binho'},
    {nome: 'Nathy'},
    {nome: 'Leila'},
    {nome: 'Isac'}
];

const json = JSON.stringify(pessoas, '', 2);

fs.writeFile(caminhoArquivo, json, { flag: 'w'});