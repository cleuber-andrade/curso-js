//dotenv (.env) - é um documento em que deixar as informaçoões pessoais privadas - exemplo: urls, senha, usuarios e etc.
require('dotenv').config();

//chamando o framework express
const express = require('express');
const app = express();

//mongoose - é que vai modelar o banco de dados e garantir que os dados cheguem da mesma forma em que enviamos para o BD.
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

//session - é para identificar um navegador do cliente e salvar no cookie com um id e toda vez que ele conectar no servidor, identificar se o cliente já conectou alguma vez no site(BD).
const session = require('express-session');

//mongostore = é para falar que as sessões serão salvas detro da base de dados
const MongoStore = require('connect-mongo');

//flash - são aquelas msgs autodestrutivas, ou seja, assim que vc ler elas, elas vão sumir. É perfeito para mandar algum aviso de erro(mandar feedback para os usuários)(sem as express-session os flash não funcionam)
const flash = require('connect-flash');

//são rotas da nossa aplicação qualquer coisa que seja referente a rota da aplicação.
const routes = require('./routes');

//path - é para conseguir utilizar a localização dos aquivos por caminhos/exemplo: require('./public/assts/etc')
const path = require('path');

//recomendação do express
const helmet = require('helmet');

//csrf - csrfToken é para ser colocado em todos os formulários da aplicação, isso faz com nenhum app externo, nenhum site externo consiga postar coisas dentro da nossa aplicação.
const csrf = require('csurf');

//importando middleware
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middlewares');


app.use(helmet());
//está informando que podemos colocar formulário para dentro da noss aplicação
app.use(express.urlencoded({ extended: true }));
//está informando que estamos jogando JSON para dentro da nossa aplicação
app.use(express.json());
//são todos os arquivos estaticos que estão dentro da nossa aplicação que são acessados diretamente. ex: img, css, js.
app.use(express.static(path.resolve(__dirname, 'public')));

//configuração de sesson
const sessionOptions = session({
  secret: 'akasdfj0út23453456+54qt23qv  qwf qwer qwer qewr asdasdasda a6()',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());

//são os arquivos que renderizamos na tela, geralmente views são html.
app.set('views', path.resolve(__dirname, 'src', 'views'));
//essa é engene que estamos utilizando para redenrizar os html.
app.set('view engine', 'ejs');

//chamando o csrf
app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
//chamando as rotas
app.use(routes);

//mandado a nossa aplicação escutar
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});

//O PADRÃO DESSE PROJETO É O MVC - MODEL, VIEWS, CONTROLLERS