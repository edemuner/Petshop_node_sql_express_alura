const axios  = require('axios')
const {DataTypes} = require('sequelize')
const moment = require('moment')


module.exports = (sequelize) => { sequelize.define('appointments', {
    client: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isBefore: creationDate
        }
    },
    status: {
        type: DataTypes.STRING,        
        allowNull: false
    },
    observations: {
        type: DataTypes.STRING
    }
})
}


// class Appointment {

//     constructor(){
//         // data válida somente se no futuro
//         this.validDate = (date, creationDate) => moment(date).isSameOrAfter(creationDate)

//         this.validClient = (size) => size >= 5

//         this.validation = parameters => this.validationParams.filter(field => {
//              const {name} = field
//              const parameter = parameters[name]

//              return field.valid(parameter)
//         })

//         this.validationParams = [
//             {
//                 name: 'date',
//                 valid:this.validDate,
//                 message: 'Data must be equal or after now'
//             },
//             {
//                 name: 'client',
//                 valid: this.validClient,
//                 message: 'Client must have at least five characters'
//             }
//         ]
//     }


//     add(appointment){
        
//         const creationDate = moment().format('YYYY-MM-DD HH:mm:ss')

//         const date = moment(appointment.data, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')

//         const parameters = {
//             date: { date: date, creationDate: creationDate },
//             client: { size: appointment.cliente.length }
//         }

//         const errors =  this.validation(parameters)

//         const errorsExist = errors.length

//         // se esse filtro tiver qualquer comprimento, a query não é executada e o erro é exibido
//         if (errorsExist){
//             return new Promise((resolve, reject) => {
//                 reject(errors)
//             })
//         }
//         else {
//         const datedAppointment = {...appointment, dataCriacao: creationDate, data: date}

//         return repository.add(datedAppointment)
//             .then((results) => {
//                 const id = results.insertId
//                 return ({...appointment, id})
//             })
//         }
//     }
    
//     list(res){
//         return repository.lista
//     }

//     searchId(id, res){

//         return repository.getId(id)
//             .then(async results => {
//                 const appointment = results[0]
//                 const cpf = appointment.client

//                 const { data } = await axios.get(`http://localhost:8082/${cpf}`)
//                 appointment.client = data
//                 return appointment
//             })
//     }

//     update(id, values){

//         if (values.data){
//             values.data = moment(values.data, 'DD-MM-YYYY hh:mm:ss').format('YYYY-MM-DD HH:mm:ss')
//         }

//         return repository.update(id, values)
//     }

//     delete(id){

//         return repository.delete(id)
//     }

// }

// module.exports = new Appointment