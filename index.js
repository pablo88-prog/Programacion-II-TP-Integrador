const Escopeta = require('./Escopeta');
const Fusil = require('./Fusil');

console.info('Estadisticas Escopeta')

const escopeta = new Escopeta (1, 6);
console.info(escopeta.proyectilDisparo());
console.info(escopeta.capacidadCargador());
console.info(escopeta.disparo());

console.info('Estadisticas Fusil')

const fusil = new Fusil (3, 20);
console.info(fusil.proyectilDisparo());
console.info(fusil.capacidadCargador());
console.info(fusil.disparo());