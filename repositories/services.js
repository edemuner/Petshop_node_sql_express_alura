const query = require('../infrastructure/database/queries')

class Service {

    add(service){

        const sql = 'INSERT INTO Servicos SET ?'

        return query(sql, service)
    }

    getIdByName(name){

        const sql = 'SELECT id FROM Servicos WHERE nome = ?'

        return query(sql, name)
    }

    list(){
        
        const sql = 'SELECT * FROM Servicos'

        return query(sql)
    }

    update(id, values){

        const sql = 'UPDATE Servicos SET ? WHERE id=?'

        return query(sql, [values, id])
    }

    delete(id){

        const sql = 'DELETE FROM Servicos WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Service