//utilizando métodos

const pessoal = {
    nome: 'Cleuber',
    idade: 34,
    estado: 'Rio de Janeiro',

    //metodos
    fala(){
        console.log(`${this.nome} tem ${this.idade} idade e mora no ${this.estado}`);
    },

    incrementadaIdade(){
        ++this.idade;
    }
};

//chamando metodos
pessoal.fala();
pessoal.incrementadaIdade();
pessoal.fala();
pessoal.incrementadaIdade();
pessoal.fala();
pessoal.incrementadaIdade();



//jeito menos verboso de utilizar o obj literal

/*
function criaPessoas (nome, sobrenome, idade){
    return{   //objeto liteal dentro da função.
        nome: nome,  //nome
        sobrenome: sobrenome, //sobrenome
        idade: idade,   //idade
    };
}

const pessoal1 = criaPessoas('Cleuber', 'Andrade', 34);
const pessoal2 = criaPessoas('Nathy', 'Andrade', 33);
const pessoal3 = criaPessoas('Leila', 'Araujo', 56);
const pessoal4 = criaPessoas('Clayton', 'Rodrigo', 30);
const pessoal5 = criaPessoas('Isac', 'Andrade', 60);

//chamando o objeto todo.
console.log(pessoal1);
console.log(pessoal2);
console.log(pessoal3);
console.log(pessoal4);
console.log(pessoal5);

//chamando algo mais especifico dentro do objeto
console.log(pessoal1.nome, pessoal1.sobrenome, pessoal1.idade)
console.log(pessoal2.nome, pessoal2.sobrenome, pessoal2.idade)
console.log(pessoal3.nome, pessoal3.sobrenome, pessoal3.idade)
console.log(pessoal4.nome, pessoal4.sobrenome, pessoal4.idade)
console.log(pessoal5.nome, pessoal5.sobrenome, pessoal5.idade)

*/






//Objeto liteal (tradicional)
/*const pessoal = {
    nome: 'Cleuber',
    sobrenome: 'Andrade',
    idade: 34,    
}*/

/*const pessoal2 = {
    nome: 'Nathy',
    sobrenome: 'Silva',
    idade: 33,    
}*/

//chamando obj
//console.log(pessoal.nome);
//console.log(pessoal.sobrenome);
//console.log(pessoal.idade);




//**[]é array e {} é objeto.

//**métodos seriam o mesmo que funções dentro do objeto.

//**THIS seria o mesmo que está infatizando a informação que está dentro do obj.
