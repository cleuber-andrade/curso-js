
//composição//mixin

const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo`);
    },
};

const pessoasPrototype = Object.assign({}, falar, comer, beber);
//const pessoasPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome){    

    return Object.create(pessoasPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}

const p1 = criaPessoa('Cleuber', 'Andrade');
const p2 = criaPessoa('Nathy', 'Andrade');

console.log(p2);

