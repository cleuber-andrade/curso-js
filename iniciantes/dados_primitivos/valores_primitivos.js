/*
Primitivos(imutaveis) - string, number, boolean, undefined, null (bigint, symbol) (//Não podem ser mudados) - valor

=> Os valor dos primitivos são copiados quando tem o sinal de atribuição.

let a = 'A';
let b = a; //copia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);


Referência (mutável) - array, object, function

=> Os valores são passados por refência.

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a);

b.pop();
console.log(b);

console.log(c);

const a = {
   nome:'Luiz'
}

*/
