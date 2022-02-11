const query = require('../infraestrutura/database/queries')

class Servico {

    adiciona(servico){

        const sql = 'INSERT INTO Servicos SET ?'

        return query(sql, servico)
    }

    buscaIdPorNome(nome){

        const sql = 'SELECT id FROM Servicos WHERE nome = ?'

        return query(sql, nome)
    }

    lista(){
        
        const sql = 'SELECT * FROM Servicos'

        return query(sql)
    }

    update(id, val){

        const sql = 'UPDATE Servicos SET ? WHERE id=?'

        return query(sql, [val, id])
    }

    delete(id){

        const sql = 'DELETE FROM Servicos WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Servico