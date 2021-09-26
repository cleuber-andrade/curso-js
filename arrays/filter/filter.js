// Filter, map, reduce
//Filter - filtra o array - //**vai sempre retorna com mesma qtd de elementos ou menos.
//Map - Modificar o array;
//Reduce - reduz o array em um;
//endsWith é para saber a ultima letra de uma string



//filter não edita o array filtrado
//Retorne os numeros maiores que 10;
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//utilizando função de callback 

//**                  valor, indice, array
//**function callBackFilter(valor) {
//    return valor > 10;
//}


//utilizando arrow function
//const numerosFiltrados = numeros.filter(valor => valor > 10);

const numerosFiltrados = numeros.filter(valor  => valor > 10);
console.log(numerosFiltrados);


//retorne as pessoas que tem o nome com 5 letras ou mais;
//retorne as pessoas com mais de 50 anos;
//retorne as pessoas cujo nome termina com a;

const pessoas = [
    {nome: 'Clayton', idade: 32},
    {nome: 'Cleuber', idade: 34},
    {nome: 'Nathy', idade: 33},
    {nome: 'Leila', idade: 56},
    {nome: 'Isac', idade: 60},
    {nome: 'Ariella', idade: 1},
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMais50 = pessoas.filter(obj => obj.idade >= 50);
console.log(pessoasComMais50);


const nomesA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(nomesA);

