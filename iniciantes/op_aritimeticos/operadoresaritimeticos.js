/*
aritiméticos
+ adição e concatenação
- subtração
* multiplicação
/ divisão
** potênciação
% resto da divisão

Ordem de precedência
() 1º
** 2º
* / % 3º
+ - 4º
*/

const num = 5;
const num1 = 10;

console.log(num + (num1 * num) % num);

//incremento ele pode ser pos e pre varivavel ex: ++contador

let contador = 1;
contador ++;
contador ++;
contador ++;
contador ++;
console.log(contador)


//decremento ele pode ser pos e pre varivavel ex: --contador2 

let contador2 = 1;
contador2 --;
contador2 --;
contador2 --;
contador2 --;
console.log(contador2)

//Operadores de atribuição += -= *= /= %= **=

let contador4 = 0;
contador4 += 2;
contador4 += 2;
contador4 += 2;
contador4 += 2;

console.log(contador4)
