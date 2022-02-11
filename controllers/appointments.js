const Appointment = require('../models/appointments')
const Service = require('../models/services')
const Pets = require('../models/pets')


module.exports = app => {
    app.get('/appointment', (req, res) => {
        Appointment.list()
            .then(results => res.json(results))
            .catch(error => res.status(400).json(error))
    })

    app.get('/appointment/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Appointment.searchId(id)
        .then(results => {
            res.json(results)
        })
        .catch(error => {
            res.status(400).json(error)
        })
    })

    app.post('/appointment', async (req, res) => {

        const appointment = req.body
        console.log(appointment)

        Pets.getIdByName(appointment.idpet)
        .then(results => {
            appointment.idpet = results[0].id
        
            Service.getIdByName(appointment.idserv)
            .then((results) => {
                appointment.idserv = results[0].id

                Appointment.add(appointment)
                .then(registeredAppointment => {
                    res.json(registeredAppointment)
                })
                .catch(error => {
                    res.status(400).json(error)
                })
            })
        })
        .catch(error => res.status(400).json(error))
        
    })

    app.patch('/appointment/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const values = req.body

        Appointment.update(id, values)
            .then(results => res.json(results))
            .catch(error => res.status(400).json(error))
    })

    app.delete('/appointment/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Appointment.delete(id)
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

}