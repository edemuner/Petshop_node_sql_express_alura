const {DataTypes} = require('sequelize')


module.exports = (sequelize) => {
    const Service = sequelize.define('services', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})
return Service
}

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

