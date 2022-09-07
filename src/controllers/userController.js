const baseController = require('./baseController')
const userService = require('../services/userService')

const userController = baseController(userService)

module.exports = {
    ...userController,

    temp: (req, res) => {
        return res.json({h: 1})
    }
}