//                               params         querystring
//http://facebook.com/profiles/cleuberandrade?campanha=googleads
//params - é o ultimo item da roda; 
//querystring - é sinalidado na roda pelo ? ou &
//body - a rota é algo mais espefíco com form, porque deixa o projeto mais seguro por não mostrar na rota as informações do cliente

const express = require('express');
const app = express();

//esse metodo é para fazer tratamento do metodo POST
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send(`
    <form action="/" method ="POST">
    Nome do cliente:<input type="text" name="qualquerCoisa">
    <button>Enviar</button>
    </form>
    `);
});

app.get('/teste/:idUsuarios?/:parametros?', (req, res)=> { 
    //params - é parte da rota. ex: profile/123   
    console.log(req.params);
    //query - é aparte da queryString. ex: /profiles/?chave1=valor1&chave2=valor2
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    //body - é para jogar no corpo do html as informações do POST
    console.log(req.body);
    res.send(`O que você me enviou foi ${req.body.qualquerCoisa}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Esse servidor está executando na porta 3000');
});
