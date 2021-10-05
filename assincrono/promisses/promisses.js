//numero função numero aleatório
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


//resolve é basicamente, esse código executou com sucesso, resolve ele para mim.
//reject é basicamente, esse código executou com erro, rejeita ele para mim.
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{            
            resolve(msg);
        }, tempo);
    });    
}


//o THEN será executado após o resolve ser executado sem erros.
//o CATCH será executado caso o reject seja executado.

//essa promisse é executada em paralela ao códido principal, ou seja, está sendo executado simultaneamente com o código principal
esperaAi('Conexão com BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados da Base', rand(1,3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log('Exibe dados na tela');
    })
    .catch();


console.log('Isso aqui será exibido antes de qualquer promisse');