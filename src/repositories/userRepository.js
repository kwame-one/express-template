const baseRepository = require('./baseRepository')
const {User} = require('../domain/userModel')

const userRepository = baseRepository(User);

module.exports = {
    ...userRepository,

    anotherMethod: async () => {

    }
}