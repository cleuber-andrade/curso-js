class DispositivoEletronico {
    constructor(nome){
        this.nome = nome,
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
            return;
        }

        this.ligado = true;
    } 

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`)
            return;
        }

        this.ligado = false;
    }
}

//const d1 = new DispositivoEletronico('Smartphone');
//d1.ligar();
//d1.desligar();
//d1.desligar();
//console.log(d1);




//criando classe derivada da principal//herda tudo da class DispositivoEletronico

//irma
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo) {
        //SUPER serve para chamar os item dentro do constructor PAI(DispositivoEletronico)
        super(nome),
        //acrescentando mais itens no constructor
        this.cor = cor,
        this.modelo = modelo
    }
}

const s1 = new Smartphone ('Samsung', 'Preto', 'Galaxy S10')
console.log(s1);


//irma
class Tablet extends DispositivoEletronico{
    constructor (nome, temWifi){
        super(nome),

        this.temWifi = temWifi
    }

    //ligar(){
    //    console.log('Olha, você alterou o método ligar.');
    //}
}



const l1 = new Tablet ('Multilaser', true);

console.log(l1.ligar);
