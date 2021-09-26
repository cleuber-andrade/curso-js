//Reduce é normalmente utilizado para reduzir um lista para um unico obj
//a função de reduce é redizir um array em um unico elemento.
//o acumulador do final não é obrigatório colocar ele no final da função
//o acumulador normalmente seleciona o primeiro item do array 


//some todos os numero utilizando reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//**const total = numeros.reduce(function (acumulador, valor, indice, array))

const total = numeros.reduce((acumulador, valor) =>{
    //ver se os numeros são impares
    //if (valor % 2 !== 0) acumulador.push(valor);
    //ver se numero é par
    //if (valor % 2 === 0) acumulador.push(valor);
    acumulador += valor;
    return acumulador;
}, 0);
//**acumulador

console.log(total)



const pessoas = [
    {nome: 'Clayton', idade: 32},
    {nome: 'Cleuber', idade: 34},
    {nome: 'Nathy', idade: 33},
    {nome: 'Leila', idade: 56},
    {nome: 'Isac', idade: 60},
    {nome: 'Ariella', idade: 1},
]

const maisVelha = pessoas.reduce((acumulador, valor) =>{
    if(acumulador.idade > valor.idade) return acumulador;    
}, 0);
