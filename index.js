const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/database/connection')
const tables = require('./infrastructure/database/tables')

connection.connect(error => {
    if (error){
        console.log(error)
    } else {

        console.log('Successfully connected to database')
        
        tables.init(connection)

        const app = customExpress()

        app.listen(3000, () => console.log('Server running at por 3000'))
    }
})

