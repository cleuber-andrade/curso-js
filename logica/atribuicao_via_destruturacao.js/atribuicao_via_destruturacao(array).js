//Em array


//indexado       0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...spread] = numeros;
console.log(um , dois, tres);
console.log(spread);

//exemplo 2

//indexado            0         1          2
//                 0  1  2   0  1  2    0  1  2
const numeros2 = [[1, 2, 3],[4, 5, 6], [7, 8, 9]];
//1ºforma de chamar, porém mais verboso;
//const [,[,,seis]] = numeros2;
//console.log(numeros2[1][2])


const [lista1,lista2,lista3] = numeros2;
console.log(lista3[2]);



//**O operador ...REST pega restante dos outros numeros do array
//**...SPREAD serve para espalhar o restante do conteúdo
//**Os valores podem ser pulados basta colocar espaços vazios exemplo  const[um, , tres, , cinco, , sete, , nove]; 

//sintax antiga
/*
const primeiroNumero = numeros[0];
console.log(primeiroNumero);
*/