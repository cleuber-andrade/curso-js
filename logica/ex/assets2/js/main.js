/* PRIMEIRA MENEIRA DE FAZER - VERSÃO HARDCORE


const h1 = document.querySelector('.container h1');
const date = new Date();

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo'        
        break;
    
        case 1: 
            diaSemanaTexto = 'Segunda'
        break;
    
        case 2: 
            diaSemanaTexto = 'Terça'
        break;
    
        case 3: 
            diaSemanaTexto = 'Quarta'
        break;
    
        case 4: 
            diaSemanaTexto = 'Quinta'
        break;
    
        case 5: 
            diaSemanaTexto = 'Sexta'
        break;
    
        case 6: 
            diaSemanaTexto = 'Sábado'
        break;
    
        default: 
            diaSemanaTexto = 'Dia Inválido';
    }

    return diaSemanaTexto;
}

function getNomeMes(numeroMes){
    let mesTexto;

    switch (numeroMes) {
        case 0: 
            mesTexto = 'Janeiro'        
        return mesTexto;
    
        case 1: 
            mesTexto = 'Fevereiro'
        return mesTexto;
    
        case 2: 
            mesTexto = 'Março'
        return mesTexto;
    
        case 3: 
            mesTexto = 'Abril'
        return mesTexto;
    
        case 4: 
            mesTexto = 'Maio'
        return mesTexto;
    
        case 5: 
            mesTexto = 'Junho'
        return mesTexto;
    
        case 6: 
            mesTexto = 'Julho'
        return mesTexto;

        case 7: 
            mesTexto = 'Agosto'
        return mesTexto;  
        
        case 8: 
            mesTexto = 'Setembro'
        return mesTexto;        

        case 9: 
            mesTexto = 'Outubro'
        return mesTexto;

        case 10: 
            mesTexto = 'Novembro'
        return mesTexto;

        case 11: 
            mesTexto = 'Dezembro'
        return mesTexto;       
    }
    
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(date){
    const diaSemana = date.getDay();
    const numeroMes = date.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${date.getDate()}, de ${nomeMes}
        de ${date.getFullYear()} ${zeroEsquerda(date.getHours())}:${zeroEsquerda(date.getMinutes())}`
    ;
}

h1.innerHTML = criaData(date);

*/


/* SEGUNDA MENEIRA DE FAZER - VERSÃO CAFÉ COM LEITE

1/1 PRIMEIRA FORMA
const h1 = document.querySelector('.container h1');
const date = new Date();
const opcoes = { 
    dateStyle: 'full'  
    timeStyle: 'short'  
};

h1.innerHTML = date.toLocaleDateString('pt-br', opcoes);

1/2 SEGUNDA FORMA

const h1 = document.querySelector('.container h1');
const date = new Date();

h1.innerHTML = date.toLocaleDateString(dateStyle: 'full' , timeStyle: 'short');
*/


//TERCEIRA MENEIRA DE FAZER - MANEIRA DO PROFESSOR HARDCORE

const h1 = document.querySelector('.container h1');
const date = new Date();

function getDiaSemanaTexto(diaSemana){
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta','Sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes(numeroMes){
    const meses = ['Janeiro','Fevereiro','Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return  meses[numeroMes];
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(date){
    const diaSemana = date.getDay();
    const numeroMes = date.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${date.getDate()}, de ${nomeMes}
        de ${date.getFullYear()} ${zeroEsquerda(date.getHours())}:${zeroEsquerda(date.getMinutes())}`
    ;
}

h1.innerHTML = criaData(date);
