//funcao recursiva é quando ela se chama de volta.
//funciona da mesma forma que um loop

function recursiva(max){
    console.log(max);
    if(max >= 500) return;
    max ++;    
    recursiva(max);
}

recursiva(0);