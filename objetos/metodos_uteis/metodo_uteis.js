/*
---------------------------

**Object.values (se assemelha ao keys )

const produto = { nome: 'Produto', preco: 1.8};
console.log(Object.values(produto));

---------------------------

**Object.entries (retorna chaves e valores)

for (let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}

---------------------------

**Object.assign(destino, qualquer coisa) (serve para copiar um objetos para outro objeto)

const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'porcelana'});

caneca.nome = 'Cleuber';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

---------------------------

**Object.getOwnPropertyDescriptor(o, 'prop')(retorna as propriedade do Object.defineProperties e Object.defineProperty) 

const produto = { nome: 'Produto', preco: 1.8};
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa',
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

--------------------------

...(spred)

const produto = { nome: 'Produto', preco: 1.8};
const caneca = {
    ...produto, 
    material: 'porcelana',
};

caneca.nome = 'Cleuber';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);

---------------------------

//Já vimos
---------------------------

Object.keys(retorna as chaves e transforma em array)

const produto = { nome: 'Produto', preco: 1.8};
const caneca = {nome: produto.nome, preco: produto.preco};

console.log(Object.keys(produto))

---------------------------

Object.freeze(congela o objeto e não consegue mais alterar o objeto)

const produto = { nome: 'Produto', preco: 1.8};
Object.freeze(produto);
const caneca = {nome: produto.nome, preco: produto.preco};

console.log(produto)


---------------------------
Object.defineProperties (define várias propriedades)
---------------------------
Object.defineProperty (define uma propriedade)
*/


