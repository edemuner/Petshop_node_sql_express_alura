const Pet = require('../models/pets')

module.exports = app => {

    app.post('/pets', (req, res) => {

        const pet = req.body
        Pet.add(pet)
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(400).json(erro))
    })

    app.get('/pets', (req, res) => {

        Pet.list()
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

    app.patch('/pets/:id', (req, res) => {

        const id = parseInt(req.params.id)
        const values = req.body
        Pet.update(id, values)
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

    app.delete('/pets/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Pet.delete(id)
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })
}