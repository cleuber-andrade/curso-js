
//**Contunue e Break server para qualuer tipo de FOR e WHILE.(for in, for of, for classico, do while, while)
//**É mais recomendável utilizar o FOR;


//**Continue serve para pular para proxima interação do laço.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){

    if(numero === 2 || numero === 5){
        console.log('Pulei o numero 2 e 5');
        continue;
    }
        
    console.log(numero);
}

//**Break serve para definir a informação que está sendo pesquisada e depois sai do laço.

const livros = ['Senhor dos aneis', 'Harry Potter', 'O monge e xecutivo', 'Percy jackson']

for (let livro of livros){

    if (livro === 'Percy jackson'){
        console.log(livro);
        break;
    }   
    
}

//NUNCA ESQUECER A VARIAVEL DE CONTROLE QUANDO UTILIZAR CONTINUE
//COM WHILE OU DO WHILE


let i = 0;

while (i < livros.length) {
    let livro = livros[i];

    if (livro === 'Harry Potter'){
        console.log(livro);
        i++;
        continue;
    }

    if (livro === 'O monge e xecutivo'){
        console.log(livro);
        i++;
        break;
    }

    i++;
}

