//feito por mim

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A
let d = null; //vazio
                  
d = a;
a = b;
b = c;
c = d;

console.log(a, b, c);


//feito pelo professor
let varA = 'A';
let varB = 'B';
let varC = 'C';

const varATemp = varA;

varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

//feito pelo professor 2 (utilizando matriz e desestruturação) 

let varA1 = 'A';
let varB1 = 'B';
let varC1 = 'C';

[varA1, varB1, varC1] = [varB1, varC1, varA1]

console.log(varA1, varB1, varC1);