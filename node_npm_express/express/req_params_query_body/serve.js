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
