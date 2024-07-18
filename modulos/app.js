const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'teste.json');
const escreve = require('./escrever');
const ler = require('./ler');
const pessoas = [
    {nome:'davi'},
    {nome:'ivi'},
    {nome:'Pedrin'}
];

const json = JSON.stringify(pessoas)
//escreve(caminhoArquivo,json);
async function lerArquivo(caminho){
  const dados = await   ler(caminho)
  return dados;
} 

const lido = lerArquivo(caminhoArquivo)
.then(dados => {
    NovoDado = JSON.parse(dados)
    return NovoDado;
})
.then(NovoDado => {
    NovoDado.forEach(element => {
        console.log(element)
    });
})
;
