const query = require('../infrastructure/database/queries')

class Pets {

    add(pet){

        const sql = 'INSERT INTO Pets SET ?'
        return query(sql, pet)
    }

    getIdByName(name){

        const sql = 'SELECT id FROM Pets WHERE nome = ?'
        return query(sql, name)
    }

    list(){
        
        const sql = 'SELECT * FROM Pets'
        return query(sql)
    }

    update(id, values){

        const sql = 'UPDATE Pets SET ? WHERE id=?'

        return query(sql, [values, id])
    }

    delete(id){

        const sql = 'DELETE FROM Pets WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Pets