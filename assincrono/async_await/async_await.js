function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            if(typeof msg !== 'string'){
                reject('cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + '- Passei na Promisse');
            return;
        }, tempo)
    });
}

