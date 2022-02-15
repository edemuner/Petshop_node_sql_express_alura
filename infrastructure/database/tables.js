exports.appointment = (sequelize) => { 
    const now = new Date()
    const Appointment = sequelize.define('appointments', {
        client: {
            type: DataTypes.STRING,
            allowNull: false
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: now
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isBefore: now
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
    return Appointment
}

exports.pets = (sequelize) => { 
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

exports.service = (sequelize) => {
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