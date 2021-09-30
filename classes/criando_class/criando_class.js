
//Utilizando classe
class Pessoa {
    constructor (nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;        
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }    
}


//utilizando function contrutora - jeito mais verboso de fazer o objeto
function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function (){
    console.log(`${this.nome} está falando`);
}


const p1 = new Pessoa('Luis', 'Miranda');
const p2 = new Pessoa2('Maria', 'Luisa');

console.log(p1);
console.log(p2);


