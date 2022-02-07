const fs = require('fs')

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {

    const novoCaminho = `./assets/imagens/${nomeDoArquivo}`
    
    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () => callBackImagemCriada(novoCaminho))
}

