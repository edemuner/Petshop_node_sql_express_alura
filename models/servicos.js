const conexao = require('../infraestrutura/conexao')

class Servico {


    adiciona(servico, res){

        const sql = 'INSERTO INTO Servicos SET ?'

        conexao.query(sql, servico, (erros, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })
    }
}