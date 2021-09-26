//diferente do POP quando removemos um elemento do array utilizando SPLICE, o elemento removido retorna um array.

//MAX_VAlUE é para remover até o final do array(ao invés de utilizar numeros enormes para deletar, utilizamos MAX_VALUE)

//Substituindo um item através do indice 
//const removidos = nomes.splice(4, 2, 'Luiz');

//Substituindo um item dentro do indice do indice 
//const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');

//const removidos = nomes.splice(4, 1)



//indice inver  -5      -4        -3         -2         -1
//indice normais 0       1         2          3          4
const nomes = ['Maria', 'João', 'Edurado', 'Gabriel', 'Júlia'];
const removidos = nomes.splice(4, 1)

console.log(removidos)

//**nomes.splice(indice.atual, qtd.delete,  add.elemnt1, add.elemnt2, add.elemnt3)

//sumulando POP utilizando SPLICE
//const removidos = nomes.splice(-1, 1);
//console.log(nomes, removidos);


//sumulando shift
//nomes.splice(0, 1);
//console.log(nomes);

//sumulando push
//nomes.splice(nomes.length, 0, 'Cleuber', 'Andrade', 'Alexandre');
//console.log(nomes);

//simulando UNshift
//nomes.splice(0, 0, 'Cleuber', 'Andrade', 'Alexandre');
//console.log(nomes);
