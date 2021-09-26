function mostraHora(){
    let data = new Date();


    return data.toLocaleTimeString('pt-br', {
        hour12: false,
    });
}

//console.log(mostraHora());

//setInterval serve para criar um intervalo de tempo para que a função seja executada em determinado momento.

function funcaDoInterval(){
    console.log(mostraHora());
}

//só precisa passar a referencia, sem executar a função(no caso sem os parenteses)

const timer = setInterval(() => {
    console.log(mostraHora());
}, 1000);


//setTimeout basicamente executa da mesma forma que setInterval, porem nele vc define por quanto tempo vai ser executado a função.

setTimeout(() =>{
    clearInterval(timer);
}, 5000);


setTimeout(() =>{
    console.log('Olá mundo')
}, 5000);