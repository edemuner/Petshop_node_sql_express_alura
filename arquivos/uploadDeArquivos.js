const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {

    const tiposValidos = ['.jpg', '.png', '.jpeg']
    const tipo = path.extname(caminho)
    const tipoEValido = tiposValidos.indexOf(tipo)

    if (tipoEValido === -1){
        console.log('Erro, extensão do arquivo inválida')
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callBackImagemCriada(novoCaminho))
    }
 
}

