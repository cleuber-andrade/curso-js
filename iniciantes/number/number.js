//padrão de precisão IEEE 754-2008

let num1 = 0.7; //number
let num2 = 0.1; //number

/*num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100;
*/

num1 += num2
num1 += num2
num1 += num2 // num1 = num1 + num2

num1 = parseFloat(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//**toString server para converter um  numero em uma string.
//console.log(num1.toString() + num2);

//**converter de forma definitiva de um number para uma string.
//num1 = num1.toString(); 

//**transformando um numero em representação binária.
//console.log(num1.toString(2)) 

//**transformando um number em decimais
//console.log(num2.toFixed(2)); 

//**checa se o numero é inteiro dando verdadeiro, se for falso é pq o numero é decimal(depedendo se o numero é inteiro ou decimal)
//console.log(Number.isInteger(num1)); 

//let temp = num1 * 'Ola';

//**retorna verdadeiro se o numero for um NaN (Not a Number) - é quando não tem como realizar um operação matemática entre um number e um string sem está convetida.
//console.log(Number.isNaN(temp)); 