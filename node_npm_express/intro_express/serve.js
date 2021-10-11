//**o express é um mini framework para criar crud
//**clear - para limpar o teminal


//esse metodo já existe dentro do node_modules, por isso não precisa declarar o caminho
const express = require('express');
const app = express();

//        CRIAR   LER   ATUALIZAR APAGAR     
//CRUD -> CREATE, READ, UPDATE,   DELETE
//        POST,   GET,  PUT,      DELETE

// http://meusite.com/ <- GET -> entregue a pagina /;
// http://meusite.com/sobre/ <- GET -> entregue a pagina /sobre;
// http://meusite.com/contato <- GET -> entregue a pagina /contato;


//resquest - seria o que estamos pedindo ao servidor;
//resposta - é que se manda para o servidor;
app.get('/', (request, response) => {
    response.send('Hello World!');
});

app.get('/contato', (req, res) =>{
    res.send('Obrigado por entrar em contato');
});

//escuta express, qualquer coisa que chegar nessa porta vc responde
//localhost - seria a nossa própria maquina
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Esse servidor está executando na porta 3000');
});