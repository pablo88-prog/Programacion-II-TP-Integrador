const Arma = require('./Arma');

class Escopeta extends Arma {
    
    constructor(x, y){
        super(x, y);
        this.daño= 20;
    }
    
    disparo(){
        
        return 'Daño por descarga:'+ this.daño*this.x;
    }
}
module.exports= Escopeta;