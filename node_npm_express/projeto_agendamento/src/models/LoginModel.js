const mongoose = require('mongoose');
const validator = require('validator');

const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body){
    this.body = body; 
    this.err = [];
    this.user = null;   
  }

  register(){
    this.valida();
  }

  valida(){
    this.cleanUp(); 
    //instalar o validator - npm i validator

    //validação
    //O email precisa ser valido.
    if(!validator.isEmail(this.body.email)) this.err.push('E-mail Inválido');
    //A senha precisa ter entre 3 e 50;
    if(this.body.password.length < 3 || this.body.password.length >= 50){
      
    }
  }

  cleanUp(){
    //in para fazer um loop nas chaves do obj
    for ( const key in this.body) {
      if(typeof this.body[key] !== 'string'){
        this.body[key] = '';        
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password
    };
  }
}

module.exports = Login;