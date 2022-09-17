const baseRepository = require('./baseRepository')
const User = require('../domain/userModel')

module.exports = baseRepository(User);
