//METODO LITERAL
const pessoa = {
    nome: 'Cleuber',
    sobrenome: 'Andrade',    
};
//anotação de ponto
console.log(pessoa.nome);

//a anotação de colchetes é recomendada quando tem elementos dinânmicos
console.log(pessoa['sobrenome']);




//METODO CONSTRUTOR
const pessoa1 = new Object();

pessoa1.nome = 'Cleuber';
pessoa1.sobrenome = 'Andrade';
pessoa1.idade = 34;
//metodo
pessoa1.falaNome = function() {
    return(`${this.nome} está falando seu nome`);
}; 
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getUTCFullYear() - this.idade;
};

//console.log(pessoa1.falaNome())
//console.log(pessoa1.getDataNascimento());

//apagando um chave do obj
//delete pessoa1.nome;
//console.log(pessoa1);


// FACTORY FUNCTION / CONSTRUCTION FUNCTION

//FACTORY FUNCTION
function criaPessoa(nome, sobrenome) {
    return{
        nome,
        sobrenome,

        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Cleuber', 'Andrade');
console.log(p1.nomeCompleto());

//CONSTRUCTION FUNCTION

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 
    
    //não conseguem mais alterar os obj do lado de fora da Construction Function
    //Só dá para maniputar o obj antes do Object.freeze
    //Object.freeze(this);
}

const p2 = new Pessoa('Nathy', 'Andrade');
//deletando item das chaves
//delete p2.nome;
//Object.freeze(p2)
//p2.nome = 'Outra Coisa';
const p3 = new Pessoa('Leila', 'Araujo');
console.log(p2);
console.log(p3);


//Object.freeze - é para travar o obj e não conseguirem alterar.