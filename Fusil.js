const Arma2 = require('./Arma');

class Fusil extends Arma2 {
   
    constructor(x, y){
        super(x, y);
        this.daño= 10;
    }
    disparo(){
        return 'Daño por descarga:'+ this.daño*this.x;
    }
}
    
module.exports= Fusil;
