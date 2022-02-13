
// it exports the things the sequelize instance must do
function applyExtraSetup(sequelize){
    const { appointments, services, pets } = sequelize.models

    appointments.belongsTo(services)
    appointments.belongsTo(pets)
    services.hasMany(appointments)
    pets.hasMany(appointments)
}

module.exports = { applyExtraSetup }