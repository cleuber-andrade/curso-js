//                0        1       2
const frutas = ['Pera', 'Maça', 'Uva'];

const pessoas = {
    nome: 'Cleuber',
    idade: 30,
    endereco:{
        rua: 'Rua Jesse Candido',
        numero: 12,
        casa: 01,
    }
}


//2 forma de acessar itens obj
console.log(pessoas.nome);
console.log(pessoas['endereco']);


//classico
//for (let i = 0; i < frutas.length; i++){
//    console.log(frutas[i]);
//}


//**O for in ele lê os indices ou chaves do obejto


//utilizando em arrays
for (let index in frutas){
    //Chamando o indice do array
    //console.log(index);

    //chamando o array frutas pelo indice;    
    console.log(frutas[index]);
}


//utilizando em objetos
for (let chave in pessoas){
    console.log(chave, pessoas[chave]);
}

