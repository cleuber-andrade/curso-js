//path e fs já são medotos existente no node.js
const path = require('path'); 
                                                    //text.txt
                                                    //'..' - serve par subir pasta
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./modulos/escrever');
const ler = require('./modulos/ler');

//const pessoas = [
//    {nome: 'joao'},
//    {nome: 'Binho'},
//    {nome: 'Nathy'},
//    {nome: 'Leila'},
//    {nome: 'Isac'}
//];

//convertendo array em json
//const json = JSON.stringify(pessoas, '', 2);
//escreve(caminhoArquivo, json);

async function letArquivo (caminho){

    const dados = await ler(caminho);
    renderizaDados(dados);
}

//const dadosArquivo = letArquivo(caminhoArquivo)
//      .then(dados => console.log(dados));

function renderizaDados(dados){
    //convertendo o JSON em array para poder manipular-lo no for
    dados = JSON.parse(dados);

    dados.forEach(val=> console.log(val));
}
letArquivo(caminhoArquivo);
