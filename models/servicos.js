const conexao = require('../infraestrutura/database/conexao')
const repositorio = require('../repositorios/servicos')

class Servico {


    adiciona(servico){

        return repositorio.adiciona(servico)
            .then(resultado => {
                return resultado
            })
    }

    buscaIdPorNome(nome, res){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT id FROM Servicos WHERE nome = ?'

            conexao.query(sql, nome, (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    resolve(resultado)
                }
            })
        })
    }
}

module.exports = new Servico