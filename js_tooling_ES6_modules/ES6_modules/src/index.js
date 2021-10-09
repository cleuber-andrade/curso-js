  //podemos tbm importar tudo
//import * as MeuModulo from './modulo';
 //o AS serve para renomear a variavel no import e export
import { nome /*as nome2*/, sobrenome, idade, soma, Pessoa } from './modulo';

const p1 = new Pessoa ('Cleuber', 'Andrade');

console.log(nome, sobrenome, idade);
console.log(soma(5, 5));
console.log(p1);