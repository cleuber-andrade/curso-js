fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));


function carregaElementosNaPagina(json) {
    //criando a tabela
    const table = document.createElement('table');

    //puxar os nomes que estão json
    for(let pessoa of json){
        const tr = document.createElement('tr');
                
        let td = document.createElement('td');
        
        td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);        

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr)
        
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}


