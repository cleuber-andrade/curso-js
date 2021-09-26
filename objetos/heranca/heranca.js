//Produtos -> aumento, desconto
// Camiseta = cor, caneca = material.


//Pai
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = quantia => this.preco += quantia;
Produto.prototype.desconto = quantia => this.preco -= quantia;


//Filho - herda tudo do obj pai
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}


Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//Alteranto algum elemento já existente no PAI
Camiseta.prototype.aumento = percentual => this.preco += (this.preco *(percentual / 100));

//Filho - herda tudo do obj pai
function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;    

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: () => {
            return estoque;
        },
        set: (valor) => {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    });
}


Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Flamengo', 12, 'Percelana', 5);
caneca.estoque = 100;

console.log(caneca);
console.log(camiseta);
console.log(produto);





