const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/database/connection');


connection.sync()
.then(() => {
  console.log('Successfully connected to database')
  const app = customExpress()
  app.listen(3000, () => console.log('Server running at port 3000'))
})
.catch(erro => console.log('Something went wrong while trying to synchronize to database'))
