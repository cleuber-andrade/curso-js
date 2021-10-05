//Caso caia no erro(catch), ele retorna a promisse imediatamente com o erro.

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{ 
        setTimeout(()=>{
            if (typeof msg !== 'string'){
                reject('Cai no error');
                return
            };

            resolve(msg.toUpperCase() + '- Passei na Promisse'); 
            return;           
        }, tempo);
    });
}

//Promisse.all - resolve todas as promessas 
const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    //esperaAi(1000, 1000),
    'Outro Valor'
];

Promise.all(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });


//Promisse.race - resolve todas as promessas retorna o 1º valor resolvido, ou seja, o valor executado mais rápido.

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });


//Promisse.resolve -     

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('baixei a pagina', 3000);
    }
}

baixaPagina()
    .then(dadosPaginas => {
        console.log(dadosPaginas);
    })
    .catch(e => console.log(e));