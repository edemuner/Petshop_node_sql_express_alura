const Pet = require('../models/pets')

module.exports = app => {

    app.post('/pets', (req, res) => {

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

    app.patch('/pets/:id', (req, res) => {

        const id = parseInt(req.params.id)
        const val = req.body
        Pet.update(id, val)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })

    app.delete('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pet.delete(id)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })
}