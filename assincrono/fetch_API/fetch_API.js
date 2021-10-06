//é o recomendado utilizar o Fetch Api ao invés do AJAX
document.addEventListener('click', e =>{
    const el = e.target;
    const tag =  el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error('ERRO 404!');
        const html = await response.text();
        carregaResultado(html);    
    } catch(e){
        console.log(e);
    }
    
    //fetch(href)
    //    .then(response => {
    //        if(response.status !== 200) throw new Error('ERRO 404!');
    //        return response.text();
    //    })
    //    .then(html => carregaResultado(html))
    //    .catch(e => console.log(e));    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}




//modelo de utilização do fetch API
//fetch('pagina1.html')
//   .then(resposta => {
//        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
//        return resposta.text();
//    })
//    .then(html => console.log(html))
//    .catch(e => console.error(e));