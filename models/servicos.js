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
}

module.exports = new Servico