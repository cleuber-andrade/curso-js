//Polimorfismo é sobreescrever um metódo em uma subclass(filha).



//superclass  - Base - Pai
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo Insulficiente: ${this.saldo}`);        
        return;
    }  
    
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
    `Saldo: ${this.saldo.toFixed(2)}`);
};



//Subclasse - Filha
function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo Insulficiente: ${this.saldo}`);        
        return;
    }  
    
    this.saldo -= valor;
    this.verSaldo();
};


function ContaPoupanca(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const contaCorrente = new ContaCorrente(11, 22, 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);


const contapoupanca = new ContaPoupanca(12, 33, 0);
contapoupanca.depositar(10);
contapoupanca.sacar(10);
contapoupanca.sacar(1);