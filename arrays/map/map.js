//o MAP altera o valor do array, mas não o tamanho
//Ele cria um novo array mantendo o mesmo tamanho do original



// Dobrar os numeros
const numeros = [1, 5, 12, 19, 27, 37, 41, 69, 33, 55, 21, 99, 70];

const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numerosEmDobro);



const pessoas = [
    {nome: 'Binho', idade: 34},
    {nome: 'Leila', idade: 56},
    {nome: 'Nathy', idade: 33},
    {nome: 'Clayton', idade: 32},
    {nome: 'Ariella', idade: 1},
]

// Para cada Elemento:

//retorne apenas uma string com o nome da pessoa
const apenasNomes = pessoas.map(obj => obj.nome);
console.log(apenasNomes);
//const idades = pessoas.map(obj => delete obj.nome);

//remova apenas a chave 'nome' do objeto
                               //trasformando um uma arrow function em um expressão
const idades = pessoas.map(obj => ({ idade: obj.idade}));
console.log(idades);


//adicione uma chave ID em cada objeto(id)
const comIds = pessoas.map((obj, indice) => {
    //obj.id = (indice + 1) * 1000;
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

//console.log(pessoas);
console.log(comIds);

