//JS é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

//Definição de protótipo
//Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

// Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio obj e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.

//Exemplo da cadeia(onde o motor do JS vai buscar os membros)
//date -> date.prototype -> object.prototype;
//pessoa -> pessoa.prototype -> object.prototype;



// Construtora -> molde (classe)
// 1º procura no corpo do objeto
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 

    this.nomeCompleto = () => 'Original '+ this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === pessoa1.__proto__

//criando prototypes para os objetos
Pessoa.prototype.nomeCompleto = function (){
    return this.nome + ' ' + this.sobrenome;
}


//instância

const pessoa1 = new Pessoa('Cleuber', 'O.') // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa ('Maria', 'A.') //<- Pessoa = Função Construtora 

console.dir(pessoa1);
console.dir(pessoa2);



