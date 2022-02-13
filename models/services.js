const connection = require('../infrastructure/database/connection')
const repository = require('../repositories/services')
const sequelize = require('sequelize')

const Services = sequelize.define('services', {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    price: {
        type: sequelize.FLOAT,
        allowNull: false
    }
})

Services.hasMany(Appointments)

// class Service {


//     add(service){

//         return repository.add(service)
//             .then(results => {
//                 return results
//             })
//     }

//     getIdByName(name){
        
//         return repository.getIdByName(name)
//     }

//     list(){

//         return repository.list()
//     }

//     update(id, values){

//         return repository.update(id, values)
//     }

//     delete(id){

//         return repository.delete(id)
//     }
// }

module.exports = new Service