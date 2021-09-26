//Estrutura de repetição For

//variavel de controle, normalmente é a letra i porque significa index.

//    controle condição  incremento  
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}


// Se quiser pular de 10 em 10
for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

// para decrementar
for(let i = 500; i >= 400; i -= 10){
    console.log(`Linha ${i}`);
}


//Par ou impar
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar';
    console.log(i, par);
}

//percorrendo array com FOR
const frutas = ['maça', 'pera', 'uva', 'Binho', 'Nathy', 'Leila'];


for (let i = 0; i < frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i]);
}
