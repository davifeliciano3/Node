const nome = ' davi ';
const sobrenome = 'feliciano';
function soma(x,y){
    return x + y;
}

console.log(module.exports)

module.exports.nome = nome;

module.exports.soma = soma;
//this aponta para module.exports e exports
exports.sobrenome = sobrenome;

module.exports = {

};//exporta tudo 