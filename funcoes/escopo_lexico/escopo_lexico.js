
//É quando a função faz a leitura de uma variavel declarada no escopo global, ou em uma função vizinha.

//No caso a função tem caracteristica de procura da variável através hosting, ela procura o retorno da variavel dentro da propria função, caso não encontre, ela pesquisa na função vizinha, caso não encontre vai pesquisando até encontrar no escopo global.

const nome = 'Bino';

function falaNome(){
    //const nome = 'Pedro da Boléia';    
    console.log(nome);
}

function usaFalaNome(){ 
    const nome = 'Pedro da Boléia';      
    falaNome();   
}

usaFalaNome();