//Função construtora e factory sempre retornam um objeto;
//na função contrutora sempre precisa inicar o nome maiuscula;
//é obrigatória utilizar a palavra (NEW);
//o corpo da função construtora já um objeto.

function Pessoa(nome, sobrenome){
    //quando é declarado a variaveis ou funções direto no corpo da construtora, não se consegue acessar essa informação fora dela
    
    //(são variaveis ou metodos privados). 
    //const ID = 123456;

    //const metodoInterno = () => {

    //};

    //(são variaveis ou metodos publicos, utilizando a palavra this.)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    };

}

const p1 = new Pessoa('Cleuber','Andrade');
const p2 = new Pessoa('Nathy','Andrade');
p1.metodo();

console.log(p1.nome);
console.log(p2);