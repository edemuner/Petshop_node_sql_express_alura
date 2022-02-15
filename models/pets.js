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


