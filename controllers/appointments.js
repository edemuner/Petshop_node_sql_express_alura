const sequelize = require('../infrastructure/database/connection')
const Appointment = require('../models/appointments')(sequelize)
const Service = require('../models/services')(sequelize)
const Pets = require('../models/pets')(sequelize)


module.exports = app => {
    app.get('/appointment', (req, res) => {
        Appointment.findAll()
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

        const data = req.body
        const pet = await Pets.findAll({ where : { name : req.body.petId }})
        const service = await Service.findAll({ where : { name : req.body.serviceId }})
        const appointment = Appointment.create(data)
        .then(result => {
                result.setPet(pet)
                res.end()

            })
        // .then(result => {
        //     result.setPet(pet)
        //     res.end()
        // })
        
    })


        // Pets.getIdByName(appointment.idpet)
        // .then(results => {
        //     appointment.idpet = results[0].id
        
        //     Service.getIdByName(appointment.idserv)
        //     .then((results) => {
        //         appointment.idserv = results[0].id

        //         Appointment.add(appointment)
        //         .then(registeredAppointment => {
        //             res.json(registeredAppointment)
        //         })
        //         .catch(error => {
        //             res.status(400).json(error)
        //         })
        //     })
        // })
        // .catch(error => res.status(400).json(error))
        
    

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