const pessoas = [
    {id: 3, nome: 'Cleuber'},
    {id: 2, nome: 'Leila'},
    {id: 1, nome: 'Nathy'},
];

//const novasPessoas = {};

//for (const pessoa of pessoas){
//    const { id } = pessoa;
//    novasPessoas[id] = {...pessoa};
//}
//console.log(novasPessoas);

//manter a mesma ordem dos obj que foi escrito no array
const novasPessoas =  new Map();

for (const pessoa of pessoas){
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa});
}

//console.log(novasPessoas.get(2));

//retornar um array
//for (const pessoa of novasPessoas){
//    console.log(pessoa);
//}

//retornar so as chaves
//for (const pessoa of novasPessoas.keys()){
//    console.log(pessoa);
//}

//retornar so as valores
//for (const pessoa of novasPessoas.value()){
//    console.log(pessoa);
//}

novasPessoas.delete(2);
console.log(novasPessoas);