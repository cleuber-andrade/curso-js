
//**Se quiser utilizar aspas duplas dentro de aspas duplas é preciso utilizar \\. Server para ambos os casos dupla ou simples.
let umaString = "Um \"texto\""; 
console.log(umaString);


//**para mostrar um barra invertida dentro da string é necessário utilizar duas barras invertidas.
let doisString = "Um \\texto";
console.log(doisString);


//**cada string ela é indexsada, ou seja, possui um indice em cada caracter          01234567
let tresString = "O rato roeu a roupa do rei de roma"; 

//**é a mesma coisa do charAt porem localizando pela a matriz.
//console.log(tresString[4]); 

//**charAt serve para localizar o caracter que está na posição selecionada.
//console.log(tresString.charAt(6));

//**concat serve para contatenar, mas o recomendável é utilizar o templates strings.
//console.log(tresString.concat(' em um lindo dia.')); 

//**serve para mostrar o primeiro indice da palavra seleciona. É case sensitive.
//console.log(tresString.indexOf('rei'));

//**serve tbm para começar pelo o indice 3 da string e percorre até chegar na letra E que é o 7 caractere da string.
//                             letra  index
//console.log(tresString.indexOf('i', 0));

//**ele percorre de modo invertido ao indexOf, ou seja, começa do final para o inicio da string
//console.log(tresString.lastIndexOf('m' , 5));

//**expressões regulares
//console.log(tresString.match(/[a-z]/g));
//console.log(tresString.search(/x/));

//**Subistitui uma string pot outra;
//console.log(tresString.replace('rei', 'rainha'));

//**nesse caso utilizando expressões regulares.
//console.log(tresString.replace(/r/g, '$'));

//**Length para saber o tamanho da string
//console.log(tresString.length);

//**Slice serve para pegar somente o trecho selecionado da string, através do indice da string. OBS: lembrando que sempre tem que ser um indice a mais, exemplo: se a palavra termina no indice 5 é preciso para colocar para busca até o indice 6, porque senão a ultima letra não entra na informação. Pode começar com negativos - porem ele funciona seguindo o fluxo total(lenght) de caractere e depois ele retorna de trás para frente.
//console.log(tresString.slice(2, 6));

//**faz a mesma coisa que slice mas o código fica mais verboso.
//console.log(tresString.substring(tresString.length - 5));

//**retira todos os caracteres selecionado, no caso o R e retona sem o R e divido como um array sem a letra selecionada.
//                   item retitado  index
//console.log(tresString.split('r', 6));

//**vem a string toda maiuscula
//console.log(tresString.toUpperCase()); 

//**vem a string toda minuscula
//console.log(tresString.toLowerCase()); 

