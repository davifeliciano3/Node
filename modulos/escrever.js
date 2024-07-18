const fs = require('fs').promises;
const path = require('path');

module.exports = (caminho,dados) =>{
    fs.writeFile(caminho, dados,{encoding:'utf8',flag:'a'});
}

