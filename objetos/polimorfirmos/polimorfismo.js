//superclass  - Base
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = valor => {
    if(this.saldo < valor) {
        this.verSaldo();
        return;
    }  
    
    this.saldo -= valor;
};
Conta.prototype.depositar = valor => {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = () => {
    console.log(`Ag/c: ${this.agencia}/${this.conta}` + 
    `Saldo: ${this.saldo.toFixed(2)}`);
};