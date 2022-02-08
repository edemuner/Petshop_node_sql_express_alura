const conexao = require('../infraestrutura/database/conexao')

class Servico {


    adiciona(servico, res){

        const sql = 'INSERT INTO Servicos SET ?'

        conexao.query(sql, servico, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }

    buscaIdPorNome(nome, res){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT id FROM Servicos WHERE nome = ?'

            var id = null

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