const baseController = require('./baseController')
const {UserService} = require('../services')

const userController = baseController(UserService)

module.exports = userController