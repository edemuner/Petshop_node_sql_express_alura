const customExpress = require('./config/customExpress')
const connection = require('./infrastructure/database/connection')
const tables = require('./infrastructure/database/tables');


(async () => {
    try{
    connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

// connection.connect(error => {
//     if (error){
//         console.log(error)
//     } else {

//         console.log('Successfully connected to database')
        
//         tables.init(connection)

//         const app = customExpress()

//         app.listen(3000, () => console.log('Server running at por 3000'))
//     }
// })

