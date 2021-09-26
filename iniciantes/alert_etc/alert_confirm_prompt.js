/*
alert('Alerta de mensagem no navegador');

confirm('É para confirma com um valor boolen true e false');

prompt('input de texto');
*/

let num1 = prompt('Digite um numero:');
 num1 = parseFloat(num1);

let num2 = prompt('Digite outro numero:');
 num2 = parseFloat(num2);  

const resultado = num1 + num2;

alert(`O resultado da sua soma é ${resultado}`);

/*
alert(`O resultado da sua soma é ${num1 + num2}`);
pode colocar a expressão direto no template string, porem não é recomendável porque o código acaba ficando mais dificil de ser interpletado posteriormente.
*/
