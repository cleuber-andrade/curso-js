//OBJECT.DEFINE.PROPERTY() -> essa função trava penas um objeto, para que ele não seja alterado;

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;    
    
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //mostra a chave (true ou false)
        value: estoque, //valor (pode utilizar function aqui)
        writable: true, //pode alterar ou não valor (true ou false)
        configurable: false//pode reconfigurar a chave (true ou false)
    });
}


//Object.keys serve para ver as chaves enumeradas;
const p1 = new Produto('camiseta', 30, 3);
console.log(Object.keys(p1));



//OBJECT.DEFINE.PROPERTIES -> serve para travar mais de um objeto;

function Produto2(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;    
    
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //mostra a chave (true ou false)
        value: estoque, //valor (pode utilizar function aqui)
        writable: false, //pode alterar ou não valor (true ou false)
        configurable: false//pode reconfigurar a chave (true ou false)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable:true, //mostra a chave (true ou false)
            value: estoque, //valor (pode utilizar function aqui)
            writable: false, //pode alterar ou não valor (true ou false)
            configurable: false//pode reconfigurar a chave (true ou false)
        },
        preco: {
            enumerable:true, //mostra a chave (true ou false)
            value: estoque, //valor (pode utilizar function aqui)
            writable: false, //pode alterar ou não valor (true ou false)
            configurable: false//pode reconfigurar a chave (true ou false)
        },
    });
}

const p2 = new Produto2('camiseta', 30, 3);
console.log(p2);