//Arrays são valores por referência;
//

//                 0         1        2
const nomes = ['Eduardo', 'Maria', 'João'];

nomes[2] = 'Pedro';
delete nomes[1];
console.log(nomes);

//pode ser utilizado como constructor

const nomes2 = new Array('Binho', 'Nathy', 'Leila');
console.log(nomes2);


//fazendo uma copia do array original utilizando operado ...spred
const nomes3 = ['a', 'b', 'c'];
const novo = [...nomes3];

//tamanhdo array
console.log(nomes3.length);


//pop 
const removido = nomes3.pop();
console.log(nomes3,removido);


//shift
const removido2 = nomes3.shift();
console.log(removido2 , nomes3);


//push e unshit
const nome4 = ['Set', 'Ra', 'Anubis'];
nome4.unshift('Mun');
nome4.push('Jason');
console.log(nome4);

//slice
const nome5 = ['Bacon', 'Presunto', 'Alface', 'picanha', 'Queijo'];
const novo2 = nome5.slice(0, 3);
console.log(novo2);

//convertendo string em um array
const nome6 = 'Cleuber Alexandre Moreira Andrade';
const novo3 = nome6.split(' ');
console.log(novo3);

//convertendo um array em uma string
const nome7 = [ 'Cleuber', 'Alexandre', 'Moreira', 'Andrade' ];
const novo4 = nome7.join(' ');
console.log(novo4);

//