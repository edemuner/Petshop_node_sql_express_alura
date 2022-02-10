const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')
const repositorio = require('../repositorios/pets')

class Pet {

    adiciona(pet){
            return uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho)  => 
                {
                if (erro){
                    return erro
                } else {
                    const novoPet = {
                        nome:pet.nome,
                        imagem:novoCaminho
                    }
                    return repositorio.adiciona(novoPet)
                }
            })
    }
}


module.exports = new Pet