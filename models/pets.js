const fileUpload = require('../infrastructure/files/fileUpload')
const repository = require('../repositories/pets')

class Pet {

    add(pet){
            return fileUpload(pet.imagem, pet.nome, (error, newPath)  => 
                {
                if (error){
                    return error
                } else {
                    const newPet = {
                        nome:pet.nome,
                        imagem:newPath
                    }
                    return repository.add(newPet)
                }
            })
    }

    getIdByName(name){
        
        return repository.getIdByName(name)
    }

    list(){

        return repository.list()
    }

    update(id, val){

        return repository.update(id, val)
    }

    delete(id){

        return repository.delete(id)
    }
}


module.exports = new Pet