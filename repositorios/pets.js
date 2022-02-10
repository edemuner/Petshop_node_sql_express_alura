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
}

module.exports = new Pets