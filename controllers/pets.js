const sequelize = require('../infrastructure/database/connection')
const Pet = require('../models/pets')(sequelize)
const fileUpload = require('../infrastructure/files/fileUpload')


module.exports = app => {

    app.post('/pets', (req, res) => {

        const pet = req.body
        fileUpload(pet.image, pet.name, (error, newPath)  => {
                
                if (error){
                    return error
                } else {
                    const newPet = {
                        name:pet.name,
                        image:newPath
                    }
                    return Pet.create(newPet)
                    .then(results => res.json(results))
                    .catch(error => res.status(400).json(error))
                }
    })
})

    app.get('/pets', (req, res) => {

        Pet.findAll()
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

    app.patch('/pets/:id', (req, res) => {

        const id = req.params.id
        const values = req.body
        Pet.update(values, { where : { id : id }})
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })

    app.delete('/pets/:id', (req, res) => {
        const id = req.params.id
        Pet.destroy({ where: { id:id }})
        .then(results => res.json(results))
        .catch(error => res.status(400).json(error))
    })
}