

//closures - é habilidade da função acessar seu escopo lexico

//console.dir - serve para abrir a função no navegador é muito semelhante ao console.log

function retornaFuncao(nome){
    return () => {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Joao');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

/*
function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
console.dir(funcao);
*/
