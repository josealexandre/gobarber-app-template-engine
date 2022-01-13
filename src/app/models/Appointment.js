module.exports = (sequelize, DataTypes) => {
    const Appointment = sequelize.define('Appointment', {
        date: DataTypes.DATE
    })

    Appointment.associate = models => {
        Appointment.belongsTo(models.User, { as: 'User', foreignKey: 'userId' })
        Appointment.belongsTo(models.User, {
            as: 'Provider',
            foreignKey: 'providerId'
        })
    }

    return Appointment
}
