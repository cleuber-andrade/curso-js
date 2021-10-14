//O TRABALHO DOS MODELS É TUDO REFERENTE AOS DADOS DA APLICAÇÃO, OU A BASE DE DADOS


const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

class Home {

}

module.exports = Home;