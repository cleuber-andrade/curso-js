//parametros são "variaveis da funçao".

//a variavel arguments só funciona quando palavra function antes do nome da função.

//variavel arguments - sustenta todas as variáveis que foram declaradas na chamada da função.

//argumentos são os valores que são declarados na chamada da função.

//caso seja declarados mais argumentos que parametros ou vise-versa, o valores que seram setados automaticamente pelo JS é undefined.

//caso queira que o argumento assuma o valor padrão contido no parametro é so colocar undefined no argumento.(mas não é o recomendável).

//ex1 -------------------- arguments
function soma(){
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    return total;
}

soma(1, 2, 3, 4, 5, 6, 7, 8, 9);



//ex2 --------------------
function somaComAtribuicao(a, b = 2, c = 4){
    //maneira antiga para atribuir valores em um parâmetro b = b || 2;
    console.log(a + b + c);
}

//funcao2(2, 10, 20);
somaComAtribuicao(2, undefined, 20);


//ex3 -------------------- desestruturação em obj
function funcao3({nome, sobrenome, idade}){
    return nome, sobrenome, idade
}

let obj = {nome: 'Cleuber', sobrenome: 'Andrade', idade: 20};
funcao3(obj);


//ex4 -------------------- destruturação em array

function funcao4([valor1, valor2, valor3]){
    return valor1, valor2, valor3;
}


funcao4(['Cleuber', 'Andrade', 30]);

//ex5 -------------------- rest operator

const conta = function(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }

    return acumulador;
};


conta('+', 1, 20,30,40,50);

//ex6 -----------------------

const conta2 = (...args) => {
    console.log(args);
};

conta2('+', 1, 33,30,70,120);