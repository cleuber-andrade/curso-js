const nome = 'Cleuber';
const sobrenome = 'Andrade';
const idade = 34;
const peso = 84;
const alturaEmM = 1.70;
let imc = peso / (alturaEmM * alturaEmM);
let anoDeNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg e tem ${alturaEmM} e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento}`);


