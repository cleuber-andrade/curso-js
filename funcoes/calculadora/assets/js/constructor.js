function Calculadora(){
    this.display = document.querySelector('.display');  
    
    this.inicia = () =>{
        this.clickBotoes();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', e =>{
            if(e.keyCode === 13) return;
            this.realizaConta();
        });
    };

    this.clickBotoes = () => {        
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num'))this.addNumDisplay(el);
            if(el.classList.contains('btn-num-clean'))this.clear();
            if(el.classList.contains('btn-num-del'))this.del();
            if(el.classList.contains('btn-num-ep'))this.realizaConta();
            });
    }; 

    this.realizaConta = () =>  {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert('Conta Inválida');
                return;
            }

            this.display.value = conta;
            
        } catch(e){
            alert('Conta Inválida');
            return;
        }
    };

    this.addNumDisplay = el =>{
        this.display.value += el.innerText;
        this.display.focus();
    } 
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);   
    
};

const calculadora = new Calculadora();
calculadora.inicia();