const Sequelize = require('sequelize')
const config = require('config')
const { applyExtraSetup } = require('../../models/extraSetup')


const sequelize = new Sequelize(
    config.get('mysql.database'),
    config.get('mysql.user'),
    config.get('mysql.password'),
    {
    host:config.get('mysql.host'),
    dialect:config.get('mysql.dialect')
    }
)

const modelDefiners = [
    require('../../models/appointments'),
    require('../../models/pets'),
    require('../../models/services'),
]
// it gets the models definitions and pass the above instance of sequelize to them
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}
// and then make their relations with extra setup
applyExtraSetup(sequelize)
.then(module.exports = sequelize)

