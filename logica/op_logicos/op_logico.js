/*
Operadoradores lógicos

&& -> AND -Todas as expressões precisam ser verdadeiras para retornar true

|| -> OR - Se uma expressão retornar true toda a expressão será verdadeira;


! -> NOT - Ele inverte a expressão, ou seja, se o valor for verdadeiro ele transforma em falso e vice-versa. 



*/

//exemplo &&
const expressaoAnd = true && true && true && true;
console.log(expressaoAnd);

//exemplo ||
const expressaoAnd2 = true || false || true || false;
console.log(expressaoAnd2);

//exemplo !
console.log(!true)



const usuario = 'Cleuber';
const senha = '123465';
                     //true                     false
const vaiLogar = usuario === 'Cleuber' && senha === '123';
console.log(vaiLogar);