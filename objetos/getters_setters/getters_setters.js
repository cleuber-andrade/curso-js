//GETTERS E SETTERS
//seria fazer um metodo da função do obj simular que ele é ume propriedadde.
//seria uma maneira de proteger as propriedades
//GETTERS - Obter o valor(só pega o valor e exibe o valor)
//SETTER - Configura o valor()

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;    
    
    Object.defineProperty(this, 'estoque', {
        enumerable:true,      
        configurable: true, 
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem de erro');
            }
            
            estoquePrivado = valor;
        },
    });
}

//const p1 = new Produto('camiseta', 30, 3);
//console.log(p1);
//p1.estoque = '500';
//console.log(p1.estoque);


function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            //replace é case sensitive
            valor = valor.replace('coisa.', ' ');
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);

