const query = require('../infrastructure/database/queries')

class Appointment {

    add(appointment){
        const sql = 'INSERT INTO Atendimentos SET ?'

        return query(sql, appointment)
    }

    list() {
        const sql = 'SELECT * FROM Atendimentos'

        return query(sql)
    }

    getId(id){
         
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        return query(sql)
    }

    update(id, values){

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        return query(sql, [values, id])
    }

    delete(id) {

        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Appointment