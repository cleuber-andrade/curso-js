//**estou usando EXPRESS mas esses comandos serviriam para qualquer pacotes, frameworks e etc

//**CD serve para acessar a parta a frente no terminal;

//Para proteger senhas e login - //**npm dotenv

//podemos substituir a paravra install por a letra i;

//iniciar o npm - //**npm init -y;

//para instalar (pacotes, frameworks e etc)no npm - //**npm install express;

//caso não queira que uma dependencia nunca seja atualizada basta colocar - //**npm install express -E;

//para atualizar os pacotes para ultima versao - //**npm update;

//movendo uma dependencia para devDependencies - //**npm install express --save-dev

//voltando só para as dependencies - //**npm install express --save-prod


//quando o projeto depender de um vesão específica (versões anterior ou superior) - //**npm install express@versão a ser escolhida

//atulizar a dependias para a ultima versão - //**npm install express@4.

//para desisntalar um pacote ou frameworks - //**npm uninstall express

//como listar os pacotes instalados(completo) - //**npm ls

//como listar apenas os que instalei(o numero no final é profundidade da pasta) - //**npm ls --depth=0

//como listar os pacotes desatualizados que estão instalados nas dependências //**npm outdated

//instalando webpack - //**npm i webpack --save-dev

//instalando o Mongoose (para validar os dados e conexão com a base de dados)- //**npm i mongoose
/*
{
    "name": "npm", (nome da pasta raiz)
    "version": "1.0.0",
    "description": "",
    "main": "npm.js", (nome do arquivo dentro da pasta raiz)
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {  (as instalações ficam aqui em dependencies ou na devDependecies)
      "express": "^4.17.1"
           
    },
    "devDependencies": {}
  }
*/ 

/*
mexendo nas versões

  ^ - significa que podemos atualizar a minor e patch
  ~ - configura só versão do patch

  4.     .17     0
  major  minor  patch

  2.1.1
  2.2.0
  //evitar utilizar essa terceira verão pq pode quebar o código por conta da compabilidade
  3.0.0
*/

const teste = 'teste';
console.log(teste);