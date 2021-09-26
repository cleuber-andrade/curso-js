function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),

        clearDisplay(){
            this.display.value = '';
        },

        inicia(){
            this.clickBotoes(); 
            this.pressionaEnter();       
        },

        pressionaEnter(){
            this.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor){
            //this -> calculadora
            this.display.value += valor;
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta Inválida');
                    return;
                }

                this.display.value = conta;

            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },
        
        clickBotoes(){
            //this -> calculadora
            document.addEventListener('click', e =>{
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-num-clean')){
                    this.clearDisplay();
                };

                if(el.classList.contains('btn-num-del')){
                    this.apagaUm();
                };

                if(el.classList.contains('btn-num-ep')){
                    this.realizaConta();
                };
            });
        },      

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();