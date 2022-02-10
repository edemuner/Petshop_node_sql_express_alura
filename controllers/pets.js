const Pet = require('../models/pets')

/*
    Lembrar de preparar a relação da tabela de pets com a de atendimentos via fk
*/

module.exports = app => {

    app.post('/pet', (req, res) => {

        const pet = req.body
        Pet.adiciona(pet)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })
}