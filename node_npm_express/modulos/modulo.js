//EXPORTANDO MODULOS EM NODE

//const nome = 'Cleuber';
//const sobrenome = 'Andrade';

//const falaNome =() => `${nome} ${sobrenome}`;


//nesse contesto a palavra THIS se refere em ambos os constestos, tanto no exeplo 1 quanto no exemplo 2 e exemplo 3;
//ambas são validas.

//1ª forma de exportar modulos no NODE.
//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;
//console.log(module.exports);

//2ª forma de exportar modulos no node já existentes.
//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;

//3ª maneira de chamar um módulo utilizando o THIS no NODE.
//this.qualquerCoisa = 'O que eu quiser exportar';
//this.deuMerda = 'Esse deu merda';
//this.lascouDeVez = 'Lascou de vez';

//console.log(exports);


//------------------------------------------------------------------

class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
 