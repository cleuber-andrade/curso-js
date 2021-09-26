//em Objeto

const pessoa = {
    nome: 'Binho',
    sobrenome: 'Andrade',
    idade: 34,
    endereco: {
        rua: 'Av. Brasil',
        numero: 12,
        casa: 5,
    }    
};

const { nome, sobrenome, idade } = pessoa; 
console.log(nome, sobrenome, idade);

//pode mundar o nome da variavel dentro do obj tbm exmplo:
//const { nome: teste = '', sobrenome, idade} = pessoa;
//console.log(teste, sobrenome, idade);

//pode ser feita a atribuição direto no objeto exemplo:
//const { nome = 'Não existe', sobrenome, idade} = pessoa;
//console.log(nome, sobrenome, idade);

//objeto dentro do objeto exemplo:
//const { endereco: {rua, numero, casa}, endereco} = pessoa;
//console.log(rua, numero, casa, endereco);

//podemos tbm atribuir os objetos dentro dos objetos exemplo:
//const { endereco: {rua: r = 1234, numero, casa}, endereco} = pessoa;
//console.log(r, numero, casa, endereco);

//podemos tbm utilizamos o operador REST exemplo:
//const { nome, ...rest} = pessoa;
//console.log(nome , rest);


//jogando na variével dados do objeto na variavel.
//const nome = (pessoa.endereco.rua); 
