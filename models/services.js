const connection = require('../infrastructure/database/connection')
const repository = require('../repositories/services')

class Service {


    add(service){

        return repository.add(service)
            .then(results => {
                return results
            })
    }

    getIdByName(name){
        
        return repository.getIdByName(name)
    }

    list(){

        return repository.list()
    }

    update(id, values){

        return repository.update(id, values)
    }

    delete(id){

        return repository.delete(id)
    }
}

module.exports = new Service