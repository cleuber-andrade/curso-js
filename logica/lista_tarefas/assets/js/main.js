const inputNew = document.querySelector('.inputNew');
const btnAddTarefa = document.querySelector('.btnAddTarefa');
const tarefas = document.querySelector('.tarefas');


//3 função para criar uma li
function criaLi(){
    const li = document.createElement('li');
    return li;
}

//4 criando evento de apertar as teclas enter do teclado
inputNew.addEventListener('keypress', e =>{
    if (e.keyCode === 13){
        if (!inputNew.value) return;
        criaTarefa(inputNew.value); 
    }
});

//5 função para limpar o input
function limpaInput(){
    inputNew.value = '';
    inputNew.focus();
}

//6 função criando botão para apagar a tarefas
function criarBotaoApagar(li){
    li.innerText += '';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');    
    li.appendChild(botaoApagar);
}

//2º criar função para criar tarefas no input
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criarBotaoApagar(li)
    salvarTarefas();
}


//1º capiturar o evento de click
btnAddTarefa.addEventListener('click',() =>{
    if (!inputNew.value) return;
    criaTarefa(inputNew.value);    
});

//7 criando evento para remover item da lista
document.addEventListener('click', e =>{
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});

//8 salvando as tarefas
//trim() serve para remover espaços
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;             
        tarefaTexto = tarefaTexto.replace('Apagar', '');
        listaDeTarefas.push(tarefaTexto);
    }

    //convertendo string para JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

}

//9 adicionando as tarefas 
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');

    //convertendo de volta para um obj 
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }

}

