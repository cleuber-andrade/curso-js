//For Each só consegue interar dentro de arrays


const a1 = [1, 2, 3, 4, 5, 6, 7, 8];
let total = 0;
//**a1.forEach(function(valor,indice,array){});


a1.forEach(valor => total += valor);
console.log(total);