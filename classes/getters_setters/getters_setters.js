//symbol - serve para criar um chave privada dentro do obj.
const _velocidade = Symbol('velocidade');

class Carro {
    constructor(modelo){
        this.modelo = modelo,
        this[_velocidade] = 0
    } 

    set velocidade (valor){
        console.log('SETTER');
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    //previnindo que não altere os valores principais
    get velocidade(){
        console.log('GETTERS');
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;        
    }

    freiar(){
        if(this[_velocidade] <= 100) return;
        this[_velocidade]--; 
    }
}

const mercedes = new Carro('Mercedes');

//fazer o carro acelerar
for (let i = 0; i<= 200; i++){
    mercedes.acelerar();
}

mercedes.velocidade = 99;
console.log(mercedes.velocidade);


//_______________________________________________________________


//exemplo 2

class Pessoa {
    constructor (nome, sobrenome){
        this.nome = nome,
        this.sobrenome = sobrenome
    }

    //com o GET tem selecionar como atributo(sem parenteses na chamada do metodo)
    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome} `;
    }

    //no SET SEMPRE é necessário para atribuir um VALOR
    set nomeCompleto(valor){
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Cleuber', 'Andrade');

//chamando o SET
p1.nomeCompleto = 'Cleuber Andrade';
console.log(p1.nome, p1.sobrenome);

//com GET
console.log(p1.nomeCompleto);

//chamando sem o GET
//console.log(p1.nomeCompleto());