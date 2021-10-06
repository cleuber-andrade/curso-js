//São funções que retornam objetos

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,

        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        fala(assunto = 'Falando sobre nada'){
            return `${this.nome} está ${assunto}.`;
        },

        altura,
        peso,
        //Getter faz com que o método se transforme em atributo
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Cleuber', 'Andrade', 1.70, 122);
const p2 = criaPessoa('Nathy', 'Silva', 1.70, 91);
const p3 = criaPessoa('Leila', 'Araujo', 1.54, 100);


console.log(p1.imc, p1.nomeCompleto);
console.log(p2.imc, p2.nomeCompleto);
console.log(p3.imc, p3.nomeCompleto);