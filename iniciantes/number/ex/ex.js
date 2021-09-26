/*let numero = prompt('Digite um número: ');
numero = Number(numero);*/
const numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');

const texto = document.getElementById('texto');

//Minha Solução
//const sub = document.getElementById('sub');
//const adi = document.getElementById('adi');
//const raiz = document.getElementById('raiz'); 
//const int = document.getElementById('int'); 
//const not = document.getElementById('not'); 
//const baixo = document.getElementById('baixo'); 
//const cima = document.getElementById('cima'); 
//const decimais = document.getElementById('decimais'); 

/* Minha solução
numeroTitulo.innerHTML = numero;
sub.innerHTML = `<p>Seu numero - 2 é ${numero - 2}.</p>`;
adi.innerHTML = `<p>Seu numero + 2 é ${numero + 2}.</p>`;
raiz.innerHTML = `<p>A raiz quadrada do seu numero é ${Math.sqrt(numero)}.</p>`;
int.innerHTML = `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
not.innerHTML = `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
baixo.innerHTML = `<p>Arredondando para baixo é: ${Math.floor(numero)}.</p>`;
cima.innerHTML = `<p>Arredondando para cima é: ${Math.ceil(numero)}.</p>`;
decimais.innerHTML = `<p>Arredondando para cima é: ${numero.toFixed(2)}.</p>`;
*/

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu numero - 2 é ${numero - 2}.</p>`;
texto.innerHTML += `<p>Seu numero + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu numero é ${Math.sqrt(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo é: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima é: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;

