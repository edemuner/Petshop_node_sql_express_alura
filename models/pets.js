const {DataTypes} = require('sequelize')

module.exports = (sequelize) => { 
    const Pets = sequelize.define('pets', {
    name : {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
return Pets
}


// class Pet {

//     add(pet){
//             return fileUpload(pet.imagem, pet.nome, (error, newPath)  => 
//                 {
//                 if (error){
//                     return error
//                 } else {
//                     const newPet = {
//                         nome:pet.nome,
//                         imagem:newPath
//                     }
//                     return repository.add(newPet)
//                 }
//             })
//     }

//     getIdByName(name){
        
//         return repository.getIdByName(name)
//     }

//     list(){

//         return repository.list()
//     }

//     update(id, val){

//         return repository.update(id, val)
//     }

//     delete(id){

//         return repository.delete(id)
//     }
// }

