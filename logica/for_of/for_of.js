//funciona tanto em string e arrays
const nomes = ['Luiz', 'Cleuber','Nathy'];


//for classico - Geralmente com iteráveis (array ou strings)
//for in - Retorna o indice ou chave
//for of - retorna o valor em si(iteráveis array ou string)

//for classico

//for (let i = 0; i < nomes.length; i++){
//    console.log(nomes[i]);
//}

//for in

//for (let i in nomes){
//    console.log(nomes[i]);
//}


for (let valor of nomes){
    console.log(valor);
}


//for Each
//nomes.forEach(function(valor, indice, array){
//    console.log(valor, indice, array);
//})

const pessoa = {
    nome: 'Cleuber',
    sobrenome: 'Andrade',
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave]);
}

