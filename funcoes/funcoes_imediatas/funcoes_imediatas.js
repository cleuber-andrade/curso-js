//IIFE - Immediately Invoked function expression
//nada dessa função toca o escopo global
//sempre ficam entre os ()

(function (idade, peso, altura){

    const sobrenome = 'Luiz';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luiz'));
    }
    
    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.70);

const nome = 'Qualquer Coisa';