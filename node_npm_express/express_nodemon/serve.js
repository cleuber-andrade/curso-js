//a depencia NODEMON serve para atualizar a aplicação de forma dinânmica no express.

const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send(`
    <form action="/" method ="POST">
    Nome do cliente:<input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.get('/contato', (req, res) => {
    res.send('Olá mundo');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Esse servidor está executando na porta 3000');
});



//devDependencies - é algo mais local, ou seja, é utilizado apenas na maquina e não junto com o projeto todo.
//dependencies - é algo global que segue junto com projeto.
//comando para assistir o nodemom -  npx nodemon serve.js
//conferir se o start está package json. "nodemon server.js"
