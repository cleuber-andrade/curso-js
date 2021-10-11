//navegando das pastas - (./B/C/D/mod) = o ./ significa que é da minha pasta atual para frente.
//../ é para voltar - (../../../api_rest) = ../ significa subir o nível da pasta, ou seja, subir para a pasta acima. 


//module.exports = (x, y) => x * y;

module.exports = class Cachorro {
    constructor (nome){
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} está fazendo au au`);
    }
}