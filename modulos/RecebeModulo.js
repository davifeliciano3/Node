const mod1 = require('./modulo');
const {nome,sobrenome,soma} = require('./modulo');
const somar = require('./modulo').soma;
//mod1 vai ser um objetos normal pois module.exports é um objeto
console.log(somar.soma(10,8));