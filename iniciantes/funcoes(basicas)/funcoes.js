//função saudação (funções classicas)
function saudacao(nome){       
    return `Bom dia ${nome}!`;
}

//chamando o retorno da função
const variavel = saudacao('Cleuber');
console.log(variavel);
//chamando a funções
saudacao('Nathy');
saudacao('Leila');




//função soma  (funções classicas)
function soma(x, y){    
    const resultado = x + y;
    return resultado;
}

/*console.log(soma(2, 2));
console.log(soma(6, 9));
console.log(soma(30, 50));
*/



/* exemplo declarando um valor direto no parametro.

funciton soma(x = 1, y = 2){
    const resultado = x + y;
    return resultado;
}

const resultado = soma();
console.log(resultado);

*/

//função anônima
const raiz = function(n){
    return Math.sqrt(n);
};


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


//arrow function
const cubica = m => {
    return Math.cbrt(m);
};

// const cubica = m => Math.cbrt(m); outro modo de escrever arrow function

console.log(cubica(75));
console.log(cubica(25));
console.log(cubica(22));



//**Funções serve para executar ações.

//**as funções são reutilizáveis e pode ser chamadas em a qualquer momento no código.

//**as funções por padrão retorna undefined, caso vc não especifique o que vc quer que retorne. (caso queira que retorne alguma coisa é só utilizar a palavra return dentro da função)

//**return serve para retornar algun valor para a funções.

//**Após o return na função, não executará mais nada, pois a função só retornará até chegar a palavra return.(Return é a ultima palavra ser escrita na função)

//**Tudo que está dentro do escopo da função não pode ser acessada pelo o escopo global, mas se houver um escopo de bloco pode ser acessada pela função.

//**podemos atribuir um valor direto no parâmetro.

//**Na função anônima é obrigatório o uso do ; no fechamento das chaves.
