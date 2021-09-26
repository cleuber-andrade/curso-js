//evitar utilizar o return nesse tipo de função, pq automaticamente a função é retornada e não consegue ler os YIELD subsequente.

//metodo NEXT serve para chamar o proximo YIELD.


//**ex 1 normal
function* geradora1(){
    //qual código ...
    yield 'Valor 1';
    //qual código ...
    yield 'Valor 2';
    //qual código ...
    yield 'Valor 3';
};

//for(let valor of g1){
//   console.log(valor);
//};

//console.log(g1.next().value);
//console.log(g1.next().value);
//console.log(g1.next().value);



//**ex 2 geradora infinita
function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

const g2 = geradora2();
console.log(g2.next().value);



//**ex 3 usando uma dentro da outra
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}


//**ex 5 com funções
function* geradora5(){
    yield function (){
        console.log('Vim do y1');
    };

    yield function (){
        console.log('Vim do y2');
    };

    yield function (){
        console.log('Vim do y3');
    };

    yield function (){
        console.log('Vim do y4');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
const func4 = g5.next().value;

func1();
func2();
func3();
func4();
