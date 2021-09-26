/*
   Avalição de curto circuito
   
   && -> false && true -> false "Retorna literalemente o valor falso da expressão"
   || -> true || false -> true  "Retorna o primeiro verdadeiro"

   FALSY
    qualquer um desses valores são considerados false em JS e ela quem retorna caso seja feito uma op. lógica. Se tudo for true, retorna o ultimo item da operação logica.

   * false; 
   * 0;
   * "" '' ``;
   * null // undefined;
   * NaN;
*/

//exemplo Falsy
console.log('Binho Andrade' && 0 && 'Maria');

// de Our
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

//