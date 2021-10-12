const teste = 'Vc é um otário';
export const nome = 'Cleuber';
export const sobrenome = 'Andrade';
export const idade = 34;
//caso não queira exportar é só não colocar Export como no exemplo abaixo(varialvel provada)
const cpf = 213456987;


//se exportar junto com a palavra default, quando importar pode colocar qualquer nome.
//lembrando que esse procedimento sópode ser realizado um unica vez
//para chamar no import é necessário está sem as chaves{}
export /*default*/ function soma(x, y){
    return x + y; 
}



export { nome , sobrenome, idade, soma, teste as default, cpf };