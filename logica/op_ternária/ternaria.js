// Operador ternário (condição) ? 'valor para verdadeiro' : 'valor para falso'

const pontuacaoUsuario = 1000;
//utilizando o ternário
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario Normal';

// ternario utilizando our(ou)
const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);

/*Este seria o procedimento normal utilizando o IF
if (pontuacaoUsuario >= 1000){
    console.log('vip');
} else{
    console.log('normal');
}
*/
