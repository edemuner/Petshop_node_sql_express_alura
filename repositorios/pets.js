const query = require('../infraestrutura/database/queries')

class Pets {

    adiciona(pet){

        const sql = 'INSERT INTO Pets SET ?'
        return query(sql, pet)
    }

    buscaIdPorNome(nome){

        const sql = 'SELECT id FROM Pets WHERE nome = ?'
        return query(sql, nome)
    }

    lista(){
        
        const sql = 'SELECT * FROM Pets'
        return query(sql)
    }

    update(id, val){

        const sql = 'UPDATE Pets SET ? WHERE id=?'

        return query(sql, [val, id])
    }
}

module.exports = new Pets