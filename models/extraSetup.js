
// it exports the things the sequelize instance must do
async function applyExtraSetup(sequelize){
    const { appointments, services, pets } = sequelize.models

    await appointments.belongsTo(services)
    await appointments.belongsTo(pets)
    await services.hasMany(appointments)
    await pets.hasMany(appointments)
}

module.exports = { applyExtraSetup }
