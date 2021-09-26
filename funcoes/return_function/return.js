//return
//retorna um valor
//a função termina 

//ex1
function soma(a, b){
    return (a + b)
}

console.log(soma(5, 2));

//ex2
function criaPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome,
    }
}

//as duas são a mesma coisa porem de forma diferentes de escrita
const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira',
};

console.log(typeof p1);
console.log(typeof p2);

//ex3

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
//-------------

/*
function duplica(n){
    return n * 2;
}

function triplica(n){
    return n * 3;
}

function quadriplica(n){
    return n * 4;
}
*/

function criaMultiplicador(multiplicador){
    //mulplicador
    return (n) => {
        return n * multiplicador;
    };   
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));