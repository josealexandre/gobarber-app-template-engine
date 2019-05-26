const { User } = require('../models')

class AppointmentController {
    async create (req, res) {
        const { providerId } = req.params
        const provider = await User.findByPk(providerId)

        return res.render('appointments/create', { provider })
    }
}

module.exports = new AppointmentController()
