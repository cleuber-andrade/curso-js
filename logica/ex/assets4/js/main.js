//querySelector normalmente só soleciona o primeiro elemento filho da tag.
//por isso foi necessário criar outra variavel com querySelectorAll, para selecionar todos os elementos filhos da div paragrafo.

const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgoundColorBody = estiloBody.backgroundColor;
console.log(backgoundColorBody);

for (let p of ps){     
    p.style.backgroundColor = backgoundColorBody;
    p.style.color = '#ffffff';
}