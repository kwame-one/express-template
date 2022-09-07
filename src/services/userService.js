const baseService = require('./baseService')
const {UserRepository} = require('../repositories/')

module.exports = baseService(UserRepository)