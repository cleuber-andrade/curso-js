//os arrays pode ter tipos de dados misturados, mas não é uma boa pratica de programação. ex: 
//const alunos = ['Nathy' , 'Binho', 'Leila',1 , 4, 7, true, false, null];

//indice           0         1        2
const alunos = ['Nathy' , 'Binho', 'Leila'];

//chamando os arrays
//console.log(alunos[1]);
//console.log(alunos[0]);
//console.log(alunos[2]);

//**pode editar o indice ou substituir, é necessário chamar pelo numero do indice para fazer a sustituição.
//alunos[0] = 'Isac';

//**Podemos tbm criar indices caso não exista no array, no caso do exemplo o indice 3 não existe mais foi incluido no array aluno.
//alunos[3] = 'Clayton';

//**podemos tbm saber o tamanho o array utilizando o propriedade LENGHT(quantidade de elementos do array).
//console.log(alunos.length);

//**Podemos acrescentar elementos no final do array utilizando o método PUSH.
//alunos.push('Edna', 'Vantuil', 'Ariella' );

//**Podemos acrescentar elementos no inicio do array utilizando o método UNSHIFT.
//alunos.unshift('Edna', 'Vantuil', 'Ariella' );

//**Podemos tbm eliminar elemento no final do array utilizando o método POP.
//alunos.pop('Edna', 'Vantuil', 'Ariella' );
//**ele tbm retornar o removido caso seja necessário
//const removido = alunos.pop();
//console.log(removido);

//**Podemos tbm eliminar elemento no inicio do array utilizando o método SHIFT.   
//alunos.shift();
//**ele tbm retorna o removido caso seja necessário
//const removido = alunos.shift();
//console.log(removido);

//**Quando add ou remove algum elemento, os indices tbm serão alterados.

//** Caso queira deixar um elemento vazio o array podemos utilizar o DELETE e não altera os indices do array.
//delete alunos[1];

//**Podemos utilizar o metodo SLICE para fatiar o array. Lembrando que sempre tem que ser um numero a mais no indice que deseja.
//console.log(alunos.slice(0, 3));

//**Podemos utilizar o INSTANCEOF para saber o valor booleano do array. Se for true é pq é um array se retornar false é falso.
//console.log(typeOf alunos);
//console.log(alunos instanceof Array);



console.log(alunos);

