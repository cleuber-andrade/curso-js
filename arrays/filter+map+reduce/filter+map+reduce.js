
//encontra pares
//dobra os valores dos pares
//somar e trasformar o valores em um unico elemento.
const numeros = [1, 5, 12, 19, 27, 37, 41, 69, 33, 55, 21, 99, 70];
const numeroPares = numeros.
                    filter(valor => valor % 2 === 0).
                    map(valor => valor * 2).
                    reduce((acumulador, valor) => acumulador + valor)

console.log(numeroPares);