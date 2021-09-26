//capturar evento de submit do formulário
const form = document.querySelector('#form');

//retirando qualquer evento da pagina (e = event)
form.addEventListener('submit', function(e){    
    e.preventDefault();
    //capiturando kilo e peso no input
    const inputPeso = e.target.querySelector('#kilo');
    const inputAltura = e.target.querySelector('#altura');

    //convertendo de string para numero
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //verificando se o peso é valido.
    if (!peso){
        //chamando a function setResultado para o form
        setResultado('Peso Inválido', false);
        return;
    }

    //verificando se o altura é valida.
    if (!altura){
        //chamando a function setResultado para o form
        setResultado('Altura Inválida', false);
        return;
    }

    //criando o metodo getImc
    const imc = getImc(peso, altura);
    const nivelImc =  getNivelImc(imc);

    //chamamando o imc e nivel imc para ser exibido na tela
    const msg = `Seu IMC é ${imc} ${nivelImc}.`;
    setResultado(msg, true);

    //criando função para niveis de obesidade
    function getNivelImc(imc){
        //criando array para os niveis de obesidade
        const nivel = ['Abaixo de peso', 'Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
        //checando de tras para frente por conta do return
        if(imc >= 39.9){
            return nivel[5];
        } 

        if(imc >= 34.9){
            return nivel[4];
        }

        if(imc >= 29.9){
            return nivel[3];
        }

        if(imc >= 24.9){
            return nivel[2];
        }

        if(imc >= 18.5){
            return nivel[1];
        }

        if(imc < 18.5){
            return nivel[0];
        }
    }

    //function de calculo de IMC
    function getImc (peso, altura){
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }  
    
});

//criando um parágrafo 
function criaP(){         
    const p = document.createElement('p');    
    return p;
}

//função passar informação sobre o resultado do IMC
function setResultado(msg, isValid){
    //caprturando o resultado
    const resultado = document.querySelector('#resultado');  
    resultado.innerHTML = '';
    
    const p = criaP();

    //add as cores da validação 
    if(isValid){
        p.classList.add('paragrafoResultado');
    }else{
        p.classList.add('bad');
    }

    //criando um paragrpafo no container
    p.innerHTML = msg;
    resultado.appendChild(p);
}