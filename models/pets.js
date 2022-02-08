const conexao = require('../infraestrutura/database/conexao')
const uploadDeArquivo = require('../infraestrutura/arquivos/uploadDeArquivos')

class Pet {

    adiciona(pet, res){


        uploadDeArquivo(pet.imagem, pet.nome, (erro, novoCaminho) => {
            if (erro){
                res.status(400).json({erro})
            } else {
                const novoPet = {
                    nome:pet.nome,
                    imagem:novoCaminho
                }
                const sql = 'INSERT INTO Pets SET ?'
                conexao.query(sql, novoPet, erro => {
                    if (erro) {
                        console.log(erro)
                        res.status(400).json(erro)
                    } else {
                        res.status(200).json(novoPet)
                    }            
                })
            }
        })
    }
}

module.exports = new Pet