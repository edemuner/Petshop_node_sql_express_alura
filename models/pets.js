const conexao = require('../infraestrutura/conexao')

class Pet {

    adiciona(pet, res){

        const sql = 'INSERT INTO Pets SET ?'

        conexao.query(sql, pet, erro => {
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                res.status(200).json(pet)
            }            
        })
    }
}

module.exports = new Pet