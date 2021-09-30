//function teste(){
//    console.log('Este é meu teste.');
//}


class ControleRemoto {
    constructor (tv, volume){
        this.tv = tv,
        this.volume = 0
        //teste();
    }
    //metodos de instância
    aumentarVolume(){
        this.volume += 2;

    }

    dimunuirVolume(){
        this.volume -= 2;
    }

    //metodo de estatico
    static trocaPilha(){
        console.log('Ok, vou trocar!');
    }
}

const controle1 = new ControleRemoto('Lg');
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);

//acessando o metodo estático
ControleRemoto.trocaPilha();
