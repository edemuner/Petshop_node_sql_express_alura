const fs = require('fs')
const path = require('path')

const getFile = (caminho, nomeDoArquivo, callBackImagemCriada) => {

    return new Promise(() => {
        
        const tiposValidos = ['.jpg', '.png', '.jpeg']
        const tipo = path.extname(caminho)
        const tipoInvalido = tiposValidos.indexOf(tipo) === -1

        if (tipoInvalido){
            const erro = 'Tipo é inválido'
            console.log('Erro, extensão do arquivo inválida')
            reject(callBackImagemCriada(erro))

        } else {
            const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
            resolve(
                fs.createReadStream(caminho)
                .pipe(fs.createWriteStream(novoCaminho))
                .on('finish', () => callBackImagemCriada(false, novoCaminho))
            )
        }
    })
}


module.exports = getFile

