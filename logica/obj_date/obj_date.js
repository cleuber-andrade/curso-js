//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); //01/01/1970 Timestamp unix ou época unix

//mandado como Number
                       //ano mes dia hr min  s    ms
//const date = new Date(2019, 3, 20, 15, 14, 27, 1000);

//data atual
//const date = new Date();

//mandando com string
//const date = new Date('2019-04-20 20:20:59');


//const date = new Date('2019-04-20 20:20:59');
//consultar de forma individual as informações data e hora.

//console.log('Dia', date.getDate());
//console.log('Mês', date.getMonth() + 1); //mês começa do zero
//console.log('Ano', date.getFullYear());
//console.log('Hora', date.getHours());
//console.log('min', date.getMinutes());
//console.log('seg', date.getSeconds());
//console.log('ms', date.getMilliseconds());
//console.log('dia da semana', date.getDay()); // 0 - domingo  
//console.log(date.toString());

//data em milesimos de segundos
//console.log(Date.now());


function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const mim = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${mim}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);