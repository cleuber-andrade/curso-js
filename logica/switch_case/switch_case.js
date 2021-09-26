function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo'

        //poderia utilizar o return ao invés no break;
        //return diaSemanaTexto;
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


const data = new Date();
const diaSemana = data.getDay();

let diaSemanaTexto = getDiaSemanaTexto(diaSemana);


//se caso utilizar o switch dentro de uma função não é necessário a utilização do break.

//Não é obrigatório a utilização do default no final do switch, mas é um boa prática de programação utiliza-lo.

/*
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
*/
console.log(diaSemanaTexto);
