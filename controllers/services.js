const sequelize = require('../infrastructure/database/connection')
const Service = require('../models/services')(sequelize)

module.exports = app => {

    app.post('/services', (req, res) => {
        const service = req.body
        Service.create(service)
            .then(results => res.json(results))
            .catch(error => res.status(400).json(error))
    })

    app.get('/services', (req, res) => {
        Service.findAll()
            .then(results => res.json(results))
            .catch(error => res.status(400).json(error))
    })

    app.patch('/services/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body
        Service.update(id, values)
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

    app.delete('/services/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Service.delete(id)
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })
}