//declaração de função (function Hoisting);
//as funções ser chamadas antes ou depois da propria função;
//as funções são First-classe objects (Objetos de primeira classe);
//Function Expression -as funções são tratada com um dado em JS;
//dentro de um obj posso ter uma function;

//ex:
falaOi();

function falaOi(){
    console.log('oi');
}

falaOi();


//ex2:
const souUmDado = function (){
    console.log('Sou um dado');
};

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo');
    funcao();
};

executaFuncao(souUmDado);

//Arrow function
//ex3:
const funcaoArrow = () => {
    console.log('Sou um arrow function');
};

funcaoArrow();

//ex4: dentro do obj
const obj = {
    falar(){
        console.log('Estou falando');
    }
};

obj.falar();