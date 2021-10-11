//IMPORTANDO MODULOS EM NODE

//1ª forma de importar(importando o modulo todo)
//const modulo = require('./modulo');
//console.log(modulo.falaNome());

//2ª forma de importar(importando algo mais específico)
//const falaNome = require('./modulo').falaNome;
//console.log(falaNome());

//3ª forma pegando o modulo inteiro e importar algo mais específico
//const merda = modulo.falaNome;
//console.log(falaNome());

//4ª forma via desestruturação;
//const { nome, sobrenome, falaNome } = require('./modulo');
//console.log(nome, sobrenome);
//console.log(falaNome());


const { Pessoa } = require('./modulo');

const p1 = new Pessoa('Cleuber')

console.log(p1);