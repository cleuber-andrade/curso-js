//parte 1 Tratamentos de erros Try, Catch e Throw;


//** */ o try tenta executar o trecho do código, caso não consiga por motivos de alguns ERRO ele pula para o catch.

//**NUNCA mostrar o erro por completo para o usuário.

/*
try {
    console.log(naoExisto);
} catch (err) {
    console.log('nãoExisto não existe.');
    //console.log(err); Nunca mostra essa informação ao usuário.
}
*/

//exemplo 1
function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.');
    }

    return x + y;
}

try{
    console.log(soma(7, 9));
    console.log(soma('1', 5));
} catch (error) {
    console.log('Alguma coisa mais amigável para o usuário');
}

//#####################################################
//parte 2 Tratamentos de erros Try, Catch e Finally;

//pode fazer um aninhamento do try catch dentro de outro try.

try{
    //essa parte do código é executada quando não há erros.
    console.log('Abrir um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei arquivo');
} catch (e) {
    //essa parte do código é executada quando HÁ erros.
    console.log('Tratando erro');
} finally {
    //vai ser SEMPRE executado
    console.log('Eu sempre sou executado');
}

//exemplo 1

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando Instância de Date.');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:false,
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e){
    //tratamento do erro
} finally {
    console.log('Tenha um bom dia.')
}

