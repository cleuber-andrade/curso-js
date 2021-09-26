//ESCREVA UMA FUNÇÃO QUE RECEBE DOIS NUMEROS E RETORNE O MAIOR  

function max (x, y){
    if  (x > y){
        return x;
    } else {
        return y;
    }
}

const maior = max(1, 2);
console.log(maior);

//refatorando o código

function max2 (a, b){
    if  (a > b) return a;
    return b;
}

const maior2 = max2(8, 9);
console.log(maior2);


//refatorando o código 2

function max3 (c, d){
    return c > d ? c : d;
}

const maior3 = max3(7, 4);
console.log(maior3);

//refatorando o código 3

const max4 = (e, f) => e > f ? e : f; 

console.log(max4(11, 22));

//###########################################################################
//ESCREVA UMA FUNÇÃO CHAMADA ePaisagem QUE RECEBE DOIS ARGUMENTOS, LARGURA E ALTURA, DE UMA IMAGEM (NUMBER). RETORNE TRUE SE A IMAGEM ESTIVER NO MODO PAISAGEM.

/*
function ePaisagem (altura, largura) {
    return largura > altura ? true : false; 
}

console.log(1920, 1080);

//**refatorando o código 2
function ePaisagem (altura, largura) {
    return largura > altura; 
}

console.log(1920, 1080);


*/

//refatorando 3 
const ePaisagem = (largura, altura) => largura > altura;


const paisagem = ePaisagem(70.5, 32);
console.log(paisagem); 



//###########################################################################
//ESCREVA UMA FUNÇÃO QUE RECEBA UM NUMERO E RETORNE O SEGUINTE:
//NUMERO DIVISIVEL POR 3 = FIZZ;
//NUMERO DIVISIVEL POR 5 = BUZZ;
//NUMERO É DIVISIVEL POR 3 E 5 = FIZZBUZZ;
//NUMERO NÃO É DIVISIVEL POR 3 E 5 = RETORNA O PROPRIO NUMERO;
//CHECAR SE O NUMERO É REALMENTE UM NUMERO;
//USE FUNÇÃO COM NUMERO DE 0 A 100;

function fizzBuzz (numero){

    if(typeof numero !== 'number') return numero;
    if (numero % 5 === 0 && numero % 3 === 0) return 'FizzBuzz'; 
    if (numero % 3 === 0 ) return 'Fizz';
    if (numero % 5 === 0 ) return 'Buzz';
    
    return numero;      
    
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}