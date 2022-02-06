const conexao = require('../infraestrutura/conexao')

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
        const sql = 'SELECT id FROM Servicos WHERE Nome = ?'
        return conexao.query(sql, nome, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                return resultado
            }
        })
    }
}

module.exports = new Servico