//String

const nome1 = 'Cleuber';
const nome2 = "Cleuber";
const nome3 = `Cleuber`;

//number

const idade1 = 24;
const idade2 = 37.5;

//**Undefined = não aponta para local nenhum na memória(não propositalmente)

let nomeAluno;

//**Null = não aponta para local nenhum na memória (propositalmente)

let sobreNome = null; 

//**boolean =  verdade ou falso(valor lógico) 

const avaliacaoAluno = true;

//**NaN - Not a Number

const num1 = 10;
const num2 = parseInt('5');//**converter string em number - parseInt, se quiser converte para numeros decimais é necessário o utilizar parseFloat ao invés de parseInt ou pode usar um Number para identificar ambos os tipos de numeros.
console.log(num1 + num2);


//**typeof serve para identificar o tipo de dado da variavel
console.log(typeof nome1, idade1, nomeAluno, sobreNome, avaliacaoAluno);