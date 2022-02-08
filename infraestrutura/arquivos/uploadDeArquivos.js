const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {

    const tiposValidos = ['.jpg', '.png', '.jpeg']
    const tipo = path.extname(caminho)
    const tipoInvalido = tiposValidos.indexOf(tipo) === -1

    if (tipoInvalido){
        const erro = 'Tipo é inválido'
        console.log('Erro, extensão do arquivo inválida')
        callBackImagemCriada(erro)
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callBackImagemCriada(false, novoCaminho))
    }
 
}

