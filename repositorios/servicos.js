const query = require('../infraestrutura/database/queries')

class Servico {

    adiciona(servico){

        const sql = 'INSERT INTO Servicos SET ?'

        return query(sql, servico)
    }
}

module.exports = new Servico