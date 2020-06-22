class Arma {
    constructor(x, y){
        this.x= x;
        this.y= y;
    }
    proyectilDisparo(){
        return 'Cantidad de proyectiles por disparo:'+ this.x;

    }
    capacidadCargador(){
        return 'Capacidad del cargador:'+ this.y;
    }
    disparo(){
        return 'Arma es una clase abstracta, por lo que no contiene este valor'
    }
}
module.exports= Arma;