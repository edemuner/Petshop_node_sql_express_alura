const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')
const repositorio = require('../repositorios/pets')

class Pet {

    adiciona(pet){
        return new Promise((resolve, reject) => {
            uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
                if (erro){
                    reject(erro)
                } else {
                    const novoPet = {
                        nome:pet.nome,
                        imagem:novoCaminho
                    }
                    resolve(repositorio.adiciona(novoPet))
                }
            })
        })
    }
}

module.exports = new Pet