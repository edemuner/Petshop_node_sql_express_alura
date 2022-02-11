const Pet = require('../models/pets')

module.exports = app => {

    app.post('/pet', (req, res) => {

        const pet = req.body
        Pet.adiciona(pet)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })

    app.get('/pets', (req, res) => {

        Pet.lista()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })
}